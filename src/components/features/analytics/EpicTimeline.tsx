import React from 'react';
import type { Character } from '../../../types';

interface EpicTimelineProps {
    characters: Character[];
    onCharacterClick?: (id: string) => void;
}

export const EpicTimeline: React.FC<EpicTimelineProps> = ({ characters, onCharacterClick }) => {
    
    // Group events by phase
    const preWarEvents: any[] = [];
    const warEvents: any[] = [];
    const postWarEvents: any[] = [];

    characters.forEach(c => {
        (c.timeline || []).forEach(t => {
            const event = { ...t, characterName: c.name, characterId: c.id };
            if (t.phase === 'pre-war') preWarEvents.push(event);
            else if (t.phase === 'post-war') postWarEvents.push(event);
            else warEvents.push(event); // default to war or undefined
        });
    });

    const renderColumn = (title: string, events: any[], text: string) => (
        <div className="flex flex-col min-w-[300px] max-w-[400px] flex-1 shrink-0 bg-slate-900 rounded-xl shadow-md border border-slate-800 overflow-hidden">
            <div className={`p-4 bg-slate-900/50 border-b border-slate-800`}>
                <h3 className={`font-bold uppercase tracking-wider text-sm ${text}`}>{title}</h3>
                <div className="text-xs text-slate-500 mt-1">{events.length} Eventos Mapeados</div>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto max-h-[800px] bg-slate-950/50 styled-scrollbar">
                {events.map((ev, i) => (
                    <div key={i} className="bg-slate-900 p-3 rounded-lg border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
                        <div className="text-xs font-semibold text-slate-400 mb-1">{ev.title}</div>
                        <p className="text-sm text-slate-300 leading-relaxed">{ev.description}</p>
                        <div 
                            className="mt-3 inline-block bg-slate-800 text-indigo-300 px-2 py-1 rounded text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-indigo-900/50 transition-colors"
                            onClick={() => onCharacterClick && onCharacterClick(ev.characterId)}
                        >
                            {ev.characterName}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full h-full p-2 flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
            {renderColumn("Antecedentes & Vida Inicial (Pré-Guerra)", preWarEvents, "text-emerald-400")}
            {renderColumn("A Batalha de Kurukshetra (Guerra)", warEvents, "text-red-400")}
            {renderColumn("Consequências & Ascensão (Pós-Guerra)", postWarEvents, "text-purple-400")}
        </div>
    );
};
