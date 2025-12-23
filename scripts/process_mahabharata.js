
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const RAW_DIR = path.join(DATA_DIR, 'raw_text');
const PARVAS_FILE = path.join(DATA_DIR, 'parvas.json');
const OUTPUT_DIR = path.join(DATA_DIR, 'parvas');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const parvas = JSON.parse(fs.readFileSync(PARVAS_FILE, 'utf-8'));

function romanToInt(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];
        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}

function processParva(parva, index) {
    const fileNum = (index + 1).toString().padStart(2, '0');
    const filename = `maha${fileNum}.txt`;
    const filePath = path.join(RAW_DIR, filename);

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    console.log(`Processing ${parva.title} from ${filename}...`);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Regex to split by SECTION header
    // Examples: "SECTION I", "SECTION CCC"
    const sectionRegex = /\nSECTION\s+([IVXLCDM]+)/g;

    const sections = [];
    let lastIndex = 0;
    let match;

    // Find the introduction (text before first section)
    match = sectionRegex.exec(content);
    if (match) {
        // We skip the intro for now or treat specially, but here we just start catching sections
        // Actually, usually the first section starts after some preamble.
        // Let's reset regex
    }

    // Reset regex state
    sectionRegex.lastIndex = 0;

    let currentSectionNum = null;
    let sectionStartIndex = 0;

    while ((match = sectionRegex.exec(content)) !== null) {
        if (currentSectionNum !== null) {
            // We found the start of a NEW section, so the previous one ended at match.index
            const sectionContent = content.substring(sectionStartIndex, match.index).trim();
            if (sectionContent) {
                sections.push({
                    id: `s${romanToInt(currentSectionNum)}`,
                    title: `Section ${currentSectionNum}`,
                    verses: 'Unknown', // We'd need fancier parsing for verses
                    content: sectionContent
                });
            }
        }

        currentSectionNum = match[1];
        sectionStartIndex = sectionRegex.lastIndex;
    }

    // Add the very last section
    if (currentSectionNum !== null) {
        const sectionContent = content.substring(sectionStartIndex).trim();
        sections.push({
            id: `s${romanToInt(currentSectionNum)}`,
            title: `Section ${currentSectionNum}`,
            verses: 'Unknown',
            content: sectionContent
        });
    }

    // Special case for Adi Parva if regex didn't match nicely or if valid content is getting lost
    // Simpler split approach might be safer if headers vary.
    // But let's stick to this. If sections are empty, we might need to adjust.

    if (sections.length === 0) {
        console.warn(`No sections found for ${parva.title}. Saving raw content as one chunk?`);
        // Fallback: just put everything
        sections.push({
            id: 'full',
            title: 'Full Text',
            verses: '-',
            content: content
        });
    }

    const parvaDetail = {
        ...parva,
        summary: `Conteúdo completo do ${parva.title}, traduzido por Kisari Mohan Ganguli.`,
        sections: sections
    };

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `${parva.slug}.json`),
        JSON.stringify(parvaDetail, null, 2)
    );
    console.log(`Saved ${parva.slug}.json with ${sections.length} sections.`);
}

parvas.forEach((parva, index) => {
    processParva(parva, index);
});

console.log('Processing complete!');
