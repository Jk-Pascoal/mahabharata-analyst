import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { GraphData, GraphNode, GraphLink } from '../../../types/graph';

interface NetworkGraphProps {
    data: GraphData;
    onNodeClick?: (node: GraphNode) => void;
    colorMode?: 'faction' | 'species' | 'cluster';
    sizingMetric?: 'degree' | 'pagerank' | 'betweenness';
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ 
    data, 
    onNodeClick, 
    colorMode = 'faction',
    sizingMetric = 'degree'
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data.nodes.length) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight || 600;

        d3.select(svgRef.current).selectAll('*').remove();
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0, 0, width, height]);

        // Scales & Colors
        const factionScale = d3.scaleOrdinal<string>()
            .domain(['Pandava', 'Kaurava', 'Divino', 'Yadava', 'Neutro'])
            .range(['#3b82f6', '#ef4444', '#eab308', '#a855f7', '#9ca3af']);

        const speciesScale = d3.scaleOrdinal<string>()
            .domain(['Humano', 'Deva', 'Asura', 'Rakshasa', 'Naga', 'Rishi'])
            .range(['#94a3b8', '#fbbf24', '#f87171', '#c084fc', '#34d399', '#38bdf8']);

        const clusterPalette = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#64748b'];

        const getColor = (d: GraphNode) => {
            if (colorMode === 'species') return speciesScale(d.species || 'Humano');
            if (colorMode === 'cluster') {
                // simple hash based on string to pick consistent color if communityId is arbitrary
                let hash = 0;
                const str = d.communityId || '';
                for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
                return clusterPalette[Math.abs(hash) % clusterPalette.length];
            }
            return factionScale(d.group);
        };

        const getRadius = (d: GraphNode) => {
            let val = 0;
            if (sizingMetric === 'degree') val = d.centrality || 0;
            if (sizingMetric === 'pagerank') val = d.pagerank || 0;
            if (sizingMetric === 'betweenness') val = d.betweenness || 0;
            return (val * 20) + 10;
        };

        const nodes = data.nodes.map(d => ({ ...d }));
        const links = data.links.map(d => ({ ...d }));

        // Precompute neighbors for hover effect
        const linkedByIndex: Record<string, boolean> = {};
        links.forEach(l => {
            const s = typeof l.source === 'object' ? (l.source as any).id : l.source;
            const t = typeof l.target === 'object' ? (l.target as any).id : l.target;
            linkedByIndex[`${s},${t}`] = true;
            linkedByIndex[`${t},${s}`] = true;
        });
        const isConnected = (a: any, b: any) => {
            return linkedByIndex[`${a.id},${b.id}`] || a.id === b.id;
        };

        const simulation = d3.forceSimulation<any>(nodes)
            .force('link', d3.forceLink<any, any>(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide().radius(d => getRadius(d as GraphNode) + 5));

        const g = svg.append('g');

        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });
        
        // Triggers zoom on double click instead of click, so click selects node
        svg.call(zoom).on("dblclick.zoom", null);

        const link = g.append('g')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('stroke-width', 1.5)
            .attr('stroke', d => {
                const type = (d as unknown as GraphLink).type;
                if (type === 'family') return '#60a5fa'; // faint blue
                if (type === 'enemy') return '#f87171'; // faint red
                if (type === 'alliance') return '#34d399'; // green
                if (type === 'guru') return '#a78bfa'; // purple
                if (type === 'same_lineage') return '#eab308'; // yellow
                if (type === 'same_species') return '#f472b6'; // pink
                return '#9ca3af';
            })
            .attr('stroke-opacity', 0.6)
            .attr('stroke-dasharray', d => {
                const type = (d as unknown as GraphLink).type;
                if (type === 'same_lineage' || type === 'same_species') return '4,4';
                return 'none';
            })
            .attr('class', 'graph-link transition-opacity duration-200');

        const node = g.append('g')
            .selectAll('g')
            .data(nodes)
            .join('g')
            .call(d3.drag<any, any>()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended))
            .on('click', (_event, d) => {
                // Focus camera logic on double click if needed, but on single click just inspect
                if (onNodeClick) onNodeClick(d as GraphNode);
            });

        node.append('circle')
            .attr('r', d => getRadius(d as GraphNode))
            .attr('fill', d => getColor(d as GraphNode))
            .attr('stroke', '#0f172a') // slate-900 border
            .attr('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(_event, d: any) {
                d3.select(this).attr('stroke', '#fff').attr('stroke-width', 3);
                
                // Opacity logic
                node.style('opacity', o => isConnected(d, o) ? 1 : 0.15);
                link.style('stroke-opacity', o => ((o as any).source.id === d.id || (o as any).target.id === d.id) ? 1 : 0.05);
            })
            .on('mouseout', function() {
                d3.select(this).attr('stroke', '#0f172a').attr('stroke-width', 2);
                node.style('opacity', 1);
                link.style('stroke-opacity', 0.6);
            });

        node.append('text')
            .text(d => d.name)
            .attr('x', d => getRadius(d as GraphNode) + 4)
            .attr('y', 4)
            .style('font-family', 'Inter, sans-serif')
            .style('font-size', '11px')
            .style('font-weight', '500')
            .style('fill', '#f8fafc')
            .style('pointer-events', 'none')
            .style('text-shadow', '1px 1px 0 rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.8), 1px -1px 0 rgba(0,0,0,0.8), -1px 1px 0 rgba(0,0,0,0.8)');

        node.append('title')
            .text(d => `${d.name}\nEspécie: ${d.species}\nFacção: ${d.group}\nLinhagem: ${d.lineage}\nGrau: ${d.degree}\nPageRank: ${(d.pagerank || 0).toFixed(3)}\nBetweenness: ${(d.betweenness || 0).toFixed(3)}`);

        simulation.on('tick', () => {
            link
                .attr('x1', d => (d.source as any).x)
                .attr('y1', d => (d.source as any).y)
                .attr('x2', d => (d.target as any).x)
                .attr('y2', d => (d.target as any).y);

            node
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        function dragstarted(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: any, d: any) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return () => {
            simulation.stop();
        };
    }, [data, onNodeClick, colorMode, sizingMetric]);

    return (
        <div ref={containerRef} className="w-full h-full bg-slate-950 rounded-xl shadow-inner relative overflow-hidden">
            <svg ref={svgRef} className="w-full h-full"></svg>
            <div className="absolute bottom-4 left-4 bg-slate-900/90 p-3 rounded-lg shadow-md border border-slate-800 text-xs text-slate-300 backdrop-blur-sm pointer-events-none">
                <div className="font-semibold text-slate-100 mb-2">Arestas</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-4 h-0.5 bg-blue-400"></div> Família</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-4 h-0.5 bg-red-400"></div> Inimigos</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-4 h-0.5 bg-emerald-400"></div> Aliados</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-4 h-0.5 bg-purple-400"></div> Guru/Aluno</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-4 h-0.5 bg-yellow-400 scale-y-50 border-t border-dashed border-yellow-400 bg-transparent"></div> Mesma Linhagem</div>
                <div className="flex items-center gap-2"><div className="w-4 h-0.5 bg-pink-400 scale-y-50 border-t border-dashed border-pink-400 bg-transparent"></div> Mesma Espécie</div>
            </div>
            <div className="absolute bottom-4 right-4 bg-slate-900/90 p-3 rounded-lg shadow-md border border-slate-800 text-xs text-slate-300 backdrop-blur-sm pointer-events-none text-right">
                <div className="font-semibold text-slate-100 mb-2">Nós ({colorMode === 'species' ? 'Espécies' : colorMode === 'cluster' ? 'Comunidades (LPA)' : 'Facções'})</div>
                {colorMode === 'species' ? (
                    <>
                        <div className="flex items-center justify-end gap-2 mb-1 text-slate-300">Humano <div className="w-3 h-3 rounded-full bg-slate-400"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-amber-400">Deva <div className="w-3 h-3 rounded-full bg-amber-400"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-red-400">Asura <div className="w-3 h-3 rounded-full bg-red-400"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-purple-400">Rakshasa <div className="w-3 h-3 rounded-full bg-purple-400"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-emerald-400">Naga <div className="w-3 h-3 rounded-full bg-emerald-400"></div></div>
                        <div className="flex items-center justify-end gap-2 text-sky-400">Rishi <div className="w-3 h-3 rounded-full bg-sky-400"></div></div>
                    </>
                ) : colorMode === 'cluster' ? (
                    <div className="text-slate-400 italic">Cores randômicas via Algoritmo de Clusters</div>
                ) : (
                    <>
                        <div className="flex items-center justify-end gap-2 mb-1 text-blue-400">Pandava <div className="w-3 h-3 rounded-full bg-blue-500"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-red-400">Kaurava <div className="w-3 h-3 rounded-full bg-red-500"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-amber-400">Divino <div className="w-3 h-3 rounded-full bg-amber-500"></div></div>
                        <div className="flex items-center justify-end gap-2 mb-1 text-purple-400">Yadava <div className="w-3 h-3 rounded-full bg-purple-500"></div></div>
                        <div className="flex items-center justify-end gap-2 text-slate-400">Neutro <div className="w-3 h-3 rounded-full bg-slate-400"></div></div>
                    </>
                )}
            </div>
            <div className="absolute top-4 left-4 text-xs text-slate-400 pointer-events-none">
                <p>Tamanho = {sizingMetric === 'degree' ? 'Grau (Conexões)' : sizingMetric === 'pagerank' ? 'PageRank (Influência)' : 'Betweenness (Ponte)'}.<br/>Mouse-over destaca conexões.</p>
            </div>
        </div>
    );
};
