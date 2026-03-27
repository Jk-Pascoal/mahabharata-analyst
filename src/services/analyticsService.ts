import type { Character } from '../types';
import type { GraphData, AnalyticsResult, Community, AttributeFrequency, ConflictPair } from '../types/graph';
import { buildGraphData } from './graphBuilder';
import { calculatePageRank, calculateBetweenness, detectCommunitiesLPA } from './graphMetrics';

export function runAnalytics(characters: Character[]): { graph: GraphData, analytics: AnalyticsResult } {
    const graph = buildGraphData(characters);
    
    // 1. Calculate Degree and Centrality
    const degrees: Record<string, number> = {};
    graph.nodes.forEach(n => degrees[n.id] = 0);
    
    graph.links.forEach(l => {
        const sourceId = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const targetId = typeof l.target === 'string' ? l.target : (l.target as any).id;
        
        if (degrees[sourceId] !== undefined) degrees[sourceId]++;
        if (degrees[targetId] !== undefined) degrees[targetId]++;
    });

    const maxDegree = Math.max(...Object.values(degrees), 1);
    
    graph.nodes.forEach(n => {
        n.degree = degrees[n.id] || 0;
        n.centrality = n.degree / maxDegree; // Normalized centrality purely based on degree
    });

    const pr = calculatePageRank(graph);
    const bw = calculateBetweenness(graph);
    const lpa = detectCommunitiesLPA(graph);

    graph.nodes.forEach(n => {
        n.pagerank = pr[n.id] || 0;
        n.betweenness = bw[n.id] || 0;
        n.communityId = lpa[n.id] || n.id;
    });

    // 1.5 Calculate Heuristic Indices & Topological Role
    const bwValues = graph.nodes.map(n => n.betweenness || 0);
    const sortedBw = [...bwValues].sort((a, b) => b - a);
    const top15Bw = sortedBw[Math.floor(sortedBw.length * 0.15)] || 0;
    
    const degValues = graph.nodes.map(n => n.degree);
    const sortedDeg = [...degValues].sort((a, b) => b - a);
    const top15Deg = sortedDeg[Math.floor(sortedDeg.length * 0.15)] || 0;
    const bottom25Deg = sortedDeg[Math.floor(sortedDeg.length * 0.75)] || 0;

    graph.nodes.forEach(n => {
        // Topological Role
        if (n.degree >= top15Deg) {
            n.topologicalRole = 'hub';
        } else if ((n.betweenness || 0) >= top15Bw) {
            n.topologicalRole = 'bridge';
        } else if (n.degree <= bottom25Deg) {
            n.topologicalRole = 'peripheral';
        } else {
            n.topologicalRole = 'bridge'; // intermediary
        }

        // Dharma Index (Heuristic)
        const charData = characters.find(c => c.id === n.id);
        let dharma = 50; // base score
        if (charData) {
            dharma += (charData.psychology?.virtues?.length || 0) * 5;
            dharma -= (charData.psychology?.flaws?.length || 0) * 5;
            if (charData.attributes?.symbolic?.some(a => ['dharma', 'justiça', 'retidão', 'dever'].includes(a.toLowerCase()))) dharma += 20;
            if (charData.attributes?.symbolic?.some(a => ['caos', 'engano', 'destruição', 'orgulho'].includes(a.toLowerCase()))) dharma -= 20;
        }
        n.dharmaIndex = Math.max(0, Math.min(100, dharma)); // clamp 0-100

        // Conflict Index (Enemy + War links ratio)
        const conflictLinks = graph.links.filter(l => 
            ((typeof l.source === 'object' ? l.source.id : l.source) === n.id || 
             (typeof l.target === 'object' ? l.target.id : l.target) === n.id) && 
            ['enemy', 'war'].includes(l.type)
        ).length;
        n.conflictIndex = n.degree > 0 ? (conflictLinks / n.degree) : 0;

        // Transcendence Index (Cross-species connections)
        const xSpeciesLinks = graph.links.filter(l => {
            const srcId = typeof l.source === 'object' ? l.source.id : l.source;
            const tgtId = typeof l.target === 'object' ? l.target.id : l.target;
            if (srcId !== n.id && tgtId !== n.id) return false;
            
            const otherId = srcId === n.id ? tgtId : srcId;
            const otherNode = characters.find(c => c.id === otherId);
            return otherNode && charData && otherNode.species !== charData.species;
        }).length;
        n.transcendenceIndex = n.degree > 0 ? (xSpeciesLinks / n.degree) : 0;
    });

    // Sort for most connected
    const mostConnected = [...graph.nodes].sort((a, b) => b.degree - a.degree).slice(0, 5);

    // 2. Communities (LPA Algorithmic Clusters)
    const communityMap: Record<string, Community> = {};
    const clusterPalette = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#64748b'];
    let clusterIdx = 0;

    graph.nodes.forEach(n => {
        const cId = n.communityId || n.id;
        if (!communityMap[cId]) {
            communityMap[cId] = {
                id: cId,
                name: `Cluster ${clusterIdx + 1}`,
                color: clusterPalette[clusterIdx % clusterPalette.length],
                members: [],
                avgCentrality: 0
            };
            clusterIdx++;
        }
        communityMap[cId].members.push(n.name);
        communityMap[cId].avgCentrality += n.centrality;
    });

    const communities: Community[] = Object.values(communityMap).map(c => ({
        ...c,
        avgCentrality: c.members.length > 0 ? c.avgCentrality / c.members.length : 0
    })).sort((a, b) => b.members.length - a.members.length);

    // 3. Attribute Frequencies
    const attrCounts: Record<string, number> = {};
    characters.forEach(c => {
        (c.attributes?.symbolic || []).forEach(attr => {
            attrCounts[attr] = (attrCounts[attr] || 0) + 1;
        });
    });

    const attributeFrequency: AttributeFrequency[] = Object.entries(attrCounts)
        .map(([attribute, count]) => ({ attribute, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    // 4. Conflicts (Top Enemies) - Just listing top 5 conflicts
    const topConflicts: ConflictPair[] = [];
    
    // 5. Ontological Distributions
    const spCounts: Record<string, number> = {};
    const linCounts: Record<string, number> = {};
    
    characters.forEach(c => {
        if (c.species) {
            spCounts[c.species] = (spCounts[c.species] || 0) + 1;
        }
        if (c.lineage?.clan && c.lineage.clan !== '-' && c.lineage.clan !== 'Desconhecida') {
            linCounts[c.lineage.clan] = (linCounts[c.lineage.clan] || 0) + 1;
        }
    });

    const speciesDistribution = Object.entries(spCounts)
        .map(([species, count]) => ({ species, count }))
        .sort((a, b) => b.count - a.count);

    const lineageDistribution = Object.entries(linCounts)
        .map(([lineage, count]) => ({ lineage, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    // 6. Generate Text Insights
    const topPr = [...graph.nodes].sort((a, b) => b.pagerank - a.pagerank)[0];
    const topBw = [...graph.nodes].sort((a, b) => b.betweenness - a.betweenness)[0];

    const insights: string[] = [];
    if (topPr) {
        insights.push(`**${topPr.name}** possui a maior influência global (Maior PageRank), conectando-se aos hubs mais significativos.`);
    }
    
    if (topBw && topBw.id !== topPr?.id) {
         insights.push(`**${topBw.name}** atua como diplomata oculto ou ponte principal na rede (Maior Betweenness Centrality).`);
    } else if (mostConnected.length > 0) {
        insights.push(`**${mostConnected[0].name}** detém o maior número puro de conexões locais (Degree).`);
    }
    
    const largestCommunity = communities[0];
    if (largestCommunity) {
        insights.push(`A facção **${largestCommunity.name}** domina politicamente com ${largestCommunity.members.length} figuras chave.`);
    }

    if (attributeFrequency.length > 0) {
        insights.push(`O tema simbólico mais recorrente no épico é **"${attributeFrequency[0].attribute}"**, aparecendo em ${attributeFrequency[0].count} heróis.`);
    }

    const nonHumans = speciesDistribution.filter(s => s.species !== 'Humano');
    if (nonHumans.length > 0) {
        const topNonHuman = nonHumans[0];
        const nonHumanCount = nonHumans.reduce((acc, curr) => acc + curr.count, 0);
        insights.push(`O aspecto mitológico é forte: existem ${nonHumanCount} entidades não-humanas ativas no conflito, com forte presença de **${topNonHuman.species}s** (${topNonHuman.count}).`);
    } else {
        insights.push(`A narrativa mapeada até o momento é inteiramente focada no drama Humano.`);
    }
    
    const avgDegreeStr = (graph.links.length * 2 / graph.nodes.length || 0).toFixed(1);

    const analytics: AnalyticsResult = {
        mostConnected,
        communities,
        attributeFrequency,
        topConflicts,
        speciesDistribution,
        lineageDistribution,
        insights,
        totalNodes: graph.nodes.length,
        totalLinks: graph.links.length,
        avgDegree: parseFloat(avgDegreeStr)
    };

    return { graph, analytics };
}
