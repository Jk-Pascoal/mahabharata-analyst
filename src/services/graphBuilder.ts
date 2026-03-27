import type { Character } from '../types';
import type { GraphData, GraphNode, GraphLink, FactionGroup, LinkType } from '../types/graph';

function determineGroup(affiliations: string[] = []): FactionGroup {
    const affStr = affiliations.join(' ').toLowerCase();
    if (affStr.includes('pandava')) return 'Pandava';
    if (affStr.includes('kaurava')) return 'Kaurava';
    if (affStr.includes('yadava') || affStr.includes('krishna')) return 'Yadava';
    if (affStr.includes('deva') || affStr.includes('divino') || affStr.includes('celestial')) return 'Divino';
    return 'Neutro';
}

function determineLinkType(relation: string): LinkType {
    const r = relation.toLowerCase();
    if (r.includes('pai') || r.includes('mãe') || r.includes('filho') || r.includes('irmã') || r.includes('irmão') || r.includes('esposa') || r.includes('marido') || r.includes('família') || r.includes('neto') || r.includes('avô')) {
        return 'family';
    }
    if (r.includes('inimig') || r.includes('algoz') || r.includes('rival') || r.includes('opress')) {
        return 'enemy';
    }
    if (r.includes('guru') || r.includes('mestre') || r.includes('aluno')) {
        return 'guru';
    }
    if (r.includes('amigo') || r.includes('aliad') || r.includes('devoto') || r.includes('protetor')) {
        return 'alliance';
    }
    return 'other';
}

export function buildGraphData(characters: Character[]): GraphData {
    const nodes: GraphNode[] = characters.map(c => ({
        id: c.id,
        name: c.name,
        group: determineGroup(c.affiliations),
        kingdom: c.kingdom || 'Desconhecido',
        role: c.role || [],
        species: c.species,
        lineage: c.lineage?.clan || 'Desconhecida',
        degree: 0,
        centrality: 0,
        betweenness: 0,
        pagerank: 0,
        communityId: '',
        dharmaIndex: 0,
        conflictIndex: 0,
        transcendenceIndex: 0,
        topologicalRole: 'peripheral',
        phases: Array.from(new Set(c.timeline?.map(t => t.phase).filter(Boolean) as string[])) || []
    }));

    const validIds = new Set(characters.map(c => c.id));
    const links: GraphLink[] = [];
    const synthesizedNodes = new Map<string, GraphNode>();

    const getOrCreateSynthesizedNode = (id: string, name: string) => {
        if (!validIds.has(id) && !synthesizedNodes.has(id)) {
            synthesizedNodes.set(id, {
                id,
                name,
                group: 'Neutro',
                kingdom: 'Desconhecido',
                role: ['Figura Histórica/Ancestral'],
                species: 'Humano',
                lineage: 'Desconhecida',
                degree: 0,
                centrality: 0,
                betweenness: 0,
                pagerank: 0,
                communityId: '',
                dharmaIndex: 0,
                conflictIndex: 0,
                transcendenceIndex: 0,
                topologicalRole: 'peripheral',
                phases: []
            });
        }
    };

    characters.forEach(c => {
        // Parent lineage linking
        if (c.lineage?.father && !['?', '-', 'Ver Texto', 'Desconhecido'].includes(c.lineage.father)) {
            const fatherId = `auto-parent-${c.lineage.father.replace(/\s+/g, '-').toLowerCase()}`;
            getOrCreateSynthesizedNode(fatherId, c.lineage.father);
            links.push({ source: fatherId, target: c.id, type: 'family', label: 'Pai' });
        }

        if (c.lineage?.mother && !['?', '-', 'Ver Texto', 'Desconhecido'].includes(c.lineage.mother)) {
            const motherId = `auto-parent-${c.lineage.mother.replace(/\s+/g, '-').toLowerCase()}`;
            getOrCreateSynthesizedNode(motherId, c.lineage.mother);
            links.push({ source: motherId, target: c.id, type: 'family', label: 'Mãe' });
        }

        // Enemies
        if (c.enemies) {
            c.enemies.forEach(enemyId => {
                if (validIds.has(enemyId)) {
                    links.push({
                        source: c.id,
                        target: enemyId,
                        type: 'enemy',
                        label: 'Inimigo'
                    });
                }
            });
        }

        // Children
        if (c.children) {
            c.children.forEach(childId => {
                if (validIds.has(childId)) {
                    links.push({
                        source: c.id,
                        target: childId,
                        type: 'family',
                        label: 'Filho/a'
                    });
                } else {
                    const childName = childId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                    getOrCreateSynthesizedNode(childId, childName);
                    links.push({
                        source: c.id,
                        target: childId,
                        type: 'family',
                        label: 'Filho/a'
                    });
                }
            });
        }

        // Generic Relationships
        if (c.relationships) {
            c.relationships.forEach(rel => {
                if (rel.characterId && validIds.has(rel.characterId)) {
                    // Check if link already exists
                    const exists = links.some(l => 
                        (l.source === c.id && l.target === rel.characterId) ||
                        (l.target === c.id && l.source === rel.characterId)
                    );
                    
                    if (!exists) {
                        links.push({
                            source: c.id,
                            target: rel.characterId,
                            type: determineLinkType(rel.relation),
                            label: rel.relation
                        });
                    }
                }
            });
        }
    });

    // Semantic Links (same species, same lineage)
    for (let i = 0; i < characters.length; i++) {
        for (let j = i + 1; j < characters.length; j++) {
            const c1 = characters[i];
            const c2 = characters[j];

            // Same Lineage (Clan) - Ignore empty or generic ones
            const clan1 = c1.lineage?.clan;
            const clan2 = c2.lineage?.clan;
            if (clan1 && clan2 && clan1 === clan2 && clan1 !== '-' && clan1 !== 'Desconhecida') {
                const exists = links.some(l => 
                    (l.source === c1.id && l.target === c2.id) ||
                    (l.target === c1.id && l.source === c2.id)
                );
                if (!exists) {
                    links.push({
                        source: c1.id,
                        target: c2.id,
                        type: 'same_lineage',
                        label: `Clã ${clan1}`
                    });
                }
            }

            // Same Species - Only for non-humans to avoid a giant hairball of Humans
            const sp1 = c1.species;
            const sp2 = c2.species;
            if (sp1 && sp2 && sp1 === sp2 && sp1 !== 'Humano') {
                const exists = links.some(l => 
                    (l.source === c1.id && l.target === c2.id) ||
                    (l.target === c1.id && l.source === c2.id)
                );
                if (!exists) {
                    links.push({
                        source: c1.id,
                        target: c2.id,
                        type: 'same_species',
                        label: sp1
                    });
                }
            }
        }
    }

    // Append synthesized nodes to full node graph array
    const finalNodes = [...nodes, ...Array.from(synthesizedNodes.values())];

    return { nodes: finalNodes, links };
}
