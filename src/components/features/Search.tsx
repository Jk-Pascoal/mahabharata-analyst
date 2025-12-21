import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { useCharacterSearch } from '../../hooks/useCharacterSearch';
import type { Character } from '../../types';

interface SearchProps {
    onSelectCharacter: (character: Character) => void;
}

export const Search: React.FC<SearchProps> = ({ onSelectCharacter }) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { results, loading, search } = useCharacterSearch();

    useEffect(() => {
        // Debounce search
        const timer = setTimeout(() => {
            if (query) search(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, search]);

    const handleSelect = (char: Character) => {
        onSelectCharacter(char);
        setQuery(char.name);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-epic-gold/50 group-focus-within:text-epic-gold transition-colors">
                    <SearchIcon size={20} />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-10 py-3 border-b-2 border-epic-gold/30 bg-epic-deepBlue/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-epic-gold focus:bg-epic-deepBlue/80 transition-all font-serif tracking-wide text-lg"
                    placeholder="Busque um personagem..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                />
                {/* Loading Indicator */}
                {loading && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-epic-gold animate-spin">
                        <Loader2 size={18} />
                    </div>
                )}
                {/* Decorative underline animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-epic-gold transition-all duration-500 group-focus-within:w-full" />
            </div>

            {/* Dropdown Results */}
            {isOpen && query && (
                <div className="absolute z-50 w-full mt-2 bg-slate-900/95 border border-epic-gold/20 rounded-b-lg shadow-xl backdrop-blur-sm max-h-60 overflow-y-auto custom-scrollbar">
                    {!loading && results.length > 0 ? (
                        results.map((char) => (
                            <button
                                key={char.id}
                                onClick={() => handleSelect(char)}
                                className="w-full text-left px-4 py-3 hover:bg-epic-gold/10 hover:pl-6 transition-all border-b border-slate-800 last:border-0 group"
                            >
                                <div className="text-epic-gold font-serif text-lg group-hover:tracking-wider transition-all">
                                    {char.name}
                                </div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">
                                    {char.role[0]}
                                </div>
                            </button>
                        ))
                    ) : (
                        !loading && (
                            <div className="px-4 py-3 text-slate-500 text-sm font-serif italic text-center">
                                Nenhum personagem encontrado.
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};
