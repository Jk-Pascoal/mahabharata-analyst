import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    currentView: 'home' | 'library';
    onNavigate: (view: 'home' | 'library') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
    return (
        <div className="min-h-screen bg-epic-deepBlue text-slate-200 font-sans selection:bg-epic-gold selection:text-epic-deepBlue overflow-x-hidden">
            {/* Decorative Background Elements */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-epic-gold/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-epic-bronze/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Main Content Wrapper */}
            <main className="relative z-10 px-4 py-8 md:px-8 max-w-7xl mx-auto">
                {/* Header / Nav could go here */}
                <header className="mb-12 text-center border-b border-epic-gold/20 pb-8">
                    <h1 className="text-4xl md:text-6xl font-serif text-epic-gold tracking-widest uppercase drop-shadow-lg cursor-pointer" onClick={() => onNavigate('home')}>
                        Mahabharata
                    </h1>
                    <p className="mt-2 text-epic-bronze font-serif italic text-lg opacity-80">
                        Analista de Arquétipos Mitológicos
                    </p>

                    <nav className="flex justify-center gap-8 mt-8 text-sm tracking-widest uppercase">
                        <button
                            onClick={() => onNavigate('home')}
                            className={`pb-2 border-b-2 transition-all duration-300 ${currentView === 'home'
                                    ? 'text-epic-gold border-epic-gold'
                                    : 'text-slate-500 border-transparent hover:text-slate-300'
                                }`}
                        >
                            Início
                        </button>
                        <button
                            onClick={() => onNavigate('library')}
                            className={`pb-2 border-b-2 transition-all duration-300 ${currentView === 'library'
                                    ? 'text-epic-gold border-epic-gold'
                                    : 'text-slate-500 border-transparent hover:text-slate-300'
                                }`}
                        >
                            Biblioteca
                        </button>
                    </nav>
                </header>

                {children}

                {/* Footer */}
                <footer className="mt-20 text-center text-slate-500 text-sm border-t border-slate-800 pt-8 pb-8">
                    <p>
                        &copy; {new Date().getFullYear()} Mahabharata Analyst.
                    </p>
                    <p className="mt-2 text-epic-gold/60 font-serif tracking-widest text-xs uppercase">
                        Zemo-Cosmovisões
                    </p>
                </footer>
            </main>
        </div>
    );
};
