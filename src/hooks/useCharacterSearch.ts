import { useState, useCallback } from 'react';
import type { Character } from '../types';
import { mahabharataService } from '../services/mahabharataService';

export const useCharacterSearch = () => {
    const [results, setResults] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = useCallback(async (query: string) => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await mahabharataService.searchCharacters(query);
            setResults(data);
        } catch (err) {
            setError('Falha ao buscar personagens.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { results, loading, error, search };
};
