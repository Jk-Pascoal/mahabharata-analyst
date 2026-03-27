export type Species = 'Humano' | 'Deva' | 'Asura' | 'Rakshasa' | 'Naga' | 'Rishi' | 'Yaksa' | 'Gandharva' | 'Vanara' | 'Danava' | 'Desconhecido';

export interface Character {
    id: string;
    name: string;
    species: Species;
    epithets: string[];
    kingdom?: string;
    lineage: {
        father: string;
        mother: string;
        clan: string;
        dynasty: string;
    };
    affiliations: string[];
    role: string[];
    enemies?: string[];
    children?: string[];
    attributes: {
        symbolic: string[];
        visual?: string[];
    };
    psychology: {
        virtues: string[];
        flaws: string[];
        analysis: string;
    };
    timeline: {
        title: string;
        description: string;
        significance?: string;
        phase?: 'pre-war' | 'war' | 'post-war';
        parvaSlug?: string;
        sectionId?: string;
    }[];
    relationships: {
        characterId?: string;
        name: string;
        relation: string;
        details?: string;
    }[];
    narrativeArc: {
        beginning: string;
        middle?: string;
        end: string;
    };
    quotes: string[];
}
