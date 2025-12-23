
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PARVAS_DIR = path.join(__dirname, '../public/data/parvas');
const OUTPUT_FILE = path.join(__dirname, '../public/data/search_index.json');

const stopWords = new Set([
    'The', 'And', 'Of', 'To', 'In', 'A', 'Is', 'That', 'For', 'It', 'As', 'Was', 'With', 'On',
    'By', 'He', 'She', 'At', 'Be', 'This', 'From', 'But', 'His', 'Her', 'They', 'You', 'Or',
    'An', 'My', 'So', 'All', 'One', 'if', 'me', 'we', 'us', 'him', 'her', 'them', 'their',
    'thy', 'thou', 'thee', 'art', 'hath', 'dost', 'did', 'done', 'do', 'said', 'says', 'spake',
    'replied', 'answered', 'continued', 'asked', 'O', 'I', 'What', 'Where', 'When', 'Why', 'How',
    'Who', 'Which', 'Then', 'There', 'Here', 'Now', 'Not', 'No', 'Yes', 'Ye', 'Your', 'My', 'Mine'
]);

function buildIndex() {
    if (!fs.existsSync(PARVAS_DIR)) {
        console.error('Parvas directory not found.');
        return;
    }

    const files = fs.readdirSync(PARVAS_DIR);
    const index = {};
    let totalOccurrences = 0;

    files.forEach(file => {
        if (!file.endsWith('.json')) return;

        const content = JSON.parse(fs.readFileSync(path.join(PARVAS_DIR, file), 'utf-8'));
        const parvaSlug = content.slug;
        const parvaTitle = content.title;

        console.log(`Indexing ${parvaTitle}...`);

        content.sections.forEach(section => {
            const text = section.content;
            // Match words starting with uppercase letter, length > 2
            const words = text.match(/\b[A-Z][a-z]{2,}\b/g) || [];

            words.forEach(word => {
                if (stopWords.has(word)) return;

                // Simple normalization
                const term = word.toLowerCase();

                if (!index[term]) {
                    index[term] = [];
                }

                // Avoid duplicates for the same section
                const existing = index[term].find(ref => ref.p === parvaSlug && ref.s === section.id);
                if (!existing) {
                    index[term].push({
                        p: parvaSlug,
                        s: section.id,
                        t: section.title
                    });
                    totalOccurrences++;
                }
            });
        });
    });

    console.log(`Total indexed terms: ${Object.keys(index).length}`);
    console.log(`Total refs: ${totalOccurrences}`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index));
    console.log(`Index saved to ${OUTPUT_FILE}`);
}

buildIndex();
