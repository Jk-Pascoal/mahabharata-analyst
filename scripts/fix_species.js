import fs from 'fs';

const p = './src/data/characters.ts';
let content = fs.readFileSync(p, 'utf-8');

const changes = {
  'krishna': 'Deva',
  'ghatotkacha': 'Rakshasa',
  'ganga': 'Deva',
  'vyasa': 'Rishi',
  'iravan': 'Naga'
};

for (const [id, species] of Object.entries(changes)) {
  const regex = new RegExp(`(id:\\s*'${id}',\\s*\\n\\s*name:\\s*'.*',\\s*\\n\\s*species: )'Humano'`, 'g');
  content = content.replace(regex, `$1'${species}'`);
}

fs.writeFileSync(p, content);
console.log('Espécies individuais atualizadas!');
