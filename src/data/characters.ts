import type { Character } from '../types';

export const characters: Character[] = [
    {
        id: 'arjuna',
        name: 'Arjuna',
        epithets: ['Partha', 'Dhananjaya', 'Gudakesha', 'Savyasachin', 'Vibhatsu'],
        lineage: {
            father: 'Indra (Espiritual) / Pandu (Terreno)',
            mother: 'Kunti',
            clan: 'Kuru',
            dynasty: 'Lunar (Chandravansha)'
        },
        affiliations: ['Pandavas', 'Reino de Indraprastha'],
        role: ['Guerreiro', 'Arqueiro Supremo', 'Receptor do Gita'],
        attributes: {
            symbolic: ['Foco (Ekagrata)', 'Habilidade', 'Dúvida', 'Rendição'],
            visual: ['Arco Gandiva', 'Carruagem com Estandarte de Macaco', 'Tez Escura']
        },
        psychology: {
            virtues: ['Concentração inigualável', 'Dedicação à maestria', 'Respeito aos anciãos'],
            flaws: ['Apego emocional', 'Orgulho de sua habilidade', 'Hesitação em momentos morais críticos'],
            analysis: 'Arjuna representa o Homem Arquetípico (Nara) buscando orientação do Divino (Narayana). Sua jornada não é apenas de conquista marcial, mas de conquista interna. Seu colapso em Kurukshetra simboliza a paralisia da alma humana quando confrontada com o "dever terrível" da vida. Ele é o estudante ideal, mas sua perfeição o torna frágil quando as regras da retidão (Dharma) conflitam com o amor pessoal.'
        },
        timeline: [
            {
                title: 'O Olho do Pássaro',
                description: 'Demonstra foco inquebrável sob a tutela de Drona, vendo apenas o olho do pássaro alvo.',
                significance: 'Estabelece-o como o guerreiro preeminente.'
            },
            {
                title: 'Exílio e Penitência',
                description: 'Viaja para o Himalaia para obter a Pashupatastra de Shiva.',
                significance: 'Mostra seu compromisso em ganhar poder não para si, mas para a inevitável guerra familiar.'
            },
            {
                title: 'O Momento do Gita',
                description: 'Entra em colapso em desespero ao ver seus parentes alinhados contra ele.',
                significance: 'O catalisador para o Bhagavad Gita, mudando sua motivação do desejo/medo para Nishkama Karma (ação desapegada).'
            }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Amigo, Primo, Guia', details: 'A díade Nara-Narayana; alma e superalma.' },
            { name: 'Drona', relation: 'Guru', details: 'O professor que o fez, mas a quem ele deve matar.' },
            { name: 'Karna', relation: 'Rival/Irmão', details: 'O eu sombrio; o igual que ele mata sem saber.' },
            { name: 'Subhadra', relation: 'Esposa', details: 'Irmã de Krishna, mãe de Abhimanyu.' }
        ],
        narrativeArc: {
            beginning: 'O estudante ambicioso buscando ser o maior.',
            end: 'O instrumento iluminado da Vontade Divina, aceitando seu dever violento sem malícia.'
        },
        quotes: [
            '"Meus membros falham e minha boca está seca. Meu corpo treme e meus cabelos se arrepiam."',
            '"Farei como Você diz. (Karishye Vachanam Tava)"'
        ]
    },
    {
        id: 'krishna',
        name: 'Krishna',
        epithets: ['Vasudeva', 'Madhusudana', 'Hrishikesha', 'Yogeshvara', 'Janardana'],
        lineage: {
            father: 'Vasudeva',
            mother: 'Devaki',
            clan: 'Yadava',
            dynasty: 'Lunar'
        },
        affiliations: ['Dwarka', 'Clã Vrishni'],
        role: ['Avatar', 'Estadista', 'Cocheiro', 'Estrategista'],
        attributes: {
            symbolic: ['Sudarshana Chakra (Tempo)', 'Lótus', 'Flauta (Chamado Divino)', 'Pena de Pavão'],
            visual: ['Tez Azul', 'Vestes Amarelas (Pitambara)']
        },
        psychology: {
            virtues: ['Onisciência', 'Desapego', 'Brilhantismo estratégico', 'Compaixão'],
            flaws: ['Percebida enganação (Maya)', 'Implacabilidade em manter o Dharma'],
            analysis: 'Krishna é a personificação da Inteligência Cósmica operando dentro da história. Ele transcende a moralidade humana para manter o Dharma, muitas vezes quebrando regras menores para salvar a "Grande Lei". Ele é o Marionetista que ama suas marionetes. Ao contrário dos heróis trágicos, ele nunca está preso pelo destino; ele o tece. Seu papel é transicionar o mundo da era heroica para o Kali Yuga.'
        },
        timeline: [
            {
                title: 'Matando Kamsa',
                description: 'Liberta Mathura da tirania ainda jovem.',
                significance: 'Marca o fim de sua "Lila" pastoral e entrada na política.'
            },
            {
                title: 'A Missão de Paz',
                description: 'Vai à corte Kaurava buscando 5 vilas para evitar a guerra.',
                significance: 'Estabelece o terreno moral para os Pandavas; revela sua Vishvarupa (Forma Cósmica) para o cego Dhritarashtra.'
            },
            {
                title: 'Dirigindo a Guerra',
                description: 'Guia os Pandavas a usar meios "questionáveis" para derrotar Drona, Bhishma e Karna.',
                significance: 'Demonstra que o Dharma é sutil e às vezes requer a "mentira da verdade".'
            }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Devoto/Amigo', details: 'O vaso escolhido para sua mensagem.' },
            { name: 'Draupadi', relation: 'Sakhi (Amiga)', details: 'Protetor de sua honra; um vínculo puramente espiritual.' },
            { name: 'Gandhari', relation: 'Acusadora', details: 'Ela o amaldiçoa pela destruição de seu clã, o que ele aceita com um sorriso.' }
        ],
        narrativeArc: {
            beginning: 'A criança divina/vaqueiro.',
            end: 'O arquiteto da nova era, partindo do mundo após cumprir seu propósito.'
        },
        quotes: [
            '"Sempre que o Dharma declina e o Adharma aumenta, Eu Me manifesto."',
            '"Você tem direito apenas à ação, nunca aos seus frutos."'
        ]
    },
    {
        id: 'yudhishthira',
        name: 'Yudhishthira',
        epithets: ['Dharmaraja', 'Ajatashatru', 'Kounteya'],
        lineage: {
            father: 'Yama (Dharma) / Pandu',
            mother: 'Kunti',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas', 'Reino de Indraprastha/Hastinapura'],
        role: ['Rei', 'Líder Moral', 'Jogador'],
        attributes: {
            symbolic: ['A Roda do Dharma', 'Lança', 'Paciência'],
            visual: ['Postura Serena', 'Vestes Reais Modestas']
        },
        psychology: {
            virtues: ['Verdade absoluta', 'Paciência infinita', 'Justiça'],
            flaws: ['Vício em jogo', 'Passividade excessiva', 'Apego à letra da lei em vez do espírito'],
            analysis: 'Yudhishthira é a personificação do Dharma estático. Ele luta para entender como a verdade pode ser complexa. Seu maior erro, o jogo de dados, nasce de sua incapacidade de recusar um desafio formal, mostrando como a virtude cega pode ser explorada. Sua jornada é aprender que o Dharma é sutil (sukshma) e às vezes requer adaptação.'
        },
        timeline: [
            {
                title: 'O Jogo de Dados',
                description: 'Aposta e perde seu reino, irmãos e esposa.',
                significance: 'O ponto de virada trágica de sua vida, onde sua virtude se torna seu vício.'
            },
            {
                title: 'Yaksha Prashna',
                description: 'Responde às perguntas do Yaksha (Dharma) para reviver seus irmãos.',
                significance: 'Demonstra sua sabedoria superior e valida seu título de Dharmaraja.'
            },
            {
                title: 'A Recusa ao Céu',
                description: 'Recusa-se a entrar no céu sem seu cachorro (Dharma disfarçado).',
                significance: 'Seu teste final de lealdade e compaixão.'
            }
        ],
        relationships: [
            { name: 'Bhima', relation: 'Irmão', details: 'O braço forte que protege o rei pacífico.' },
            { name: 'Draupadi', relation: 'Esposa', details: 'Uma relação tensa após o jogo de dados, mas de profundo respeito.' },
            { name: 'Vidura', relation: 'Mentor', details: 'A consciência política que guia sua consciência moral.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe justo e obediente.',
            end: 'O rei sábio e desiludido que alcança o céu em seu próprio corpo físico.'
        },
        quotes: [
            '"A raiva é o assassino da virtude."',
            '"O que é mais incrível? Que vemos pessoas morrendo todos os dias, mas agimos como se fôssemos viver para sempre."'
        ]
    },
    {
        id: 'bhima',
        name: 'Bhima',
        epithets: ['Vrikodara', 'Bhimasena'],
        lineage: {
            father: 'Vayu (Vento) / Pandu',
            mother: 'Kunti',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Protetor', 'Cozinheiro'],
        attributes: {
            symbolic: ['Maça (Gada)', 'Vento', 'Força Bruta', 'Fome'],
            visual: ['Corpo Musculoso', 'Maça Gigante']
        },
        psychology: {
            virtues: ['Força imensa', 'Lealdade feroz', 'Honestidade emocional'],
            flaws: ['Gula', 'Ira incontrolável', 'Falta de sutileza'],
            analysis: 'Bhima representa a emoção crua, a vitalidade e a força física. Enquanto Yudhishthira hesita intelectualmente, Bhima age. Ele é o executor da vingança de Draupadi. Sua natureza é simples: ele ama e odeia com intensidade total. Ele é a fundação física sobre a qual a vitória dos Pandavas é construída.'
        },
        timeline: [
            {
                title: 'Sobrevivendo ao Veneno',
                description: 'Envenenado por Duryodhana na juventude, ganha a força de 1000 elefantes.',
                significance: 'O início da rivalidade mortal com os Kauravas.'
            },
            {
                title: 'Matando Jarasandha',
                description: 'Rasga o rei de Magadha ao meio em um duelo de luta livre.',
                significance: 'Remove um obstáculo crucial para o sacrifício Rajasuya.'
            },
            {
                title: 'O Voto de Sangue',
                description: 'Bebe o sangue de Dushasana e quebra as coxas de Duryodhana.',
                significance: 'O cumprimento brutal de sua promessa a Draupadi.'
            }
        ],
        relationships: [
            { name: 'Hanuman', relation: 'Irmão Espiritual', details: 'Ambos filhos de Vayu; Hanuman ensina humildade a Bhima.' },
            { name: 'Hidimbi', relation: 'Esposa', details: 'Uma Rakshasi; mostra a capacidade de Bhima de cruzar fronteiras culturais.' },
            { name: 'Duryodhana', relation: 'Inimigo Mortal', details: 'Dois lados da mesma moeda de força física e orgulho.' }
        ],
        narrativeArc: {
            beginning: 'O jovem forte e impetuoso.',
            end: 'O vingador satisfeito, mas cansado da matança.'
        },
        quotes: [
            '"Não há floresta para o leão; onde quer que o leão vá, essa é a floresta."',
            '"Dharma é para os fracos se não for apoiado pela força."'
        ]
    },
    {
        id: 'nakula',
        name: 'Nakula',
        epithets: ['Granthika'],
        lineage: {
            father: 'Ashwini Kumars / Pandu',
            mother: 'Madri',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Espadachim', 'Cuidador de Cavalos'],
        attributes: {
            symbolic: ['Espada', 'Beleza', 'Cavalos'],
            visual: ['Extremamente Belo', 'Ágil']
        },
        psychology: {
            virtues: ['Habilidade com cavalos', 'Beleza divina', 'Lealdade'],
            flaws: ['Orgulho de sua aparência (mencionado no Mahaprasthanika)'],
            analysis: 'Nakula, junto com Sahadeva, representa a dualidade e a harmonia. Filho dos deuses gêmeos da medicina e da beleza, ele é mestre em espadas e equitação. Embora menos proeminente que seus irmãos mais velhos, sua lealdade a Yudhishthira quando este escolhe revivê-lo (para que uma mãe de cada lado tenha um filho vivo) destaca a justiça da família.'
        },
        timeline: [
            {
                title: 'Conquista do Oeste',
                description: 'Durante o Rajasuya, conquista os reinos do oeste.',
                significance: 'Demonstra sua proeza militar independente.'
            },
            {
                title: 'A Vida de Disfarce',
                description: 'Serve como Granthika, o cuidador de cavalos, no reino de Virata.',
                significance: 'Humildade em servir animais que ele ama.'
            }
        ],
        relationships: [
            { name: 'Sahadeva', relation: 'Irmão Gêmeo', details: 'Inseparáveis em batalha e vida.' },
            { name: 'Draupadi', relation: 'Esposa', details: 'Parte do casamento poliândrico.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe belo.',
            end: 'Cai no Himalaia por orgulho de sua beleza.'
        },
        quotes: []
    },
    {
        id: 'sahadeva',
        name: 'Sahadeva',
        epithets: ['Tantripal'],
        lineage: {
            father: 'Ashwini Kumars / Pandu',
            mother: 'Madri',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas'],
        role: ['Guerreiro', 'Astrólogo', 'Sábio'],
        attributes: {
            symbolic: ['Machado', 'Sabedoria', 'Estrelas'],
            visual: ['Calmo', 'Pensativo']
        },
        psychology: {
            virtues: ['Presciência', 'Inteligência', 'Devoção'],
            flaws: ['Maldição do conhecimento (sabe o futuro mas não pode contar)'],
            analysis: 'Sahadeva é o mais sábio dos Pandavas. Diz-se que ele comeu a carne de seu pai Pandu para ganhar sabedoria. Ele sabia que a guerra aconteceria mas foi proibido de revelar. Ele mata Shakuni, o cérebro por trás da guerra, encerrando o ciclo de manipulação intelectual.'
        },
        timeline: [
            {
                title: 'A Conquista do Sul',
                description: 'Subjuga os reinos do sul para o Rajasuya.',
                significance: 'Expansão do império.'
            },
            {
                title: 'Morte de Shakuni',
                description: 'Mata o tio ardiloso no penúltimo dia da guerra.',
                significance: 'Elimina a fonte da discórdia.'
            }
        ],
        relationships: [
            { name: 'Nakula', relation: 'Irmão Gêmeo', details: 'Seu par constante.' },
            { name: 'Krishna', relation: 'Senhor', details: 'Sahadeva foi o primeiro a sugerir Krishna como o convidado de honra no Rajasuya.' }
        ],
        narrativeArc: {
            beginning: 'O jovem silencioso que sabe tudo.',
            end: 'Cai no Himalaia por orgulho de sua sabedoria.'
        },
        quotes: []
    },
    {
        id: 'draupadi',
        name: 'Draupadi',
        epithets: ['Panchali', 'Yajnaseni', 'Krishnaa'],
        lineage: {
            father: 'Drupada',
            mother: 'Fogo (Nascida do Yajna)',
            clan: 'Panchala',
            dynasty: '-'
        },
        affiliations: ['Pandavas', 'Panchala'],
        role: ['Rainha', 'Catalisadora da Guerra'],
        attributes: {
            symbolic: ['Fogo', 'Cabelos Soltos', 'Lótus Azul'],
            visual: ['Beleza Estonteante', 'Olhos de Lótus', 'Tez Escura']
        },
        psychology: {
            virtues: ['Devoção', 'Coragem', 'Intelecto afiado', 'Resiliência'],
            flaws: ['Língua afiada', 'Orgulho', 'Rancor'],
            analysis: 'Draupadi não é uma vítima passiva; ela é a força motriz (Shakti) por trás da guerra. Nascida do fogo, ela queima com uma sede de justiça. Sua humilhação no tribunal é o ponto central moral do épico, questionando se o Dharma protege as mulheres. Ela desafia os reis e sábios, sendo uma das personagens femininas mais fortes e eloquentes da mitologia.'
        },
        timeline: [
            {
                title: 'Swayamvara',
                description: 'Rejeita Karna e aceita Arjuna, mas acaba casada com os 5 irmãos.',
                significance: 'Define seu destino único e difícil.'
            },
            {
                title: 'Vastraharan (Desrobamento)',
                description: 'Ora a Krishna quando Dushasana tenta despi-la no tribunal.',
                significance: 'O momento da intervenção divina e o início de seu voto de vingança.'
            },
            {
                title: 'Conversa com Satyabhama',
                description: 'Explica como gerencia seus maridos e a casa com sabedoria.',
                significance: 'Mostra sua habilidade prática e inteligência doméstica.'
            }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Sakha (Amigo)', details: 'Seu único verdadeiro protetor e confidente.' },
            { name: 'Arjuna', relation: 'Marido Favorito', details: 'O homem que ela escolheu, embora ele a tenha compartilhado.' },
            { name: 'Karna', relation: 'Rejeitado', details: 'A rejeição que semeou o ódio de Karna.' }
        ],
        narrativeArc: {
            beginning: 'A princesa nascida do fogo destinada a destruir os Kuru.',
            end: 'A rainha que viu sua vingança, mas perdeu todos os seus filhos.'
        },
        quotes: [
            '"Seus esposos não têm dever para com vocês? Onde está o Dharma agora?"',
            '"Não prenderei meu cabelo até lavá-lo com o sangue de Dushasana."'
        ]
    },
    {
        id: 'karna',
        name: 'Karna',
        epithets: ['Radheya', 'Vasu-Sena', 'Angaraj', 'Suryaputra'],
        lineage: {
            father: 'Surya (Sol)',
            mother: 'Kunti (adotado por Radha e Adhiratha)',
            clan: 'Suta (por adoção)',
            dynasty: '-'
        },
        affiliations: ['Kauravas', 'Reino de Anga'],
        role: ['Guerreiro', 'Doador (Danveer)', 'Amigo Leal'],
        attributes: {
            symbolic: ['Sol', 'Armadura Dourada (Kavacha)', 'Brincos (Kundala)', 'Caridade'],
            visual: ['Brilho Solar', 'Olhos Melancólicos']
        },
        psychology: {
            virtues: ['Generosidade extrema', 'Lealdade inabalável', 'Valor marcial'],
            flaws: ['Necessidade de validação', 'Arrogância defensiva', 'Má companhia'],
            analysis: 'Karna é o arquétipo do herói trágico e do "outsider". Rejeitado pela sociedade e pela mãe, ele busca identidade e respeito a qualquer custo. Sua lealdade a Duryodhana é sua virtude e sua maldição. Ele é tão ou mais habilidoso que Arjuna, mas o destino (Daiva) conspira contra ele a cada passo. Ele representa a luta do mérito contra o nascimento privilegiado.'
        },
        timeline: [
            {
                title: 'A Maldição de Parashurama',
                description: 'Amaldiçoado a esquecer seus mantras divinos na hora da morte por mentir sobre sua casta.',
                significance: 'Sela seu destino fatal.'
            },
            {
                title: 'Doação da Armadura',
                description: 'Indra pede sua armadura impenetrável; Karna a arranca de seu corpo e doa.',
                significance: 'O auge de sua caridade, tornando-se vulnerável.'
            },
            {
                title: 'Roda Presa',
                description: 'Sua carruagem atola na batalha final, e ele é morto desarmado.',
                significance: 'A culminação de todas as maldições e o fim trágico.'
            }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Melhor Amigo', details: 'O único que lhe deu respeito e status.' },
            { name: 'Kunti', relation: 'Mãe Biológica', details: 'O segredo que o assombrou; ele promete não matar seus outros filhos, exceto Arjuna.' },
            { name: 'Shalya', relation: 'Cocheiro', details: 'Seu cocheiro que o desmoralizou na batalha final.' }
        ],
        narrativeArc: {
            beginning: 'O filho abandonado buscando seu lugar ao sol.',
            end: 'O herói caído cuja nobreza só é totalmente reconhecida após a morte.'
        },
        quotes: [
            '"O nascimento foi o destino; a coragem é minha escolha."',
            '"Eu não abandonarei Duryodhana, nem por todo o ouro da Terra, nem pelo medo da morte."'
        ]
    },
    {
        id: 'duryodhana',
        name: 'Duryodhana',
        epithets: ['Suyodhana', 'Kururaja'],
        lineage: {
            father: 'Dhritarashtra',
            mother: 'Gandhari',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Kauravas', 'Hastinapura'],
        role: ['Príncipe Herdeiro', 'Antagonista', 'Guerreiro de Maça'],
        attributes: {
            symbolic: ['Inveja', 'Ambição', 'Coxas de Ferro'],
            visual: ['Imponente', 'Olhar Arrogante']
        },
        psychology: {
            virtues: ['Liderança', 'Generosidade com amigos', 'Coragem física'],
            flaws: ['Inveja corroedora', 'Arrogância', 'Recusa em ouvir a razão'],
            analysis: 'Duryodhana ("Aquele difícil de combater") é movido por uma inveja existencial dos Pandavas. Ele acredita genuinamente que foi injustiçado. Ele não é puramente mau; é um rei capaz para seus súditos, mas sua obsessão pelos primos o destrói. Ele representa o Kali Purusha (o homem da era das trevas) - egoísta, materialista e incapaz de ver o divino.'
        },
        timeline: [
            {
                title: 'Tentativa de Envenenamento',
                description: 'Tenta matar Bhima na juventude.',
                significance: 'Mostra a precocidade de seu ódio.'
            },
            {
                title: 'Humilhação no Palácio de Maya',
                description: 'Cai na água e pensa ser chão; Draupadi ri.',
                significance: 'O insulto que acendeu o desejo de destruir os Pandavas.'
            },
            {
                title: 'Morte no Lago',
                description: 'Esconde-se em um lago gelado antes de ser morto por Bhima.',
                significance: 'O fim solitário de uma ambição que destruiu o mundo.'
            }
        ],
        relationships: [
            { name: 'Karna', relation: 'Amigo da Alma', details: 'Sua lealdade a Karna é sua característica mais redentora.' },
            { name: 'Shakuni', relation: 'Tio Materno', details: 'O manipulador que alimentou seu ódio.' },
            { name: 'Dhritarashtra', relation: 'Pai', details: 'O pai cego cujo amor permitiu sua ruína.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe invejoso nascido com presságios ruins.',
            end: 'O rei caído que vai para o céu por ter morrido como um guerreiro.'
        },
        quotes: [
            '"Eu não darei terra suficiente nem para a ponta de uma agulha."',
            '"Eu conheço o Dharma, mas não sou inclinado a ele. Conheço o Adharma, e não consigo desistir dele."'
        ]
    },
    {
        id: 'bhishma',
        name: 'Bhishma',
        epithets: ['Devavrata', 'Gangaputra', 'Pitamaha'],
        lineage: {
            father: 'Shantanu',
            mother: 'Ganga (Rio)',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Kauravas (por juramento)', 'Hastinapura'],
        role: ['Patriarca', 'Guardião do Trono', 'Guerreiro'],
        attributes: {
            symbolic: ['Cama de Flechas', 'Voto Terrível (Bhishma Pratigya)', 'Oceanico'],
            visual: ['Barba Branca', 'Armadura Prateada', 'Aura Serena']
        },
        psychology: {
            virtues: ['Autossacrifício', 'Sabedoria', 'Invencibilidade'],
            flaws: ['Rigidez moral', 'Passividade diante da injustiça (Draupadi)', 'Lealdade cega ao trono'],
            analysis: 'Bhishma é o "Terrível" devido ao seu voto de celibato e servidão. Ele é o pilar de Hastinapura, mas sua tragédia é que seu juramento de proteger o trono o obriga a lutar do lado do Adharma (Kauravas), mesmo sabendo que estão errados. Ele representa o conflito entre o dever pessoal (juramento) e o dever universal (justiça).'
        },
        timeline: [
            {
                title: 'O Voto',
                description: 'Renuncia ao trono e ao casamento para que seu pai possa casar-se com Satyavati.',
                significance: 'Concede-lhe o poder de escolher a hora da sua morte (Iccha Mrityu).'
            },
            {
                title: 'Silêncio na Corte',
                description: 'Permanece calado enquanto Draupadi é desrespeitada.',
                significance: 'Sua maior falha moral.'
            },
            {
                title: 'Cama de Flechas',
                description: 'Cai pelas flechas de Arjuna e Shikhandi, esperando o solstício para morrer.',
                significance: 'Torna-se o mestre que ensina o Dharma a Yudhishthira antes de partir.'
            }
        ],
        relationships: [
            { name: 'Satyavati', relation: 'Madrasta', details: 'A mulher por quem ele sacrificou sua vida.' },
            { name: 'Arjuna', relation: 'Neto/Algoz', details: 'O neto favorito que o liberta de seu corpo.' },
            { name: 'Amba', relation: 'Iniciadora do Destino', details: 'A mulher que jurou matá-lo e renasceu como Shikhandi.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe filho de um rio.',
            end: 'O sábio ancião na cama de flechas, transmitindo a sabedoria antiga.'
        },
        quotes: [
            '"O destino é poderoso, e o esforço é inútil? Não. O destino é o fruto do esforço de vidas passadas."',
            '"Eu sou o escravo do meu juramento."'
        ]
    },
    {
        id: 'shakuni',
        name: 'Shakuni',
        epithets: ['Saubala'],
        lineage: {
            father: 'Suvala',
            mother: '-',
            clan: 'Gandhara',
            dynasty: '-'
        },
        affiliations: ['Kauravas', 'Gandhara'],
        role: ['Estrategista', 'Manipulador', 'Tio'],
        attributes: {
            symbolic: ['Dados de Osso', 'Coxeio', 'Astúcia'],
            visual: ['Sorriso Malicioso', 'Manco']
        },
        psychology: {
            virtues: ['Inteligência', 'Persistência', 'Amor pela irmã Gandhari'],
            flaws: ['Vingativo', 'Traiçoeiro', 'Manipulador'],
            analysis: 'Shakuni é o grande arquiteto da guerra. Dizem que ele buscava vingança contra Bhishma e o clã Kuru por aprisionar sua família. Ele usa Duryodhana como uma arma para destruir a dinastia Kuru de dentro para fora. Ele representa a inteligência maliciosa que explora as fraquezas humanas.'
        },
        timeline: [
            {
                title: 'O Jogo de Dados',
                description: 'Manipula os dados para vencer Yudhishthira repetidamente.',
                significance: 'O golpe mestre que exila os Pandavas.'
            },
            {
                title: 'Conspirações',
                description: 'Constantemente envenena a mente de Duryodhana contra os primos.',
                significance: 'Mantém o fogo do ódio aceso.'
            }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Sobrinho/Peão', details: 'O instrumento de sua vingança contra os Kuru.' },
            { name: 'Sahadeva', relation: 'Algoz', details: 'O mais sábio dos Pandavas que finalmente o mata.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe de Gandhara humilhado.',
            end: 'O vingador que conseguiu destruir a casa de seus inimigos.'
        },
        quotes: [
            '"Eu não jogo dados, sobrinho. Eu jogo com homens."',
            '"Um inimigo ferido é mais perigoso que uma cobra."'
        ]
    },
    {
        id: 'drona',
        name: 'Drona',
        epithets: ['Acharya', 'Bharadwaja'],
        lineage: {
            father: 'Bharadwaja',
            mother: 'Ninfa Ghritachi',
            clan: 'Brahmane',
            dynasty: '-'
        },
        affiliations: ['Kauravas', 'Hastinapura'],
        role: ['Mestre de Armas', 'Guru', 'General'],
        attributes: {
            symbolic: ['Arco', 'Jarra (Drona)', 'Mestre'],
            visual: ['Vestes de Brahmane mas com armas', 'Cabelos grisalhos']
        },
        psychology: {
            virtues: ['Conhecimento supremo de armas', 'Ensino'],
            flaws: ['Apego ao filho Ashwatthama', 'Ambição', 'Vingança contra Drupada'],
            analysis: 'Drona é um Brahmane que age como Kshatriya. Sua pobreza inicial o amargurou, e a rejeição por seu amigo Drupada o motivou a criar os maiores guerreiros para obter vingança. Ele morre quando perde a vontade de viver ao ouvir uma mentira sobre a morte de seu filho, mostrando que seu apego emocional (putra-moha) era sua única fraqueza.'
        },
        timeline: [
            {
                title: 'Vingança em Drupada',
                description: 'Usa seus alunos Pandavas para capturar o Rei Drupada.',
                significance: 'Cumpre sua vingança pessoal.'
            },
            {
                title: 'Comando Kaurava',
                description: 'Assume o exército após a queda de Bhishma, tornando-se impiedoso.',
                significance: 'Cria o Chakravyuha que mata Abhimanyu.'
            }
        ],
        relationships: [
            { name: 'Ashwatthama', relation: 'Filho', details: 'A luz de seus olhos e sua perdição.' },
            { name: 'Arjuna', relation: 'Aluno Favorito', details: 'Amava Arjuna mais que o próprio filho em habilidade.' },
            { name: 'Drupada', relation: 'Inimigo', details: 'A amizade de infância que virou ódio.' }
        ],
        narrativeArc: {
            beginning: 'O Brahmane pobre rejeitado.',
            end: 'O general invencível que depõe as armas por desgosto.'
        },
        quotes: [
            '"Não recusarei conhecimento a ninguém, mas Arjuna será o melhor."'
        ]
    },
    {
        id: 'vidura',
        name: 'Vidura',
        epithets: ['Kshatta', 'Mahamatra'],
        lineage: {
            father: 'Vyasa',
            mother: 'Serva de Ambika',
            clan: 'Kuru',
            dynasty: '-'
        },
        affiliations: ['Kauravas (Ministro)', 'Pandavas (Simpatizante)'],
        role: ['Primeiro Ministro', 'Consciência Moral', 'Devoto'],
        attributes: {
            symbolic: ['Sabedoria (Vidura Neeti)', 'Simplicidade'],
            visual: ['Humilde', 'Vestes Simples']
        },
        psychology: {
            virtues: ['Sabedoria absoluta', 'Imparcialidade', 'Devoção'],
            flaws: ['Falta de poder político real devido ao nascimento'],
            analysis: 'Vidura é a encarnação do Deus Dharma amaldiçoado a nascer como humano. Ele é a voz da razão que Dhritarashtra sempre ouve, mas nunca segue. Ele representa a impotência da sabedoria sem o poder de execução.'
        },
        timeline: [
            {
                title: 'Salvando os Pandavas',
                description: 'Avisa Yudhishthira em código sobre o incêndio na casa de cera.',
                significance: 'O guardião secreto dos Pandavas.'
            },
            {
                title: 'Peregrinação',
                description: 'Deixa o reino antes da guerra e retorna depois.',
                significance: 'Recusa-se a tomar parte no massacre.'
            }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Meio-Irmão/Rei', details: 'Sempre tenta guiá-lo para a luz.' },
            { name: 'Krishna', relation: 'Senhor', details: 'Krishna escolhe jantar em sua casa humilde em vez do palácio.' }
        ],
        narrativeArc: {
            beginning: 'O sábio filho da serva.',
            end: 'Funde sua energia vital com Yudhishthira na floresta e morre.'
        },
        quotes: [
            '"A sabedoria é a arma mais afiada."'
        ]
    },
    {
        id: 'ashwatthama',
        name: 'Ashwatthama',
        epithets: ['Drauni'],
        lineage: {
            father: 'Drona',
            mother: 'Kripi',
            clan: 'Brahmane',
            dynasty: '-'
        },
        affiliations: ['Kauravas'],
        role: ['Guerreiro', 'Vingador Noturno', 'Imortal (Chiranjivi)'],
        attributes: {
            symbolic: ['Pedra Preciosa na Testa', 'Imortalidade', 'Ira de Shiva'],
            visual: ['Feroz', 'Jóia brilhante (removida depois)']
        },
        psychology: {
            virtues: ['Coragem', 'Lealdade ao pai'],
            flaws: ['Impulsividade', 'Crueldade', 'Incapaz de aceitar a derrota'],
            analysis: 'Ashwatthama é um avatar parcial de Shiva (em sua fúria). Ele comete o crime mais hediondo da guerra: matar os inimigos enquanto dormem e atacar um feto. Sua punição é a imortalidade em sofrimento, vagando pela terra com feridas que nunca cicatrizam. Ele representa as consequências kármicas da violência desenfreada.'
        },
        timeline: [
            {
                title: 'Jóia da Testa',
                description: 'Nasceu com uma jóia que o protegia de fome, sede e medo.',
                significance: 'Sua fonte de poder.'
            },
            {
                title: 'O Massacre Noturno',
                description: 'Mata os filhos de Draupadi e o exército Pandava durante o sono.',
                significance: 'A quebra final de todas as regras de guerra.'
            },
            {
                title: 'A Maldição',
                description: 'Krishna o amaldiçoa a vagar sozinho e doente por 3000 anos.',
                significance: 'O destino pior que a morte.'
            }
        ],
        relationships: [
            { name: 'Drona', relation: 'Pai', details: 'Tentou vingar a morte do pai de forma terrível.' },
            { name: 'Duryodhana', relation: 'Rei', details: 'O último general nomeado por Duryodhana.' }
        ],
        narrativeArc: {
            beginning: 'O filho precioso do mestre.',
            end: 'O pária imortal e miserável.'
        },
        quotes: [
            '"Eu matarei todos eles hoje à noite, enquanto dormem."'
        ]
    },
    {
        id: 'kunti',
        name: 'Kunti',
        epithets: ['Pritha'],
        lineage: {
            father: 'Shurasena (adotada por Kuntibhoja)',
            mother: '-',
            clan: 'Yadava / Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas', 'Mãe Real'],
        role: ['Mãe', 'Rainha Viúva'],
        attributes: {
            symbolic: ['Mantra Divino', 'Força Materna'],
            visual: ['Digna', 'Sofrida']
        },
        psychology: {
            virtues: ['Resistência', 'Sacrifício maternal', 'Sabedoria política'],
            flaws: ['Escondeu o segredo de Karna', 'Curiosidade juvenil imprudente'],
            analysis: 'Kunti é a matriarca sofredora. Sua vida é uma série de perdas e exílios, mas ela mantém os Pandavas unidos. Seu segredo sobre Karna é a semente trágica da guerra. Ela escolhe ir para a floresta com Dhritarashtra no final, renunciando à glória da vitória de seus filhos.'
        },
        timeline: [
            {
                title: 'O Mantra',
                description: 'Recebe o mantra de Durvasa e testa invocando o Sol (nascimento de Karna).',
                significance: 'O erro que molda a guerra.'
            },
            {
                title: 'A Revelação a Karna',
                description: 'Finalmente diz a verdade a Karna antes da guerra para tentar trazê-lo para seu lado.',
                significance: 'Tarde demais para evitar o conflito.'
            }
        ],
        relationships: [
            { name: 'Pandu', relation: 'Esposo', details: 'O rei amaldiçoado.' },
            { name: 'Karna', relation: 'Primogênito Abandonado', details: 'A dor secreta de sua vida.' }
        ],
        narrativeArc: {
            beginning: 'A princesa curiosa.',
            end: 'A rainha eremita que morre em um incêndio na floresta.'
        },
        quotes: []
    },
    {
        id: 'dhritarashtra',
        name: 'Dhritarashtra',
        epithets: ['Rei Cego', 'Ambika-suta'],
        lineage: {
            father: 'Vyasa',
            mother: 'Ambika',
            clan: 'Kuru',
            dynasty: '-'
        },
        affiliations: ['Kauravas', 'Rei de Hastinapura'],
        role: ['Rei', 'Pai'],
        attributes: {
            symbolic: ['Cegueira', 'Apego (Moha)'],
            visual: ['Cego', 'Robusto']
        },
        psychology: {
            virtues: ['Força física', 'Amor pelos filhos'],
            flaws: ['Cegueira moral', 'Ambição vicária', 'Fraqueza de caráter'],
            analysis: 'Dhritarashtra simboliza a mente cega pelo apego. Sua cegueira física é um espelho de sua incapacidade de ver a verdade e a justiça quando se trata de seu filho Duryodhana. Ele quer que seu filho tenha o que ele não pôde ter (o trono incontestado), ignorando o Dharma.'
        },
        timeline: [
            {
                title: 'Nascimento de Duryodhana',
                description: 'Ouve presságios terríveis (choro de chacais) mas recusa abandonar o filho.',
                significance: 'Escolhe o apego sobre o bem do reino.'
            },
            {
                title: 'Abraço de Ferro',
                description: 'Tenta esmagar Bhima em um abraço após a guerra, mas esmaga uma estátua.',
                significance: 'Mostra que seu ódio persistiu até o fim.'
            }
        ],
        relationships: [
            { name: 'Gandhari', relation: 'Esposa', details: 'A mulher que compartilhou sua escuridão.' },
            { name: 'Sanjaya', relation: 'Cocheiro/Olhos', details: 'Aquele que vê a verdade por ele.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe cego preterido.',
            end: 'O velho rei arrependido consumido pelo fogo.'
        },
        quotes: []
    },
    {
        id: 'gandhari',
        name: 'Gandhari',
        epithets: ['Saubalyi'],
        lineage: {
            father: 'Suvala',
            mother: '-',
            clan: 'Gandhara',
            dynasty: '-'
        },
        affiliations: ['Kauravas', 'Rainha'],
        role: ['Rainha', 'Mãe', 'Asceta'],
        attributes: {
            symbolic: ['Venda nos Olhos', 'Poder do Tapas (Ascetismo)'],
            visual: ['Sempre vendada', 'Digna']
        },
        psychology: {
            virtues: ['Lealdade conjugal extrema', 'Retidão', 'Poder espiritual'],
            flaws: ['Ressentimento inicial'],
            analysis: 'Gandhari vendou seus olhos para não ser superior ao marido cego, mas isso também a impediu de ver e corrigir os erros de seus filhos. Seu poder espiritual era tal que ela poderia ter protegido Duryodhana em todo o corpo, mas sua própria modéstia deixou um ponto vulnerável. Ela amaldiçoa Krishna no final, mostrando seu poder.'
        },
        timeline: [
            {
                title: 'A Venda',
                description: 'Venda seus olhos voluntariamente no dia do casamento.',
                significance: 'Um ato de devoção e protesto.'
            },
            {
                title: 'A Maldição Yadava',
                description: 'Amaldiçoa o clã de Krishna a morrer como seus filhos morreram.',
                significance: 'A causa da destruição final de Dwarka.'
            }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Marido', details: 'Devoção total.' },
            { name: 'Duryodhana', relation: 'Filho', details: 'Tentou salvá-lo com seu olhar místico.' }
        ],
        narrativeArc: {
            beginning: 'A princesa de Gandhara.',
            end: 'A mãe de 100 filhos mortos.'
        },
        quotes: []
    },
    {
        id: 'abhimanyu',
        name: 'Abhimanyu',
        epithets: ['Saubhadra'],
        lineage: {
            father: 'Arjuna',
            mother: 'Subhadra',
            clan: 'Kuru / Yadava',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas'],
        role: ['Guerreiro Jovem', 'Herói Trágico'],
        attributes: {
            symbolic: ['Chakravyuha (Labirinto)', 'Juventude', 'Coragem'],
            visual: ['Jovem', 'Belo', 'Heroico']
        },
        psychology: {
            virtues: ['Coragem destemida', 'Habilidade prodígio'],
            flaws: ['Conhecimento incompleto (sabia entrar no Chakravyuha mas não sair)'],
            analysis: 'Abhimanyu representa a juventude heróica cortada antes do tempo. Ele ouviu a estratégia de quebrar o Chakravyuha ainda no ventre, mas sua mãe adormeceu antes de ouvir como sair. Sua morte injusta nas mãos de múltiplos guerreiros marcou o fim das regras de cavalheirismo (Dharma Yuddha) na guerra.'
        },
        timeline: [
            {
                title: 'O 13º Dia',
                description: 'Entra sozinho na formação Chakravyuha e causa estragos.',
                significance: 'Seu momento de glória suprema.'
            },
            {
                title: 'A Morte Injusta',
                description: 'Cercado por seis grandes guerreiros e morto desarmado.',
                significance: 'O ponto sem retorno da moralidade da guerra.'
            }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Pai', details: 'Sua vingança pela morte de Abhimanyu foi terrível.' },
            { name: 'Uttara', relation: 'Esposa', details: 'Mãe de Parikshit, o continuador da linhagem.' }
        ],
        narrativeArc: {
            beginning: 'O prodígio amado.',
            end: 'O sacrifício que encerrou a era da honra.'
        },
        quotes: []
    },
    {
        id: 'ghatotkacha',
        name: 'Ghatotkacha',
        epithets: ['Filho de Hidimbi'],
        lineage: {
            father: 'Bhima',
            mother: 'Hidimbi',
            clan: 'Rakshasa / Kuru',
            dynasty: '-'
        },
        affiliations: ['Pandavas', 'Rakshasas'],
        role: ['Guerreiro Mágico', 'Gigante'],
        attributes: {
            symbolic: ['Magia (Maya)', 'Tamanho Gigante', 'Noite'],
            visual: ['Monstruoso', 'Cabelos longos', 'Presas']
        },
        psychology: {
            virtues: ['Lealdade absoluta ao pai', 'Sacrifício'],
            flaws: ['Natureza demoníaca (usada para o bem)'],
            analysis: 'Ghatotkacha é o filho mestiço leal. Como Rakshasa, seu poder aumenta à noite. Krishna orquestrou sua morte para forçar Karna a usar sua arma divina (Shakti) que estava reservada para Arjuna. Ele morre caindo sobre o exército inimigo, esmagando milhares, servindo aos Pandavas até no último suspiro.'
        },
        timeline: [
            {
                title: 'Batalha Noturna',
                description: 'Luta à noite quando os Rakshasas são invencíveis.',
                significance: 'Aterrorizou o exército Kaurava.'
            },
            {
                title: 'O Sacrifício da Shakti',
                description: 'Morre pela arma de Indra lançada por Karna.',
                significance: 'Salvou a vida de Arjuna.'
            }
        ],
        relationships: [
            { name: 'Bhima', relation: 'Pai', details: 'Orgulho de seu filho forte.' },
            { name: 'Krishna', relation: 'Estrategista', details: 'Krishna celebrou sua morte, sabendo que isso salvou Arjuna.' }
        ],
        narrativeArc: {
            beginning: 'O filho da floresta.',
            end: 'O gigante caído.'
        },
        quotes: []
    },
    {
        id: 'shantanu',
        name: 'Shantanu',
        epithets: ['Kuruvardhana', 'Satyavachin'],
        lineage: {
            father: 'Pratipa',
            mother: 'Sunanda',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Hastinapura'],
        role: ['Rei', 'Ancestral'],
        attributes: {
            symbolic: ['Toque de Cura', 'Desejo'],
            visual: ['Rei Sábio', 'Melancólico']
        },
        psychology: {
            virtues: ['Devoção', 'Honra'],
            flaws: ['Luxúria/Paixão cegante', 'Fraqueza perante promessas de mulheres'],
            analysis: 'Shantanu é o rei governado pelo desejo (Kama). Suas duas grandes paixões (Ganga e Satyavati) definem o destino trágico de sua linhagem. Ele é um bom rei, mas um pai cujas escolhas pessoais impõem fardos terríveis aos filhos (Devavrata tornando-se Bhishma).'
        },
        timeline: [
            {
                title: 'Encontro com Ganga',
                description: 'Apaixona-se pela deusa do rio, aceitando não questionar suas ações.',
                significance: 'Leva à morte de 7 filhos e ao nascimento de Bhishma.'
            },
            {
                title: 'A Promessa a Satyavati',
                description: 'Apaixona-se pela pescadora, levando ao voto de celibato de Bhishma.',
                significance: 'A causa raiz da disputa pelo trono.'
            }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Filho', details: 'O filho que sacrificou tudo pela felicidade do pai.' },
            { name: 'Ganga', relation: 'Primeira Esposa', details: 'A deusa que o deixou quando ele questionou o afogamento dos filhos.' }
        ],
        narrativeArc: {
            beginning: 'O rei solitário.',
            end: 'O pai satisfeito mas culpado.'
        },
        quotes: []
    },
    {
        id: 'ganga',
        name: 'Ganga',
        epithets: ['Jahnavi', 'Bhagirathi', 'Tripathaga'],
        lineage: {
            father: 'Himalaya',
            mother: 'Mena',
            clan: 'Deusa',
            dynasty: '-'
        },
        affiliations: ['Devas', 'Rio Sagrado'],
        role: ['Mãe de Bhishma', 'Purificadora'],
        attributes: {
            symbolic: ['Água', 'Makara (Crocodilo)', 'Purificação'],
            visual: ['Forma Líquida e Humana', 'Divina']
        },
        psychology: {
            virtues: ['Pureza', 'Dever divino'],
            flaws: ['-'],
            analysis: 'Ganga é a força da natureza e a mãe divina. Ela executa o karma dos Vasus (deuses amaldiçoados) afogando-os para libertá-los rapidamente. Como mãe de Bhishma, ela representa o vínculo com o divino que a dinastia Kuru perde gradualmente.'
        },
        timeline: [
            {
                title: 'O Afogamento dos Vasus',
                description: 'Afoga seus 7 primeiros filhos para libertá-los de uma maldição.',
                significance: 'Um ato de misericórdia incompreensível para mortais.'
            }
        ],
        relationships: [
            { name: 'Shantanu', relation: 'Marido Mortal', details: 'Amou-o mas partiu quando ele quebrou a promessa.' },
            { name: 'Bhishma', relation: 'Filho (Prabhasa)', details: 'Criou-o nos céus antes de devolvê-lo.' }
        ],
        narrativeArc: {
            beginning: 'A deusa descendo à terra.',
            end: 'O rio que flui eternamente.'
        },
        quotes: []
    },
    {
        id: 'satyavati',
        name: 'Satyavati',
        epithets: ['Matsyagandha', 'Yojanagandha', 'Gandhavati'],
        lineage: {
            father: 'Uparichara Vasu (Rei)',
            mother: 'Adrika (Peixe/Ninfa)',
            clan: 'Pescadores (adotiva)',
            dynasty: '-'
        },
        affiliations: ['Hastinapura'],
        role: ['Rainha Mãe', 'Matriarca Pragmática'],
        attributes: {
            symbolic: ['Cheiro de Peixe/Lótus', 'Barco'],
            visual: ['Bela', 'Determinada']
        },
        psychology: {
            virtues: ['Pragmatismo', 'Visão de longo prazo'],
            flaws: ['Ambição implacável', 'Manipulação'],
            analysis: 'Satyavati é a verdadeira fundadora da dinastia Kuru "moderna". Nascida de um peixe, ela usa sua beleza e inteligência para garantir que sua linhagem governe. Ela não hesita em quebrar convenções (Niyoga) para salvar a dinastia da extinção. Ela representa a "Realpolitik" antes de Vidura ou Krishna.'
        },
        timeline: [
            {
                title: 'Encontro com Parashara',
                description: 'Concebe Vyasa em uma ilha no meio do rio.',
                significance: 'Nascimento do autor do épico.'
            },
            {
                title: 'O Casamento com Shantanu',
                description: 'Exige que seus filhos sejam herdeiros em vez de Bhishma.',
                significance: 'Garante o trono mas condena a família à discórdia.'
            }
        ],
        relationships: [
            { name: 'Vyasa', relation: 'Filho Ilegítimo', details: 'O filho que ela chama quando a dinastia enfrenta a ruína.' },
            { name: 'Bhishma', relation: 'Enteado', details: 'A relação complexa de respeito e barreira mútua.' }
        ],
        narrativeArc: {
            beginning: 'A pescadora com cheiro de peixe.',
            end: 'A rainha de cheiro divino que se retira para a floresta vendo a desgraça iminente.'
        },
        quotes: []
    },
    {
        id: 'vyasa',
        name: 'Vyasa',
        epithets: ['Krishna Dwaipayana', 'Veda Vyasa'],
        lineage: {
            father: 'Parashara',
            mother: 'Satyavati',
            clan: 'Brahmane',
            dynasty: '-'
        },
        affiliations: ['Eremita', 'Narrador'],
        role: ['Autor', 'Avô Biológico', 'Sábio'],
        attributes: {
            symbolic: ['Livro/Manuscrito', 'Pele Escura'],
            visual: ['Asceta', 'Imponente', 'Feio (repugnante aos olhos comuns)']
        },
        psychology: {
            virtues: ['Verdade', 'Visão profética', 'Desapego'],
            flaws: ['Sua aparência aterrorizante causou os defeitos de seus netos'],
            analysis: 'Vyasa é o autor e também um personagem, o "Avô" secreto de todos. Ele intervém apenas em momentos de crise existencial da linhagem. Ele representa a Verdade nua e crua, que é frequentemente feia e difícil de abraçar (daí as reações de Ambika e Ambalika a ele).'
        },
        timeline: [
            {
                title: 'Niyoga',
                description: 'Gera Dhritarashtra, Pandu e Vidura nas viúvas de seu meio-irmão.',
                significance: 'Mantém a linhagem Kuru viva.'
            },
            {
                title: 'Ditando o Mahabharata',
                description: 'Dita o épico para Ganesha.',
                significance: 'Eterniza a história.'
            }
        ],
        relationships: [
            { name: 'Ganesha', relation: 'Escriba', details: 'O deus que escreveu suas palavras.' },
            { name: 'Satyavati', relation: 'Mãe', details: 'Obedece a todos os seus comandos.' }
        ],
        narrativeArc: {
            beginning: 'O sábio nascido na ilha.',
            end: 'O eterno observador.'
        },
        quotes: []
    },
    {
        id: 'amba',
        name: 'Amba',
        epithets: ['Shikhandini'],
        lineage: {
            father: 'Rei de Kashi',
            mother: '-',
            clan: 'Kashi',
            dynasty: '-'
        },
        affiliations: ['Panchala (como Shikhandi)'],
        role: ['Princesa', 'Vingadora'],
        attributes: {
            symbolic: ['Guirlanda de Lótus', 'Fogo Tapa'],
            visual: ['Furia', 'Determinação']
        },
        psychology: {
            virtues: ['Foco', 'Resiliência'],
            flaws: ['Ódio obsessivo', 'Incapacidade de ver outra coisa senão vingança'],
            analysis: 'Amba é a personificação do ódio nascido da injustiça. Raptada por Bhishma e rejeitada por seu amado Salwa, ela culpa Bhishma por sua ruína. Sua austeridade para renascer como homem (Shikhandi) apenas para matar Bhishma é um dos maiores exemplos de determinação no épico.'
        },
        timeline: [
            {
                title: 'O Rapto',
                description: 'Levada à força por Bhishma de seu Swayamvara.',
                significance: 'O início de sua tragédia.'
            },
            {
                title: 'Renascimento',
                description: 'Renace como Shikhandi, filha de Drupada que se torna homem.',
                significance: 'O instrumento da morte de Bhishma.'
            }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Inimigo Mortal', details: 'O objeto de sua vingança eterna.' },
            { name: 'Shiva', relation: 'Divindade', details: 'Concedeu-lhe a bênção de matar Bhishma.' }
        ],
        narrativeArc: {
            beginning: 'A princesa esperançosa.',
            end: 'O guerreiro que derruba o invencível.'
        },
        quotes: []
    },
    {
        id: 'iravan',
        name: 'Iravan',
        epithets: ['Aravan'],
        lineage: {
            father: 'Arjuna',
            mother: 'Ulupi (Princesa Naga)',
            clan: 'Naga / Kuru',
            dynasty: '-'
        },
        affiliations: ['Pandavas', 'Nagas'],
        role: ['Guerreiro', 'Deus dos Ancestrais (Tamil Nadu)'],
        attributes: {
            symbolic: ['Sacrifício Próprio', 'Serpente'],
            visual: ['Jovem', 'Traços Naga']
        },
        psychology: {
            virtues: ['Autossacrifício supremo', 'Coragem'],
            flaws: ['-'],
            analysis: 'Iravan é o símbolo do sacrifício total. Ele se oferece para ser sacrificado a Kali antes da guerra para garantir a vitória (em algumas versões). Ele pede para se casar antes de morrer, e Krishna se transforma em Mohini para realizar seu desejo. Ele representa a devoção que transcende a própria vida.'
        },
        timeline: [
            {
                title: 'O Sacrifício (Kalapali)',
                description: 'Oferece a si mesmo como sacrifício para garantir a vitória dos Pandavas.',
                significance: 'Venerado como Deus Kuttantavar no sul da Índia.'
            },
            {
                title: 'Morte em Batalha',
                description: 'No texto principal, morre lutando bravamente contra o Rakshasa Alambusha.',
                significance: 'Remove um grande perigo para os Pandavas.'
            }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Pai', details: 'Encontrou-o apenas na juventude.' },
            { name: 'Ulupi', relation: 'Mãe', details: 'Criou-o no reino das serpentes.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe Naga.',
            end: 'O sacrifício divino.'
        },
        quotes: []
    },
    {
        id: 'subhadra',
        name: 'Subhadra',
        epithets: ['Chitra'],
        lineage: {
            father: 'Vasudeva',
            mother: 'Rohini',
            clan: 'Yadava',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas', 'Dwarka'],
        role: ['Esposa de Arjuna', 'Mãe de Abhimanyu'],
        attributes: {
            symbolic: ['União Kuru-Yadava', 'Carruagem'],
            visual: ['Bela', 'Olhos Expressivos']
        },
        psychology: {
            virtues: ['Coragem (dirigiu a carruagem na fuga)', 'Resiliência'],
            flaws: ['-'],
            analysis: 'Subhadra é o elo vital entre os Yadavas (Krishna) e os Pandavas. Seu casamento com Arjuna, facilitado por Krishna contra a vontade de Balarama, sela a aliança política. Ela perdeu seu filho Abhimanyu tragicamente, tornando-se uma figura de luto materno digno.'
        },
        timeline: [
            {
                title: 'O Rapto',
                description: 'Arjuna a "rapta" (com consentimento dela e de Krishna) de Dwarka.',
                significance: 'Une as duas maiores dinastias.'
            },
            {
                title: 'Sobrevivência',
                description: 'Torna-se a mentora de Parikshit, garantindo o futuro da dinastia.',
                significance: 'A avó da nova era.'
            }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Irmão', details: 'O arquiteto de seu casamento.' },
            { name: 'Arjuna', relation: 'Marido', details: 'Grande amor romântico.' },
            { name: 'Draupadi', relation: 'Co-esposa', details: 'Subhadra ganhou sua a amizade apresentando-se como serva.' }
        ],
        narrativeArc: {
            beginning: 'A irmã mimada de Krishna.',
            end: 'A rainha avó sábia.'
        },
        quotes: []
    },
    {
        id: 'drupada',
        name: 'Drupada',
        epithets: ['Yajnasena'],
        lineage: {
            father: 'Prishata',
            mother: '-',
            clan: 'Panchala',
            dynasty: '-'
        },
        affiliations: ['Panchala', 'Pandavas'],
        role: ['Rei', 'Pai de Draupadi e Dhrishtadyumna'],
        attributes: {
            symbolic: ['Fogo do Yajna', 'Vingança'],
            visual: ['Rei Guerreiro', 'Idoso']
        },
        psychology: {
            virtues: ['Hospitalidade', 'Persistência'],
            flaws: ['Arrogância (rejeitou Drona)', 'Obsessão por vingança'],
            analysis: 'Drupada representa o orgulho que gera nêmesis. Sua rejeição ao amigo pobre Drona desencadeou toda a rivalidade que culminou em Kurukshetra. Ele criou filhos especificamente para matar Drona e Bhishma, fazendo dele um dos arquitetos fundamentais da guerra.'
        },
        timeline: [
            {
                title: 'Rejeição a Drona',
                description: 'Nega amizade a Drona dizendo que "amizade só existe entre iguais".',
                significance: 'A semente da guerra.'
            },
            {
                title: 'Nascimento dos Gêmeos',
                description: 'Realiza um Yajna para obter filhos que matem Drona.',
                significance: 'Draupadi e Dhrishtadyumna nascem do fogo.'
            }
        ],
        relationships: [
            { name: 'Drona', relation: 'Inimigo/Amigo', details: 'A relação de amor-ódio que definiu sua vida.' },
            { name: 'Draupadi', relation: 'Filha', details: 'Sua "filha indesejada" que trouxe glória ao seu clã.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe orgulhoso.',
            end: 'Morto por Drona na batalha final.'
        },
        quotes: []
    },
    {
        id: 'dhrishtadyumna',
        name: 'Dhrishtadyumna',
        epithets: ['Draupada'],
        lineage: {
            father: 'Drupada',
            mother: 'Fogo',
            clan: 'Panchala',
            dynasty: '-'
        },
        affiliations: ['Pandavas', 'Panchala'],
        role: ['Comandante em Chefe', 'Matador de Drona'],
        attributes: {
            symbolic: ['Espada', 'Fogo', 'Comando'],
            visual: ['Nascido com armadura', 'Feroz']
        },
        psychology: {
            virtues: ['Destemor', 'Foco no objetivo'],
            flaws: ['Crueldade (matou Drona desarmado)'],
            analysis: 'Dhrishtadyumna nasceu com um único propósito: matar Drona. Ele é a encarnação do destino de Drona. Como comandante dos Pandavas, ele é competente, mas sua ação de decapitar Drona enquanto o mestre meditava é considerada um dos grandes pecados da guerra (Adharma), levando à sua morte horrível nas mãos de Ashwatthama.'
        },
        timeline: [
            {
                title: 'Nascimento do Fogo',
                description: 'Saiu das chamas do Yajna já adulto e armado.',
                significance: 'Destinado a matar Drona.'
            },
            {
                title: 'Decapitação de Drona',
                description: 'Mata o mestre enquanto este estava em transe.',
                significance: 'Cumprimento de seu destino e seu maior pecado.'
            }
        ],
        relationships: [
            { name: 'Draupadi', relation: 'Irmã', details: 'Protetor fervoroso de sua irmã.' },
            { name: 'Ashwatthama', relation: 'Algoz', details: 'Ashwatthama o pisoteia até a morte como vingança.' }
        ],
        narrativeArc: {
            beginning: 'O guerreiro nascido do fogo.',
            end: 'Morto sufocado durante o sono.'
        },
        quotes: []
    },
    {
        id: 'dushasana',
        name: 'Dushasana',
        epithets: ['Kaurava'],
        lineage: {
            father: 'Dhritarashtra',
            mother: 'Gandhari',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Kauravas'],
        role: ['Executor', 'Irmão Leal'],
        attributes: {
            symbolic: ['Mãos Profanas (toucou Draupadi)', 'Sangue'],
            visual: ['Brutal', 'Seguidor']
        },
        psychology: {
            virtues: ['Lealdade cega a Duryodhana'],
            flaws: ['Sadismo', 'Falta de bússola moral própria'],
            analysis: 'Dushasana é a sombra brutal de Duryodhana. Ele executa o que o irmão apenas pensa. Seu ato de tentar despir Draupadi é o catalisador emocional da guerra. Ele não tem identidade fora de ser o "segundo Kaurava". Sua morte horrível (tendo o sangue bebido por Bhima) é a purificação ritual de seu pecado contra Draupadi.'
        },
        timeline: [
            {
                title: 'Vastraharan',
                description: 'Arrasta Draupadi pelos cabelos e tenta despi-la.',
                significance: 'O crime imperdoável.'
            },
            {
                title: 'Morte Sangrenta',
                description: 'Peito rasgado por Bhima, que bebe seu sangue.',
                significance: 'O cumprimento do voto de Bhima.'
            }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Irmão/Mestre', details: 'Seguia-o até o inferno.' },
            { name: 'Bhima', relation: 'Executor', details: 'O objeto de sua morte aterrorizante.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe bully.',
            end: 'O sacrifício sangrento.'
        },
        quotes: []
    },
    {
        id: 'sanjaya',
        name: 'Sanjaya',
        epithets: ['Gavalgani'],
        lineage: {
            father: 'Gavalgana',
            mother: '-',
            clan: 'Suta',
            dynasty: '-'
        },
        affiliations: ['Dhritarashtra'],
        role: ['Narrador', 'Conselheiro', 'Visionário'],
        attributes: {
            symbolic: ['Visão Divina (Divya Drishti)'],
            visual: ['Calmo', 'Olhar distante']
        },
        psychology: {
            virtues: ['Veracidade', 'Imparcialidade', 'Devoção ao rei'],
            flaws: ['-'],
            analysis: 'Sanjaya é a "televisão" da antiguidade. Vyasa lhe concede visão divina para narrar a guerra ao rei cego. Ele não apenas narra, mas admoesta o rei por seus erros. Ele é a testemunha ocular da história e o transmissor do Bhagavad Gita para o mundo. Ele representa a verdade jornalística e espiritual.'
        },
        timeline: [
            {
                title: 'Visão Divina',
                description: 'Recebe o dom de ver tudo o que acontece no campo de batalha.',
                significance: 'Permite a narração do Gita.'
            },
            {
                title: 'O Fim da Guerra',
                description: 'Narra a morte de Duryodhana e o fim da dinastia.',
                significance: 'Testemunha final.'
            }
        ],
        relationships: [
            { name: 'Dhritarashtra', relation: 'Mestre', details: 'Serve o rei cego com verdade brutal.' },
            { name: 'Krishna', relation: 'Objeto de Devoção', details: 'Sanjaya reconhece a divindade de Krishna antes de muitos.' }
        ],
        narrativeArc: {
            beginning: 'O cocheiro fiel.',
            end: 'O sábio da floresta.'
        },
        quotes: [
            '"Onde há Krishna, o Senhor do Yoga, e onde há Arjuna, o arqueiro, lá haverá opulência, vitória, prosperidade e moralidade."'
        ]
    },
    {
        id: 'parashurama',
        name: 'Parashurama',
        epithets: ['Bhargava', 'Jamadagnya'],
        lineage: {
            father: 'Jamadagni',
            mother: 'Renuka',
            clan: 'Brahmane (Bhargava)',
            dynasty: '-'
        },
        affiliations: ['Eremita', 'Chiranjivi (Imortal)'],
        role: ['Guru', 'Avatar', 'Guerreiro'],
        attributes: {
            symbolic: ['Machado (Parashu)', 'Ira', 'Mestre de Mestres'],
            visual: ['Dreadlocks', 'Musculoso', 'Armado']
        },
        psychology: {
            virtues: ['Poder marcial absoluto', 'Justiça'],
            flaws: ['Ira rápida', 'Rigidez'],
            analysis: 'Parashurama é o Avatar que veio antes de Rama e Krishna. Ele jurou livrar a terra de reis corruptos (Kshatriyas) 21 vezes. No Mahabharata, ele aparece como o Guru dos gurus, ensinando Bhishma, Drona e Karna. Ele representa a força marcial a serviço da ordem brahmânica, mas que deve ceder lugar à nova ordem de Krishna.'
        },
        timeline: [
            {
                title: 'Duelo com Bhishma',
                description: 'Luta contra seu aluno Bhishma por causa de Amba, mas não consegue vencê-lo.',
                significance: 'Reconhece a grandeza de Bhishma.'
            },
            {
                title: 'Maldição de Karna',
                description: 'Amaldiçoa Karna por mentir sobre sua casta, mas reconhece sua habilidade.',
                significance: '-'
            }
        ],
        relationships: [
            { name: 'Bhishma', relation: 'Aluno', details: 'O único aluno que o empatou em combate.' },
            { name: 'Karna', relation: 'Aluno Amaldiçoado', details: 'Ensinou-lhe a Brahmastra.' }
        ],
        narrativeArc: {
            beginning: 'O vingador dos Brahmanes.',
            end: 'O guru eterno no Monte Mahendra.'
        },
        quotes: []
    },
    {
        id: 'ekalavya',
        name: 'Ekalavya',
        epithets: ['Nishada'],
        lineage: {
            father: 'Hiranyadhanus',
            mother: '-',
            clan: 'Nishada (Tribal)',
            dynasty: '-'
        },
        affiliations: ['Tribos da Floresta', 'Jarasandha'],
        role: ['Arqueiro', 'Rei Tribal'],
        attributes: {
            symbolic: ['Polegar Cortado', 'Estátua de Drona'],
            visual: ['Rústico', 'Habilidoso']
        },
        psychology: {
            virtues: ['Devoção ao Guru (Guru Bhakti)', 'Autodidatismo'],
            flaws: ['Ingenuidade'],
            analysis: 'Ekalavya é o símbolo do talento marginalizado. Rejeitado por Drona por ser de casta baixa, ele aprende sozinho adorando uma estátua de Drona. Sua habilidade superava a de Arjuna, levando Drona a exigir seu polegar direito como "Dakshina" (pagamento) para proteger a proeminência de Arjuna. Ele representa o sacrifício dos oprimidos para manter a ordem social estabelecida.'
        },
        timeline: [
            {
                title: 'O Polegar Direito',
                description: 'Corta seu próprio polegar sem hesitar quando Drona pede.',
                significance: 'O maior ato de Guru Bhakti da história, embora cruelmente explorado.'
            },
            {
                title: 'Morte por Krishna',
                description: 'Morto por Krishna em batalha (antes do épico principal ou durante).',
                significance: 'Libertação.'
            }
        ],
        relationships: [
            { name: 'Drona', relation: 'Guru (Ídolo)', details: 'Adorou Drona sem nunca ter sido ensinado por ele.' },
            { name: 'Arjuna', relation: 'Rival Involuntário', details: 'A razão pela qual Ekalavya teve que ser neutralizado.' }
        ],
        narrativeArc: {
            beginning: 'O menino tribal rejeitado.',
            end: 'O arqueiro lenda sem polegar.'
        },
        quotes: []
    },
    {
        id: 'shalya',
        name: 'Shalya',
        epithets: ['Rei de Madra'],
        lineage: {
            father: '-',
            mother: '-',
            clan: 'Madra',
            dynasty: '-'
        },
        affiliations: ['Kauravas (por engano)', 'Pandavas (tio)'],
        role: ['Rei', 'Cocheiro de Karna', 'General'],
        attributes: {
            symbolic: ['Cocheiro Relutante'],
            visual: ['Rei Poderoso']
        },
        psychology: {
            virtues: ['Honra (manteve a palavra a Duryodhana)', 'Amor pelos sobrinhos'],
            flaws: ['Vaidade (caiu no truque de Duryodhana)'],
            analysis: 'Shalya, tio dos gêmeos, ia lutar pelos Pandavas, mas foi enganado pela hospitalidade de Duryodhana e, por honra, concordou em lutar pelos Kauravas. Ele serviu como cocheiro de Karna, desmoralizando-o constantemente (como prometido a Yudhishthira) para reduzir sua eficácia. Ele representa como a honra técnica pode ser usada contra a intenção moral.'
        },
        timeline: [
            {
                title: 'O Banquete de Duryodhana',
                description: 'Aceita a hospitalidade pensando ser de Yudhishthira e fica obrigado a lutar pelo inimigo.',
                significance: 'A armadilha da etiqueta.'
            },
            {
                title: 'Cocheiro de Karna',
                description: 'Concorda em guiar Karna apenas sob a condição de poder falar o que quiser (insultos).',
                significance: 'Sabotagem interna.'
            }
        ],
        relationships: [
            { name: 'Nakula/Sahadeva', relation: 'Tio Materno', details: 'Amava-os profundamente.' },
            { name: 'Karna', relation: 'Parceiro Forçado', details: 'Relação tóxica que minou Karna.' }
        ],
        narrativeArc: {
            beginning: 'O tio amoroso.',
            end: 'O último comandante Kaurava, morto por Yudhishthira.'
        },
        quotes: []
    },
    {
        id: 'kripa',
        name: 'Kripacharya',
        epithets: ['Gautama'],
        lineage: {
            father: 'Sharadvan',
            mother: 'Ninfa Janapadi',
            clan: 'Brahmane',
            dynasty: '-'
        },
        affiliations: ['Kauravas (Guru Real)'],
        role: ['Guru', 'Imortal (Chiranjivi)'],
        attributes: {
            symbolic: ['Imortalidade', 'Dharma'],
            visual: ['Sábio', 'Guerreiro']
        },
        psychology: {
            virtues: ['Imparcialidade', 'Dever', 'Sobrevivência'],
            flaws: ['Participou do massacre noturno (relutantemente)'],
            analysis: 'Kripa é um dos 7 imortais. Ele foi o primeiro professor dos príncipes antes de Drona. Ao contrário de Drona, ele não tem amargura ou agenda pessoal. Ele luta pelos Kauravas por dever (comeu o sal deles), mas sobrevive à guerra para se tornar o preceptor do neto de Arjuna, Parikshit, garantindo a continuidade do conhecimento.'
        },
        timeline: [
            {
                title: 'Achado no Mato',
                description: 'Encontrado com sua irmã Kripi em um canteiro de grama.',
                significance: 'Origem mística.'
            },
            {
                title: 'Guru de Parikshit',
                description: 'Torna-se o mestre da nova geração após a guerra.',
                significance: 'A ponte entre as eras.'
            }
        ],
        relationships: [
            { name: 'Ashwatthama', relation: 'Sobrinho', details: 'Tenta impedir o sobrinho de cometer o massacre noturno.' },
            { name: 'Drona', relation: 'Cunhado', details: 'Kripi, irmã de Kripa, casou-se com Drona.' }
        ],
        narrativeArc: {
            beginning: 'O órfão adotado pelo rei.',
            end: 'O guru eterno.'
        },
        quotes: []
    }
];
