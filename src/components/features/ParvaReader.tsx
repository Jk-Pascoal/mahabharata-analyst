
import { useState, useEffect } from 'react';
import { libraryService } from '../../services/libraryService';
import type { ParvaDetail } from '../../types/library';

interface ParvaReaderProps {
    slug: string;
    onBack: () => void;
}

export const ParvaReader: React.FC<ParvaReaderProps> = ({ slug, onBack }) => {
    const [detail, setDetail] = useState<ParvaDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await libraryService.getParvaBySlug(slug);
                setDetail(data);
            } catch (err) {
                console.error(err);
                setError('Não foi possível carregar o conteúdo deste Parva. (Talvez o texto completo ainda não tenha sido digitalizado nesta versão de demonstração)');
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-epic-gold animate-pulse font-serif">
                <div className="text-2xl mb-4">Desenrolando os pergaminhos...</div>
                <div className="w-16 h-16 border-4 border-epic-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !detail) {
        return (
            <div className="space-y-6 animate-fade-in">
                <button
                    onClick={onBack}
                    className="flex items-center text-slate-400 hover:text-epic-gold transition-colors font-serif tracking-widest uppercase text-xs"
                >
                    ← Voltar à Biblioteca
                </button>
                <div className="text-center text-epic-darkRed font-serif p-12 border border-epic-darkRed/30 rounded bg-red-900/10">
                    <h3 className="text-xl mb-2">Pergaminho Ausente ou Danificado</h3>
                    <p className="text-slate-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in max-w-4xl mx-auto pb-20">
            <button
                onClick={onBack}
                className="mb-8 flex items-center text-slate-400 hover:text-epic-gold transition-colors font-serif tracking-widest uppercase text-xs sticky top-0 py-4 bg-epic-deepBlue/95 backdrop-blur-sm z-20 w-full"
            >
                ← Voltar à Biblioteca
            </button>

            <header className="text-center mb-16 border-b border-white/10 pb-12">
                <h1 className="text-4xl md:text-6xl font-serif text-epic-gold mb-4 leading-tight">
                    {detail.title}
                </h1>
                <h2 className="text-2xl font-serif text-slate-500 italic mb-6">
                    {detail.titleSan} • {detail.translation}
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                    {detail.summary}
                </p>
                <div className="flex justify-center gap-8 mt-8 text-xs text-epic-bronze uppercase tracking-widest opacity-80">
                    <span>{detail.verseCount} Versos</span>
                    <span>{detail.chapters} Capítulos</span>
                </div>
            </header>

            <div className="space-y-12">
                {detail.sections.map((section) => (
                    <article key={section.id} className="prose prose-invert prose-lg max-w-none group">
                        <div className="flex items-baseline justify-between border-b border-epic-gold/20 pb-4 mb-6">
                            <h3 className="text-2xl font-serif text-epic-parchment group-hover:text-epic-gold transition-colors">
                                {section.title}
                            </h3>
                            <span className="text-xs font-serif text-slate-500 uppercase tracking-widest">
                                Versos {section.verses}
                            </span>
                        </div>
                        <div className="bg-slate-900/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                            <div className="text-slate-300 font-light leading-loose text-justify space-y-4">
                                {section.content.split(/\r?\n\r?\n/).map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <footer className="mt-20 pt-8 border-t border-white/10 text-center">
                <p className="text-slate-500 italic font-serif text-sm">
                    Fim do {detail.title}
                </p>
            </footer>
        </div>
    );
};
