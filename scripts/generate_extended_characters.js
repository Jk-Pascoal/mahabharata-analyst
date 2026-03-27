import fs from 'fs';

const newChars = [
  // Devas
  { id: 'indra', name: 'Indra', species: 'Deva', role: ['Rei dos Devas', 'Deus da Chuva e Trovão'], father: 'Kashyapa', mother: 'Aditi', clan: 'Aditya' },
  { id: 'surya', name: 'Surya', species: 'Deva', role: ['Deus do Sol'], father: 'Kashyapa', mother: 'Aditi', clan: 'Aditya' },
  { id: 'agni', name: 'Agni', species: 'Deva', role: ['Deus do Fogo', 'Mensageiro'], father: 'Brahma', mother: '-', clan: 'Deva' },
  { id: 'vayu', name: 'Vayu', species: 'Deva', role: ['Deus do Vento'], father: '-', mother: '-', clan: 'Deva' },
  { id: 'yama', name: 'Yama', species: 'Deva', role: ['Deus da Morte', 'Senhor do Dharma'], father: 'Surya', mother: 'Saranya', clan: 'Deva' },
  { id: 'varuna', name: 'Varuna', species: 'Deva', role: ['Deus das Águas'], father: 'Kashyapa', mother: 'Aditi', clan: 'Aditya' },
  { id: 'soma', name: 'Soma', species: 'Deva', role: ['Deus da Lua'], father: 'Atri', mother: 'Anusuya', clan: 'Deva' },
  { id: 'shiva', name: 'Shiva', species: 'Deva', role: ['O Destruidor', 'Mahadeva'], father: '-', mother: '-', clan: 'Trimurti' },
  { id: 'brahma', name: 'Brahma', species: 'Deva', role: ['O Criador'], father: '-', mother: '-', clan: 'Trimurti' },
  { id: 'vishnu', name: 'Vishnu', species: 'Deva', role: ['O Preservador'], father: '-', mother: '-', clan: 'Trimurti' },
  { id: 'kubera', name: 'Kubera', species: 'Yaksa', role: ['Deus da Riqueza'], father: 'Vishrava', mother: 'Ilavida', clan: 'Yaksa' },

  // Asuras & Rakshasas
  { id: 'vrishaparvan', name: 'Vrishaparvan', species: 'Asura', role: ['Rei Danava'], father: 'Danu', mother: '-', clan: 'Danava' },
  { id: 'viapracitti', name: 'Viprachitti', species: 'Asura', role: ['Chefe Danava'], father: 'Kashyapa', mother: 'Danu', clan: 'Danava' },
  { id: 'hidimba', name: 'Hidimba', species: 'Rakshasa', role: ['Vigilante da Floresta'], father: '-', mother: '-', clan: 'Rakshasa' },
  { id: 'hidimbi', name: 'Hidimbi', species: 'Rakshasa', role: ['Esposa de Bhima'], father: '-', mother: '-', clan: 'Rakshasa' },
  { id: 'bakasura', name: 'Bakasura', species: 'Rakshasa', role: ['Opressor de Ekachakra'], father: '-', mother: '-', clan: 'Rakshasa' },
  { id: 'kirmira', name: 'Kirmira', species: 'Rakshasa', role: ['Monstro da Floresta'], father: '-', mother: '-', clan: 'Rakshasa' },
  { id: 'jatasura', name: 'Jatasura', species: 'Rakshasa', role: ['Rapto dos Pandavas'], father: '-', mother: '-', clan: 'Rakshasa' },
  { id: 'alambusha', name: 'Alambusha', species: 'Rakshasa', role: ['Guerreiro Kaurava'], father: 'Rishyasringa', mother: '-', clan: 'Rakshasa' },
  { id: 'narakasura', name: 'Narakasura', species: 'Asura', role: ['Rei de Pragjyotisha'], father: 'Vishnu (Varaha)', mother: 'Bhumi', clan: 'Bhauma' },
  
  // Nagas
  { id: 'vasuki', name: 'Vasuki', species: 'Naga', role: ['Rei Naga'], father: 'Kashyapa', mother: 'Kadru', clan: 'Naga' },
  { id: 'takshaka', name: 'Takshaka', species: 'Naga', role: ['Rei de Khandava'], father: 'Kashyapa', mother: 'Kadru', clan: 'Naga' },
  { id: 'karkotaka', name: 'Karkotaka', species: 'Naga', role: ['Protetor'], father: 'Kashyapa', mother: 'Kadru', clan: 'Naga' },
  { id: 'shesha', name: 'Shesha', species: 'Naga', role: ['Rei Naga Divino'], father: 'Kashyapa', mother: 'Kadru', clan: 'Naga' },
  { id: 'aryaka', name: 'Aryaka', species: 'Naga', role: ['Ancestral de Bhima'], father: '-', mother: '-', clan: 'Naga' },
  { id: 'ulupi', name: 'Ulupi', species: 'Naga', role: ['Princesa Naga', 'Esposa de Arjuna'], father: 'Kauravya', mother: '-', clan: 'Naga' },
  
  // Rishis
  { id: 'parashara', name: 'Parashara', species: 'Rishi', role: ['Sábio', 'Pai de Vyasa'], father: 'Shakti', mother: 'Adrushyanti', clan: 'Vashistha' },
  { id: 'vashistha', name: 'Vashistha', species: 'Rishi', role: ['Sábio Criador'], father: 'Brahma', mother: '-', clan: 'Brahmane' },
  { id: 'vishwamitra', name: 'Vishwamitra', species: 'Rishi', role: ['Rei que virou Sábio'], father: 'Gadhi', mother: '-', clan: 'Kaushika' },
  { id: 'bhrigu', name: 'Bhrigu', species: 'Rishi', role: ['Sábio Criador'], father: 'Brahma', mother: '-', clan: 'Bhargava' },
  { id: 'shukra', name: 'Shukracharya', species: 'Rishi', role: ['Guru dos Asuras'], father: 'Bhrigu', mother: 'Khyati', clan: 'Bhargava' },
  { id: 'markandeya', name: 'Markandeya', species: 'Rishi', role: ['Sábio Imortal'], father: 'Mrikandu', mother: '-', clan: 'Bhrigu' },
  { id: 'kripa', name: 'Kripacharya', species: 'Humano', role: ['Guru Real', 'Chiranjivi'], father: 'Sharadvan', mother: 'Janapadi', clan: 'Gautama' },
  { id: 'durvasa', name: 'Durvasa', species: 'Rishi', role: ['Sábio Iracundo'], father: 'Atri', mother: 'Anusuya', clan: 'Atri' },
  
  // Humanos / Semideuses extras
  { id: 'dushyanta', name: 'Dushyanta', species: 'Humano', role: ['Ancestral Kuru'], father: 'Ilin', mother: 'Rathantara', clan: 'Puru' },
  { id: 'bharata', name: 'Bharata', species: 'Humano', role: ['Imperador Universal'], father: 'Dushyanta', mother: 'Shakuntala', clan: 'Puru' },
  { id: 'yayati', name: 'Yayati', species: 'Humano', role: ['Ancestral'], father: 'Nahusha', mother: 'Ashokasundari', clan: 'Lunar' },
  { id: 'kuru', name: 'Kuru', species: 'Humano', role: ['Fundador do Clã'], father: 'Samvarana', mother: 'Tapati', clan: 'Lunar' },
  { id: 'satyaki', name: 'Satyaki', species: 'Humano', role: ['Guerreiro Vrishni'], father: 'Satyaka', mother: '-', clan: 'Vrishni' },
  { id: 'kritavarma', name: 'Kritavarma', species: 'Humano', role: ['Guerreiro Yadava'], father: 'Hridika', mother: '-', clan: 'Yadava' },
  { id: 'shalya', name: 'Shalya', species: 'Humano', role: ['Rei de Madra'], father: 'Artayana', mother: '-', clan: 'Madra' },
  { id: 'virata', name: 'Virata', species: 'Humano', role: ['Rei de Matsya'], father: '-', mother: '-', clan: 'Matsya' },
  { id: 'drupada', name: 'Drupada', species: 'Humano', role: ['Rei de Panchala'], father: 'Prishata', mother: '-', clan: 'Panchala' },
  { id: 'dhrishtadyumna', name: 'Dhrishtadyumna', species: 'Humano', role: ['Comandante Pandava'], father: 'Drupada', mother: 'Fogo', clan: 'Panchala' },
  { id: 'shishupala', name: 'Shishupala', species: 'Humano', role: ['Rei de Chedi'], father: 'Damaghosha', mother: 'Shrutashrava', clan: 'Chedi' },
  { id: 'jarasandha', name: 'Jarasandha', species: 'Humano', role: ['Imperador de Magadha'], father: 'Brihadratha', mother: '-', clan: 'Barhadratha' },
  { id: 'vikarna', name: 'Vikarna', species: 'Humano', role: ['Guerreiro Justo Kuru'], father: 'Dhritarashtra', mother: 'Gandhari', clan: 'Kuru' },
  { id: 'yuyutsu', name: 'Yuyutsu', species: 'Humano', role: ['Irmão Kaurava Justo'], father: 'Dhritarashtra', mother: 'Sugadha', clan: 'Kuru' },
  { id: 'uttaraa', name: 'Uttaraa', species: 'Humano', role: ['Princesa de Matsya'], father: 'Virata', mother: 'Sudeshna', clan: 'Matsya' },
];

const generated = newChars.map(c => {
  return \`  {
    id: '\${c.id}',
    name: '\${c.name}',
    species: '\${c.species}',
    kingdom: 'Variado',
    epithets: ['TBD'],
    enemies: [],
    children: [],
    lineage: { father: '\${c.father}', mother: '\${c.mother}', clan: '\${c.clan}', dynasty: '\${['Deva', 'Asura', 'Rakshasa', 'Naga'].includes(c.species) ? c.species : 'Lunar'}' },
    affiliations: ['TBD'],
    role: \${JSON.stringify(c.role)},
    attributes: { symbolic: ['Força', 'Destino', '\${c.species}'] },
    psychology: { virtues: ['TBD'], flaws: ['TBD'], analysis: 'TBD' },
    timeline: [],
    relationships: [],
    narrativeArc: { beginning: 'TBD', end: 'TBD' },
    quotes: []
  }\`;
});

const content = \`import type { Character } from '../types';\\n\\nexport const extendedCharacters: Character[] = [\\n\${generated.join(',\\n')}\\n];\\n\`;

fs.writeFileSync('./src/data/extendedCharacters.ts', content);
console.log('Gerado ' + newChars.length + ' personagens com sucesso.');
