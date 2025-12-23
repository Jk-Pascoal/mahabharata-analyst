import React from 'react';
import type { Character } from '../../types';
import { Shield, Users, Scroll, Quote, Activity, Anchor } from 'lucide-react';

interface DashboardProps {
    character: Character;
    onBack: () => void;
}

export const CharacterDashboard: React.FC<DashboardProps> = ({ character, onBack }) => {
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
                    <div className="bg-slate-800/50 p-6 md:p-8 rounded-lg border-l-4 border-epic-gold relative overflow-hidden">
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

                    {/* Narrative Arc */}
                    <div className="bg-slate-900/50 p-6 rounded border border-slate-800">
                        <h3 className="text-xl font-serif text-slate-200 mb-4">Arco Narrativo</h3>
                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm">
                            <div className="flex-1 p-3 bg-slate-800 rounded">
                                <div className="text-slate-500 uppercase text-xs mb-1">Início</div>
                                {character.narrativeArc.beginning}
                            </div>
                            <div className="hidden md:block text-slate-600">→</div>
                            <div className="flex-1 p-3 bg-slate-800 rounded border border-epic-gold/20">
                                <div className="text-slate-500 uppercase text-xs mb-1">Fim / Destino</div>
                                {character.narrativeArc.end}
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
                        <div key={i} className="group p-6 bg-slate-800/30 border border-slate-700 hover:border-epic-gold/50 transition-colors rounded-lg">
                            <div className="text-epic-gold font-serif text-xl mb-2 group-hover:translate-x-1 transition-transform">{event.title}</div>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>
                            <div className="text-xs text-slate-500 border-t border-slate-700 pt-3 italic">
                                "{event.significance}"
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

                {/* Quotes */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-serif text-slate-200 mb-6 border-b border-slate-800 pb-2">
                        <Quote size={20} className="text-epic-bronze" /> Citações
                    </h3>
                    <div className="space-y-6">
                        {character.quotes.map((quote, i) => (
                            <blockquote key={i} className="border-l-2 border-epic-gold pl-4 text-slate-300 italic font-serif text-lg leading-relaxed">
                                {quote}
                            </blockquote>
                        ))}
                    </div>
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
