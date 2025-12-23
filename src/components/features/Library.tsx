import { useState, useEffect } from 'react';
import { libraryService } from '../../services/libraryService';
import type { Parva } from '../../types/library';

interface LibraryProps {
    onSelectParva: (slug: string) => void;
}

export const Library: React.FC<LibraryProps> = ({ onSelectParva }) => {
    const [parvas, setParvas] = useState<Parva[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchParvas = async () => {
            try {
                const data = await libraryService.getAllParvas();
                setParvas(data);
            } catch (err) {
                setError('Não foi possível carregar a biblioteca sagrada.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchParvas();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 text-epic-gold animate-pulse font-serif">
                Carregando os textos sagrados...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-epic-darkRed font-serif mt-12 p-4 border border-epic-darkRed/30 rounded bg-red-900/10">
                {error}
            </div>
        );
    }

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-slate-200">
                    Biblioteca dos 18 Parvas
                </h2>
                <div className="w-24 h-1 bg-epic-gold mx-auto mt-4 rounded-full opacity-60" />
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-light">
                    A estrutura completa da Grande Obra, dividida em dezoito livros (Parvas),
                    cobrindo desde as origens até a ascensão final.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parvas.map((parva) => (
                    <div
                        key={parva.id}
                        onClick={() => onSelectParva(parva.slug)}
                        className="group relative border border-slate-700 hover:border-epic-gold/50 bg-slate-900/40 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-epic-gold select-none group-hover:opacity-20 transition-opacity">
                            {parva.id}
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-serif text-epic-gold mb-1">
                                {parva.title}
                            </h3>
                            <h4 className="text-sm font-serif text-slate-500 mb-4 italic">
                                {parva.titleSan} • {parva.translation}
                            </h4>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                                {parva.description}
                            </p>

                            <div className="flex items-center justify-between text-xs text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-4">
                                <span>{parva.chapters} Capítulos</span>
                                <span>{parva.verseCount.toLocaleString()} Versos</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
