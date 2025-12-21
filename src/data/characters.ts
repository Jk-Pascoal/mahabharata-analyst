import type { Character } from '../types';

export const characters: Character[] = [
    {
        id: 'arjuna',
        name: 'Arjuna',
        epithets: ['Partha', 'Dhananjaya', 'Gudakesha', 'Savyasachin'],
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
            { name: 'Karna', relation: 'Rival/Irmão', details: 'O eu sombrio; o igual que ele mata sem saber.' }
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
        epithets: ['Vasudeva', 'Madhusudana', 'Hrishikesha', 'Yogeshvara'],
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
            middle: 'O estrategista distinto e eixo do mundo político.',
            end: 'A testemunha silenciosa da destruição de seu próprio clã e sua partida.'
        },
        quotes: [
            '"Eu sou o Tempo, o destruidor de mundos, totalmente desenvolvido, e vim aqui para matar esses homens."',
            '"Abandone todos os dharmas e renda-se apenas a Mim."'
        ]
    },
    {
        id: 'yudhisthira',
        name: 'Yudhisthira',
        epithets: ['Dharmaraja', 'Ajatashatru (Aquele sem inimigos)'],
        lineage: {
            father: 'Dharma (Espiritual) / Pandu (Terreno)',
            mother: 'Kunti',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas', 'Indraprastha', 'Hastinapura'],
        role: ['Rei', 'Imperador', 'Exilado'],
        attributes: {
            symbolic: ['A Lança', 'Os Dados', 'Pés descalços (Humildade)'],
            visual: ['Semblante sereno', 'Trajes simples']
        },
        psychology: {
            virtues: ['Veracidade', 'Paciência', 'Perdão', 'Sabedoria'],
            flaws: ['Vício em jogos', 'Retidão passiva', 'Incapacidade de agir na crise'],
            analysis: 'Yudhisthira é a representação trágica do Dharma Estático — retidão seguidora de regras. Sua tragédia é que sua adesão à "letra da lei" (aceitar o jogo de dados) leva ao Adharma catastrófico (a humilhação de Draupadi). Sua jornada envolve aprender que o verdadeiro Dharma requer discernimento e às vezes conflito. Ele é o único a alcançar o céu em seu corpo físico, mas sofre o maior tormento interno.'
        },
        timeline: [
            {
                title: 'O Jogo de Dados',
                description: 'Aposta seu reino, irmãos e esposa.',
                significance: 'Seu maior fracasso, nascido da incapacidade de recusar um desafio (e um vício secreto).'
            },
            {
                title: 'Yaksha Prashna',
                description: 'Responde aos enigmas do Espírito do Lago para reviver seus irmãos.',
                significance: 'Prova que sua sabedoria constitui sua verdadeira força, superior à força de Bhima ou habilidade de Arjuna.'
            },
            {
                title: 'Ascensão ao Céu',
                description: 'Recusa-se a abandonar um cachorro de rua para entrar no céu.',
                significance: 'O cachorro se revela como Dharma; seu teste final de compaixão sobre glória.'
            }
        ],
        relationships: [
            { name: 'Bhima', relation: 'Irmão', details: 'A força que protege sua retidão; seu executor físico.' },
            { name: 'Draupadi', relation: 'Esposa', details: 'Ela desafia constantemente sua definição passiva de Dharma.' },
            { name: 'Vidura', relation: 'Tio/Mentor', details: 'Seu espelho intelectual e fonte de conselho.' }
        ],
        narrativeArc: {
            beginning: 'O herdeiro legítimo preso pelo protocolo.',
            end: 'O viajante solitário que abandona laços terrenos pela Verdade.'
        },
        quotes: [
            '"A ira é um invasor estrangeiro da alma."',
            '"A coisa mais maravilhosa é que dia após dia as pessoas morrem, mas os vivos acham que viverão para sempre."'
        ]
    },
    {
        id: 'karna',
        name: 'Karna',
        epithets: ['Radheya', 'Vasusena', 'Angaraj', 'Daanveer'],
        lineage: {
            father: 'Surya (Espiritual) / Adhiratha (Adotivo)',
            mother: 'Kunti (Biológica) / Radha (Adotiva)',
            clan: 'Suta (Casta de Carroceiros)',
            dynasty: 'Solar/Lunar (Misto)'
        },
        affiliations: ['Kauravas', 'Reino de Anga'],
        role: ['Guerreiro', 'Rei de Anga', 'Melhor Amigo de Duryodhana'],
        attributes: {
            symbolic: ['Armadura Solar (Kavacha)', 'Brincos (Kundala)', 'Caridade', 'Maldição'],
            visual: ['Brilho Solar', 'Olhar Melancólico']
        },
        psychology: {
            virtues: ['Generosidade extrema', 'Lealdade inabalável', 'Resiliência'],
            flaws: ['Inveja de Arjuna', 'Desejo de validação social', 'Cegueira moral pela amizade'],
            analysis: 'Karna é o arquétipo do "Outsider" não reconhecido. Sua tragédia não é o destino, mas a busca por status que o leva a se aliar ao Adharma. Ele é mais nobre que muitos reis, mas sua amargura contra o sistema de castas o corrompe. Ele morre indefeso, simbolizando que nenhum mérito individual pode salvar quem luta do lado errado da História (Dharma).'
        },
        timeline: [
            {
                title: 'O Torneio',
                description: 'Desafia Arjuna publicamente, mas é rejeitado por sua casta. Duryodhana o coroa Rei.',
                significance: 'O início de sua lealdade eterna aos Kauravas.'
            },
            {
                title: 'A Promessa a Kunti',
                description: 'Descobre sua verdadeira mãe, mas recusa mudar de lado, prometendo matar apenas Arjuna.',
                significance: 'O auge de sua integridade moral e trágica.'
            },
            {
                title: 'A Roda Presa',
                description: 'Morre tentando erguer a roda de sua carruagem, morto por Arjuna desarmado.',
                significance: 'Cumprimento de todas as maldições; a morte do "Sol" na terra.'
            }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Melhor Amigo', details: 'A única pessoa que o aceitou sem julgar sua origem.' },
            { name: 'Arjuna', relation: 'Rival/Irmão', details: 'A obsessão de sua vida; o espelho que ele queria quebrar.' },
            { name: 'Kunti', relation: 'Mãe', details: 'O segredo que definiu sua dor.' }
        ],
        narrativeArc: {
            beginning: 'O pária brilhante buscando seu lugar ao sol.',
            end: 'O mártir da lealdade que cai sem suas defesas divinas.'
        },
        quotes: [
            '"O Dharma protege quem o protege. (Dharmo Rakshati Rakshitah) - ironicamente não aplicado a ele."',
            '"Eu não abandonarei Duryodhana, nem por medo, nem por ganância, nem pela vida."'
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
        role: ['Príncipe Herdeiro', 'Antagonista Principal', 'Guerreiro de Maça'],
        attributes: {
            symbolic: ['A Maça (Força Bruta)', 'Coxa de Ferro', 'Inveja', 'Árvore da Ira'],
            visual: ['Imponente', 'Olhar Feroz']
        },
        psychology: {
            virtues: ['Coragem física', 'Ambição', 'Lealdade aos amigos', 'Liderança'],
            flaws: ['Inveja corrosiva', 'Arrogância', 'Recusa em aceitar a partilha'],
            analysis: 'Duryodhana é a personificação de Kali (o demônio da discórdia). Sua motivação primária não é o poder per se, mas a intolerância à prosperidade alheia (Arjuna/Yudhisthira). Ele representa o ego humano que se recusa a se curvar diante do Divino ou do Dharma, acreditando que a força bruta e a astúcia política são os únicos deuses.'
        },
        timeline: [
            {
                title: 'Tentativa de Envenenamento',
                description: 'Tenta matar Bhima jovem jogando-o no rio.',
                significance: 'Mostra sua natureza malévola desde a infância.'
            },
            {
                title: 'O Desnudamento de Draupadi',
                description: 'Ordena a humilhação pública da esposa dos Pandavas.',
                significance: 'O ponto de não retorno moral que sela o destino de sua linhagem.'
            },
            {
                title: 'Batalha Final',
                description: 'Esconde-se em um lago, mas é provocado para a luta final com Bhima.',
                significance: 'Sua morte, através de um golpe proibido na coxa, sinaliza o fim da Era dos Heróis.'
            }
        ],
        relationships: [
            { name: 'Karna', relation: 'Amigo', details: 'Sua única relação genuína e desinteressada.' },
            { name: 'Shakuni', relation: 'Tio', details: 'O envenenador de sua mente.' },
            { name: 'Balarama', relation: 'Mestre', details: 'Ensinou-lhe a luta de maça e o admirava.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe invejoso que não suporta rivais.',
            end: 'O rei caído que morre acusando os deuses de trapaça, sem arrependimento.'
        },
        quotes: [
            '"Eu não cederei terra nem do tamanho da ponta de uma agulha."',
            '"Conheço o Dharma, mas não é minha natureza segui-lo."'
        ]
    },
    {
        id: 'shakuni',
        name: 'Shakuni',
        epithets: ['Saubala', 'Tio Materno'],
        lineage: {
            father: 'Rei Suvala',
            mother: '-',
            clan: 'Gandhara',
            dynasty: '-'
        },
        affiliations: ['Gandhara', 'Corte Kaurava'],
        role: ['Mestre dos Dados', 'Conspirador', 'Estrategista do Mal'],
        attributes: {
            symbolic: ['Dados (Feitos dos ossos do pai)', 'O Manco', 'Vingança'],
            visual: ['Sorriso astuto', 'Mancar característico']
        },
        psychology: {
            virtues: ['Inteligência', 'Paciência estratégica'],
            flaws: ['Vingança obsessiva', 'Manipulação', 'Covardia física'],
            analysis: 'Shakuni é o catalisador intelectual da guerra. Diferente de Duryodhana (paixão), Shakuni é o intelecto frio dedicado à destruição da raça Kuru (tanto Pandavas quanto Kauravas) como vingança pelo aprisionamento de sua família. Ele representa a mente distorcida que usa as regras do sistema para destruir o sistema.'
        },
        timeline: [
            {
                title: 'O Plano da Casa de Laca',
                description: 'Arquitetou a queima dos Pandavas em Varnavata.',
                significance: 'Primeira tentativa de assassinato em massa.'
            },
            {
                title: 'O Jogo de Dados',
                description: 'Manipulou os dados para roubar o reino de Yudhisthira.',
                significance: 'O golpe mestre que despojou os Pandavas sem derramar sangue.'
            }
        ],
        relationships: [
            { name: 'Duryodhana', relation: 'Sobrinho/Peão', details: 'A arma que ele afiou para destruir os Kurus.' },
            { name: 'Sahadeva', relation: 'Júri', details: 'O Pandava que jurou matá-lo e o fez.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe prisioneiro jurando vingança.',
            end: 'O manipulador pego por sua própria espada na guerra que criou.'
        },
        quotes: [
            '"Meu caro sobrinho, palavras não ganham reinos; dados ganham."'
        ]
    },
    {
        id: 'bhima',
        name: 'Bhima',
        epithets: ['Vrikodara (Estômago de Lobo)', 'Bhimasena'],
        lineage: {
            father: 'Vayu (Espiritual) / Pandu (Terreno)',
            mother: 'Kunti',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Pandavas', 'Indraprastha'],
        role: ['Guerreiro de Maça', 'O Homem Forte', 'Executor'],
        attributes: {
            symbolic: ['A Maça', 'Força de 10.000 Elefantes', 'Vento (Velocidade/Força)', 'Cozinheiro'],
            visual: ['Corpo Gigantesco', 'Musculatura Imponente']
        },
        psychology: {
            virtues: ['Força protetora', 'Franqueza', 'Coragem indomável', 'Amor leal'],
            flaws: ['Gula', 'Raiva impulsiva', 'Falta de sutiliza'],
            analysis: 'Bhima representa a força vital bruta (Prana) e a emoção desenfreada. Enquanto Yudhisthira é a Lei e Arjuna é a Ação Focada, Bhima é a reação visceral contra a injustiça. Ele é o único que cumpre violentamente seus votos de vingança (beber o sangue de Duhshasana, quebrar a coxa de Duryodhana), simbolizando a catarse necessária para purgar o mal.'
        },
        timeline: [
            {
                title: 'Morte de Bakasura',
                description: 'Mata o demônio devorador de homens durante o exílio.',
                significance: 'O início de seu papel como protetor dos indefesos.'
            },
            {
                title: 'Voto de Vingança',
                description: 'Jura beber o sangue de Duhshasana e quebrar a coxa de Duryodhana após a humilhação de Draupadi.',
                significance: 'A âncora emocional que impulsiona a guerra.'
            }
        ],
        relationships: [
            { name: 'Draupadi', relation: 'Esposa', details: 'Ele é o marido mais atento às necessidades emocionais dela.' },
            { name: 'Hanuman', relation: 'Irmão Espiritual', details: 'Ambos filhos de Vayu; Hanuman lhe ensina humildade.' }
        ],
        narrativeArc: {
            beginning: 'O jovem forte e turbulento.',
            end: 'O vingador satisfeito que limpa o caminho para o Dharma.'
        },
        quotes: [
            '"O Dharma é para os fracos se não for apoiado pela força."',
            '"Eu sou o fogo que consumirá a floresta seca dos Kurus."'
        ]
    },
    {
        id: 'draupadi',
        name: 'Draupadi',
        epithets: ['Panchali', 'Yagnaseni (Nascida do Fogo)', 'Krishnaa'],
        lineage: {
            father: 'Rei Drupada',
            mother: '(Nascida do Fogo Sacrificial)',
            clan: 'Panchala',
            dynasty: '-'
        },
        affiliations: ['Pandavas', 'Reino de Panchala'],
        role: ['Imperatriz', 'Esposa Comum', 'Catalisadora da Guerra'],
        attributes: {
            symbolic: ['Cabelos Soltos (Voto)', 'Fogo', 'Lótus Azul'],
            visual: ['Beleza deslumbrante', 'Olhos ardentes', 'Tez escura']
        },
        psychology: {
            virtues: ['Dignidade', 'Resiliência', 'Devoção a Krishna', 'Inteligência política'],
            flaws: ['Orgulho', 'Língua afiada', 'Implacabilidade'],
            analysis: 'Draupadi é a Shakti (energia) central do épico. Nascida do fogo para destruir os Kurus, ela sofre a maior injustiça (o desnudamento) e converte sua dor na força motriz da guerra. Ela não é uma vítima passiva; suas perguntas no tribunal sobre a natureza do Dharma deixam os sábios mudos. Ela representa a Terra ultrajada exigindo justiça.'
        },
        timeline: [
            {
                title: 'O Swayamvara',
                description: 'Rejeita Karna por sua casta e casa-se com Arjuna (e depois com os 5).',
                significance: 'O evento que une os Pandavas aos Panchalas.'
            },
            {
                title: 'A Humilhação',
                description: 'Arrastada pelos cabelos para a corte; Krishna a salva infinitamente com saris.',
                significance: 'A prova definitiva da falha do Dharma humano e o triunfo da Graça Divina.'
            }
        ],
        relationships: [
            { name: 'Krishna', relation: 'Sakha (Amigo)', details: 'Seu único refúgio verdadeiro.' },
            { name: 'Arjuna', relation: 'Marido Favorito', details: 'O vencedor de sua mão, embora ela ame Karna em segredo (em algumas versões).' },
            { name: 'Bhima', relation: 'Protetor', details: 'Aquele que vinga suas humilhações.' }
        ],
        narrativeArc: {
            beginning: 'A princesa nascida para um propósito.',
            end: 'A rainha que vê todos os seus filhos mortos e ascende com serenidade dolorosa.'
        },
        quotes: [
            '"Se eu tenho algum mérito, alguma virtude, que meus cabelos não sejam atados até que eu os lave com o sangue de Duhshasana."',
            '"Onde estava o Dharma quando fui arrastada como uma escrava?"'
        ]
    },
    {
        id: 'bhishma',
        name: 'Bhishma',
        epithets: ['Devavrata', 'Ganga-putra', 'Pitamaha (Avô)'],
        lineage: {
            father: 'Rei Shantanu',
            mother: 'Ganga',
            clan: 'Kuru',
            dynasty: 'Lunar'
        },
        affiliations: ['Hastinapura', 'Kauravas (por voto)'],
        role: ['Patriarca', 'Comandante Supremo', 'Guardião do Trono'],
        attributes: {
            symbolic: ['Cama de Flechas', 'Voto de Celibato', 'Água (Ganga)'],
            visual: ['Barba branca', 'Armadura prateada', 'Aura de autoridade']
        },
        psychology: {
            virtues: ['Sacrifício supremo', 'Invencibilidade', 'Conhecimento do Dharma'],
            flaws: ['Rigidez excessiva aos votos', 'Lealdade a um trono corrupto'],
            analysis: 'Bhishma é o "Terrível" (significado de seu nome) devido ao seu voto aterrorizante de celibato e servidão. Ele representa o Dharma institucional fossilizado. Sua lealdade ao trono de Hastinapura o obriga a lutar pelo lado do mal (Kauravas), mesmo sabendo que estão errados. Sua morte na cama de flechas simboliza a dor de sustentar um sistema falido.'
        },
        timeline: [
            {
                title: 'O Voto (Bhishma Pratigya)',
                description: 'Renuncia ao trono e ao casamento para que seu pai possa se casar com Satyavati.',
                significance: 'O ato de sacrifício que define toda a sua existência e a tragédia Kuru.'
            },
            {
                title: 'A Queda',
                description: 'Depõe as armas diante de Shikhandi, permitindo que Arjuna o transpasse.',
                significance: 'Sua escolha de morrer para permitir a vitória do Dharma.'
            }
        ],
        relationships: [
            { name: 'Arjuna', relation: 'Neto favorito/Algoz', details: 'A relação mais dolorosa de amor e dever.' },
            { name: 'Parashurama', relation: 'Guru', details: 'Mestre que ele derrotou em combate singular.' },
            { name: 'Amba', relation: 'Nêmesis', details: 'A princesa que ele raptou e que renasceu como Shikhandi para matá-lo.' }
        ],
        narrativeArc: {
            beginning: 'O príncipe dourado Devavrata.',
            end: 'O sábio moribundo ensinando o Dharma ao rei triunfante.'
        },
        quotes: [
            '"O dever é maior que o indivíduo."',
            '"Assim como um homem colhe o que planta, a flecha retorna para ferir o arqueiro."'
        ]
    },
    {
        id: 'drona',
        name: 'Drona',
        epithets: ['Acharya', 'Bharadwaja'],
        lineage: {
            father: 'Sábio Bharadwaja',
            mother: '-',
            clan: 'Brahmane',
            dynasty: '-'
        },
        affiliations: ['Hastinapura', 'Guru dos Kurus'],
        role: ['Mestre de Armas', 'General', 'Professor'],
        attributes: {
            symbolic: ['Arco', 'Pote de Água (Nascimento)', 'Ashwatthama (Filho/Apego)'],
            visual: ['Vestes simples de brâmane com armadura', 'Cabelos grisalhos atados']
        },
        psychology: {
            virtues: ['Maestria marcial suprema', 'Ensino'],
            flaws: ['Apego ao filho', 'Vingança contra Drupada', 'Servir por dinheiro (Artha)'],
            analysis: 'Drona representa o Intelecto a serviço do Poder. Nascido brâmane (classe sacerdotal), tornou-se guerreiro por pobreza e vingança. Seu erro trágico é vender seu conhecimento para quem paga mais (Hastinapura), comprometendo sua independência moral. Sua morte vem através de uma mentira, refletindo a ambiguidade de sua própria vida entre a casta sagrada e a guerra sangrenta.'
        },
        timeline: [
            {
                title: 'Rejeição por Drupada',
                description: 'Humilhado por seu amigo de infância, jura vingança.',
                significance: 'A origem da inimizade que divide os reinos.'
            },
            {
                title: 'Eklavya',
                description: 'Exige o polegar de Eklavya para garantir a supremacia de Arjuna.',
                significance: 'O lado sombrio de seu favoritismo e compromisso com o status quo.'
            }
        ],
        relationships: [
            { name: 'Ashwatthama', relation: 'Filho', details: 'Seu único ponto fraco e razão de viver.' },
            { name: 'Arjuna', relation: 'Aluno Favorito', details: 'Sua maior criação marcial.' },
            { name: 'Drupada', relation: 'Inimigo', details: 'O catalisador de sua carreira militar.' }
        ],
        narrativeArc: {
            beginning: 'O brâmane pobre buscando leite para o filho.',
            end: 'O general invencível enganado pela notícia da morte do filho.'
        },
        quotes: [
            '"Eu sou um servo da riqueza de quem me sustenta."',
            '"Se Ashwatthama está morto, então minha luta acabou."'
        ]
    }
];

