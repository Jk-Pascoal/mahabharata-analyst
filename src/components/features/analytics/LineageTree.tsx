import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { GraphData, GraphNode } from '../../../types/graph';

interface LineageTreeProps {
    data: GraphData;
    onNodeClick?: (node: GraphNode) => void;
}

export const LineageTree: React.FC<LineageTreeProps> = ({ data, onNodeClick }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data.nodes.length) return;

        try {
            const width = containerRef.current.clientWidth || 800;
            const height = containerRef.current.clientHeight || 600;

            d3.select(svgRef.current).selectAll('*').remove();
            const svg = d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height)
                .attr('viewBox', [0, 0, width, height]);

            // Build hierarchical data from nodes and family links
            const familyLinks = data.links.filter(l => l.type === 'family');
            const childrenMap = new Map<string, string[]>();
            const parentSet = new Set<string>();

            familyLinks.forEach(l => {
                const src = typeof l.source === 'object' ? (l.source as any).id : l.source;
                const tgt = typeof l.target === 'object' ? (l.target as any).id : l.target;
                if (!childrenMap.has(src)) childrenMap.set(src, []);
                childrenMap.get(src)!.push(tgt);
                parentSet.add(tgt);
            });

            const rootIds = data.nodes.filter(n => childrenMap.has(n.id) && !parentSet.has(n.id)).map(n => n.id);
            
            const visited = new Set<string>();
            function buildHierarchy(nodeId: string): any {
                const n = data.nodes.find(d => d.id === nodeId);
                if (!n || visited.has(nodeId)) return { id: nodeId + '-dup', name: (n?.name || nodeId) + ' ↩' };
                visited.add(nodeId);
                const childrenIds = childrenMap.get(nodeId) || [];
                return {
                    id: n.id,
                    name: n.name,
                    nodeRef: n,
                    children: childrenIds.length > 0 ? childrenIds.map(buildHierarchy) : undefined
                };
            }

            const hierarchyData = {
                id: 'root',
                name: rootIds.length === 0 ? 'Sem Ancestral' : '',
                children: rootIds.map(buildHierarchy)
            };

            const root = d3.hierarchy(hierarchyData);

            // VERTICAL top-to-bottom: dx = horizontal gap per node, dy = vertical gap per level
            const dx = Math.max(100, width / Math.max(root.leaves().length, 3));
            const dy = 90;
            const treeLayout = d3.tree<any>().nodeSize([dx, dy]);
            treeLayout(root as any);

            // Compute x extents to center horizontally
            let x0 = Infinity, x1 = -Infinity;
            (root as any).each((d: any) => {
                if (d.x < x0) x0 = d.x;
                if (d.x > x1) x1 = d.x;
            });

            const zoom = d3.zoom<SVGSVGElement, unknown>()
                .scaleExtent([0.15, 4])
                .on('zoom', (event) => g.attr('transform', event.transform));
            svg.call(zoom).on("dblclick.zoom", null);

            // Offset so tree starts centered and has top padding
            const g = svg.append('g')
                .attr('transform', `translate(${width / 2 - (x0 + x1) / 2},${dy})`);

            // Vertical curved links
            g.append('g')
                .attr('fill', 'none')
                .attr('stroke', '#64748b')
                .attr('stroke-opacity', 0.45)
                .attr('stroke-width', 1.5)
                .selectAll('path')
                .data(root.links())
                .join('path')
                .attr('d', (d: any) => {
                    // Cubic bezier top-to-bottom
                    const sx = d.source.x, sy = d.source.y;
                    const tx = d.target.x, ty = d.target.y;
                    const my = (sy + ty) / 2;
                    return `M${sx},${sy} C${sx},${my} ${tx},${my} ${tx},${ty}`;
                });

            const node = g.append('g')
                .selectAll('g')
                .data(root.descendants())
                .join('g')
                .attr('transform', (d: any) => `translate(${d.x},${d.y})`);

            // Circle
            node.append('circle')
                .attr('fill', (d: any) => {
                    if (d.data.id === 'root') return 'transparent';
                    if (d.depth === 1 && !parentSet.has(d.data.id)) return '#f59e0b'; // top ancestors = gold
                    if (!d.children) return '#34d399';  // leaves = green
                    return '#60a5fa';                    // mid nodes = blue
                })
                .attr('stroke', (d: any) => {
                    if (d.data.id === 'root') return 'none';
                    return d.children ? '#c4a55a88' : '#16a34a88';
                })
                .attr('stroke-width', 1.5)
                .attr('r', (d: any) => d.data.id === 'root' ? 0 : 7)
                .style('cursor', 'pointer')
                .on('click', (_event, d: any) => {
                    if (d.data.nodeRef && onNodeClick) onNodeClick(d.data.nodeRef);
                });

            // Labels — above for ancestors (has children), below for leaves
            node.filter((d: any) => d.data.id !== 'root')
                .append('text')
                .attr('dy', (d: any) => d.children ? '-1.0em' : '1.8em')
                .attr('text-anchor', 'middle')
                .text((d: any) => d.data.name)
                .style('font-family', 'Inter, sans-serif')
                .style('font-size', '11px')
                .style('font-weight', (d: any) => d.children ? '700' : '400')
                .style('fill', (d: any) => d.children ? '#fbbf24' : '#cbd5e1')
                .style('text-shadow', '0 0 4px rgba(0,0,0,1), 0 0 4px rgba(0,0,0,1)');

            setErrorMsg(null);
        } catch (err: any) {
            console.error("D3 Error:", err);
            setErrorMsg(err.message || String(err));
        }
    }, [data, onNodeClick]);

    return (
        <div ref={containerRef} className="w-full h-full bg-slate-950 rounded-xl shadow-inner relative flex items-center justify-center overflow-hidden">
            {errorMsg ? (
                <div className="text-red-400 font-mono p-4 bg-red-950/20 border border-red-900/50 rounded-lg max-w-lg shadow-sm">
                    <strong>Erro de Renderização na Árvore:</strong><br/>
                    {errorMsg}
                </div>
            ) : (
                <svg ref={svgRef} className="w-full h-full"></svg>
            )}
            <div className="absolute top-4 left-4 bg-slate-900/90 p-2 rounded-lg shadow-md border border-slate-800 text-xs text-slate-300 backdrop-blur pointer-events-none">
                Árvore de Linhagens (Role o mouse para Zoom, Arraste para Pan)
            </div>
        </div>
    );
};
