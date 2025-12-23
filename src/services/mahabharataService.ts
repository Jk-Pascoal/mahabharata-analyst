import { characters } from '../data/characters';
import type { Character } from '../types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mahabharataService = {
    indexCache: null as Record<string, any> | null,
    fullDbCache: null as Character[] | null,

    async loadResources() {
        const promises = [];
        const t = Date.now();
        if (!this.indexCache) promises.push(fetch(`/data/search_index.json?t=${t}`).then(r => r.json()).then(d => this.indexCache = d).catch(e => console.error("Index load failed", e)));
        if (!this.fullDbCache) promises.push(fetch(`/data/full_character_database.json?t=${t}`).then(r => r.json()).then(d => this.fullDbCache = d).catch(e => console.error("Full DB load failed", e)));
        await Promise.all(promises);
    },

    async getAllCharacters(): Promise<Character[]> {
        await delay(300);
        return characters;
    },

    async searchCharacters(query: string): Promise<Character[]> {
        await delay(300);
        const lowerQuery = query.toLowerCase();

        // 1. Search in formatted code characters (Highest Priority)
        const codeResults = characters.filter(c =>
            c.name.toLowerCase().includes(lowerQuery) ||
            c.epithets.some(e => e.toLowerCase().includes(lowerQuery))
        );

        // Load external resources
        await this.loadResources();

        // 2. Search in Full Database JSON (Middle Priority)
        let dbResults: Character[] = [];
        if (this.fullDbCache) {
            dbResults = this.fullDbCache.filter(c =>
                c.name.toLowerCase().includes(lowerQuery) ||
                c.epithets.some(e => e.toLowerCase().includes(lowerQuery))
            );
        }

        // Filter out duplicates (If code has it, don't show from DB)
        dbResults = dbResults.filter(dbChar => !codeResults.find(c => c.id === dbChar.id));

        const combinedCurrent = [...codeResults, ...dbResults];

        // 3. Search in Index (Dynamic Fallback)
        const indexResults: Character[] = [];
        if (this.indexCache) {
            Object.keys(this.indexCache).forEach(key => {
                // Only add if NOT in combinedCurrent
                if (key.includes(lowerQuery) && !combinedCurrent.find(c => c.name.toLowerCase() === key.toLowerCase())) {
                    const refs = this.indexCache![key];
                    const name = key.charAt(0).toUpperCase() + key.slice(1);

                    indexResults.push({
                        id: `idx-${key}`,
                        name: name,
                        epithets: ['Mencionado no Texto'],
                        lineage: { father: 'Ver Texto', mother: 'Ver Texto', clan: '?', dynasty: '-' },
                        affiliations: ['Mahabharata'],
                        role: ['Figura do Texto'],
                        attributes: { symbolic: [], visual: [] },
                        psychology: {
                            virtues: [],
                            flaws: [],
                            analysis: `Este personagem aparece em ${refs.length} passagens do épico. Embora não tenhamos um perfil psicológico detalhado arquivado, suas ações podem ser rastreadas diretamente nas seções indicadas abaixo.`
                        },
                        timeline: refs.slice(0, 10).map((r: any, i: number) => ({
                            title: `Aparição ${i + 1}`,
                            description: `Encontrado em ${r.p}, Seção ${r.s} (${r.t})`,
                            significance: 'Referência Textual'
                        })),
                        relationships: [],
                        narrativeArc: { beginning: 'Mencionado nas escrituras.', end: '-' },
                        quotes: []
                    });
                }
            });
        }

        return [...codeResults, ...dbResults, ...indexResults].slice(0, 50);
    },

    async getCharacterById(id: string): Promise<Character | undefined> {
        await delay(300);
        // 1. Check code
        const char = characters.find(c => c.id === id);
        if (char) return char;

        // 2. Check full db
        if (!this.fullDbCache) await this.loadResources();

        if (this.fullDbCache) {
            const dbChar = this.fullDbCache.find(c => c.id === id);
            if (dbChar) return dbChar;
        }

        // 3. Check index
        if (id.startsWith('idx-')) {
            if (!this.indexCache) await this.loadResources(); // Ensure index is loaded
            const key = id.replace('idx-', '');
            if (this.indexCache && this.indexCache[key]) {
                const refs = this.indexCache[key];
                const name = key.charAt(0).toUpperCase() + key.slice(1);
                return {
                    id: `idx-${key}`,
                    name: name,
                    epithets: ['Personagem do Índice'],
                    lineage: { father: '?', mother: '?', clan: '?', dynasty: '?' },
                    affiliations: [],
                    role: ['Mencionado no Texto'],
                    attributes: { symbolic: [], visual: [] },
                    psychology: {
                        virtues: [],
                        flaws: [],
                        analysis: `Referenciado ${refs.length} vezes nos textos sagrados.`,
                    },
                    timeline: refs.slice(0, 20).map((r: any, i: number) => ({
                        title: `Referência ${i + 1}`,
                        description: `Encontrado em ${r.p}, ${r.t}`,
                        significance: 'Fonte Original'
                    })),
                    relationships: [],
                    narrativeArc: { beginning: '?', end: '?' },
                    quotes: []
                };
            }
        }
        return undefined;
    }
};
