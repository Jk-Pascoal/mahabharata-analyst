import React, { useMemo } from 'react';
import type { Character } from '../../types';
import { Shield, Users, Scroll, Activity, Anchor, GitMerge, FileText } from 'lucide-react';
import { LineageTree } from './analytics/LineageTree';
import { runAnalytics } from '../../services/analyticsService';
import { characters } from '../../data/characters';

interface DashboardProps {
    character: Character;
    onBack: () => void;
    onReadParva?: (parvaSlug: string) => void;
}

export const CharacterDashboard: React.FC<DashboardProps> = ({ character, onBack, onReadParva }) => {
    const { graph } = useMemo(() => {
        const fullGraph = runAnalytics(characters).graph;
        
        // Adjacency list for fast BFS
        const adj = new Map<string, Set<string>>();
        fullGraph.links.forEach(l => {
            if (l.type === 'family') {
                const src = typeof l.source === 'object' ? (l.source as any).id : l.source;
                const tgt = typeof l.target === 'object' ? (l.target as any).id : l.target;
                if (!adj.has(src)) adj.set(src, new Set());
                if (!adj.has(tgt)) adj.set(tgt, new Set());
                adj.get(src)!.add(tgt);
                adj.get(tgt)!.add(src);
            }
        });

        // BFS up to depth 2
        const connectedIds = new Set<string>([character.id]);
        let currentLevel = [character.id];
        
        for (let depth = 0; depth < 2; depth++) {
            const nextLevel: string[] = [];
            for (const n of currentLevel) {
                const neighbors = adj.get(n);
                if (neighbors) {
                    neighbors.forEach(neighbor => {
                        if (!connectedIds.has(neighbor)) {
                            connectedIds.add(neighbor);
                            nextLevel.push(neighbor);
                        }
                    });
                }
            }
            currentLevel = nextLevel;
        }

        const subNodes = fullGraph.nodes.filter(n => connectedIds.has(n.id));
        const subLinks = fullGraph.links.filter(l => 
            l.type === 'family' && 
            connectedIds.has(typeof l.source === 'object' ? (l.source as any).id : l.source) && 
            connectedIds.has(typeof l.target === 'object' ? (l.target as any).id : l.target)
        );

        return { graph: { nodes: subNodes, links: subLinks } };
    }, [character.id]);

    return (
        <div className="animate-fade-in-up">
            <button
                onClick={onBack}
                className="mb-6 text-epic-gold hover:text-slate-100 transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2"
            >
                ← Voltar à Busca
            </button>

            {/* Header */}
            <div className="relative border-b border-epic-gold/30 pb-8 mb-12">
                <div className="md:flex justify-between items-end">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-100 mb-2">{character.name}</h2>
                        <div className="flex flex-wrap gap-3 text-epic-bronze font-serif italic text-lg">
                            {character.epithets.map((epithet, i) => (
                                <span key={i}>{epithet}{i < character.epithets.length - 1 ? ' • ' : ''}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Clã / Dinastia</div>
                        <div className="text-xl text-slate-300">{character.lineage.clan} / {character.lineage.dynasty}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                {/* Left Column: Stats & Facts */}
                <div className="space-y-8">
                    {character.lineage.father !== 'Ver Texto' && character.lineage.father !== '?' && (
                        <Section title="Linhagem" icon={<Anchor size={18} />}>
                            <div className="space-y-2 text-slate-300">
                                <p><span className="text-slate-500 uppercase text-xs font-bold tracking-wider">Pai:</span> {character.lineage.father}</p>
                                <p><span className="text-slate-500 uppercase text-xs font-bold tracking-wider">Mãe:</span> {character.lineage.mother}</p>
                            </div>
                        </Section>
                    )}

                    {character.role[0] !== 'Figura do Texto' && (
                        <Section title="Papéis & Funções" icon={<Shield size={18} />}>
                            <ul className="list-none space-y-1">
                                {character.role.map((r, i) => (
                                    <li key={i} className="text-slate-300 border-l-2 border-epic-gold/50 pl-3">{r}</li>
                                ))}
                            </ul>
                        </Section>
                    )}

                    {character.attributes.symbolic.length > 0 && (
                        <Section title="Atributos Simbólicos" icon={<Activity size={18} />}>
                            <div className="flex flex-wrap gap-2">
                                {character.attributes.symbolic.map((attr, i) => (
                                    <span key={i} className="bg-epic-gold/10 text-epic-gold text-xs px-2 py-1 rounded border border-epic-gold/20 uppercase tracking-wide">
                                        {attr}
                                    </span>
                                ))}
                            </div>
                        </Section>
                    )}
                </div>

                {/* Middle Column: Analysis (Wide) */}
                <div className="md:col-span-2 space-y-8">
                    {/* Deep Analysis */}
                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border-l-4 border-epic-gold relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-epic-gold">
                            <Scroll size={100} />
                        </div>
                        <h3 className="text-2xl font-serif text-epic-gold mb-4">Análise Arquetípica</h3>
                        <p className="text-lg leading-relaxed text-slate-300 font-light">
                            {character.psychology.analysis}
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-green-500/80 uppercase text-xs font-bold tracking-widest mb-2">Virtudes</h4>
                                <ul className="space-y-1 text-slate-400 text-sm">
                                    {character.psychology.virtues.map((v, i) => <li key={i}>+ {v}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-red-500/80 uppercase text-xs font-bold tracking-widest mb-2">Falhas Trágicas</h4>
                                <ul className="space-y-1 text-slate-400 text-sm">
                                    {character.psychology.flaws.map((f, i) => <li key={i}>- {f}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Grid */}
            <div className="mb-12">
                <h3 className="text-2xl font-serif text-slate-200 mb-6 border-b border-slate-800 pb-2">Linha do Tempo</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {character.timeline.map((event, i) => (
                        <div 
                            key={i} 
                            onClick={() => event.parvaSlug && onReadParva && onReadParva(event.parvaSlug)}
                            className={`group p-6 bg-slate-800/30 border border-slate-700 transition-colors rounded-lg relative ${event.parvaSlug ? 'cursor-pointer hover:border-epic-gold/50 hover:bg-slate-800/50 hover:shadow-lg' : ''}`}
                        >
                            <div className={`text-epic-gold font-serif text-xl mb-2 ${event.parvaSlug ? 'group-hover:translate-x-1 transition-transform' : ''}`}>{event.title}</div>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>
                            <div className="text-xs text-slate-500 border-t border-slate-700 pt-3 italic flex justify-between items-center">
                                <span>"{event.significance}"</span>
                                {event.parvaSlug && <span className="text-epic-bronze text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Ler Trecho <Scroll size={12}/></span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quotes & Relations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Relationships */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-serif text-slate-200 mb-6 border-b border-slate-800 pb-2">
                        <Users size={20} className="text-epic-bronze" /> Relações Chave
                    </h3>
                    <div className="space-y-4">
                        {character.relationships.map((rel, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-2 h-2 mt-2 rounded-full bg-epic-bronze shrink-0" />
                                <div>
                                    <div className="text-slate-200 font-bold">{rel.name} <span className="text-slate-500 text-sm font-normal">({rel.relation})</span></div>
                                    <div className="text-slate-400 text-sm">{rel.details}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Events (Replacing Quotes) */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-serif text-slate-200 mb-6 border-b border-slate-800 pb-2">
                        <FileText size={20} className="text-epic-bronze" /> Eventos Importantes (Arco Narrativo)
                    </h3>
                    <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                        <div className="flex gap-4 items-start p-3 bg-slate-800/30 rounded border border-slate-700/50">
                            <div className="text-slate-500 uppercase text-xs font-bold tracking-widest w-24 shrink-0">Início</div>
                            <div>{character.narrativeArc.beginning}</div>
                        </div>
                        {character.narrativeArc.middle && (
                            <div className="flex gap-4 items-start p-3 bg-slate-800/30 rounded border border-slate-700/50">
                                <div className="text-slate-500 uppercase text-xs font-bold tracking-widest w-24 shrink-0">Ápice</div>
                                <div>{character.narrativeArc.middle}</div>
                            </div>
                        )}
                        <div className="flex gap-4 items-start p-3 bg-slate-800/30 rounded border border-epic-gold/20">
                            <div className="text-slate-500 uppercase text-xs font-bold tracking-widest w-24 shrink-0">Destino Final</div>
                            <div>{character.narrativeArc.end}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lineage Tree Visualization */}
            <div className="mt-16 mb-8 pt-12 border-t border-slate-800">
                <h3 className="flex items-center justify-center gap-3 text-2xl font-serif text-slate-200 mb-8">
                    <GitMerge className="text-epic-gold" /> Árvore Genealógica (Foco: {character.name})
                </h3>
                <div className="w-full h-[400px] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                    <div className="absolute top-4 right-4 bg-slate-900/90 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700 z-10">
                        Mostrando conexões dinâmicas diretas (1 a 2 graus de distanciamento)
                    </div>
                    <LineageTree data={graph} />
                </div>
            </div>

        </div>
    );
};

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div>
        <h4 className="flex items-center gap-2 text-epic-bronze uppercase tracking-widest text-xs font-bold mb-4">
            {icon} {title}
        </h4>
        {children}
    </div>
);
