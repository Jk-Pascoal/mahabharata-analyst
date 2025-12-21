import { characters } from '../data/characters';
import type { Character } from '../types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mahabharataService = {
    async getAllCharacters(): Promise<Character[]> {
        await delay(300); // Simulate network latency
        return characters;
    },

    async searchCharacters(query: string): Promise<Character[]> {
        await delay(300);
        const lowerQuery = query.toLowerCase();
        return characters.filter(c =>
            c.name.toLowerCase().includes(lowerQuery) ||
            c.epithets.some(e => e.toLowerCase().includes(lowerQuery))
        );
    },

    async getCharacterById(id: string): Promise<Character | undefined> {
        await delay(300);
        return characters.find(c => c.id === id);
    }
};
