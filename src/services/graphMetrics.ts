import type { GraphData } from '../types/graph';

// Builds an adjacency list representation from GraphData
function buildAdjacencyList(data: GraphData): Record<string, string[]> {
    const adj: Record<string, string[]> = {};
    data.nodes.forEach(n => adj[n.id] = []);
    data.links.forEach(l => {
        const source = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const target = typeof l.target === 'string' ? l.target : (l.target as any).id;
        
        if (adj[source] && !adj[source].includes(target)) adj[source].push(target);
        if (adj[target] && !adj[target].includes(source)) adj[target].push(source);
    });
    return adj;
}

/**
 * Calculates PageRank using Power Iteration.
 * O(K * E) where K = iterations.
 */
export function calculatePageRank(data: GraphData, damping: number = 0.85, iter: number = 20): Record<string, number> {
    const N = data.nodes.length;
    if (N === 0) return {};

    const adj = buildAdjacencyList(data);
    let pr: Record<string, number> = {};
    
    // Initial guess
    data.nodes.forEach(n => pr[n.id] = 1 / N);

    for (let i = 0; i < iter; i++) {
        const newPr: Record<string, number> = {};
        let sinkContrib = 0;
        
        // Handle "sinks" (nodes with no outbound links) - in an undirected graph, this is nodes with degree 0
        data.nodes.forEach(n => {
            const degree = adj[n.id].length;
            if (degree === 0) {
                sinkContrib += pr[n.id] / N;
            }
        });

        data.nodes.forEach(n => {
            let sum = 0;
            // Who points to n? (In undirected, neighbors point to n)
            adj[n.id].forEach(nbr => {
                const nbrDegree = adj[nbr].length;
                if (nbrDegree > 0) {
                    sum += pr[nbr] / nbrDegree;
                }
            });
            newPr[n.id] = ((1 - damping) / N) + damping * (sum + sinkContrib);
        });
        pr = newPr;
    }

    // Normalize max to 1 for visual convenience
    const maxVal = Math.max(...Object.values(pr), 0.00001);
    const normalized: Record<string, number> = {};
    data.nodes.forEach(n => normalized[n.id] = pr[n.id] / maxVal);
    
    return normalized;
}

/**
 * Calculates Betweenness Centrality using Brandes' Algorithm (O(V * E)).
 */
export function calculateBetweenness(data: GraphData): Record<string, number> {
    const adj = buildAdjacencyList(data);
    const cb: Record<string, number> = {};
    const nodes = data.nodes.map(n => n.id);
    
    nodes.forEach(v => cb[v] = 0);

    nodes.forEach(s => {
        const S: string[] = [];
        const P: Record<string, string[]> = {};
        const sigma: Record<string, number> = {};
        const d: Record<string, number> = {};

        nodes.forEach(v => {
            P[v] = [];
            sigma[v] = 0;
            d[v] = -1;
        });
        sigma[s] = 1;
        d[s] = 0;

        const Q: string[] = [s];

        while (Q.length > 0) {
            const v = Q.shift()!;
            S.push(v);
            
            adj[v].forEach(w => {
                // w found for the first time?
                if (d[w] < 0) {
                    Q.push(w);
                    d[w] = d[v] + 1;
                }
                // shortest path to w via v?
                if (d[w] === d[v] + 1) {
                    sigma[w] += sigma[v];
                    P[w].push(v);
                }
            });
        }

        const delta: Record<string, number> = {};
        nodes.forEach(v => delta[v] = 0);

        // S returns vertices in order of non-increasing distance from s
        while (S.length > 0) {
            const w = S.pop()!;
            P[w].forEach(v => {
                delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]);
            });
            if (w !== s) {
                cb[w] += delta[w];
            }
        }
    });

    // In undirected graph, betweenness is divided by 2
    nodes.forEach(v => cb[v] /= 2);

    // Normalize max to 1 for visual convenience
    const maxVal = Math.max(...Object.values(cb), 0.00001);
    const normalized: Record<string, number> = {};
    nodes.forEach(v => normalized[v] = cb[v] / maxVal);

    return normalized;
}

/**
 * Calculates Communities using a simple Label Propagation Algorithm (LPA).
 * O(K * E), where K = iterations until convergence.
 */
export function detectCommunitiesLPA(data: GraphData, iter: number = 10): Record<string, string> {
    const adj = buildAdjacencyList(data);
    let labels: Record<string, string> = {};
    const nodes = data.nodes.map(n => n.id);

    // Initialize labels to their own ID
    nodes.forEach(n => labels[n] = n);

    for (let i = 0; i < iter; i++) {
        // Randomize node order to prevent oscillation
        const shuffled = [...nodes].sort(() => Math.random() - 0.5);
        let changed = false;

        shuffled.forEach(n => {
            const counts: Record<string, number> = {};
            adj[n].forEach(nbr => {
                const lbl = labels[nbr];
                counts[lbl] = (counts[lbl] || 0) + 1;
            });

            if (Object.keys(counts).length > 0) {
                let maxCount = 0;
                let maxLabel = labels[n];
                // Resolve ties randomly
                for (const [lbl, count] of Object.entries(counts)) {
                    if (count > maxCount || (count === maxCount && Math.random() > 0.5)) {
                        maxCount = count;
                        maxLabel = lbl;
                    }
                }

                if (labels[n] !== maxLabel) {
                    labels[n] = maxLabel;
                    changed = true;
                }
            }
        });

        if (!changed) break; // Converged early
    }

    return labels;
}
