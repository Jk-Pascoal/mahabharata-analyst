import type { Parva, ParvaDetail } from '../types/library';

const BASE_URL = '/data/parvas.json';

export const libraryService = {
    async getAllParvas(): Promise<Parva[]> {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error('Falha ao carregar a biblioteca do Mahabharata');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar parvas:', error);
            throw error;
        }
    },

    async getParvaBySlug(slug: string): Promise<ParvaDetail> {
        try {
            const response = await fetch(`/data/parvas/${slug}.json`);
            if (!response.ok) {
                throw new Error('Falha ao carregar o texto sagrado');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar detalhes do parva:', error);
            throw error;
        }
    }
};
