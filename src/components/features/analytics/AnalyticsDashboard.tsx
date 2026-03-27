import React, { useMemo, useState } from 'react';
import { characters } from '../../../data/characters';
import { runAnalytics } from '../../../services/analyticsService';
import { NetworkGraph } from './NetworkGraph';
import { LineageTree } from './LineageTree';
import { EpicTimeline } from './EpicTimeline';
import type { GraphNode } from '../../../types/graph';
import { ArrowLeft, Filter, Palette, Activity, Box, Compass, Clock, Map, GitMerge } from 'lucide-react';

interface AnalyticsDashboardProps {
    onBack: () => void;
    onSelectCharacter?: (id: string) => void;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onBack, onSelectCharacter }) => {
    const { graph, analytics } = useMemo(() => runAnalytics(characters), []);
    
    const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
    const [colorMode, setColorMode] = useState<'faction' | 'species' | 'cluster'>('faction');
    const [sizingMetric, setSizingMetric] = useState<'degree' | 'pagerank' | 'betweenness'>('degree');
    const [speciesFilter, setSpeciesFilter] = useState<string>('all');
    const [phaseFilter, setPhaseFilter] = useState<string>('all');
    const [activeTab, setActiveTab] = useState<'graph' | 'tree' | 'conflict' | 'timeline'>('graph');

    const filteredGraph = useMemo(() => {
        let validNodeIds = new Set(graph.nodes.map(n => n.id));

        if (speciesFilter !== 'all') {
            validNodeIds = new Set(graph.nodes.filter(n => n.species === speciesFilter).map(n => n.id));
        }

        if (phaseFilter !== 'all') {
            const tempIds = new Set(graph.nodes.filter(n => n.phases?.includes(phaseFilter)).map(n => n.id));
            validNodeIds = new Set([...validNodeIds].filter(x => tempIds.has(x)));
        }

        let nodes = graph.nodes.filter(n => validNodeIds.has(n.id));
        let links = graph.links.filter(l => {
            const src = typeof l.source === 'object' ? (l.source as any).id : l.source;
            const tgt = typeof l.target === 'object' ? (l.target as any).id : l.target;
            
            // Conflict map only shows enemy/war
            if (activeTab === 'conflict' && !['enemy', 'war'].includes(l.type)) return false;

            return validNodeIds.has(src) && validNodeIds.has(tgt);
        });

        // Hide nodes without any visible links in conflict mode to reduce noise
        if (activeTab === 'conflict') {
            const activeLinkedIds = new Set<string>();
            links.forEach(l => {
                activeLinkedIds.add(typeof l.source === 'object' ? (l.source as any).id : l.source);
                activeLinkedIds.add(typeof l.target === 'object' ? (l.target as any).id : l.target);
            });
            nodes = nodes.filter(n => activeLinkedIds.has(n.id));
        }

        return { nodes, links };
    }, [graph, speciesFilter, phaseFilter, activeTab]);

    const allSpecies = useMemo(() => {
        const s = new Set<string>();
        characters.forEach(c => {
            if (c.species) s.add(c.species);
        });
        return Array.from(s).sort();
    }, []);

    const getNodeInsights = (node: GraphNode) => {
        const insights: string[] = [];
        
        const pr = node.pagerank || 0;
        const dharma = node.dharmaIndex || 50;
        const conflict = node.conflictIndex || 0;
        const trans = node.transcendenceIndex || 0;
        const role = node.topologicalRole || 'peripheral';

        // 1. Base Connectivity
        insights.push(`**${node.name}** possui diretamente **${node.degree}** conexões atrativas nas tramas primárias deste épico.`);

        // 2. Topological Role & Centrality
        if (role === 'hub') {
            insights.push(`Estruturalmente opera como um **HUB MASSIVO (Top 15% Grau)**, sendo impossível contar a história inteira de Mahãbharata sem esbarrar neste personagem. Possui colossal influência global no gráfico (PageRank: ${pr.toFixed(3)}).`);
        } else if (role === 'bridge') {
             insights.push(`Não dispõe de grande número bruto de alianças, mas age primariamente como uma rara **PONTE (Top 15% Betweenness)**. Sem o trânsito desta figura, muitas ramificações narrativas não conseguiriam se encontrar.`);
        } else {
             insights.push(`Exerce um papel **PERIFÉRICO** topologicamente, dedicando-se provavelmente a um segmento específico na trama principal sem extrapolar laços distantes.`);
        }

        // 3. Dharma Heuristic
        const dharmaStr = dharma > 70 ? 'Dharma Sublime/Elevado (+70%)' : dharma < 40 ? 'Dharma Obscuro/Caótico (Adharma)' : 'Dharma Cinza (Mortais Neutros)';
        insights.push(`O seu Perfil Psicológico o posiciona no arquétipo de **${dharmaStr}**, com escore moral inferido de ${Math.round(dharma)}/100.`);

        // 4. Conflict Index
        if (conflict > 0.5) {
            insights.push(`Índice de Conflito Absoluto: ${(conflict*100).toFixed(0)}%. Extremamente tensionado; a vasta maioria de suas interações anotadas envolvem guerra, rivalidade ou destruição do oponente.`);
        }

        // 5. Transcendence Index
        if (trans > 0.2) {
            insights.push(`Alto **Misticismo/Transcendência** Interespécie: ${(trans*100).toFixed(0)}%. Esse personagem quebra a barreira tribal conectando laços amigáveis/paternais ou de inimizade com entidades de outras naturezas ontológicas.`);
        }

        return insights;
    };

    return (
        <div className="min-h-screen bg-slate-950 p-2 md:p-6 animate-fade-in relative z-10 w-full mx-auto flex flex-col font-sans text-slate-300">
            {/* TOP HEADER & TABS */}
            <header className="shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={onBack}
                        className="p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg shadow-sm transition-colors text-slate-400 hover:text-slate-200"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-xl font-serif text-slate-100 leading-none">Workspace Analítico</h1>
                    </div>
                </div>

                {/* TABS CONTROLS */}
                <div className="flex bg-slate-900 rounded-lg shadow-sm border border-slate-800 overflow-hidden">
                    <button onClick={() => setActiveTab('graph')} className={`px-4 py-1.5 text-sm font-semibold flex items-center gap-2 transition-colors ${activeTab === 'graph' ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
                        <Map className="w-4 h-4" /> Grafo Geral
                    </button>
                    <button onClick={() => setActiveTab('tree')} className={`px-4 py-1.5 text-sm font-semibold flex items-center gap-2 transition-colors border-l border-slate-800 ${activeTab === 'tree' ? 'bg-indigo-900/50 text-indigo-300' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
                        <GitMerge className="w-4 h-4" /> Árvore Linhagem
                    </button>
                    <button onClick={() => setActiveTab('conflict')} className={`px-4 py-1.5 text-sm font-semibold flex items-center gap-2 transition-colors border-l border-slate-800 ${activeTab === 'conflict' ? 'bg-red-900/50 text-red-300' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
                        <Filter className="w-4 h-4" /> Conflito
                    </button>
                    <button onClick={() => setActiveTab('timeline')} className={`px-4 py-1.5 text-sm font-semibold flex items-center gap-2 transition-colors border-l border-slate-800 ${activeTab === 'timeline' ? 'bg-amber-900/50 text-amber-300' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
                        <Clock className="w-4 h-4" /> Timeline
                    </button>
                </div>
            </header>

            {/* TOP COMPACT TOOLBAR (Filters, Visuals & KPIs) */}
            <div className="shrink-0 bg-slate-900 rounded-xl shadow-sm border border-slate-800 p-2 mb-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                    {/* Filters */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-slate-500" />
                        <select 
                            value={phaseFilter}
                            onChange={(e) => setPhaseFilter(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 rounded p-1.5 outline-none cursor-pointer hover:bg-slate-800"
                        >
                            <option value="none">Épico Completo (Tempo)</option>
                            <option value="pre-war">Fase: Pré-Guerra</option>
                            <option value="war">Fase: Guerra</option>
                            <option value="post-war">Fase: Pós-Guerra</option>
                        </select>
                        <select 
                            value={speciesFilter}
                            onChange={(e) => setSpeciesFilter(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 rounded p-1.5 outline-none cursor-pointer hover:bg-slate-800"
                        >
                            <option value="all">Todas as Espécies</option>
                            {allSpecies.map(sp => (
                                <option key={sp} value={sp}>{sp}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-px h-6 bg-slate-800 hidden md:block"></div>

                    {/* Vísual */}
                    <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-slate-500" />
                        <select 
                            value={colorMode}
                            onChange={(e) => setColorMode(e.target.value as any)}
                            className="bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 rounded p-1.5 outline-none cursor-pointer hover:bg-slate-800"
                        >
                            <option value="faction">Cor: Por Facção</option>
                            <option value="species">Cor: Por Espécie</option>
                            <option value="cluster">Cor: Por Comunidade (LPA)</option>
                        </select>
                        <select 
                            value={sizingMetric}
                            onChange={(e) => setSizingMetric(e.target.value as any)}
                            className="bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 rounded p-1.5 outline-none cursor-pointer hover:bg-slate-800"
                        >
                            <option value="degree">Tamanho: Grau Local</option>
                            <option value="pagerank">Tamanho: PageRank Global</option>
                            <option value="betweenness">Tamanho: Articulação (Ponte)</option>
                        </select>
                    </div>
                </div>

                {/* Mini KPIs */}
                <div className="flex items-center gap-3 pr-2 border-l border-slate-800 pl-4">
                    <div className="flex items-center gap-1.5 text-xs">
                        <Box className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-slate-500">Nós:</span> 
                        <span className="font-bold text-slate-300">{filteredGraph.nodes.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                        <Compass className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-slate-500">Arestas:</span> 
                        <span className="font-bold text-slate-300">{filteredGraph.links.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs hidden sm:flex">
                        <Activity className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-slate-500">Hub Principal:</span> 
                        <span className="font-bold text-slate-300">{analytics.mostConnected[0]?.name || '-'}</span>
                    </div>
                </div>
            </div>

            {/* INSIGHTS & INSPECTOR BANNER (Horizontal) */}
            <div className="shrink-0 mb-3 flex gap-3 overflow-x-auto pb-1 styled-scrollbar">
                {selectedNode ? (
                    <div className="flex bg-slate-900 rounded-xl shadow-sm border border-slate-800 p-2.5 min-w-max items-center animate-fade-in">
                        {/* Compact Node Details */}
                        <div className="flex items-center gap-6 pr-6 border-r border-slate-800">
                             <div>
                                 <h4 className="text-base font-bold text-slate-100 leading-tight">{selectedNode.name}</h4>
                                 <div className="flex gap-1.5 mt-0.5">
                                     <span className={`px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded ${
                                         selectedNode.group === 'Pandava' ? 'bg-blue-900/30 text-blue-400' :
                                         selectedNode.group === 'Kaurava' ? 'bg-red-900/30 text-red-400' :
                                         selectedNode.group === 'Divino' ? 'bg-amber-900/30 text-amber-400' :
                                         'bg-slate-800 text-slate-400'
                                     }`}>{selectedNode.group}</span>
                                     <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-slate-800 text-slate-400">{selectedNode.species}</span>
                                     <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-indigo-900/40 text-indigo-400">{selectedNode.topologicalRole}</span>
                                 </div>
                             </div>
                             <div className="flex gap-4 text-xs">
                                 <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold">Dharma</span><span className="font-mono font-bold text-sky-400 bg-slate-950 px-1 rounded">{Math.round(selectedNode.dharmaIndex || 50)}</span></div>
                                 <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold">Conflito</span><span className="font-mono font-bold text-red-400 bg-slate-950 px-1 rounded">{(selectedNode.conflictIndex || 0).toFixed(2)}</span></div>
                                 <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold">Transcend.</span><span className="font-mono font-bold text-emerald-400 bg-slate-950 px-1 rounded">{(selectedNode.transcendenceIndex || 0).toFixed(2)}</span></div>
                                 <div className="flex flex-col"><span className="text-slate-500 text-[10px] uppercase font-bold">Arestas</span><span className="font-mono font-bold text-slate-300 bg-slate-950 px-1 rounded">{selectedNode.degree}</span></div>
                             </div>
                             <button onClick={() => onSelectCharacter && onSelectCharacter(selectedNode.id)} className="ml-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold uppercase tracking-widest transition-colors">Perfil Completo</button>
                        </div>
                        {/* Compact Node Insights */}
                        <div className="flex items-center pl-6 gap-3">
                             {getNodeInsights(selectedNode).map((insight, idx) => (
                                 <div key={idx} className="bg-amber-950/20 border border-amber-900/30 text-amber-200/90 text-[11px] p-2 rounded-lg max-w-xs leading-relaxed shrink-0" dangerouslySetInnerHTML={{ __html: insight.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400">$1</strong>') }} />
                             ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-3 min-w-max animate-fade-in">
                        <div className="bg-indigo-950/30 rounded-xl shadow-sm border border-indigo-900/50 p-3 flex flex-col justify-center shrink-0">
                            <span className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-widest">Reporte Estrutural</span>
                            <span className="text-sm font-bold text-indigo-200">Panorama Global</span>
                        </div>
                        {analytics.insights.map((insight, idx) => (
                            <div key={idx} className="bg-slate-900 rounded-xl shadow-sm border border-slate-800 p-3 text-xs text-slate-300 max-w-sm leading-relaxed shrink-0 flex items-center" dangerouslySetInnerHTML={{ __html: insight.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        ))}
                    </div>
                )}
            </div>

            {/* MAIN CANVAS AREA (Massive Height for Vertical Scrolling) */}
            <div className="w-full bg-slate-950 rounded-xl shadow-lg border border-slate-800 overflow-hidden relative h-[1200px] shrink-0">
                
                {/* Visualizer Content */}
                {activeTab === 'graph' || activeTab === 'conflict' ? (
                    <>
                        {activeTab === 'conflict' && (
                            <div className="absolute top-4 left-4 z-10 bg-red-900/50 border border-red-800/50 text-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur bg-opacity-80 shadow">
                                Filtrado: Apenas Arestas de Tensão Militar/Inimizade
                            </div>
                        )}
                        <NetworkGraph data={filteredGraph} colorMode={colorMode} sizingMetric={sizingMetric} onNodeClick={setSelectedNode} />
                    </>
                ) : activeTab === 'tree' ? (
                    <LineageTree data={filteredGraph} onNodeClick={setSelectedNode} />
                ) : (
                    <div className="w-full h-full p-4 overflow-auto bg-slate-950 min-h-[1200px]">
                        <EpicTimeline characters={characters} onCharacterClick={onSelectCharacter} />
                    </div>
                )}
            </div>
        </div>
    );
};
