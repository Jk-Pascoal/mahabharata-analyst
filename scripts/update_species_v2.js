import fs from 'fs';

const p = './src/data/characters.ts';
let content = fs.readFileSync(p, 'utf-8');

// Apenas em objetos que tenham id: seguido de name:
content = content.replace(/(id:\s*['"][^'"]+['"]\s*,\s*name:\s*['"][^'"]+['"]\s*,)/g, "$1\n        species: 'Humano',");

// Exportar junto com os novos
content = content.replace("export const characters: Character[] = [", "import { extendedCharacters } from './extendedCharacters';\n\nexport const characters: Character[] = [\n...extendedCharacters,");

fs.writeFileSync(p, content);
console.log('Feito sem quebrar relacionamentos!');
