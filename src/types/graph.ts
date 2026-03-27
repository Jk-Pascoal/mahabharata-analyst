export type LinkType = 'family' | 'alliance' | 'enemy' | 'war' | 'guru' | 'same_species' | 'same_lineage' | 'other';
export type FactionGroup = 'Pandava' | 'Kaurava' | 'Divino' | 'Neutro' | 'Yadava';

export interface GraphNode {
    id: string;
    name: string;
    group: FactionGroup;
    species: string;
    lineage: string;
    kingdom: string;
    role: string[];
    degree: number;
    centrality: number; // Refere-se normalmente ao Degree Normalizado
    betweenness: number;
    pagerank: number;
    communityId: string;
    dharmaIndex?: number;
    conflictIndex?: number;
    transcendenceIndex?: number;
    topologicalRole?: 'hub' | 'bridge' | 'peripheral';
    phases?: string[];
    x?: number;
    y?: number;
    fx?: number | null;
    fy?: number | null;
}

export interface GraphLink {
    source: string | GraphNode;
    target: string | GraphNode;
    type: LinkType;
    label?: string;
}

export interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

export interface Community {
    id: string;
    name: string;
    color: string;
    members: string[];
    avgCentrality: number;
}

export interface AttributeFrequency {
    attribute: string;
    count: number;
}

export interface ConflictPair {
    a: string;
    b: string;
    weight: number;
}

export interface AnalyticsResult {
    mostConnected: GraphNode[];
    communities: Community[];
    attributeFrequency: AttributeFrequency[];
    topConflicts: ConflictPair[];
    speciesDistribution: { species: string; count: number }[];
    lineageDistribution: { lineage: string; count: number }[];
    insights: string[];
    totalNodes: number;
    totalLinks: number;
    avgDegree: number;
}
