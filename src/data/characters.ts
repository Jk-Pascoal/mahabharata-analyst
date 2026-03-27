import type { Character } from '../types';

import { extendedCharacters } from './extendedCharacters';

export const characters: Character[] = [
...extendedCharacters,
    {
        id: 'arjuna',
        name: 'Arjuna',
        species: 'Humano',
        kingdom: 'Indraprastha',
        epithets: ['Partha', 'Dhananjaya', 'Gudakesha', 'Savyasachin', 'Vibhatsu'],
        enemies: ['karna', 'duryodhana', 'drona', 'bhishma', 'ashwatthama'],
        children: ['abhimanyu', 'iravan'],
        lineage: { father: 'Indra (Espiritual) / Pandu (Terreno)', mother: 'Kunti', clan: 'Kuru', dynasty: 'Lunar (Chandravansha)' },
        affiliations: ['Pandavas', 'Reino de Indraprastha'],
        role: ['Guerreiro', 'Arqueiro Supremo', 'Receptor do Gita'],
        attributes: {
            symbolic: ['Foco (Ekagrata)', 'Habilidade', 'Dúvida', 'Rendição', 'Dharma'],
            visual: ['Arco Gandiva', 'Carruagem com Estandarte de Macaco', 'Tez Escura']
        },
        psychology: {
            virtues: ['Concentração inigualável', 'Dedicação à maestria', 'Respeito aos anciãos'],
            flaws: ['Apego emocional', 'Orgulho de sua habilidade', 'Hesitação em momentos morais críticos'],
            analysis: 'Arjuna representa o Homem Arquetípico (Nara) buscando orientação do Divino (Narayana). Sua jornada não é apenas de conquista marcial, mas de conquista interna. Seu colapso em Kurukshetra simboliza a paralisia da alma humana quando confrontada com o "dever terrível" da vida. Ele é o estudante ideal, mas sua perfeição o torna frágil quando as regras da retidão (Dharma) conflitam com o amor pessoal.'
        },
        timeline: [
            { title: 'O Olho do Pássaro', description: 'Demonstra foco inquebrável sob a tutela de Drona, vendo apenas o olho do pássaro alvo.', significance: 'Estabelece-o como o guerreiro preeminente.', phase: 'pre-war' },
            { title: 'Exílio e Penitência', description: 'Viaja para o Himalaia para obter a Pashupatastra de Shiva.', significance: 'Compromisso em ganhar poder para a inevitável guerra familiar.', phase: 'pre-war' },
            { title: 'O Momento do Gita', description: 'Entra em colapso em desespero ao ver seus parentes alinhados contra ele.', significance: 'O catalisador para o Bhagavad Gita.', phase: 'war' }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Amigo / Primo / Guia', characterId: 'krishna', details: 'A díade Nara-Narayana; alma e superalma.' },
            { name: 'Drona', relation: 'Guru', characterId: 'drona', details: 'O professor que o fez, mas a quem ele deve matar.' },
            { name: 'Karna', relation: 'Rival / Inimigo', characterId: 'karna', details: 'O eu sombrio; o igual que ele mata sem saber.' },
            { name: 'Subhadra', relation: 'Esposa', characterId: 'subhadra', details: 'Irmã de Krishna, mãe de Abhimanyu.' },
            { name: 'Bhishma', relation: 'Avô / Inimigo', characterId: 'bhishma', details: 'Respeita e mata o avô.' }
        ],
        narrativeArc: { beginning: 'O estudante ambicioso buscando ser o maior.', end: 'O instrumento iluminado da Vontade Divina, aceitando seu dever violento sem malícia.' },
        quotes: ['"Meus membros falham e minha boca está seca. Meu corpo treme e meus cabelos se arrepiam."', '"Farei como Você diz. (Karishye Vachanam Tava)"']
    },
    {
        id: 'krishna',
        name: 'Krishna',
        species: 'Deva',
        kingdom: 'Dwarka',
        epithets: ['Vasudeva', 'Madhusudana', 'Hrishikesha', 'Yogeshvara', 'Janardana'],
        enemies: ['duryodhana', 'shakuni', 'jarasandha', 'shishupala'],
        children: ['pradyumna'],
        lineage: { father: 'Vasudeva', mother: 'Devaki', clan: 'Yadava', dynasty: 'Lunar' },
        affiliations: ['Dwarka', 'Clã Vrishni', 'Pandavas'],
        role: ['Avatar', 'Estadista', 'Cocheiro', 'Estrategista', 'Divino'],
        attributes: {
            symbolic: ['Sudarshana Chakra (Tempo)', 'Lótus', 'Flauta (Chamado Divino)', 'Pena de Pavão', 'Dharma', 'Destino'],
            visual: ['Tez Azul', 'Vestes Amarelas (Pitambara)']
        },
        psychology: {
            virtues: ['Onisciência', 'Desapego', 'Brilhantismo estratégico', 'Compaixão'],
            flaws: ['Percebida enganação (Maya)', 'Implacabilidade em manter o Dharma'],
            analysis: 'Krishna é a personificação da Inteligência Cósmica operando dentro da história. Ele transcende a moralidade humana para manter o Dharma, muitas vezes quebrando regras menores para salvar a "Grande Lei". Ele é o Marionetista que ama suas marionetes.'
        },
        timeline: [
            { title: 'Matando Kamsa', description: 'Liberta Mathura da tirania ainda jovem.', significance: 'Marca o fim de sua "Lila" pastoral e entrada na política.', phase: 'pre-war' },
            { title: 'A Missão de Paz', description: 'Vai à corte Kaurava buscando 5 vilas para evitar a guerra.', significance: 'Estabelece o terreno moral para os Pandavas.', phase: 'pre-war' },
            { title: 'Dirigindo a Guerra', description: 'Guia os Pandavas a usar meios questionáveis para derrotar Drona, Bhishma e Karna.', significance: 'Demonstra que o Dharma é sutil.', phase: 'war' }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Devoto / Amigo', characterId: 'arjuna', details: 'O vaso escolhido para sua mensagem.' },
            { name: 'Draupadi', relation: 'Sakhi (Amiga)', characterId: 'draupadi', details: 'Protetor de sua honra; vínculo puramente espiritual.' },
            { name: 'Gandhari', relation: 'Acusadora', characterId: 'gandhari', details: 'Ela o amaldiçoa pela destruição de seu clã, o que ele aceita com um sorriso.' },
            { name: 'Rukmini', relation: 'Esposa Principal', characterId: 'rukmini', details: 'Lakshmi encarnada, raptada com seu consentimento.' }
        ],
        narrativeArc: { beginning: 'A criança divina/vaqueiro.', end: 'O arquiteto da nova era, partindo do mundo após cumprir seu propósito.' },
        quotes: ['"Sempre que o Dharma declina e o Adharma aumenta, Eu Me manifesto."', '"Você tem direito apenas à ação, nunca aos seus frutos."']
    },
    {
        id: 'yudhishthira',
        name: 'Yudhishthira',
        species: 'Humano',
        kingdom: 'Indraprastha / Hastinapura',
        epithets: ['Dharmaraja', 'Ajatashatru', 'Kounteya'],
        enemies: ['duryodhana', 'shakuni', 'karna'],
        children: [],
        lineage: { father: 'Yama (Dharma) / Pandu', mother: 'Kunti', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Pandavas', 'Reino de Indraprastha/Hastinapura'],
        role: ['Rei', 'Líder Moral', 'Jogador'],
        attributes: {
            symbolic: ['A Roda do Dharma', 'Lança', 'Paciência', 'Dharma', 'Honra'],
            visual: ['Postura Serena', 'Vestes Reais Modestas']
        },
        psychology: {
            virtues: ['Verdade absoluta', 'Paciência infinita', 'Justiça'],
            flaws: ['Vício em jogo', 'Passividade excessiva', 'Apego à letra da lei em vez do espírito'],
            analysis: 'Yudhishthira é a personificação do Dharma estático. Seu maior erro, o jogo de dados, nasce de sua incapacidade de recusar um desafio formal, mostrando como a virtude cega pode ser explorada.'
        },
        timeline: [
            { title: 'O Jogo de Dados', description: 'Aposta e perde seu reino, irmãos e esposa.', significance: 'O ponto de virada trágica de sua vida.', phase: 'pre-war' },
            { title: 'Yaksha Prashna', description: 'Responde às perguntas do Yaksha para reviver seus irmãos.', significance: 'Demonstra sua sabedoria superior.', phase: 'pre-war' },
            { title: 'A Recusa ao Céu', description: 'Recusa-se a entrar no céu sem seu cachorro (Dharma disfarçado).', significance: 'Seu teste final de lealdade e compaixão.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Bhima', relation: 'Irmão', characterId: 'bhima', details: 'O braço forte que protege o rei pacífico.' },
            { name: 'Draupadi', relation: 'Esposa', characterId: 'draupadi', details: 'Uma relação tensa após o jogo de dados.' },
            { name: 'Vidura', relation: 'Mentor', characterId: 'vidura', details: 'A consciência política que guia sua consciência moral.' }
        ],
        narrativeArc: { beginning: 'O príncipe justo e obediente.', end: 'O rei sábio e desiludido que alcança o céu em seu próprio corpo físico.' },
        quotes: ['"A raiva é o assassino da virtude."', '"O que é mais incrível? Que vemos pessoas morrendo todos os dias, mas agimos como se fôssemos viver para sempre."']
    },
    {
        id: 'bhima',
        name: 'Bhima',
        species: 'Humano',
        kingdom: 'Indraprastha',
        epithets: ['Vrikodara', 'Bhimasena'],
        enemies: ['duryodhana', 'dushasana', 'karna', 'kichaka'],
        children: ['ghatotkacha'],
        lineage: { father: 'Vayu (Vento) / Pandu', mother: 'Kunti', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Protetor', 'Cozinheiro'],
        attributes: {
            symbolic: ['Maça (Gada)', 'Vento', 'Força Bruta', 'Fome', 'Vingança'],
            visual: ['Corpo Musculoso', 'Maça Gigante']
        },
        psychology: {
            virtues: ['Força imensa', 'Lealdade feroz', 'Honestidade emocional'],
            flaws: ['Gula', 'Ira incontrolável', 'Falta de sutileza'],
            analysis: 'Bhima representa a emoção crua, a vitalidade e a força física. Enquanto Yudhishthira hesita intelectualmente, Bhima age. Ele é o executor da vingança de Draupadi.'
        },
        timeline: [
            { title: 'Sobrevivendo ao Veneno', description: 'Envenenado por Duryodhana na juventude, ganha a força de 1000 elefantes.', significance: 'O início da rivalidade mortal com os Kauravas.', phase: 'pre-war' },
            { title: 'Matando Jarasandha', description: 'Rasga o rei de Magadha ao meio em um duelo de luta livre.', significance: 'Remove um obstáculo crucial para o sacrifício Rajasuya.', phase: 'pre-war' },
            { title: 'O Voto de Sangue', description: 'Bebe o sangue de Dushasana e quebra as coxas de Duryodhana.', significance: 'O cumprimento brutal de sua promessa a Draupadi.', phase: 'war' }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Inimigo Mortal', characterId: 'duryodhana', details: 'Dois lados da mesma moeda de força física e orgulho.' },
            { name: 'Draupadi', relation: 'Esposa / Vingança', characterId: 'draupadi', details: 'Protetor fanático de sua honra.' },
            { name: 'Ghatotkacha', relation: 'Filho', characterId: 'ghatotkacha', details: 'Filho amado da floresta.' }
        ],
        narrativeArc: { beginning: 'O jovem forte e impetuoso.', end: 'O vingador satisfeito, mas cansado da matança.' },
        quotes: ['"Dharma é para os fracos se não for apoiado pela força."']
    },
    {
        id: 'nakula',
        name: 'Nakula',
        species: 'Humano',
        kingdom: 'Indraprastha',
        epithets: ['Granthika'],
        enemies: ['duryodhana', 'karna'],
        children: [],
        lineage: { father: 'Ashwini Kumars / Pandu', mother: 'Madri', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Espadachim', 'Cuidador de Cavalos'],
        attributes: { symbolic: ['Espada', 'Beleza', 'Cavalos', 'Honra'], visual: ['Extremamente Belo', 'Ágil'] },
        psychology: {
            virtues: ['Habilidade com cavalos', 'Beleza divina', 'Lealdade'],
            flaws: ['Orgulho de sua aparência'],
            analysis: 'Nakula, junto com Sahadeva, representa a dualidade e a harmonia. Filho dos deuses gêmeos da medicina e da beleza, ele é mestre em espadas e equitação.'
        },
        timeline: [
            { title: 'Conquista do Oeste', description: 'Durante o Rajasuya, conquista os reinos do oeste.', significance: 'Demonstra sua proeza militar independente.', phase: 'pre-war' },
            { title: 'A Vida de Disfarce', description: 'Serve como Granthika, o cuidador de cavalos, no reino de Virata.', significance: 'Humildade em servir animais que ele ama.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Sahadeva', relation: 'Irmão Gêmeo', characterId: 'sahadeva', details: 'Inseparáveis em batalha e vida.' },
            { name: 'Draupadi', relation: 'Esposa', characterId: 'draupadi', details: 'Parte do casamento poliândrico.' },
            { name: 'Shalya', relation: 'Tio Materno', characterId: 'shalya', details: 'Tio materno que acabou lutando pelo lado inimigo.' }
        ],
        narrativeArc: { beginning: 'O príncipe belo.', end: 'Cai no Himalaia por orgulho de sua beleza.' },
        quotes: []
    },
    {
        id: 'sahadeva',
        name: 'Sahadeva',
        species: 'Humano',
        kingdom: 'Indraprastha',
        epithets: ['Tantripal'],
        enemies: ['shakuni', 'duryodhana'],
        children: [],
        lineage: { father: 'Ashwini Kumars / Pandu', mother: 'Madri', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Astrólogo', 'Sábio'],
        attributes: { symbolic: ['Machado', 'Sabedoria', 'Estrelas', 'Dharma'], visual: ['Calmo', 'Pensativo'] },
        psychology: {
            virtues: ['Presciência', 'Inteligência', 'Devoção'],
            flaws: ['Maldição do conhecimento (sabe o futuro mas não pode contar)'],
            analysis: 'Sahadeva é o mais sábio dos Pandavas. Ele sabia que a guerra aconteceria mas foi proibido de revelar. Ele mata Shakuni, o cérebro por trás da guerra, encerrando o ciclo de manipulação intelectual.'
        },
        timeline: [
            { title: 'A Conquista do Sul', description: 'Subjuga os reinos do sul para o Rajasuya.', significance: 'Expansão do império.', phase: 'pre-war' },
            { title: 'Morte de Shakuni', description: 'Mata o tio ardiloso no penúltimo dia da guerra.', significance: 'Elimina a fonte da discórdia.', phase: 'war' }
        ],
        relationships: [
            { name: 'Nakula', relation: 'Irmão Gêmeo', characterId: 'nakula', details: 'Seu par constante.' },
            { name: 'Shakuni', relation: 'Inimigo / Algoz', characterId: 'shakuni', details: 'O homem que ele finalmente mata.' },
            { name: 'Krishna', relation: 'Senhor', characterId: 'krishna', details: 'Sahadeva foi o primeiro a sugerir Krishna como o convidado de honra no Rajasuya.' }
        ],
        narrativeArc: { beginning: 'O jovem silencioso que sabe tudo.', end: 'Cai no Himalaia por orgulho de sua sabedoria.' },
        quotes: []
    },
    {
        id: 'draupadi',
        name: 'Draupadi',
        species: 'Humano',
        kingdom: 'Panchala / Indraprastha',
        epithets: ['Panchali', 'Yajnaseni', 'Krishnaa'],
        enemies: ['duryodhana', 'dushasana', 'karna', 'shakuni'],
        children: [],
        lineage: { father: 'Drupada', mother: 'Fogo (Nascida do Yajna)', clan: 'Panchala', dynasty: '-' },
        affiliations: ['Pandavas', 'Panchala'],
        role: ['Rainha', 'Catalisadora da Guerra'],
        attributes: {
            symbolic: ['Fogo', 'Cabelos Soltos', 'Lótus Azul', 'Dharma', 'Vingança'],
            visual: ['Beleza Estonteante', 'Olhos de Lótus', 'Tez Escura']
        },
        psychology: {
            virtues: ['Devoção', 'Coragem', 'Intelecto afiado', 'Resiliência'],
            flaws: ['Língua afiada', 'Orgulho', 'Rancor'],
            analysis: 'Draupadi não é uma vítima passiva; ela é a força motriz (Shakti) por trás da guerra. Nascida do fogo, ela queima com uma sede de justiça. Sua humilhação no tribunal é o ponto central moral do épico.'
        },
        timeline: [
            { title: 'Swayamvara', description: 'Rejeita Karna e aceita Arjuna, mas acaba casada com os 5 irmãos.', significance: 'Define seu destino único e difícil.', phase: 'pre-war' },
            { title: 'Vastraharan (Desrobamento)', description: 'Ora a Krishna quando Dushasana tenta despi-la no tribunal.', significance: 'O momento da intervenção divina e início de seu voto de vingança.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Sakha (Amigo)', characterId: 'krishna', details: 'Seu único verdadeiro protetor e confidente.' },
            { name: 'Arjuna', relation: 'Marido Favorito', characterId: 'arjuna', details: 'O homem que ela escolheu.' },
            { name: 'Dushasana', relation: 'Opressor', characterId: 'dushasana', details: 'O Kaurava que tentou despojá-la.' },
            { name: 'Drupada', relation: 'Pai', characterId: 'drupada', details: 'O rei que a gerou do fogo do yajna.' }
        ],
        narrativeArc: { beginning: 'A princesa nascida do fogo destinada a destruir os Kuru.', end: 'A rainha que viu sua vingança, mas perdeu todos os seus filhos.' },
        quotes: ['"Seus esposos não têm dever para com vocês? Onde está o Dharma agora?"', '"Não prenderei meu cabelo até lavá-lo com o sangue de Dushasana."']
    },
    {
        id: 'karna',
        name: 'Karna',
        species: 'Humano',
        kingdom: 'Anga',
        epithets: ['Radheya', 'Vasu-Sena', 'Angaraj', 'Suryaputra'],
        enemies: ['arjuna', 'pandavas'],
        children: ['vrishasena'],
        lineage: { father: 'Surya (Sol)', mother: 'Kunti (adotado por Radha e Adhiratha)', clan: 'Suta (por adoção)', dynasty: '-' },
        affiliations: ['Kauravas', 'Reino de Anga'],
        role: ['Guerreiro', 'Doador (Danveer)', 'Amigo Leal'],
        attributes: {
            symbolic: ['Sol', 'Armadura Dourada (Kavacha)', 'Brincos (Kundala)', 'Caridade', 'Destino'],
            visual: ['Brilho Solar', 'Olhos Melancólicos']
        },
        psychology: {
            virtues: ['Generosidade extrema', 'Lealdade inabalável', 'Valor marcial'],
            flaws: ['Necessidade de validação', 'Arrogância defensiva', 'Má companhia'],
            analysis: 'Karna é o arquétipo do herói trágico e do "outsider". Rejeitado pela sociedade e pela mãe, ele busca identidade e respeito a qualquer custo. Sua lealdade a Duryodhana é sua virtude e sua maldição.'
        },
        timeline: [
            { title: 'A Maldição de Parashurama', description: 'Amaldiçoado a esquecer seus mantras divinos na hora da morte por mentir sobre sua casta.', significance: 'Sela seu destino fatal.', phase: 'pre-war' },
            { title: 'Doação da Armadura', description: 'Indra pede sua armadura impenetrável; Karna a arranca de seu corpo e doa.', significance: 'O auge de sua caridade, tornando-se vulnerável.', phase: 'pre-war' },
            { title: 'Roda Presa', description: 'Sua carruagem atola na batalha final, e ele é morto desarmado.', significance: 'A culminação de todas as maldições.', phase: 'war' }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Melhor Amigo', characterId: 'duryodhana', details: 'O único que lhe deu respeito e status.' },
            { name: 'Kunti', relation: 'Mãe Biológica', characterId: 'kunti', details: 'O segredo que o assombrou.' },
            { name: 'Arjuna', relation: 'Inimigo / Irmão', characterId: 'arjuna', details: 'O rival que nunca soube ser irmão.' },
            { name: 'Shalya', relation: 'Cocheiro', characterId: 'shalya', details: 'Seu cocheiro que o desmoralizou na batalha final.' }
        ],
        narrativeArc: { beginning: 'O filho abandonado buscando seu lugar ao sol.', end: 'O herói caído cuja nobreza só é totalmente reconhecida após a morte.' },
        quotes: ['"O nascimento foi o destino; a coragem é minha escolha."', '"Eu não abandonarei Duryodhana, nem por todo o ouro da Terra."']
    },
    {
        id: 'duryodhana',
        name: 'Duryodhana',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Suyodhana', 'Kururaja'],
        enemies: ['yudhishthira', 'bhima', 'arjuna', 'krishna', 'draupadi'],
        children: [],
        lineage: { father: 'Dhritarashtra', mother: 'Gandhari', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Kauravas', 'Hastinapura'],
        role: ['Príncipe Herdeiro', 'Antagonista', 'Guerreiro de Maça'],
        attributes: {
            symbolic: ['Inveja', 'Ambição', 'Coxas de Ferro', 'Caos'],
            visual: ['Imponente', 'Olhar Arrogante']
        },
        psychology: {
            virtues: ['Liderança', 'Generosidade com amigos', 'Coragem física'],
            flaws: ['Inveja corroedora', 'Arrogância', 'Recusa em ouvir a razão'],
            analysis: 'Duryodhana é movido por uma inveja existencial dos Pandavas. Ele acredita genuinamente que foi injustiçado. Ele representa o Kali Purusha — egoísta, materialista e incapaz de ver o divino.'
        },
        timeline: [
            { title: 'Tentativa de Envenenamento', description: 'Tenta matar Bhima na juventude.', significance: 'Mostra a precocidade de seu ódio.', phase: 'pre-war' },
            { title: 'Humilhação no Palácio de Maya', description: 'Cai na água e pensa ser chão; Draupadi ri.', significance: 'O insulto que acendeu o desejo de destruir os Pandavas.', phase: 'pre-war' },
            { title: 'Morte no Lago', description: 'Esconde-se em um lago gelado antes de ser morto por Bhima.', significance: 'O fim solitário de uma ambição que destruiu o mundo.', phase: 'war' }
        ],
        relationships: [
            { name: 'Karna', relation: 'Amigo da Alma', characterId: 'karna', details: 'Sua lealdade a Karna é sua característica mais redentora.' },
            { name: 'Shakuni', relation: 'Tio Materno / Manipulador', characterId: 'shakuni', details: 'O manipulador que alimentou seu ódio.' },
            { name: 'Bhima', relation: 'Inimigo Mortal', characterId: 'bhima', details: 'Dois titãs de força destinados a se destruir.' }
        ],
        narrativeArc: { beginning: 'O príncipe invejoso nascido com presságios ruins.', end: 'O rei caído que vai para o céu por ter morrido como um guerreiro.' },
        quotes: ['"Eu não darei terra suficiente nem para a ponta de uma agulha."', '"Eu conheço o Dharma, mas não sou inclinado a ele."']
    },
    {
        id: 'bhishma',
        name: 'Bhishma',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Devavrata', 'Gangaputra', 'Pitamaha'],
        enemies: ['shikhandi', 'amba'],
        children: [],
        lineage: { father: 'Shantanu', mother: 'Ganga (Rio)', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Kauravas (por juramento)', 'Hastinapura'],
        role: ['Patriarca', 'Guardião do Trono', 'Guerreiro', 'Sábio'],
        attributes: {
            symbolic: ['Cama de Flechas', 'Voto Terrível (Bhishma Pratigya)', 'Destino', 'Dharma', 'Honra'],
            visual: ['Barba Branca', 'Armadura Prateada', 'Aura Serena']
        },
        psychology: {
            virtues: ['Autossacrifício', 'Sabedoria', 'Invencibilidade'],
            flaws: ['Rigidez moral', 'Passividade diante da injustiça (Draupadi)', 'Lealdade cega ao trono'],
            analysis: 'Bhishma é o "Terrível" devido ao seu voto de celibato e servidão. Ele representa o conflito entre o dever pessoal (juramento) e o dever universal (justiça).'
        },
        timeline: [
            { title: 'O Voto', description: 'Renuncia ao trono e ao casamento para que seu pai possa casar-se com Satyavati.', significance: 'Concede-lhe o poder de escolher a hora da sua morte (Iccha Mrityu).', phase: 'pre-war' },
            { title: 'Silêncio na Corte', description: 'Permanece calado enquanto Draupadi é desrespeitada.', significance: 'Sua maior falha moral.', phase: 'pre-war' },
            { title: 'Cama de Flechas', description: 'Cai pelas flechas de Arjuna e Shikhandi, esperando o solstício para morrer.', significance: 'Torna-se o mestre que ensina o Dharma antes de partir.', phase: 'war' }
        ],
        relationships: [
            { name: 'Shantanu', relation: 'Pai', characterId: 'shantanu', details: 'A causa de seu sacrifício.' },
            { name: 'Arjuna', relation: 'Neto / Algoz', characterId: 'arjuna', details: 'O neto favorito que o liberta de seu corpo.' },
            { name: 'Amba', relation: 'Inimiga Eterna', characterId: 'amba', details: 'A mulher que jurou matá-lo e renasceu como Shikhandi.' }
        ],
        narrativeArc: { beginning: 'O príncipe filho de um rio.', end: 'O sábio ancião na cama de flechas, transmitindo a sabedoria antiga.' },
        quotes: ['"O destino é poderoso, e o esforço é inútil? Não. O destino é o fruto do esforço de vidas passadas."', '"Eu sou o escravo do meu juramento."']
    },
    {
        id: 'shakuni',
        name: 'Shakuni',
        species: 'Humano',
        kingdom: 'Gandhara',
        epithets: ['Saubala'],
        enemies: ['pandavas', 'krishna', 'vidura'],
        children: [],
        lineage: { father: 'Suvala', mother: '-', clan: 'Gandhara', dynasty: '-' },
        affiliations: ['Kauravas', 'Gandhara'],
        role: ['Estrategista', 'Manipulador', 'Tio'],
        attributes: {
            symbolic: ['Dados de Osso', 'Coxeio', 'Astúcia', 'Caos'],
            visual: ['Sorriso Malicioso', 'Manco']
        },
        psychology: {
            virtues: ['Inteligência', 'Persistência', 'Amor pela irmã Gandhari'],
            flaws: ['Vingativo', 'Traiçoeiro', 'Manipulador'],
            analysis: 'Shakuni é o grande arquiteto da guerra. Dizem que ele buscava vingança contra Bhishma e o clã Kuru por aprisionar sua família. Ele usa Duryodhana como uma arma para destruir a dinastia Kuru de dentro para fora.'
        },
        timeline: [
            { title: 'O Jogo de Dados', description: 'Manipula os dados para vencer Yudhishthira repetidamente.', significance: 'O golpe mestre que exila os Pandavas.', phase: 'pre-war' },
            { title: 'Morte por Sahadeva', description: 'Morto pelo mais sábio dos Pandavas no penúltimo dia.', significance: 'O fim do arquiteto da guerra.', phase: 'war' }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Sobrinho / Peão', characterId: 'duryodhana', details: 'O instrumento de sua vingança contra os Kuru.' },
            { name: 'Sahadeva', relation: 'Algoz', characterId: 'sahadeva', details: 'O mais sábio dos Pandavas que finalmente o mata.' },
            { name: 'Gandhari', relation: 'Irmã', characterId: 'gandhari', details: 'Amor fraterno que motivou sua vingança.' }
        ],
        narrativeArc: { beginning: 'O príncipe de Gandhara humilhado.', end: 'O vingador que conseguiu destruir a casa de seus inimigos.' },
        quotes: ['"Eu não jogo dados, sobrinho. Eu jogo com homens."']
    },
    {
        id: 'drona',
        name: 'Drona',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Acharya', 'Bharadwaja'],
        enemies: ['drupada', 'dhrishtadyumna', 'pandavas'],
        children: ['ashwatthama'],
        lineage: { father: 'Bharadwaja', mother: 'Ninfa Ghritachi', clan: 'Brahmane', dynasty: '-' },
        affiliations: ['Kauravas', 'Hastinapura'],
        role: ['Mestre de Armas', 'Guru', 'General'],
        attributes: {
            symbolic: ['Arco', 'Jarra (Drona)', 'Mestre', 'Caos'],
            visual: ['Vestes de Brahmane mas com armas', 'Cabelos grisalhos']
        },
        psychology: {
            virtues: ['Conhecimento supremo de armas', 'Ensino'],
            flaws: ['Apego ao filho Ashwatthama', 'Ambição', 'Vingança contra Drupada'],
            analysis: 'Drona é um Brahmane que age como Kshatriya. Sua pobreza inicial o amargurou, e a rejeição por seu amigo Drupada o motivou a criar os maiores guerreiros para obter vingança.'
        },
        timeline: [
            { title: 'Vingança em Drupada', description: 'Usa seus alunos Pandavas para capturar o Rei Drupada.', significance: 'Cumpre sua vingança pessoal.', phase: 'pre-war' },
            { title: 'Chakravyuha', description: 'Cria a formação que mata Abhimanyu.', significance: 'O ponto sem retorno moral da guerra.', phase: 'war' }
        ],
        relationships: [
            { name: 'Ashwatthama', relation: 'Filho', characterId: 'ashwatthama', details: 'A luz de seus olhos e sua perdição.' },
            { name: 'Arjuna', relation: 'Aluno Favorito', characterId: 'arjuna', details: 'Amava Arjuna mais que o próprio filho em habilidade.' },
            { name: 'Drupada', relation: 'Inimigo / Amigo', characterId: 'drupada', details: 'A amizade de infância que virou ódio.' }
        ],
        narrativeArc: { beginning: 'O Brahmane pobre rejeitado.', end: 'O general invencível que depõe as armas por desgosto.' },
        quotes: ['"Não recusarei conhecimento a ninguém, mas Arjuna será o melhor."']
    },
    {
        id: 'vidura',
        name: 'Vidura',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Kshatta', 'Mahamatra'],
        enemies: ['shakuni', 'duryodhana'],
        children: [],
        lineage: { father: 'Vyasa', mother: 'Serva de Ambika', clan: 'Kuru', dynasty: '-' },
        affiliations: ['Kauravas (Ministro)', 'Pandavas (Simpatizante)'],
        role: ['Primeiro Ministro', 'Consciência Moral', 'Devoto'],
        attributes: {
            symbolic: ['Sabedoria (Vidura Neeti)', 'Simplicidade', 'Dharma'],
            visual: ['Humilde', 'Vestes Simples']
        },
        psychology: {
            virtues: ['Sabedoria absoluta', 'Imparcialidade', 'Devoção'],
            flaws: ['Falta de poder político real devido ao nascimento'],
            analysis: 'Vidura é a encarnação do Deus Dharma amaldiçoado a nascer como humano. Ele é a voz da razão que Dhritarashtra sempre ouve, mas nunca segue.'
        },
        timeline: [
            { title: 'Salvando os Pandavas', description: 'Avisa Yudhishthira em código sobre o incêndio na casa de cera.', significance: 'O guardião secreto dos Pandavas.', phase: 'pre-war' },
            { title: 'Peregrinação', description: 'Deixa o reino antes da guerra e retorna depois.', significance: 'Recusa-se a tomar parte no massacre.', phase: 'war' }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Meio-Irmão / Rei', characterId: 'dhritarashtra', details: 'Sempre tenta guiá-lo para a luz.' },
            { name: 'Yudhishthira', relation: 'Protegido', characterId: 'yudhishthira', details: 'O rei a quem serve secretamente.' },
            { name: 'Krishna', relation: 'Senhor', characterId: 'krishna', details: 'Krishna escolhe jantar em sua casa humilde em vez do palácio.' }
        ],
        narrativeArc: { beginning: 'O sábio filho da serva.', end: 'Funde sua energia vital com Yudhishthira na floresta e morre.' },
        quotes: ['"A sabedoria é a arma mais afiada."']
    },
    {
        id: 'ashwatthama',
        name: 'Ashwatthama',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Drauni'],
        enemies: ['pandavas', 'dhrishtadyumna', 'krishna'],
        children: [],
        lineage: { father: 'Drona', mother: 'Kripi', clan: 'Brahmane', dynasty: '-' },
        affiliations: ['Kauravas'],
        role: ['Guerreiro', 'Vingador Noturno', 'Imortal (Chiranjivi)'],
        attributes: {
            symbolic: ['Pedra Preciosa na Testa', 'Imortalidade', 'Ira de Shiva', 'Caos'],
            visual: ['Feroz', 'Jóia brilhante (removida depois)']
        },
        psychology: {
            virtues: ['Coragem', 'Lealdade ao pai'],
            flaws: ['Impulsividade', 'Crueldade', 'Incapaz de aceitar a derrota'],
            analysis: 'Ashwatthama é um avatar parcial de Shiva (em sua fúria). Comete o crime mais hediondo da guerra: matar os inimigos dormindo e atacar um feto. Sua punição é a imortalidade em sofrimento.'
        },
        timeline: [
            { title: 'O Massacre Noturno', description: 'Mata os filhos de Draupadi e o exército Pandava durante o sono.', significance: 'A quebra final de todas as regras de guerra.', phase: 'post-war' },
            { title: 'A Maldição', description: 'Krishna o amaldiçoa a vagar sozinho e doente por 3000 anos.', significance: 'O destino pior que a morte.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Drona', relation: 'Pai', characterId: 'drona', details: 'Tentou vingar a morte do pai de forma terrível.' },
            { name: 'Duryodhana', relation: 'Rei', characterId: 'duryodhana', details: 'O último general nomeado por Duryodhana.' },
            { name: 'Dhrishtadyumna', relation: 'Inimigo', characterId: 'dhrishtadyumna', details: 'Quem matou seu pai; que ele pisoteia durante o sono.' }
        ],
        narrativeArc: { beginning: 'O filho precioso do mestre.', end: 'O pária imortal e miserável.' },
        quotes: ['"Eu matarei todos eles hoje à noite, enquanto dormem."']
    },
    {
        id: 'kunti',
        name: 'Kunti',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Pritha'],
        enemies: [],
        children: ['yudhishthira', 'bhima', 'arjuna', 'karna'],
        lineage: { father: 'Shurasena (adotada por Kuntibhoja)', mother: '-', clan: 'Yadava / Kuru', dynasty: 'Lunar' },
        affiliations: ['Pandavas', 'Mãe Real'],
        role: ['Mãe', 'Rainha Viúva'],
        attributes: {
            symbolic: ['Mantra Divino', 'Força Materna', 'Dharma'],
            visual: ['Digna', 'Sofrida']
        },
        psychology: {
            virtues: ['Resistência', 'Sacrifício maternal', 'Sabedoria política'],
            flaws: ['Escondeu o segredo de Karna', 'Curiosidade juvenil imprudente'],
            analysis: 'Kunti é a matriarca sofredora. Sua vida é uma série de perdas e exílios, mas ela mantém os Pandavas unidos. Seu segredo sobre Karna é a semente trágica da guerra.'
        },
        timeline: [
            { title: 'O Mantra', description: 'Recebe o mantra de Durvasa e testa invocando o Sol (nascimento de Karna).', significance: 'O erro que molda a guerra.', phase: 'pre-war' },
            { title: 'A Revelação a Karna', description: 'Finalmente diz a verdade a Karna antes da guerra.', significance: 'Tarde demais para evitar o conflito.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Pandu', relation: 'Esposo', details: 'O rei amaldiçoado.' },
            { name: 'Karna', relation: 'Primogênito Abandonado', characterId: 'karna', details: 'A dor secreta de sua vida.' },
            { name: 'Krishna', relation: 'Sobrinho / Protetor', characterId: 'krishna', details: 'O sobrinho que sempre protegeu seus filhos.' }
        ],
        narrativeArc: { beginning: 'A princesa curiosa.', end: 'A rainha eremita que morre em um incêndio na floresta.' },
        quotes: []
    },
    {
        id: 'dhritarashtra',
        name: 'Dhritarashtra',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Rei Cego', 'Ambika-suta'],
        enemies: ['pandavas'],
        children: ['duryodhana', 'dushasana', 'vikarna', 'yuyutsu'],
        lineage: { father: 'Vyasa', mother: 'Ambika', clan: 'Kuru', dynasty: '-' },
        affiliations: ['Kauravas', 'Rei de Hastinapura'],
        role: ['Rei', 'Pai'],
        attributes: {
            symbolic: ['Cegueira', 'Apego (Moha)', 'Caos'],
            visual: ['Cego', 'Robusto']
        },
        psychology: {
            virtues: ['Força física', 'Amor pelos filhos'],
            flaws: ['Cegueira moral', 'Ambição vicária', 'Fraqueza de caráter'],
            analysis: 'Dhritarashtra simboliza a mente cega pelo apego. Sua cegueira física é um espelho de sua incapacidade de ver a verdade e a justiça quando se trata de seu filho Duryodhana.'
        },
        timeline: [
            { title: 'Nascimento de Duryodhana', description: 'Ouve presságios terríveis mas recusa abandonar o filho.', significance: 'Escolhe o apego sobre o bem do reino.', phase: 'pre-war' },
            { title: 'Abraço de Ferro', description: 'Tenta esmagar Bhima em um abraço após a guerra, mas esmaga uma estátua.', significance: 'Mostra que seu ódio persistiu até o fim.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Gandhari', relation: 'Esposa', characterId: 'gandhari', details: 'A mulher que compartilhou sua escuridão.' },
            { name: 'Sanjaya', relation: 'Cocheiro / Olhos', characterId: 'sanjaya', details: 'Aquele que vê a verdade por ele.' },
            { name: 'Vidura', relation: 'Meio-Irmão', characterId: 'vidura', details: 'A voz que ele nunca ouve.' }
        ],
        narrativeArc: { beginning: 'O príncipe cego preterido.', end: 'O velho rei arrependido consumido pelo fogo.' },
        quotes: []
    },
    {
        id: 'gandhari',
        name: 'Gandhari',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Saubalyi'],
        enemies: ['krishna (maldição final)'],
        children: ['duryodhana', 'dushasana', 'vikarna'],
        lineage: { father: 'Suvala', mother: '-', clan: 'Gandhara', dynasty: '-' },
        affiliations: ['Kauravas', 'Rainha'],
        role: ['Rainha', 'Mãe', 'Asceta'],
        attributes: {
            symbolic: ['Venda nos Olhos', 'Poder do Tapas (Ascetismo)', 'Honra'],
            visual: ['Sempre vendada', 'Digna']
        },
        psychology: {
            virtues: ['Lealdade conjugal extrema', 'Retidão', 'Poder espiritual'],
            flaws: ['Ressentimento inicial'],
            analysis: 'Gandhari vendou seus olhos para não ser superior ao marido cego, mas isso também a impediu de ver e corrigir os erros de seus filhos. Ela amaldiçoa Krishna no final, mostrando seu poder.'
        },
        timeline: [
            { title: 'A Venda', description: 'Venda seus olhos voluntariamente no dia do casamento.', significance: 'Um ato de devoção e protesto.', phase: 'pre-war' },
            { title: 'A Maldição Yadava', description: 'Amaldiçoa o clã de Krishna a morrer como seus filhos morreram.', significance: 'A causa da destruição final de Dwarka.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Marido', characterId: 'dhritarashtra', details: 'Devoção total.' },
            { name: 'Duryodhana', relation: 'Filho', characterId: 'duryodhana', details: 'Tentou salvá-lo com seu olhar místico.' },
            { name: 'Shakuni', relation: 'Irmão', characterId: 'shakuni', details: 'O irmão cujas maquinações ela nunca aprovou inteiramente.' }
        ],
        narrativeArc: { beginning: 'A princesa de Gandhara.', end: 'A mãe de 100 filhos mortos.' },
        quotes: []
    },
    {
        id: 'abhimanyu',
        name: 'Abhimanyu',
        species: 'Humano',
        kingdom: 'Indraprastha',
        epithets: ['Saubhadra'],
        enemies: ['drona', 'karna', 'duryodhana', 'dushasana'],
        children: ['parikshit'],
        lineage: { father: 'Arjuna', mother: 'Subhadra', clan: 'Kuru / Yadava', dynasty: 'Lunar' },
        affiliations: ['Pandavas'],
        role: ['Guerreiro Jovem', 'Herói Trágico'],
        attributes: {
            symbolic: ['Chakravyuha (Labirinto)', 'Juventude', 'Coragem', 'Destino'],
            visual: ['Jovem', 'Belo', 'Heroico']
        },
        psychology: {
            virtues: ['Coragem destemida', 'Habilidade prodígio'],
            flaws: ['Conhecimento incompleto (sabia entrar no Chakravyuha mas não sair)'],
            analysis: 'Abhimanyu representa a juventude heróica cortada antes do tempo. Sua morte injusta nas mãos de múltiplos guerreiros marcou o fim das regras de cavalheirismo (Dharma Yuddha) na guerra.'
        },
        timeline: [
            { title: 'O 13º Dia', description: 'Entra sozinho na formação Chakravyuha e causa estragos.', significance: 'Seu momento de glória suprema.', phase: 'war' },
            { title: 'A Morte Injusta', description: 'Cercado por seis grandes guerreiros e morto desarmado.', significance: 'O ponto sem retorno da moralidade da guerra.', phase: 'war' }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Pai', characterId: 'arjuna', details: 'Sua vingança pela morte de Abhimanyu foi terrível.' },
            { name: 'Subhadra', relation: 'Mãe', characterId: 'subhadra', details: 'Que o amava imensamente.' },
            { name: 'Uttaraa', relation: 'Esposa', characterId: 'uttaraa', details: 'Mãe de Parikshit, o continuador da linhagem.' }
        ],
        narrativeArc: { beginning: 'O prodígio amado.', end: 'O sacrifício que encerrou a era da honra.' },
        quotes: []
    },
    {
        id: 'ghatotkacha',
        name: 'Ghatotkacha',
        species: 'Rakshasa',
        kingdom: 'Floresta (Rakshasa)',
        epithets: ['Filho de Hidimbi'],
        enemies: ['karna', 'kauravas'],
        children: [],
        lineage: { father: 'Bhima', mother: 'Hidimbi', clan: 'Rakshasa / Kuru', dynasty: '-' },
        affiliations: ['Pandavas', 'Rakshasas'],
        role: ['Guerreiro Mágico', 'Gigante'],
        attributes: {
            symbolic: ['Magia (Maya)', 'Tamanho Gigante', 'Noite', 'Sacrifício'],
            visual: ['Monstruoso', 'Cabelos longos', 'Presas']
        },
        psychology: {
            virtues: ['Lealdade absoluta ao pai', 'Sacrifício'],
            flaws: ['Natureza demoníaca (usada para o bem)'],
            analysis: 'Ghatotkacha é o filho mestiço leal. Krishna orquestrou sua morte para forçar Karna a usar sua arma divina que estava reservada para Arjuna. Ele morre caindo sobre o exército inimigo, esmagando milhares.'
        },
        timeline: [
            { title: 'Batalha Noturna', description: 'Luta à noite quando os Rakshasas são invencíveis.', significance: 'Aterrorizou o exército Kaurava.', phase: 'war' },
            { title: 'O Sacrifício da Shakti', description: 'Morre pela arma de Indra lançada por Karna.', significance: 'Salvou a vida de Arjuna.', phase: 'war' }
        ],
        relationships: [
            { name: 'Bhima', relation: 'Pai', characterId: 'bhima', details: 'Orgulho de seu filho forte.' },
            { name: 'Karna', relation: 'Algoz', characterId: 'karna', details: 'Morto pela Shakti de Karna; estrategicamente orquestrado por Krishna.' }
        ],
        narrativeArc: { beginning: 'O filho da floresta.', end: 'O gigante caído.' },
        quotes: []
    },
    {
        id: 'shantanu',
        name: 'Shantanu',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Kuruvardhana', 'Satyavachin'],
        enemies: [],
        children: ['bhishma', 'chitrangada-outro', 'vichitravirya'],
        lineage: { father: 'Pratipa', mother: 'Sunanda', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Hastinapura'],
        role: ['Rei', 'Ancestral'],
        attributes: {
            symbolic: ['Toque de Cura', 'Desejo', 'Destino'],
            visual: ['Rei Sábio', 'Melancólico']
        },
        psychology: {
            virtues: ['Devoção', 'Honra'],
            flaws: ['Luxúria/Paixão cegante', 'Fraqueza perante promessas de mulheres'],
            analysis: 'Shantanu é o rei governado pelo desejo (Kama). Suas duas grandes paixões (Ganga e Satyavati) definem o destino trágico de sua linhagem.'
        },
        timeline: [
            { title: 'Encontro com Ganga', description: 'Apaixona-se pela deusa do rio, aceitando não questionar suas ações.', significance: 'Leva à morte de 7 filhos e ao nascimento de Bhishma.', phase: 'pre-war' },
            { title: 'A Promessa a Satyavati', description: 'Apaixona-se pela pescadora, levando ao voto de celibato de Bhishma.', significance: 'A causa raiz da disputa pelo trono.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Filho', characterId: 'bhishma', details: 'O filho que sacrificou tudo pela felicidade do pai.' },
            { name: 'Ganga', relation: 'Primeira Esposa', characterId: 'ganga', details: 'A deusa que o deixou quando ele questionou o afogamento dos filhos.' },
            { name: 'Satyavati', relation: 'Segunda Esposa', characterId: 'satyavati', details: 'A pescadora por quem seu filho renunciou à vida.' }
        ],
        narrativeArc: { beginning: 'O rei solitário.', end: 'O pai satisfeito mas culpado.' },
        quotes: []
    },
    {
        id: 'ganga',
        name: 'Ganga',
        species: 'Deva',
        kingdom: 'Celestial / Rio',
        epithets: ['Jahnavi', 'Bhagirathi', 'Tripathaga'],
        enemies: [],
        children: ['bhishma'],
        lineage: { father: 'Himalaya', mother: 'Mena', clan: 'Deusa', dynasty: '-' },
        affiliations: ['Devas', 'Rio Sagrado'],
        role: ['Mãe de Bhishma', 'Purificadora', 'Divino'],
        attributes: {
            symbolic: ['Água', 'Makara (Crocodilo)', 'Purificação', 'Dharma'],
            visual: ['Forma Líquida e Humana', 'Divina']
        },
        psychology: {
            virtues: ['Pureza', 'Dever divino'],
            flaws: ['-'],
            analysis: 'Ganga é a força da natureza e a mãe divina. Ela executa o karma dos Vasus afogando-os para libertá-los rapidamente.'
        },
        timeline: [
            { title: 'O Afogamento dos Vasus', description: 'Afoga seus 7 primeiros filhos para libertá-los de uma maldição.', significance: 'Um ato de misericórdia incompreensível para mortais.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Shantanu', relation: 'Marido Mortal', characterId: 'shantanu', details: 'Amou-o mas partiu quando ele quebrou a promessa.' },
            { name: 'Bhishma', relation: 'Filho (Prabhasa)', characterId: 'bhishma', details: 'Criou-o nos céus antes de devolvê-lo.' }
        ],
        narrativeArc: { beginning: 'A deusa descendo à terra.', end: 'O rio que flui eternamente.' },
        quotes: []
    },
    {
        id: 'satyavati',
        name: 'Satyavati',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Matsyagandha', 'Yojanagandha', 'Gandhavati'],
        enemies: [],
        children: ['vyasa'],
        lineage: { father: 'Uparichara Vasu (Rei)', mother: 'Adrika (Peixe/Ninfa)', clan: 'Pescadores (adotiva)', dynasty: '-' },
        affiliations: ['Hastinapura'],
        role: ['Rainha Mãe', 'Matriarca Pragmática'],
        attributes: {
            symbolic: ['Cheiro de Peixe/Lótus', 'Barco', 'Destino'],
            visual: ['Bela', 'Determinada']
        },
        psychology: {
            virtues: ['Pragmatismo', 'Visão de longo prazo'],
            flaws: ['Ambição implacável', 'Manipulação'],
            analysis: 'Satyavati é a verdadeira fundadora da dinastia Kuru "moderna". Ela representa a "Realpolitik" antes de Vidura ou Krishna.'
        },
        timeline: [
            { title: 'Encontro com Parashara', description: 'Concebe Vyasa em uma ilha no meio do rio.', significance: 'Nascimento do autor do épico.', phase: 'pre-war' },
            { title: 'O Casamento com Shantanu', description: 'Exige que seus filhos sejam herdeiros em vez de Bhishma.', significance: 'Garante o trono mas condena a família à discórdia.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Vyasa', relation: 'Filho Ilegítimo', characterId: 'vyasa', details: 'O filho que ela chama quando a dinastia enfrenta a ruína.' },
            { name: 'Bhishma', relation: 'Enteado', characterId: 'bhishma', details: 'A relação complexa de respeito e barreira mútua.' },
            { name: 'Shantanu', relation: 'Marido', characterId: 'shantanu', details: 'O rei por quem ela negociou o futuro de seus filhos.' }
        ],
        narrativeArc: { beginning: 'A pescadora com cheiro de peixe.', end: 'A rainha que se retira para a floresta vendo a desgraça iminente.' },
        quotes: []
    },
    {
        id: 'vyasa',
        name: 'Vyasa',
        species: 'Rishi',
        kingdom: 'Universal / Floresta',
        epithets: ['Krishna Dwaipayana', 'Veda Vyasa'],
        enemies: [],
        children: ['dhritarashtra', 'pandu', 'vidura'],
        lineage: { father: 'Parashara', mother: 'Satyavati', clan: 'Brahmane', dynasty: '-' },
        affiliations: ['Eremita', 'Narrador'],
        role: ['Autor', 'Avô Biológico', 'Sábio', 'Divino'],
        attributes: {
            symbolic: ['Livro/Manuscrito', 'Pele Escura', 'Destino'],
            visual: ['Asceta', 'Imponente']
        },
        psychology: {
            virtues: ['Verdade', 'Visão profética', 'Desapego'],
            flaws: ['Sua aparência aterrorizante causou os defeitos de seus netos'],
            analysis: 'Vyasa é o autor e também um personagem, o "Avô" secreto de todos. Ele representa a Verdade nua e crua, que é frequentemente feia e difícil de abraçar.'
        },
        timeline: [
            { title: 'Niyoga', description: 'Gera Dhritarashtra, Pandu e Vidura nas viúvas de seu meio-irmão.', significance: 'Mantém a linhagem Kuru viva.', phase: 'pre-war' },
            { title: 'Ditando o Mahabharata', description: 'Dita o épico para Ganesha.', significance: 'Eterniza a história.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Satyavati', relation: 'Mãe', characterId: 'satyavati', details: 'Obedece a todos os seus comandos.' },
            { name: 'Dhritarashtra', relation: 'Filho', characterId: 'dhritarashtra', details: 'Concebido no palácio.' },
            { name: 'Vidura', relation: 'Filho', characterId: 'vidura', details: 'O mais sábio de seus filhos.' }
        ],
        narrativeArc: { beginning: 'O sábio nascido na ilha.', end: 'O eterno observador.' },
        quotes: []
    },
    {
        id: 'amba',
        name: 'Amba',
        species: 'Humano',
        kingdom: 'Kashi',
        epithets: ['Shikhandini'],
        enemies: ['bhishma'],
        children: [],
        lineage: { father: 'Rei de Kashi', mother: '-', clan: 'Kashi', dynasty: '-' },
        affiliations: ['Panchala (como Shikhandi)'],
        role: ['Princesa', 'Vingadora'],
        attributes: {
            symbolic: ['Guirlanda de Lótus', 'Fogo Tapa', 'Vingança', 'Destino'],
            visual: ['Fúria', 'Determinação']
        },
        psychology: {
            virtues: ['Foco', 'Resiliência'],
            flaws: ['Ódio obsessivo', 'Incapacidade de ver outra coisa senão vingança'],
            analysis: 'Amba é a personificação do ódio nascido da injustiça. Sua austeridade para renascer como homem (Shikhandi) apenas para matar Bhishma é um dos maiores exemplos de determinação no épico.'
        },
        timeline: [
            { title: 'O Rapto', description: 'Levada à força por Bhishma de seu Swayamvara.', significance: 'O início de sua tragédia.', phase: 'pre-war' },
            { title: 'Renascimento', description: 'Renace como Shikhandi, filha de Drupada que se torna homem.', significance: 'O instrumento da morte de Bhishma.', phase: 'war' }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Inimigo Mortal', characterId: 'bhishma', details: 'O objeto de sua vingança eterna.' },
            { name: 'Shiva', relation: 'Divindade', details: 'Concedeu-lhe a bênção de matar Bhishma.' }
        ],
        narrativeArc: { beginning: 'A princesa esperançosa.', end: 'O guerreiro que derruba o invencível.' },
        quotes: []
    },
    {
        id: 'iravan',
        name: 'Iravan',
        species: 'Naga',
        kingdom: 'Nagas / Floresta',
        epithets: ['Aravan'],
        enemies: ['kauravas'],
        children: [],
        lineage: { father: 'Arjuna', mother: 'Ulupi (Princesa Naga)', clan: 'Naga / Kuru', dynasty: '-' },
        affiliations: ['Pandavas', 'Nagas'],
        role: ['Guerreiro', 'Deus dos Ancestrais (Tamil Nadu)'],
        attributes: {
            symbolic: ['Sacrifício Próprio', 'Serpente', 'Destino'],
            visual: ['Jovem', 'Traços Naga']
        },
        psychology: {
            virtues: ['Autossacrifício supremo', 'Coragem'],
            flaws: ['-'],
            analysis: 'Iravan é o símbolo do sacrifício total. Ele se oferece para ser sacrificado a Kali antes da guerra para garantir a vitória. Ele representa a devoção que transcende a própria vida.'
        },
        timeline: [
            { title: 'O Sacrifício (Kalapali)', description: 'Oferece a si mesmo como sacrifício para garantir a vitória dos Pandavas.', significance: 'Venerado como Deus Kuttantavar no sul da Índia.', phase: 'war' }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Pai', characterId: 'arjuna', details: 'Encontrou-o apenas na juventude.' },
            { name: 'Ulupi', relation: 'Mãe', details: 'Criou-o no reino das serpentes.' }
        ],
        narrativeArc: { beginning: 'O príncipe Naga.', end: 'O sacrifício divino.' },
        quotes: []
    },
    {
        id: 'subhadra',
        name: 'Subhadra',
        species: 'Humano',
        kingdom: 'Dwarka',
        epithets: ['Chitra'],
        enemies: [],
        children: ['abhimanyu'],
        lineage: { father: 'Vasudeva', mother: 'Rohini', clan: 'Yadava', dynasty: 'Lunar' },
        affiliations: ['Pandavas', 'Dwarka'],
        role: ['Esposa de Arjuna', 'Mãe de Abhimanyu'],
        attributes: {
            symbolic: ['União Kuru-Yadava', 'Carruagem', 'Aliança'],
            visual: ['Bela', 'Olhos Expressivos']
        },
        psychology: {
            virtues: ['Coragem (dirigiu a carruagem na fuga)', 'Resiliência'],
            flaws: ['-'],
            analysis: 'Subhadra é o elo vital entre os Yadavas (Krishna) e os Pandavas. Seu casamento com Arjuna, facilitado por Krishna, sela a aliança política.'
        },
        timeline: [
            { title: 'O Rapto Consentido', description: 'Arjuna a "rapta" (com consentimento dela e de Krishna) de Dwarka.', significance: 'Une as duas maiores dinastias.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Irmão', characterId: 'krishna', details: 'O arquiteto de seu casamento.' },
            { name: 'Arjuna', relation: 'Marido', characterId: 'arjuna', details: 'Grande amor romântico.' },
            { name: 'Abhimanyu', relation: 'Filho', characterId: 'abhimanyu', details: 'O filho herói que ela perdeu tragicamente.' }
        ],
        narrativeArc: { beginning: 'A irmã mimada de Krishna.', end: 'A rainha avó sábia.' },
        quotes: []
    },
    {
        id: 'drupada',
        name: 'Drupada',
        species: 'Humano',
        kingdom: 'Panchala',
        epithets: ['Yajnasena'],
        enemies: ['drona', 'kauravas'],
        children: ['draupadi', 'dhrishtadyumna', 'shikhandi'],
        lineage: { father: 'Prishata', mother: '-', clan: 'Panchala', dynasty: '-' },
        affiliations: ['Panchala', 'Pandavas'],
        role: ['Rei', 'Pai de Draupadi e Dhrishtadyumna'],
        attributes: {
            symbolic: ['Fogo do Yajna', 'Vingança', 'Caos'],
            visual: ['Rei Guerreiro', 'Idoso']
        },
        psychology: {
            virtues: ['Hospitalidade', 'Persistência'],
            flaws: ['Arrogância (rejeitou Drona)', 'Obsessão por vingança'],
            analysis: 'Drupada representa o orgulho que gera nêmesis. Criou filhos especificamente para matar Drona e Bhishma, fazendo dele um dos arquitetos fundamentais da guerra.'
        },
        timeline: [
            { title: 'Rejeição a Drona', description: 'Nega amizade a Drona dizendo que "amizade só existe entre iguais".', significance: 'A semente da guerra.', phase: 'pre-war' },
            { title: 'Nascimento dos Gêmeos', description: 'Realiza um Yajna para obter filhos que matem Drona.', significance: 'Draupadi e Dhrishtadyumna nascem do fogo.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Drona', relation: 'Inimigo / Amigo', characterId: 'drona', details: 'A relação de amor-ódio que definiu sua vida.' },
            { name: 'Draupadi', relation: 'Filha', characterId: 'draupadi', details: 'Sua "filha indesejada" que trouxe glória ao seu clã.' },
            { name: 'Dhrishtadyumna', relation: 'Filho', characterId: 'dhrishtadyumna', details: 'Criado para matar Drona.' }
        ],
        narrativeArc: { beginning: 'O príncipe orgulhoso.', end: 'Morto por Drona na batalha final.' },
        quotes: []
    },
    {
        id: 'dhrishtadyumna',
        name: 'Dhrishtadyumna',
        species: 'Humano',
        kingdom: 'Panchala',
        epithets: ['Draupada'],
        enemies: ['drona', 'ashwatthama'],
        children: [],
        lineage: { father: 'Drupada', mother: 'Fogo', clan: 'Panchala', dynasty: '-' },
        affiliations: ['Pandavas', 'Panchala'],
        role: ['Comandante em Chefe', 'Matador de Drona'],
        attributes: {
            symbolic: ['Espada', 'Fogo', 'Comando', 'Vingança'],
            visual: ['Nascido com armadura', 'Feroz']
        },
        psychology: {
            virtues: ['Destemor', 'Foco no objetivo'],
            flaws: ['Crueldade (matou Drona desarmado)'],
            analysis: 'Dhrishtadyumna nasceu com um único propósito: matar Drona. Ele é a encarnação do destino de Drona. Sua ação de decapitar Drona enquanto o mestre meditava é considerada um dos grandes pecados da guerra.'
        },
        timeline: [
            { title: 'Nascimento do Fogo', description: 'Saiu das chamas do Yajna já adulto e armado.', significance: 'Destinado a matar Drona.', phase: 'pre-war' },
            { title: 'Decapitação de Drona', description: 'Mata o mestre enquanto este estava em transe.', significance: 'Cumprimento de seu destino e seu maior pecado.', phase: 'war' }
        ],
        relationships: [
            { name: 'Draupadi', relation: 'Irmã', characterId: 'draupadi', details: 'Protetor fervoroso de sua irmã.' },
            { name: 'Drona', relation: 'Inimigo Destinado', characterId: 'drona', details: 'A razão de sua existência.' },
            { name: 'Ashwatthama', relation: 'Algoz', characterId: 'ashwatthama', details: 'Ashwatthama o pisoteia até a morte como vingança.' }
        ],
        narrativeArc: { beginning: 'O guerreiro nascido do fogo.', end: 'Morto sufocado durante o sono.' },
        quotes: []
    },
    {
        id: 'dushasana',
        name: 'Dushasana',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Kaurava'],
        enemies: ['draupadi', 'bhima', 'pandavas'],
        children: [],
        lineage: { father: 'Dhritarashtra', mother: 'Gandhari', clan: 'Kuru', dynasty: 'Lunar' },
        affiliations: ['Kauravas'],
        role: ['Executor', 'Irmão Leal'],
        attributes: {
            symbolic: ['Mãos Profanas (toucou Draupadi)', 'Sangue', 'Caos'],
            visual: ['Brutal', 'Seguidor']
        },
        psychology: {
            virtues: ['Lealdade cega a Duryodhana'],
            flaws: ['Sadismo', 'Falta de bússola moral própria'],
            analysis: 'Dushasana é a sombra brutal de Duryodhana. Seu ato de tentar despir Draupadi é o catalisador emocional da guerra. Sua morte horrível (tendo o sangue bebido por Bhima) é a purificação ritual de seu pecado.'
        },
        timeline: [
            { title: 'Vastraharan', description: 'Arrasta Draupadi pelos cabelos e tenta despi-la.', significance: 'O crime imperdoável.', phase: 'pre-war' },
            { title: 'Morte Sangrenta', description: 'Peito rasgado por Bhima, que bebe seu sangue.', significance: 'O cumprimento do voto de Bhima.', phase: 'war' }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Irmão / Mestre', characterId: 'duryodhana', details: 'Seguia-o até o inferno.' },
            { name: 'Bhima', relation: 'Algoz', characterId: 'bhima', details: 'O objeto de sua morte aterrorizante.' },
            { name: 'Draupadi', relation: 'Vítima', characterId: 'draupadi', details: 'A mulher cujo sangramento desencadeou sua destruição.' }
        ],
        narrativeArc: { beginning: 'O príncipe bully.', end: 'O sacrifício sangrento.' },
        quotes: []
    },
    {
        id: 'sanjaya',
        name: 'Sanjaya',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Gavalgani'],
        enemies: [],
        children: [],
        lineage: { father: 'Gavalgana', mother: '-', clan: 'Suta', dynasty: '-' },
        affiliations: ['Dhritarashtra'],
        role: ['Narrador', 'Conselheiro', 'Visionário'],
        attributes: {
            symbolic: ['Visão Divina (Divya Drishti)', 'Dharma'],
            visual: ['Calmo', 'Olhar distante']
        },
        psychology: {
            virtues: ['Veracidade', 'Imparcialidade', 'Devoção ao rei'],
            flaws: ['-'],
            analysis: 'Sanjaya é a "televisão" da antiguidade. Vyasa lhe concede visão divina para narrar a guerra ao rei cego. Ele é a testemunha ocular da história e o transmissor do Bhagavad Gita para o mundo.'
        },
        timeline: [
            { title: 'Visão Divina', description: 'Recebe o dom de ver tudo o que acontece no campo de batalha.', significance: 'Permite a narração do Gita.', phase: 'war' },
            { title: 'O Fim da Guerra', description: 'Narra a morte de Duryodhana e o fim da dinastia.', significance: 'Testemunha final.', phase: 'war' }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Mestre', characterId: 'dhritarashtra', details: 'Serve o rei cego com verdade brutal.' },
            { name: 'Krishna', relation: 'Objeto de Devoção', characterId: 'krishna', details: 'Sanjaya reconhece a divindade de Krishna antes de muitos.' }
        ],
        narrativeArc: { beginning: 'O cocheiro fiel.', end: 'O sábio da floresta.' },
        quotes: ['"Onde há Krishna, o Senhor do Yoga, e onde há Arjuna, o arqueiro, lá haverá opulência, vitória, prosperidade e moralidade."']
    },
    {
        id: 'parashurama',
        name: 'Parashurama',
        species: 'Humano',
        kingdom: 'Monte Mahendra',
        epithets: ['Bhargava', 'Jamadagnya'],
        enemies: ['kshatriyas'],
        children: [],
        lineage: { father: 'Jamadagni', mother: 'Renuka', clan: 'Brahmane (Bhargava)', dynasty: '-' },
        affiliations: ['Eremita', 'Chiranjivi (Imortal)'],
        role: ['Guru', 'Avatar', 'Guerreiro', 'Divino'],
        attributes: {
            symbolic: ['Machado (Parashu)', 'Ira', 'Mestre de Mestres', 'Destino'],
            visual: ['Dreadlocks', 'Musculoso', 'Armado']
        },
        psychology: {
            virtues: ['Poder marcial absoluto', 'Justiça'],
            flaws: ['Ira rápida', 'Rigidez'],
            analysis: 'Parashurama é o Avatar que veio antes de Rama e Krishna. Ele jurou livrar a terra de reis corruptos (Kshatriyas) 21 vezes. Ele representa a força marcial a serviço da ordem brahmânica.'
        },
        timeline: [
            { title: 'Duelo com Bhishma', description: 'Luta contra seu aluno Bhishma por causa de Amba, mas não consegue vencê-lo.', significance: 'Reconhece a grandeza de Bhishma.', phase: 'pre-war' },
            { title: 'Maldição de Karna', description: 'Amaldiçoa Karna por mentir sobre sua casta, mas reconhece sua habilidade.', significance: 'Sela o destino de Karna.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Aluno', characterId: 'bhishma', details: 'O único aluno que o empatou em combate.' },
            { name: 'Karna', relation: 'Aluno Amaldiçoado', characterId: 'karna', details: 'Ensinou-lhe a Brahmastra.' },
            { name: 'Drona', relation: 'Aluno', characterId: 'drona', details: 'Ensinou Drona as armas divinas.' }
        ],
        narrativeArc: { beginning: 'O vingador dos Brahmanes.', end: 'O guru eterno no Monte Mahendra.' },
        quotes: []
    },
    {
        id: 'ekalavya',
        name: 'Ekalavya',
        species: 'Humano',
        kingdom: 'Nishada (Floresta)',
        epithets: ['Nishada'],
        enemies: [],
        children: [],
        lineage: { father: 'Hiranyadhanus', mother: '-', clan: 'Nishada (Tribal)', dynasty: '-' },
        affiliations: ['Tribos da Floresta', 'Jarasandha'],
        role: ['Arqueiro', 'Rei Tribal'],
        attributes: {
            symbolic: ['Polegar Cortado', 'Estátua de Drona', 'Dharma', 'Sacrifício'],
            visual: ['Rústico', 'Habilidoso']
        },
        psychology: {
            virtues: ['Devoção ao Guru (Guru Bhakti)', 'Autodidatismo'],
            flaws: ['Ingenuidade'],
            analysis: 'Ekalavya é o símbolo do talento marginalizado. Rejeitado por Drona por ser de casta baixa, aprende sozinho adorando uma estátua. Representa o sacrifício dos oprimidos para manter a ordem social estabelecida.'
        },
        timeline: [
            { title: 'O Polegar Direito', description: 'Corta seu próprio polegar sem hesitar quando Drona pede.', significance: 'O maior ato de Guru Bhakti da história, embora cruelmente explorado.', phase: 'pre-war' }
        ],
        relationships: [
            { name: 'Drona', relation: 'Guru (Ídolo)', characterId: 'drona', details: 'Adorou Drona sem nunca ter sido ensinado por ele.' },
            { name: 'Arjuna', relation: 'Rival Involuntário', characterId: 'arjuna', details: 'A razão pela qual Ekalavya teve que ser neutralizado.' }
        ],
        narrativeArc: { beginning: 'O menino tribal rejeitado.', end: 'O arqueiro lenda sem polegar.' },
        quotes: []
    },
    {
        id: 'shalya',
        name: 'Shalya',
        species: 'Humano',
        kingdom: 'Madra',
        epithets: ['Rei de Madra'],
        enemies: [],
        children: [],
        lineage: { father: '-', mother: '-', clan: 'Madra', dynasty: '-' },
        affiliations: ['Kauravas (por engano)', 'Pandavas (tio)'],
        role: ['Rei', 'Cocheiro de Karna', 'General'],
        attributes: {
            symbolic: ['Cocheiro Relutante', 'Honra', 'Destino'],
            visual: ['Rei Poderoso']
        },
        psychology: {
            virtues: ['Honra (manteve a palavra a Duryodhana)', 'Amor pelos sobrinhos'],
            flaws: ['Vaidade (caiu no truque de Duryodhana)'],
            analysis: 'Shalya, tio dos gêmeos, ia lutar pelos Pandavas, mas foi enganado pela hospitalidade de Duryodhana. Ele representa como a honra técnica pode ser usada contra a intenção moral.'
        },
        timeline: [
            { title: 'O Banquete de Duryodhana', description: 'Aceita a hospitalidade pensando ser de Yudhishthira e fica obrigado a lutar pelo inimigo.', significance: 'A armadilha da etiqueta.', phase: 'pre-war' },
            { title: 'Cocheiro de Karna', description: 'Concorda em guiar Karna apenas sob a condição de poder falar o que quiser (insultos).', significance: 'Sabotagem interna acordada com Yudhishthira.', phase: 'war' }
        ],
        relationships: [
            { name: 'Nakula', relation: 'Sobrinho', characterId: 'nakula', details: 'Amava-os profundamente.' },
            { name: 'Sahadeva', relation: 'Sobrinho', characterId: 'sahadeva', details: 'O sobrinho que tentou proteger mesmo do lado inimigo.' },
            { name: 'Karna', relation: 'Parceiro Forçado', characterId: 'karna', details: 'Relação tóxica que minou Karna.' }
        ],
        narrativeArc: { beginning: 'O tio amoroso.', end: 'O último comandante Kaurava, morto por Yudhishthira.' },
        quotes: []
    },
    {
        id: 'kripa',
        name: 'Kripacharya',
        species: 'Humano',
        kingdom: 'Hastinapura',
        epithets: ['Gautama'],
        enemies: [],
        children: [],
        lineage: { father: 'Sharadvan', mother: 'Ninfa Janapadi', clan: 'Brahmane', dynasty: '-' },
        affiliations: ['Kauravas (Guru Real)'],
        role: ['Guru', 'Imortal (Chiranjivi)'],
        attributes: {
            symbolic: ['Imortalidade', 'Dharma', 'Honra'],
            visual: ['Sábio', 'Guerreiro']
        },
        psychology: {
            virtues: ['Imparcialidade', 'Dever', 'Sobrevivência'],
            flaws: ['Participou do massacre noturno (relutantemente)'],
            analysis: 'Kripa é um dos 7 imortais. Ao contrário de Drona, não tem amargura ou agenda pessoal. Sobrevive à guerra para se tornar o preceptor do neto de Arjuna, Parikshit, garantindo a continuidade do conhecimento.'
        },
        timeline: [
            { title: 'Guru dos Príncipes', description: 'Foi o primeiro professor dos príncipes antes de Drona.', significance: 'Inicia a formação dos guerreiros Kuru.', phase: 'pre-war' },
            { title: 'Guru de Parikshit', description: 'Torna-se o mestre da nova geração após a guerra.', significance: 'A ponte entre as eras.', phase: 'post-war' }
        ],
        relationships: [
            { name: 'Ashwatthama', relation: 'Sobrinho', characterId: 'ashwatthama', details: 'Tenta impedir o sobrinho de cometer o massacre noturno.' },
            { name: 'Drona', relation: 'Cunhado', characterId: 'drona', details: 'Kripi, irmã de Kripa, casou-se com Drona.' }
        ],
        narrativeArc: { beginning: 'O órfão adotado pelo rei.', end: 'O guru eterno.' },
        quotes: []
    }
];
