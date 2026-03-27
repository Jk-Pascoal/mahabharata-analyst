import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    currentView: 'home' | 'library' | 'analytics';
    onNavigate: (view: 'home' | 'library' | 'analytics') => void;
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
                {/* Header / Nav */}
                <header className="mb-6 text-center border-b border-epic-gold/20 pb-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-epic-gold tracking-widest uppercase drop-shadow-xl cursor-pointer hover:text-white transition-colors duration-500 whitespace-nowrap" onClick={() => onNavigate('home')}>
                        Zemo Cosmovisões
                    </h1>
                    <h2 className="mt-3 text-epic-bronze font-serif text-xl md:text-2xl tracking-widest uppercase opacity-90">
                        Mahabharata
                    </h2>
                    <p className="mt-1.5 text-slate-400 font-light italic text-md opacity-80">
                        Análises do Épico Mahabharata
                    </p>

                    <nav className="flex justify-center gap-6 mt-6 text-sm tracking-widest uppercase">
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
                        <button
                            onClick={() => onNavigate('analytics')}
                            className={`pb-2 border-b-2 transition-all duration-300 ${currentView === 'analytics'
                                    ? 'text-epic-gold border-epic-gold'
                                    : 'text-slate-500 border-transparent hover:text-slate-300'
                                }`}
                        >
                            Grafo Analítico
                        </button>
                    </nav>
                </header>

                {children}

                {/* Footer */}
                <footer className="mt-20 text-center text-slate-500 text-sm border-t border-slate-800 pt-8 pb-8">
                    <p>
                        &copy; {new Date().getFullYear()} Zemo Cosmovisões. Todos os direitos reservados.
                    </p>
                </footer>
            </main>
        </div>
    );
};
