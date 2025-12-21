export interface Character {
    id: string;
    name: string;
    epithets: string[];
    lineage: {
        father: string;
        mother: string;
        clan: string;
        dynasty: string;
    };
    affiliations: string[];
    role: string[];
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
