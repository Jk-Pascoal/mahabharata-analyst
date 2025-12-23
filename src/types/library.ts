export interface Parva {
    id: number;
    slug: string;
    title: string;
    titleSan: string;
    translation: string;
    description: string;
    verseCount: number;
    chapters: number;
}


export interface ParvaSection {
    id: string;
    title: string;
    verses: string;
    content: string;
}

export interface ParvaDetail extends Parva {
    summary: string;
    sections: ParvaSection[];
}

export interface LibraryState {
    parvas: Parva[];
    loading: boolean;
    error: string | null;
}
