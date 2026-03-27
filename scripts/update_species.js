import fs from 'fs';

const p = './src/data/characters.ts';
let content = fs.readFileSync(p, 'utf-8');

// Adicionar species depois do name
content = content.replace(/(name:\s*['"][^'"]+['"]\s*,)/g, "$1 species: 'Humano',");

// Exportar junto com os novos
content = content.replace("export const characters: Character[] = [", "import { extendedCharacters } from './extendedCharacters';\n\nexport const characters: Character[] = [\n...extendedCharacters,");

fs.writeFileSync(p, content);
console.log('Feito');
