window.onload = () => {

    // --- DICIONÁRIO DE IDIOMAS COM ITENS TRADUZIDOS ---
    // (Mantive os nomes de arquivos que você atualizou, como 'folha_seca_padrao.png', 'pedaco_de_metal_padrao.png' e 'guardanapo_padrao.png')
    const fase2LangData = {
        'pt': {
            titulo_pagina: "SafeQuest - Guardião da Reciclagem",
            titulo_principal: "SafeQuest",
            subtitulo_fase: "Fase 2: Guardião da Reciclagem",
            intro_texto: "O rio precisa da sua ajuda! Arraste cada tipo de lixo para a lixeira correta para limpar o ambiente. Seja rápido e ganhe tempo bônus!",
            btn_comecar: "Começar!",
            btn_continuar: "Continuar",
            lixos_label: "Lixos:",
            etapa_label: "Etapa",
            livro_anterior: "◀ Página Anterior",
            livro_proximo: "Próxima Página ▶",
            livro_pagina: "Página",
            // === ADICIONADO: Chaves para o aviso de orientação ===
            orientation_titulo: "Vire o seu dispositivo",
            orientation_texto: "Para uma melhor experiência, este jogo deve ser jogado com a tela na horizontal.",
            // ---
            dialogo_tutorial_titulo: "Bem-vindo, Guardião!",
            dialogo_tutorial_texto: "Olá, Guardião! O rio está cheio de lixo e precisamos da sua ajuda para limpá-lo. Sua missão é arrastar cada item para a lixeira da cor correta. Lembre-se, cada lixo no lugar certo ajuda a salvar nosso planeta. Vamos começar essa limpeza?",
            stage_1_title: "Etapa 1: Começando a Limpeza",
            stage_1_text: "Restos de comida vão na lixeira marrom, e papéis na azul. Vamos começar a limpar!",
            stage_2_title: "Etapa 2: Cuidado com o Perigo!",
            stage_2_text: "Vidros vão na verde para sua segurança! E as latinhas de metal, sempre na amarela.",
            stage_3_title: "Etapa 3: O Inimigo Plástico",
            stage_3_text: "Plástico polui muito! Jogue sempre na vermelha para garantir a reciclagem.",
            stage_4_title: "Etapa Final: Desafio Mestre!",
            stage_4_text: "Atenção total! Itens como pilhas e fraldas vão para a lixeira cinza de rejeitos.",
            macaw_praise_1: "Reciclagem perfeita! Você acertou em cheio.",
            macaw_praise_2: "Isso mesmo! Cada lixo no seu devido lugar.",
            macaw_praise_3: "Ótimo trabalho! O planeta agradece sua ajuda.",
            macaw_praise_4: "Exato! Você sabe exatamente onde descartar cada item.",
            macaw_hint_1: "Opa! Parece que esse lixo não pertence a essa lixeira. Tente novamente.",
            macaw_hint_2: "Quase! Verifique o material desse item. O Guia de Reciclagem pode ajudar.",
            macaw_hint_3: "Essa não é a lixeira correta. Pense no tipo de material.",
            macaw_hint_4: "Um pequeno engano! Tente arrastar para outra lixeira.",
            macaw_perf_1: "Você deu os primeiros passos como Guardião da Reciclagem! Continue praticando e logo será um expert!",
            macaw_perf_2: "Seu progresso é notável! Você está ajudando muito a limpar o rio. Continue assim!",
            macaw_perf_3: "Incrível! Você dominou a arte da reciclagem e limpou tudo com perfeição. Parabéns!",
            macaw_defeat_1: "O tempo acabou, mas não desanime! A reciclagem exige prática. Tente de novo!",
            macaw_defeat_2: "Não foi dessa vez, mas cada item que você reciclou já fez a diferença. Na próxima, você será mais rápido!",
            macaw_defeat_3: "O relógio foi mais rápido, mas sua vontade de ajudar é o que conta. Vamos para a próxima tentativa!",
            macaw_other_1: "Continue assim! Cada pedacinho de lixo reciclado é uma vitória.",
            macaw_other_2: "Lembre-se: separar o lixo é um ato importante para o meio ambiente.",
            macaw_other_3: "O Guia de Reciclagem está aí para ajudar se surgir alguma dúvida!",
            end_title_win: "Mestre da Reciclagem",
            end_title_timeup: "Tempo Esgotado!",
            end_score_text: "Você reciclou",
            end_score_items: "itens!",
            btn_jogar_novo: "Jogar de Novo",
            btn_voltar_menu: "Voltar ao Menu", 
            item_desc: "Descrição",
            item_funfact: "💡 Curiosidade Divertida",
            item_recycling: "♻️ Por que Reciclar?",
            macaw_bonus: "Ótimo! +5 segundos de tempo extra!",
            organicos_label: "Orgânicos",
            papel_label: "Papel",
            metais_label: "Metais",
            vidros_label: "Vidros",
            plasticos_label: "Plásticos",
            rejeitos_label: "Rejeitos",
            organicos_ex: "ORGÂNICOS",
            papel_ex: "PAPEL",
            metais_ex: "METAIS",
            vidros_ex: "VIDROS",
            plasticos_ex: "PLÁSTICOS",
            rejeitos_ex: "REJEITOS",

            TRASH_ITEMS: { 
                organicos: [
                    { name: "Caroço de Manga", icon: "assets/caroco_de_manga_padrao.png", icon_hc: "assets/caroco_de_manga_tea.png", icon_cb: "assets/caroco_de_manga_daltonismo.png", description: "É a semente dura que fica dentro da manga. É um resto de alimento natural.", funFact: "Em alguns lugares, as pessoas plantam o caroço de manga para nascer uma nova árvore cheia de frutas!", recyclingInfo: "Lixo orgânico vira adubo, um superalimento para as plantas crescerem fortes e saudáveis. Isso ajuda a diminuir o lixo nos aterros." },
                    { name: "Casca de Banana", icon: "assets/casca_de_banana_padrao.png", icon_hc: "assets/casca_de_banana_tea.png", icon_cb: "assets/casca_de_banana_daltonismo.png", description: "É a parte de fora da banana que a gente não come. É um material orgânico.", funFact: "A parte de dentro da casca de banana pode ser usada para deixar sapatos de couro brilhando!", recyclingInfo: "Assim como outros restos de comida, a casca de banana se transforma em adubo na compostagem, enriquecendo a terra para novas plantinhas." },
                    { name: "Folha Seca", icon: "assets/folha_seca_padrao.png", icon_hc: "assets/folha_seca_tea.png", icon_cb: "assets/folha_seca_daltonismo.png", description: "São as folhas que caem das árvores no outono. Fazem parte do ciclo da natureza.", funFact: "As folhas secas no chão servem de casinha e comida para muitos bichinhos pequenos, como as minhocas.", recyclingInfo: "Folhas secas são ótimas para a compostagem! Elas ajudam a criar um adubo rico que devolve nutrientes para o solo, como um presente para a natureza." },
                    { name: "Maçã Mordida", icon: "assets/maca_mordida_padrao.png", icon_hc: "assets/maca_mordida_tea.png", icon_cb: "assets/maca_mordida_daltonismo.png", description: "É o que sobra de uma maçã depois de comê-la. É um lixo orgânico e natural.", funFact: "Passarinhos e outros animais adoram encontrar um resto de maçã para beliscar na natureza.", recyclingInfo: "Restos de frutas são perfeitos para virar adubo. Ao invés de ir para o lixo comum, eles podem ajudar a terra a ficar mais fértil." }
                ],
                papel: [
                    { name: "Caixa de Papelão", icon: "assets/caixa_de_papelao_padrao.png", icon_hc: "assets/caixa_de_papelao_tea.png", icon_cb: "assets/caixa_de_papelao_daltonismo.png", description: "Feita de papel grosso, é usada para guardar e transportar coisas, como brinquedos e sapatos.", funFact: "Gatos adoram caixas de papelão! Para eles, é o esconderijo e o brinquedo perfeito.", recyclingInfo: "Reciclar papelão economiza muitas árvores de serem cortadas. O papelão reciclado pode virar novas caixas, papel e até miolo de caderno." },
                    { name: "Folha de Caderno", icon: "assets/folha_de_caderno_padrao.png", icon_hc: "assets/folha_de_caderno_tea.png", icon_cb: "assets/folha_de_caderno_daltonismo.png", description: "É o papel que usamos para desenhar e escrever na escola.", funFact: "O papel foi inventado há mais de 2.000 anos na China!", recyclingInfo: "Cada tonelada de papel reciclado salva cerca de 20 árvores. Reciclar papel também usa muito menos água do que fabricar um novo do zero." },
                    { name: "Papel Amassado", icon: "assets/papel_amassado_padrao.png", icon_hc: "assets/papel_amassado_tea.png", icon_cb: "assets/papel_amassado_daltonismo.png", description: "Um pedaço de papel que foi esmagado, geralmente depois de um desenho que não deu certo.", funFact: "Uma folha de papel pode ser reciclada de 5 a 7 vezes antes que suas fibras fiquem curtas demais.", recyclingInfo: "Mesmo amassado, o papel ainda tem muito valor! Ele pode ser transformado em papel novo, caixas de ovos e jornais, ajudando a proteger as florestas." },
                    { name: "Revista", icon: "assets/revista_padrao.png", icon_hc: "assets/revista_tea.png", icon_cb: "assets/revista_daltonismo.png", description: "Um tipo de livro com muitas fotos coloridas e textos, feito de um papel brilhante.", funFact: "As cores brilhantes das revistas vêm de tintas especiais, mas elas podem ser removidas durante o processo de reciclagem.", recyclingInfo: "Reciclar revistas ajuda a diminuir a quantidade de lixo e a economizar os recursos naturais usados para fazer papel novo." }
                ],
                metais: [
                    { name: "Latinha Amassada", icon: "assets/latinha_amassada_padrao.png", icon_hc: "assets/latinha_amassada_tea.png", icon_cb: "assets/latinha_amassada_daltonismo.png", description: "Geralmente feita de alumínio, é usada para guardar refrigerantes e sucos.", funFact: "O alumínio pode ser reciclado infinitas vezes sem perder sua qualidade! Uma latinha reciclada pode voltar para a prateleira em apenas 60 dias.", recyclingInfo: "Reciclar uma única latinha de alumínio economiza energia suficiente para manter uma TV ligada por 3 horas. É uma das reciclagens mais poderosas que existem!" },
                    { name: "Pedaço de Metal", icon: "assets/pedaco_de_metal_padrao.png", icon_hc: "assets/pedaco_de_metal_tea.png", icon_cb: "assets/pedaco_de_metal_daltonismo.png", description: "Pode ser um prego, um parafuso ou qualquer sobra de objetos feitos de ferro ou aço.", funFact: "Ímãs só grudam em alguns tipos de metais, como o ferro e o aço, mas não no alumínio das latinhas!", recyclingInfo: "Reciclar metais evita a mineração, que pode poluir rios e destruir florestas. O metal reciclado é usado para fazer carros, bicicletas e até peças de avião." },
                    { name: "Pregos", icon: "assets/pregos_padrao.png", icon_hc: "assets/pregos_tea.png", icon_cb: "assets/pregos_daltonismo.png", description: "Pequenas peças de metal pontudas usadas para juntar pedaços de madeira.", funFact: "Pregos já foram feitos à mão, um por um! Hoje, máquinas conseguem fazer milhares deles por minuto.", recyclingInfo: "Mesmo pequenos, os pregos de metal são recicláveis. Juntá-los e descartá-los corretamente ajuda a economizar recursos e energia." },
                    { name: "Tampa de Metal", icon: "assets/tampa_padrao.png", icon_hc: "assets/tampa_tea.png", icon_cb: "assets/tampa_daltonismo.png", description: "São as tampinhas de garrafas de vidro, geralmente feitas de aço.", funFact: "Muitas pessoas colecionam tampinhas de garrafa por suas cores e desenhos diferentes!", recyclingInfo: "As tampinhas de metal são 100% recicláveis. Elas são derretidas e o metal é usado para criar novos objetos, como arames e outras peças de aço." }
                ],
                vidros: [
                    { name: "Garrafa Quebrada", icon: "assets/garrafa_quebrada_padrao.png", icon_hc: "assets/garrafa_quebrada_tea.png", icon_cb: "assets/garrafa_quebrada_daltonismo.png", description: "Pedaços de uma garrafa de vidro que se partiu. É preciso ter muito cuidado ao manuseá-la.", funFact: "O vidro é feito principalmente de areia derretida em temperaturas muito altas!", recyclingInfo: "O vidro pode ser reciclado para sempre! Jogar vidro no lixo é perigoso para os garis e animais. Reciclando, ele vira novas garrafas e potes sem perder a qualidade." },
                    { name: "Copo de Vidro", icon: "assets/copo_padrao.png", icon_hc: "assets/copo_tea.png", icon_cb: "assets/copo_daltonismo.png", description: "Um copo comum, usado para beber água ou suco, que pode quebrar facilmente.", funFact: "Vidro não tem cheiro nem sabor, por isso as bebidas ficam mais gostosas nele!", recyclingInfo: "Quando um copo quebra, seus cacos devem ser embrulhados em jornal e colocados na lixeira verde. O vidro reciclado economiza matéria-prima e energia." }
                ],
                plasticos: [
                    { name: "Brinquedo Quebrado", icon: "assets/brinquedo_quebrado_padrao.png", icon_hc: "assets/brinquedo_quebrado_tea.png", icon_cb: "assets/brinquedo_quebrado_daltonismo.png", description: "Um brinquedo de plástico que não funciona mais ou que perdeu alguma peça.", funFact: "Alguns plásticos reciclados de brinquedos podem virar bancos de praça ou cones de trânsito!", recyclingInfo: "O plástico demora centenas de anos para sumir na natureza, poluindo rios e oceanos. Reciclar brinquedos (quando possível) ajuda a transformar o plástico velho em algo novo." },
                    { name: "Garrafa PET", icon: "assets/garrafa_pet_padrao.png", icon_hc: "assets/garrafa_pet_tea.png", icon_cb: "assets/garrafa_pet_daltonismo.png", description: "É uma garrafa de plástico transparente, muito usada para guardar refrigerantes e água.", funFact: "Sabia que o plástico de garrafas PET recicladas pode virar tecido para fazer roupas e cobertores?", recyclingInfo: "Quando jogada na natureza, uma garrafa PET pode levar mais de 400 anos para se decompor! Reciclá-la protege os animais e economiza petróleo." },
                    { name: "Sacola Plástica", icon: "assets/sacola_padrao.png", icon_hc: "assets/sacola_tea.png", icon_cb: "assets/sacola_daltonismo.png", description: "Uma sacola fina de plástico, usada para carregar compras. Ela voa fácil com o vento.", funFact: "Uma tartaruga marinha pode confundir uma sacola plástica com uma água-viva, que é seu alimento, e acabar comendo por engano.", recyclingInfo: "Sacolas plásticas são um grande perigo para os animais, especialmente os marinhos. Reciclá-las (ou, melhor ainda, evitar usá-las) salva vidas e limpa o planeta." }
                ],
                rejeitos: [
                    { name: "Fralda", icon: "assets/fralda_padrao.png", icon_hc: "assets/fralda_tea.png", icon_cb: "assets/fralda_daltonismo.png", description: "Fralda descartável usada. Ela não pode ser reciclada por questões de higiene.", funFact: "Uma única fralda descartável pode levar até 450 anos para se decompor na natureza!", recyclingInfo: "Fraldas sujas não são recicláveis e devem ir para o lixo comum (rejeito). Elas contêm materiais misturados e podem transmitir doenças." },
                    { name: "Papel Higiênico", icon: "assets/papel_higienico_padrao.png", icon_hc: "assets/papel_higienico_tea.png", icon_cb: "assets/papel_higienico_daltonismo.png", description: "Papel usado para higiene pessoal. Depois de usado, não pode ser reciclado.", funFact: "Apesar de ser de papel, o papel higiênico usado não é reciclável porque suas fibras são muito curtas e ele está contaminado.", recyclingInfo: "Assim como as fraldas, papel higiênico usado e outros papéis de banheiro (lenços, papel toalha) devem ser descartados no lixo comum, pois não podem ser reaproveitados." },
                    { name: "Guardanapo Sujo", icon: "assets/guardanapo_padrao.png", icon_hc: "assets/guardanapo_tea.png", icon_cb: "assets/guardanapo_daltonismo.png", description: "Pedaço de papel macio usado para limpar a boca e as mãos durante as refeições. Geralmente está sujo de comida, gordura ou líquidos.", funFact: "Mesmo sendo de papel, o guardanapo sujo não pode ir para a reciclagem comum, pois a gordura e a comida contaminam os outros papéis.", recyclingInfo: "Eles não são reciclados como papel, mas podem virar adubo. O ideal é descartá-los no lixo orgânico para compostagem, transformando-os em nutrientes e reduzindo o lixo no aterro." }
                ]
            }
        },
        'en': {
            titulo_pagina: "SafeQuest - Recycling Guardian",
            titulo_principal: "SafeQuest",
            subtitulo_fase: "Stage 2: Recycling Guardian",
            intro_texto: "The river needs your help! Drag each type of trash to the correct bin to clean the environment. Be quick and earn bonus time!",
            btn_comecar: "Start!",
            btn_continuar: "Continue",
            lixos_label: "Trash:",
            etapa_label: "Stage",
            livro_anterior: "◀ Previous Page",
            livro_proximo: "Next Page ▶",
            livro_pagina: "Page",
            orientation_titulo: "Turn your device",
            orientation_texto: "For a better experience, this game should be played with the screen horizontally.",
            dialogo_tutorial_titulo: "Welcome, Guardian!",
            dialogo_tutorial_texto: "Hello, Guardian! The river is full of trash and we need your help to clean it. Your mission is to drag each item to the correct colored bin. Remember, every piece of trash in the right place helps save our planet. Let's start this cleanup!",
            stage_1_title: "Stage 1: Starting the Cleanup",
            stage_1_text: "Food scraps go in the brown bin, and papers in the blue. Let's start cleaning!",
            stage_2_title: "Stage 2: Beware of Danger!",
            stage_2_text: "Glass goes in the green bin for safety! And metal cans, always in the yellow.",
            stage_3_title: "Stage 3: The Plastic Enemy",
            stage_3_text: "Plastic pollutes a lot! Always throw it in the red bin to ensure recycling.",
            stage_4_title: "Final Stage: Master Challenge!",
            stage_4_text: "Full attention! Items like batteries and diapers go into the gray rejects bin.",
            macaw_praise_1: "Perfect recycling! You hit the nail on the head.",
            macaw_praise_2: "That's right! Every trash in its proper place.",
            macaw_praise_3: "Great job! The planet thanks you for your help.",
            macaw_praise_4: "Exactly! You know exactly where to discard each item.",
            macaw_hint_1: "Oops! It seems this trash does not belong in this bin. Try again.",
            macaw_hint_2: "Almost! Check the material of this item. The Recycling Guide can help.",
            macaw_hint_3: "That is not the correct bin. Think about the type of material.",
            macaw_hint_4: "A slight mistake! Try dragging to another bin.",
            macaw_perf_1: "You've taken the first steps as a Recycling Guardian! Keep practicing and you'll soon be an expert!",
            macaw_perf_2: "Your progress is remarkable! You are helping a lot to clean the river. Keep it up!",
            macaw_perf_3: "Amazing! You mastered the art of recycling and cleaned everything perfectly. Congratulations!",
            macaw_defeat_1: "Time's up, but don't give up! Recycling requires practice. Try again!",
            macaw_defeat_2: "Not this time, but every item you recycled has already made a difference. Next time, you'll be faster!",
            macaw_defeat_3: "The clock was faster, but your willingness to help is what counts. Let's go for the next try!",
            macaw_other_1: "Keep going! Every bit of recycled trash is a victory.",
            macaw_other_2: "Remember: separating trash is an important act for the environment.",
            macaw_other_3: "The Recycling Guide is there to help if you have any doubts!",
            end_title_win: "Recycling Master",
            end_title_timeup: "Time's Up!",
            end_score_text: "You recycled",
            end_score_items: "items!",
            btn_jogar_novo: "Play Again",
            btn_voltar_menu: "Back to Menu", 
            item_desc: "Description",
            item_funfact: "💡 Fun Fact",
            item_recycling: "♻️ Why Recycle?",
            macaw_bonus: "Great! +5 seconds of extra time!",
            organicos_label: "Organics",
            papel_label: "Paper",
            metais_label: "Metals",
            vidros_label: "Glass",
            plasticos_label: "Plastics",
            rejeitos_label: "Rejects",
            organicos_ex: "ORGANICS",
            papel_ex: "PAPER",
            metais_ex: "METALS",
            vidros_ex: "GLASS",
            plasticos_ex: "PLASTICS",
            rejeitos_ex: "REJECTS",

            TRASH_ITEMS: { 
                organicos: [
                    { name: "Mango Pit", icon: "assets/caroco_de_manga_padrao.png", icon_hc: "assets/caroco_de_manga_tea.png", icon_cb: "assets/caroco_de_manga_daltonismo.png", description: "It's the hard seed found inside a mango. It's a natural food remnant.", funFact: "In some places, people plant the mango pit to grow a new tree full of fruit!", recyclingInfo: "Organic waste becomes compost, a superfood for plants to grow strong and healthy. This helps reduce waste in landfills." },
                    { name: "Banana Peel", icon: "assets/casca_de_banana_padrao.png", icon_hc: "assets/casca_de_banana_tea.png", icon_cb: "assets/casca_de_banana_daltonismo.png", description: "It's the outer layer of the banana that we don't eat. It is organic material.", funFact: "The inside of a banana peel can be used to make leather shoes shine!", recyclingInfo: "Like other food scraps, the banana peel turns into fertilizer during composting, enriching the soil for new plants." },
                    { name: "Dry Leaf", icon: "assets/folha_seca_padrao.png", icon_hc: "assets/folha_seca_tea.png", icon_cb: "assets/folha_seca_daltonismo.png", description: "These are the leaves that fall from trees in autumn. They are part of nature's cycle.", funFact: "Dry leaves on the ground serve as a home and food for many small creatures, like earthworms.", recyclingInfo: "Dry leaves are great for composting! They help create a rich fertilizer that returns nutrients to the soil, like a gift to nature." },
                    { name: "Bitten Apple", icon: "assets/maca_mordida_padrao.png", icon_hc: "assets/maca_mordida_tea.png", icon_cb: "assets/maca_mordida_daltonismo.png", description: "It's what's left of an apple after you've eaten it. It is organic and natural trash.", funFact: "Birds and other animals love finding an apple core to nibble on in nature.", recyclingInfo: "Fruit scraps are perfect for turning into compost. Instead of going to regular trash, they can help the soil become more fertile." }
                ],
                papel: [
                    { name: "Cardboard Box", icon: "assets/caixa_de_papelao_padrao.png", icon_hc: "assets/caixa_de_papelao_tea.png", icon_cb: "assets/caixa_de_papelao_daltonismo.png", description: "Made of thick paper, it's used to store and transport things, like toys and shoes.", funFact: "Cats love cardboard boxes! For them, it's the perfect hiding spot and toy.", recyclingInfo: "Recycling cardboard saves many trees from being cut down. Recycled cardboard can turn into new boxes, paper, and even notebook centers." },
                    { name: "Notebook Sheet", icon: "assets/folha_de_caderno_padrao.png", icon_hc: "assets/folha_de_caderno_tea.png", icon_cb: "assets/folha_de_caderno_daltonismo.png", description: "It's the paper we use to draw and write in school.", funFact: "Paper was invented over 2,000 years ago in China!", recyclingInfo: "Every ton of recycled paper saves about 20 trees. Recycling paper also uses much less water than manufacturing new paper from scratch." },
                    { name: "Crushed Paper", icon: "assets/papel_amassado_padrao.png", icon_hc: "assets/papel_amassado_tea.png", icon_cb: "assets/papel_amassado_daltonismo.png", description: "A crumpled piece of paper, usually after a drawing that didn't work out.", funFact: "A sheet of paper can be recycled 5 to 7 times before its fibers become too short.", recyclingInfo: "Even crumpled, paper still has a lot of value! It can be transformed into new paper, egg cartons, and newspapers, helping to protect forests." },
                    { name: "Magazine", icon: "assets/revista_padrao.png", icon_hc: "assets/revista_tea.png", icon_cb: "assets/revista_daltonismo.png", description: "A type of book with many colorful photos and texts, made of glossy paper.", funFact: "The bright colors in magazines come from special inks, but they can be removed during the recycling process.", recyclingInfo: "Recycling magazines helps reduce the amount of trash and saves the natural resources used to make new paper." }
                ],
                metais: [
                    { name: "Crushed Can", icon: "assets/latinha_amassada_padrao.png", icon_hc: "assets/latinha_amassada_tea.png", icon_cb: "assets/latinha_amassada_daltonismo.png", description: "Usually made of aluminum, it's used to hold sodas and juices.", funFact: "Aluminum can be recycled infinitely without losing its quality! A recycled can can return to the shelf in just 60 days.", recyclingInfo: "Recycling a single aluminum can saves enough energy to keep a TV running for 3 hours. It is one of the most powerful recycling efforts there is!" },
                    { name: "Piece of Metal", icon: "assets/pedaco_de_metal_padrao.png", icon_hc: "assets/pedaco_de_metal_tea.png", icon_cb: "assets/pedaco_de_metal_daltonismo.png", description: "It can be a nail, a screw, or any scrap from objects made of iron or steel.", funFact: "Magnets only stick to some types of metals, like iron and steel, but not to the aluminum in cans!", recyclingInfo: "Recycling metals prevents mining, which can pollute rivers and destroy forests. Recycled metal is used to make cars, bicycles, and even airplane parts." },
                    { name: "Nails", icon: "assets/pregos_padrao.png", icon_hc: "assets/pregos_tea.png", icon_cb: "assets/pregos_daltonismo.png", description: "Small pointed pieces of metal used to join pieces of wood.", funFact: "Nails used to be made by hand, one by one! Today, machines can make thousands of them per minute.", recyclingInfo: "Even small, metal nails are recyclable. Collecting them and disposing of them correctly helps save resources and energy." },
                    { name: "Metal Cap", icon: "assets/tampa_padrao.png", icon_hc: "assets/tampa_tea.png", icon_cb: "assets/tampa_daltonismo.png", description: "These are the caps from glass bottles, usually made of steel.", funFact: "Many people collect bottle caps because of their different colors and designs!", recyclingInfo: "Metal caps are 100% recyclable. They are melted down and the metal is used to create new objects, such as wire and other steel parts." }
                ],
                vidros: [
                    { name: "Broken Bottle", icon: "assets/garrafa_quebrada_padrao.png", icon_hc: "assets/garrafa_quebrada_tea.png", icon_cb: "assets/garrafa_quebrada_daltonismo.png", description: "Pieces of a glass bottle that broke. You need to be very careful when handling it.", funFact: "Glass is mainly made from sand melted at very high temperatures!", recyclingInfo: "Glass can be recycled forever! Throwing glass in the trash is dangerous for sanitation workers and animals. Recycling it turns it into new bottles and jars without losing quality." },
                    { name: "Glass Cup", icon: "assets/copo_padrao.png", icon_hc: "assets/copo_tea.png", icon_cb: "assets/copo_daltonismo.png", description: "A common cup, used for drinking water or juice, that can break easily.", funFact: "Glass has no smell or taste, which is why drinks taste better in it!", recyclingInfo: "When a cup breaks, its shards should be wrapped in newspaper and placed in the green bin. Recycled glass saves raw materials and energy." }
                ],
                plasticos: [
                    { name: "Broken Toy", icon: "assets/brinquedo_quebrado_padrao.png", icon_hc: "assets/brinquedo_quebrado_tea.png", icon_cb: "assets/brinquedo_quebrado_daltonismo.png", description: "A plastic toy that no longer works or is missing a piece.", funFact: "Some recycled plastic from toys can turn into park benches or traffic cones!", recyclingInfo: "Plastic takes hundreds of years to disappear in nature, polluting rivers and oceans. Recycling toys (when possible) helps turn old plastic into something new." },
                    { name: "PET Bottle", icon: "assets/garrafa_pet_padrao.png", icon_hc: "assets/garrafa_pet_tea.png", icon_cb: "assets/garrafa_pet_daltonismo.png", description: "It is a transparent plastic bottle, widely used to store sodas and water.", funFact: "Did you know that recycled PET bottle plastic can turn into fabric for making clothes and blankets?", recyclingInfo: "When thrown into nature, a PET bottle can take more than 400 years to decompose! Recycling it protects animals and saves petroleum." },
                    { name: "Plastic Bag", icon: "assets/sacola_padrao.png", icon_hc: "assets/sacola_tea.png", icon_cb: "assets/sacola_daltonismo.png", description: "A thin plastic bag, used for carrying groceries. It flies easily in the wind.", funFact: "A sea turtle can mistake a plastic bag for a jellyfish, which is its food, and end up eating it by mistake.", recyclingInfo: "Plastic bags are a major danger to animals, especially marine animals. Recycling them (or, better yet, avoiding their use) saves lives and cleans the planet." }
                ],
                rejeitos: [
                    { name: "Diaper", icon: "assets/fralda_padrao.png", icon_hc: "assets/fralda_tea.png", icon_cb: "assets/fralda_daltonismo.png", description: "Used disposable diaper. It cannot be recycled due to hygiene issues.", funFact: "A single disposable diaper can take up to 450 years to decompose in nature!", recyclingInfo: "Dirty diapers are not recyclable and should go into general waste (rejects). They contain mixed materials and can transmit diseases." },
                    { name: "Toilet Paper", icon: "assets/papel_higienico_padrao.png", icon_hc: "assets/papel_higienico_tea.png", icon_cb: "assets/papel_higienico_daltonismo.png", Description: "Paper used for personal hygiene. After use, it cannot be recycled.", FunFact: "Even though it's paper, used toilet paper isn't recyclable because its fibers are too short and it is contaminated.", RecyclingInfo: "Like diapers, used toilet paper and other bathroom papers (tissues, paper towels) must be discarded in the general waste, as they cannot be reused." },
                    { name: "Dirty Napkin", icon: "assets/guardanapo_padrao.png", icon_hc: "assets/guardanapo_tea.png", icon_cb: "assets/guardanapo_daltonismo.png", description: "A piece of soft paper used to clean the mouth and hands during meals. It is usually dirty from food, grease, or liquids.", funFact: "Even though it's paper, a dirty napkin can't go into regular recycling (blue bin) because the grease and food contaminate the other clean papers.", recyclingInfo: "They aren't recycled like paper, but they can be composted. Ideally, they should be discarded in the organic waste bin, turning them into nutrients and reducing landfill waste." }
                ]
            }
        },
        'es': {
            titulo_pagina: "SafeQuest - Guardián del Reciclaje",
            titulo_principal: "SafeQuest",
            subtitulo_fase: "Fase 2: Guardián del Reciclaje",
            intro_texto: "¡El río necesita tu ajuda! Arrastra cada tipo de basura al contenedor correcto para limpiar el medio ambiente. ¡Sé rápido y gana tiempo extra!",
            btn_comecar: "¡Empezar!",
            btn_continuar: "Continuar",
            lixos_label: "Basura:",
            etapa_label: "Etapa",
            livro_anterior: "◀ Página Anterior",
            livro_proximo: "Página Siguiente ▶",
            livro_pagina: "Página",
            orientation_titulo: "Gira tu dispositivo",
            orientation_texto: "Para una mejor experiencia, este juego debe jugarse con la pantalla en horizontal.",
            dialogo_tutorial_titulo: "¡Bienvenido, Guardián!",
            dialogo_tutorial_texto: "¡Hola, Guardián! El río está lleno de basura y necesitamos tu ajuda para limpiarlo. Tu misión es arrastrar cada artículo al contenedor del color correcto. Recuerda, cada basura en su lugar ajuda a salvar nuestro planeta. ¿Empezamos esta limpieza?",
            stage_1_title: "Etapa 1: Empezando la Limpieza",
            stage_1_text: "Los restos de comida van en el contenedor marrón, y los papeles en el azul. ¡Empecemos a limpiar!",
            stage_2_title: "Etapa 2: ¡Cuidado con el Peligro!",
            stage_2_text: "Los vidrios van en el verde por tu seguridad! Y las latas de metal, siempre en el amarillo.",
            stage_3_title: "Etapa 3: El Enemigo Plástico",
            stage_3_text: "¡El plástico contamina mucho! Tíralo siempre en el rojo para asegurar el reciclaje.",
            stage_4_title: "Etapa Final: ¡Desafío Maestro!",
            stage_4_text: "¡Atención total! Artículos como pilas y pañales van al contenedor gris de rechazos.",
            macaw_praise_1: "¡Reciclagem perfeito! Acertaste de lleno.",
            macaw_praise_2: "¡Así es! Cada basura en su debido lugar.",
            macaw_praise_3: "¡Excelente trabajo! El planeta agradece tu ajuda.",
            macaw_praise_4: "¡Exacto! Sabes exactamente dónde desechar cada artículo.",
            macaw_hint_1: "¡Uy! Parece que esta basura no pertenece a este contenedor. Inténtalo de nuevo.",
            macaw_hint_2: "¡Casi! Verifica el material de este artículo. La Guía de Reciclaje puede ajudar.",
            macaw_hint_3: "Ese no es el contenedor correcto. Piensa en el tipo de material.",
            macaw_hint_4: "¡Un pequeno error! Intenta arrastrar a otro contenedor.",
            macaw_perf_1: "¡Distaste los primeiros passos como Guardián del Reciclaje! ¡Sigue praticando y pronto serás un experto!",
            macaw_perf_2: "¡Tu progresso é notável! Estás ajudando muito a limpiar el río. ¡Sigue así!",
            macaw_perf_3: "¡Increíble! Dominaste el arte del reciclaje y limpiaste todo a la perfección. ¡Felicidades!",
            macaw_defeat_1: "Se acabó el tiempo, ¡pero no te desanimes! El reciclaje requiere práctica. ¡Inténtalo de nuevo!",
            macaw_defeat_2: "No fue esta vez, pero cada artículo que reciclaste ya marcó la diferencia. ¡La próxima vez, serás más rápido!",
            macaw_defeat_3: "El reloj fue más rápido, pero tu voluntad de ajudar es lo que cuenta. ¡Vamos por el siguiente intento!",
            macaw_other_1: "¡Sigue así! Cada trozo de basura reciclada es una victoria.",
            macaw_other_2: "Recuerda: separar la basura es um acto importante para el medio ambiente.",
            macaw_other_3: "¡La Guía de Reciclaje está ahí para ayudarte si tienes alguna duda!",
            end_title_win: "Maestro del Reciclaje",
            end_title_timeup: "¡Tiempo Agotado!",
            end_score_text: "Reciclaste",
            end_score_items: "artículos!",
            btn_jogar_novo: "Jugar de Nuevo",
            btn_voltar_menu: "Volver al Menú", 
            item_desc: "Descripción",
            item_funfact: "💡 Curiosidad Divertida",
            item_recycling: "♻️ ¿Por qué Reciclar?",
            macaw_bonus: "¡Genial! +5 segundos de tiempo extra!",
            organicos_label: "Orgánicos",
            papel_label: "Papel",
            metais_label: "Metales",
            vidros_label: "Vidrios",
            plasticos_label: "Plásticos",
            rejeitos_label: "Rechazos",
            organicos_ex: "ORGÁNICOS",
            papel_ex: "PAPEL",
            metais_ex: "METALES",
            vidros_ex: "VIDRIOS",
            plasticos_ex: "PLÁSTICOS",
            rejeitos_ex: "RECHAZOS",

            TRASH_ITEMS: { 
                organicos: [
                    { name: "Hueso de Mango", icon: "assets/caroco_de_manga_padrao.png", icon_hc: "assets/caroco_de_manga_tea.png", icon_cb: "assets/caroco_de_manga_daltonismo.png", description: "Es la semilla dura que se encuentra dentro de un mango. Es un resto de alimento natural.", funFact: "¡En algunos lugares, la gente planta el hueso de mango para que crezca un nuevo árbol lleno de frutas!", recyclingInfo: "La basura orgánica se convierte en abono, um súper alimento para que las plantas crezcan fuertes y sanas. Esto ajuda a reducir la basura en los vertederos." },
                    { name: "Cáscara de Plátano", icon: "assets/casca_de_banana_padrao.png", icon_hc: "assets/casca_de_banana_tea.png", icon_cb: "assets/casca_de_banana_daltonismo.png", description: "Es la capa exterior del plátano que no comemos. Es material orgánico.", funFact: "¡La parte interior de la cáscara de plátano puede usarse para abrillantar zapatos de cuero!", recyclingInfo: "Al igual que otros restos de comida, la cáscara de plátano se transforma en abono durante el compostaje, enriqueciendo la tierra para nuevas plantas." },
                    { name: "Hoja Seca", icon: "assets/folha_seca_padrao.png", icon_hc: "assets/folha_seca_tea.png", icon_cb: "assets/folha_seca_daltonismo.png", description: "Son las hojas que caen de los árboles en otoño. Forman parte del ciclo de la naturaleza.", funFact: "Las hojas secas en el suelo sirven de hogar y comida para muchas criaturas pequeñas, como las lombrices.", recyclingInfo: "¡Las hojas secas son excelentes para el compostaje! Ayudan a crear un abono rico que devuelve nutrientes al suelo, como um regalo para la naturaleza." },
                    { name: "Manzana Mordida", icon: "assets/maca_mordida_padrao.png", icon_hc: "assets/maca_mordida_tea.png", icon_cb: "assets/maca_mordida_daltonismo.png", description: "Es lo que queda de una manzana después de comerla. Es basura orgánica y natural.", funFact: "A los pájaros y otros animales les encanta encontrar un resto de manzana para picar en la naturaleza.", recyclingInfo: "Los restos de fruta son perfectos para convertirse en abono. En lugar de ir a la basura común, pueden ajudar a que la tierra sea más fértil." }
                ],
                papel: [
                    { name: "Caja de Cartón", icon: "assets/caixa_de_papelao_padrao.png", icon_hc: "assets/caixa_de_papelao_tea.png", icon_cb: "assets/caixa_de_papelao_daltonismo.png", description: "Hecha de papel grueso, se usa para guardar e transportar coisas, como brinquedos e sapatos.", funFact: "¡A los gatos les encantan las cajas de cartón! Para ellos, es el escondite y juguete perfecto.", recyclingInfo: "Reciclar cartón salva muchos árboles de ser talados. El cartón reciclado puede convertirse en cajas nuevas, papel e incluso el centro de cuadernos." },
                    { name: "Hoja de Cuaderno", icon: "assets/folha_de_caderno_padrao.png", icon_hc: "assets/folha_de_caderno_tea.png", icon_cb: "assets/folha_de_caderno_daltonismo.png", description: "Es el papel que usamos para dibujar y escribir en la escuela.", funFact: "¡El papel fue inventado hace más de 2.000 años en China!", recyclingInfo: "Cada tonelada de papel reciclado salva alrededor de 20 árboles. Reciclar papel también usa mucha menos agua que fabricar papel nuevo desde cero." },
                    { name: "Papel Arrugado", icon: "assets/papel_amassado_padrao.png", icon_hc: "assets/papel_amassado_tea.png", icon_cb: "assets/papel_amassado_daltonismo.png", description: "Un trozo de papel arrugado, geralmente después de un dibujo que no funcionó.", funFact: "Una hoja de papel puede reciclarse de 5 a 7 veces antes de que sus fibras se vuelvan demasiado cortas.", recyclingInfo: "Incluso arrugado, ¡el papel todavía tiene mucho valor! Puede transformarse en papel nuevo, cajas de huevos y periódicos, ajudando a proteger los bosques." },
                    { name: "Revista", icon: "assets/revista_padrao.png", icon_hc: "assets/revista_tea.png", icon_cb: "assets/revista_daltonismo.png", description: "Un tipo de libro con muchas fotos y textos coloridos, hecho de papel brillante.", funFact: "Los colores brillantes de las revistas provienen de tintas especiales, pero se pueden quitar durante el proceso de reciclaje.", recyclingInfo: "Reciclar revistas ajuda a disminuir la cantidad de basura y a ahorrar los recursos naturales utilizados para hacer papel nuevo." }
                ],
                metais: [
                    { name: "Lata Aplastada", icon: "assets/latinha_amassada_padrao.png", icon_hc: "assets/latinha_amassada_tea.png", icon_cb: "assets/latinha_amassada_daltonismo.png", description: "Generalmente hecha de aluminio, se usa para guardar refrescos y jugos.", funFact: "¡El aluminio puede reciclarse infinitas veces sin perder sua qualidade! Una lata reciclada puede volver a la estantería en solo 60 días.", recyclingInfo: "Reciclar una sola lata de aluminio ahorra energía suficiente para mantener un televisor encendido durante 3 horas. ¡Es uno de los esfuerzos de reciclaje más potentes que existen!" },
                    { name: "Trozo de Metal", icon: "assets/pedaco_de_metal_padrao.png", icon_hc: "assets/pedaco_de_metal_tea.png", icon_cb: "assets/pedaco_de_metal_daltonismo.png", description: "Puede ser un clavo, un tornillo o cualquier desecho de objetos hechos de hierro o acero.", funFact: "¡Los imanes solo se pegan a algunos tipos de metales, como el hierro y el acero, pero no al aluminio de las latas!", recyclingInfo: "Reciclar metales previene la minería, que puede contaminar ríos y destruir bosques. El metal reciclado se utiliza para fabricar coches, bicicletas e incluso piezas de avión." },
                    { name: "Clavos", icon: "assets/pregos_padrao.png", icon_hc: "assets/pregos_tea.png", icon_cb: "assets/pregos_daltonismo.png", description: "Pequeñas piezas de metal puntiagudas utilizadas para unir trozos de madera.", funFact: "¡Los clavos solían hacerse a mano, uno por um! Hoy, las máquinas pueden hacer miles de ellos por minuto.", recyclingInfo: "Incluso pequeños, los clavos de metal son reciclables. Recogerlos y desecharlos correctamente ajuda a ahorrar recursos y energía." },
                    { name: "Tapa de Metal", icon: "assets/tampa_padrao.png", icon_hc: "assets/tampa_tea.png", icon_cb: "assets/tampa_daltonismo.png", description: "Son las tapas de botellas de vidrio, generalmente hechas de acero.", funFact: "Mucha gente colecciona tapas de botella por sus diferentes colores y diseños!", recyclingInfo: "Las tapas de metal son 100% reciclables. Se funden y el metal se utiliza para crear nuevos objetos, como alambres y otras piezas de acero." }
                ],
                vidros: [
                    { name: "Botella Rota", icon: "assets/garrafa_quebrada_padrao.png", icon_hc: "assets/garrafa_quebrada_tea.png", icon_cb: "assets/garrafa_quebrada_daltonismo.png", description: "Trozos de una botella de vidrio que se rompió. Es necesario tener mucho cuidado al manipularla.", funFact: "¡El vidrio se hace principalmente con arena derretida a temperaturas muy altas!", recyclingInfo: "¡El vidrio se puede reciclar para siempre! Tirar vidrio a la basura es peligroso para los recolectores de basura y los animales. Al reciclarlo, se convierte en nuevas botellas y frascos sin perder calidad." },
                    { name: "Vaso de Vidrio", icon: "assets/copo_padrao.png", icon_hc: "assets/copo_tea.png", icon_cb: "assets/copo_daltonismo.png", description: "Un vaso común, utilizado para beber agua o jugo, que puede romperse fácilmente.", funFact: "El vidrio no tiene olor ni sabor, ¡por eso las bebidas saben mejor en él!", recyclingInfo: "Cuando un vaso se rompe, sus trozos deben envolverse en papel de periódico y colocarse en el contenedor verde. El vidrio reciclado ahorra materia prima y energía." }
                ],
                plasticos: [
                    { name: "Juguete Roto", icon: "assets/brinquedo_quebrado_padrao.png", icon_hc: "assets/brinquedo_quebrado_tea.png", icon_cb: "assets/brinquedo_quebrado_daltonismo.png", description: "Un juguete de plástico que ya no funciona o al que le falta una pieza.", funFact: "¡Algunos plásticos reciclados de juguetes pueden convertirse en bancos de parque o conos de tráfico!", recyclingInfo: "El plástico tarda cientos de años en desaparecer en la naturaleza, contaminando ríos y océanos. Reciclar juguetes (cuando sea posible) ajuda a convertir el plástico viejo en algo nuevo." },
                    { name: "Botella PET", icon: "assets/garrafa_pet_padrao.png", icon_hc: "assets/garrafa_pet_tea.png", icon_cb: "assets/garrafa_pet_daltonismo.png", description: "Es una botella de plástico transparente, muy utilizada para almacenar refrescos y agua.", funFact: "¿Sabías que el plástico de botellas PET recicladas puede convertirse en tela para hacer ropa y mantas?", recyclingInfo: "Cuando se tira a la naturaleza, una botella PET puede tardar más de 400 años en descomponerse. Reciclarla protege a los animales y ahorra petróleo." },
                    { name: "Bolsa de Plástico", icon: "assets/sacola_padrao.png", icon_hc: "assets/sacola_tea.png", icon_cb: "assets/sacola_daltonismo.png", description: "A thin plastic bag, used for carrying groceries. It flies easily in the wind.", funFact: "A sea turtle can mistake a plastic bag for a jellyfish, which is its food, and end up eating it by mistake.", recyclingInfo: "Plastic bags are a major danger to animals, especially marine animals. Recycling them (or, better yet, avoiding their use) saves lives and cleans the planet." }
                ],
                rejeitos: [
                    { name: "Pañal", icon: "assets/fralda_padrao.png", icon_hc: "assets/fralda_tea.png", icon_cb: "assets/fralda_daltonismo.png", Description: "Pañal desechable usado. No se puede reciclar por motivos de higiene.", FunFact: "¡Un solo pañal desechable puede tardar hasta 450 años en descomponerse en la naturaleza!", RecyclingInfo: "Los pañales sucios no son reciclables y deben ir a la basura común (residuos). Contienen materiales mixtos y pueden transmitir enfermedades." },
                    { name: "Papel Higiénico", icon: "assets/papel_higienico_padrao.png", icon_hc: "assets/papel_higienico_tea.png", icon_cb: "assets/papel_higienico_daltonismo.png", description: "Papel usado para higiene pessoal. Después de usarlo, no se puede reciclar.", funFact: "A pesar de ser papel, el papel higiénico usado no es reciclable porque sus fibras son muy cortas y está contaminado.", recyclingInfo: "Just like diapers, used toilet paper and other bathroom papers (tissues, paper towels) must be disposed of in general waste, as they cannot be reused." },
                    { name: "Servilleta Sucia", icon: "assets/guardanapo_padrao.png", icon_hc: "assets/guardanapo_tea.png", icon_cb: "assets/guardanapo_daltonismo.png", description: "Un pedazo de papel suave usado para limpiar la boca y las manos durante las comidas. Generalmente está sucio con comida, grasa o líquidos.", funFact: "Aunque es de papel, la servilleta sucia no puede ir al reciclaje común, ya que la grasa y la comida contaminan los otros papeles limpios.", recyclingInfo: "No se reciclan como papel, pero pueden convertirse en compost (abono). Lo ideal es desecharlas en el contenedor orgánico para compostaje, transformándolas en nutrientes y reduciendo residuos en el vertedero." }
                ]
            }
        }
    };
    
    // --- INÍCIO: GERENCIADOR DE ACESSIBILIDADE ---
    
    const spritePalettes = {
        // Padrão (default)
        'default': {
            background: 'assets/cenario_fase2.png', // Fundo padrão (do seu CSS)
            macaw_falando: 'assets/arara_falando_padrao.png',
            macaw_feliz: 'assets/arara_feliz_padrao.png',
            macaw_triste: 'assets/arara_triste_padrao.png',
            macaw_curiosa: 'assets/arara_curiosa_padrao.png',
            book_closed: 'assets/livro_fechado_fase2_padrao.png',
            book_open: 'assets/livro-aberto2.0.jpeg' 
        },
        // Alto Contraste (Mapeado para TEA)
        'high-contrast': {
            background: 'assets/cenario_fase2_tea.png',
            book_closed: 'assets/livro_fechado_fase2_tea.png',
            book_open: 'assets/livro_aberto_tea.png' 
        },
        // Daltonismo
        'colorblind-safe': {
            background: 'assets/cenario_fase2_daltonismo.png',
            book_closed: 'assets/livro_fechado_fase2_daltonismo.png',
            book_open: 'assets/livro_aberto_daltonismo.png' 
        }
    };
    
    const AccessibilityManager = {
        currentPaletteName: 'default',
        currentPalette: spritePalettes['default'],
    
        setPalette: function(paletteName) {
            if (!spritePalettes[paletteName]) {
                console.warn(`Paleta de sprites "${paletteName}" não encontrada. Usando padrão.`);
                paletteName = 'default';
            }
            this.currentPaletteName = paletteName;
            this.currentPalette = spritePalettes[paletteName];
            console.log(`Modo de cor de sprites definido para: ${paletteName}`);
        },
    
        getUISprite: function(spriteKey) {
            // Se o sprite não existir (ex: arara no modo TEA), usa o padrão
            return this.currentPalette[spriteKey] || spritePalettes['default'][spriteKey];
        },

        updateUISprites: function() {
            if (stageMacawSprite && stageMacawSprite.dataset.spriteKey) {
                stageMacawSprite.src = this.getUISprite(stageMacawSprite.dataset.spriteKey);
            }
            if (endMacawSprite && endMacawSprite.dataset.spriteKey) {
                endMacawSprite.src = this.getUISprite(endMacawSprite.dataset.spriteKey);
            }
            if (macawSprite && macawSprite.dataset.spriteKey) {
                macawSprite.src = this.getUISprite(macawSprite.dataset.spriteKey);
            }
            
            const bookSprite = document.querySelector('[data-sprite-key="book_closed"]');
            if (bookSprite) {
                bookSprite.src = this.getUISprite('book_closed');
            }
            
            const gameContainer = document.getElementById('game-container');
            if (gameContainer) {
                const newBgImage = this.getUISprite('background');
                gameContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${newBgImage}')`;
            }

            const bookContainer = document.querySelector('#book-modal .book-container');
            if (bookContainer) {
                bookContainer.style.backgroundImage = `url('${this.getUISprite('book_open')}')`;
            }
        }
    };
    
    // --- FIM: GERENCIADOR DE ACESSIBILIDADE ---


    // --- SELEÇÃO DOS ELEMENTOS DA UI (MANTIDO) ---
    const startScreen = document.getElementById('start-screen');
    const stageTransitionScreen = document.getElementById('stage-transition-screen');
    const endScreen = document.getElementById('end-screen');
    const startButton = document.getElementById('start-button');
    const nextStageButton = document.getElementById('next-stage-button');
    const finalActionButton = document.getElementById('final-action-button'); 
    const backToMenuButton = document.getElementById('back-to-menu-button'); 
    
    const stageScoreEl = document.getElementById('stage-score');
    
    const stageLabelEl = document.getElementById('stage-label');
    const timerEl = document.getElementById('timer');
    const trashSpawnArea = document.getElementById('trash-spawn-area');
    const bins = document.querySelectorAll('.bin');
    const macawMessage = document.getElementById('macaw-message');
    const macawText = document.getElementById('macaw-text');
    const gameHeader = document.querySelector('header');
    const gameMain = document.querySelector('main');
    const macawSprite = document.getElementById('macaw-sprite');
    const endMacawSprite = document.getElementById('end-macaw-sprite');
    const stageMacawSprite = document.getElementById('stage-macaw-sprite');

    // Elementos do Guia/Livro e Modal
    const bookButton = document.getElementById('book-button');
    const bookModal = document.getElementById('book-modal');
    const bookModalClose = document.getElementById('book-modal-close');
    const bookPagesContainer = document.getElementById('book-pages-container');
    const pageSections = document.querySelectorAll('.page .section');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageIndicator = document.getElementById('page-indicator'); 
    const itemDetailModal = document.getElementById('item-detail-modal');
    const itemDetailClose = document.getElementById('item-detail-close');
    const itemDetailName = document.getElementById('item-detail-name');
    const itemDetailImg = document.getElementById('item-detail-img');
    const itemDetailDesc = document.getElementById('item-detail-desc');
    const itemDetailFunFact = document.getElementById('item-detail-funfact');
    const itemDetailRecycling = document.getElementById('item-detail-recycling');

    // --- DIÁLOGOS (MANTIDO) ---
    
    const dialogues = {
        tutorial: "", 
        stages: { stage1: "", stage2: "", stage3: "", stage4: "" },
        praise: [], hints: [], performance: [], defeat: [], other: []
    };

    const INITIAL_TIME = 90;
    const TIME_BONUS = 5;
    
    function getTranslatedTrashItems() {
        const langData = fase2LangData[settings.language];
        return langData ? langData.TRASH_ITEMS : fase2LangData['pt'].TRASH_ITEMS; 
    }

    const TRASH_GROUP_NAMES = { organicos: '', papel: '', metais: '', vidros: '', plasticos: '', rejeitos: '' };
    
    const STAGES = [
        { stage: 1, goal: 10, categories: ["organicos", "papel"], title: "" }, 
        { stage: 2, goal: 15, categories: ["organicos", "papel", "vidros", "metais"], title: "" },
        { stage: 3, goal: 20, categories: ["organicos", "papel", "vidros", "metais", "plasticos"], title: "" },
        { stage: 4, goal: 30, categories: ["organicos", "papel", "vidros", "metais", "plasticos", "rejeitos"], title: "" }
    ];

    const introDialogues = [
        { title: "", text: "" },
        { title: "", text: "" }
    ];
    
    const getRandomDialogue = (type) => {
        const options = dialogues[type];
        return options[Math.floor(Math.random() * options.length)];
    };

    let timer, totalScore, currentStageIndex, stageScore, timerInterval, macawTimeout, otherDialogueTimeout;
    let isPaused = false;
    let isShowingIntro = 0;
    let introStep = 0;

    // --- INÍCIO: VARIÁVEIS GLOBAIS PARA CONTROLES DE TOQUE (ADIÇÃO) ---
    let activeTrashEl = null;     // O item de lixo que está sendo arrastado
    let initialTouchX, initialTouchY;   // Posição inicial do toque dentro do lixo
    let originalTrashLeft, originalTrashTop, originalTrashTransform; // Estilos originais para resetar
    let currentDroppable = null;  // A lixeira que está sob o lixo (bin.drag-over)
    // --- FIM: VARIÁVEIS GLOBAIS PARA CONTROLES DE TOQUE ---
    
    let allBookItems = [];
    let bookPages = []; 
    let currentPage = 1;
    
    const ITEMS_PER_ROW = 3; 
    const SECTIONS_PER_PAGE_SIDE = 3; 
    const SECTIONS_PER_SPREAD = 6; 
    const ITEMS_PER_SPREAD = ITEMS_PER_ROW * SECTIONS_PER_SPREAD; 
    
    let sounds = {};
    let audioInitialized = false; 
    let settings = { music: true, sfx: true, language: 'pt', colorMode: 'default' }; 
    let macawBonusMessage = "Ótimo! +5 segundos de tempo extra!"; 


    // --- FUNÇÕES DE ACESSIBILIDADE E LOCALIZAÇÃO ---
    function getIconPathByColorMode(item) {
        switch (settings.colorMode) {
            case 'high-contrast':
                return item.icon_hc || item.icon; 
            case 'colorblind-safe':
                return item.icon_cb || item.icon; 
            default:
                return item.icon; 
        }
    }

    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('safequest-settings'));
        if (savedSettings) {
            settings = { ...settings, ...savedSettings };
        }
        
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.dataset.colorMode = settings.colorMode;
        }

        AccessibilityManager.setPalette(settings.colorMode); 
        updateTexts(); 
        AccessibilityManager.updateUISprites();
    }
    
    function updateTexts() {
        const currentLang = settings.language;
        const texts = fase2LangData[currentLang];
        if (!texts) return;

        document.title = texts.titulo_pagina;
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (texts[key]) {
                element.textContent = texts[key];
            }
        });
        
        dialogues.tutorial = texts.dialogo_tutorial_texto;
        dialogues.stages.stage1 = texts.stage_1_text;
        dialogues.stages.stage2 = texts.stage_2_text;
        dialogues.stages.stage3 = texts.stage_3_text;
        dialogues.stages.stage4 = texts.stage_4_text;
        dialogues.praise = [ texts.macaw_praise_1, texts.macaw_praise_2, texts.macaw_praise_3, texts.macaw_praise_4 ];
        dialogues.hints = [ texts.macaw_hint_1, texts.macaw_hint_2, texts.macaw_hint_3, texts.macaw_hint_4 ];
        dialogues.performance = [ texts.macaw_perf_1, texts.macaw_perf_2, texts.macaw_perf_3 ];
        dialogues.defeat = [ texts.macaw_defeat_1, texts.macaw_defeat_2, texts.macaw_defeat_3 ];
        dialogues.other = [ texts.macaw_other_1, texts.macaw_other_2, texts.macaw_other_3 ];
        
        STAGES[0].title = texts.stage_1_title;
        STAGES[1].title = texts.stage_2_title;
        STAGES[2].title = texts.stage_3_title;
        STAGES[3].title = texts.stage_4_title;
        
        introDialogues[0].title = texts.dialogo_tutorial_titulo;
        introDialogues[0].text = texts.dialogo_tutorial_texto;
        introDialogues[1].title = texts.stage_1_title;
        introDialogues[1].text = texts.stage_1_text;
        
        macawBonusMessage = texts.macaw_bonus; 

        TRASH_GROUP_NAMES.organicos = texts.organicos_label;
        TRASH_GROUP_NAMES.papel = texts.papel_label;
        TRASH_GROUP_NAMES.metais = texts.metais_label;
        TRASH_GROUP_NAMES.vidros = texts.vidros_label;
        TRASH_GROUP_NAMES.plasticos = texts.plasticos_label;
        TRASH_GROUP_NAMES.rejeitos = texts.rejeitos_label;
        
        document.querySelector('.bin[data-category="organicos"]').textContent = texts.organicos_label;
        document.querySelector('.bin[data-category="papel"]').textContent = texts.papel_label;
        document.querySelector('.bin[data-category="metais"]').textContent = texts.metais_label;
        document.querySelector('.bin[data-category="vidros"]').textContent = texts.vidros_label;
        document.querySelector('.bin[data-category="plasticos"]').textContent = texts.plasticos_label;
        document.querySelector('.bin[data-category="rejeitos"]').textContent = texts.rejeitos_label;
        
        document.querySelector('.bin-item-wrapper:nth-child(1) .item-label').textContent = texts.organicos_ex;
        document.querySelector('.bin-item-wrapper:nth-child(2) .item-label').textContent = texts.papel_ex;
        document.querySelector('.bin-item-wrapper:nth-child(3) .item-label').textContent = texts.metais_ex;
        document.querySelector('.bin-item-wrapper:nth-child(4) .item-label').textContent = texts.vidros_ex;
        document.querySelector('.bin-item-wrapper:nth-child(5) .item-label').textContent = texts.plasticos_ex;
        document.querySelector('.bin-item-wrapper:nth-child(6) .item-label').textContent = texts.rejeitos_ex;
    }


    function initAudio() {
        if (audioInitialized) return;
        const soundFiles = {
            'acerto': 'assets/acerto.mp3',
            'alerta-cronometro': 'assets/alerta_do_cronometro.mp3',
            'avaliacao-final': 'assets/avaliacao-final.mp3',
            'bonus-tempo': 'assets/bonus_tempo.mp3',
            'clique-ui': 'assets/clique_ui.mp3',
            'erro': 'assets/erro.mp3',
            'musica-fundo': 'assets/musica_de_fundo_fase2.mp3',
            'pegar-soltar': 'assets/pegar_e_soltar_item.mp3',
            'fim-fase': 'assets/musica_alegre_de_final_de_tela.mp3' 
        };
        for (const key in soundFiles) {
            sounds[key] = new Audio(soundFiles[key]);
        }
        sounds['musica-fundo'].loop = true;
        audioInitialized = true;
    } 

    function playSound(name) {
        if (!settings.sfx) return;
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        if (name !== 'musica-fundo') {
            sound.currentTime = 0;
        }
        sound.play().catch(error => console.error(`Erro ao tocar o som '${name}':`, error));
    }

    function stopSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        const sound = sounds[name];
        sound.pause();
        sound.currentTime = 0;
    }

    function startBackgroundMusic() { 
        if (!settings.music) return;
        if (!audioInitialized) return;
        const sound = sounds['musica-fundo'];
        sound.volume = 0.3; 
        sound.play().catch(error => console.error('Erro ao tocar música de fundo:', error));
    }
    
    function stopBackgroundMusic() { 
        if (!audioInitialized) return;
        stopSound('musica-fundo');
    }

    
    function showItemDetails(item) {
        playSound('clique-ui'); 
        itemDetailName.textContent = item.name;
        itemDetailImg.src = getIconPathByColorMode(item);
        itemDetailImg.alt = item.name;
        itemDetailDesc.textContent = item.description;
        itemDetailFunFact.textContent = item.funFact;
        itemDetailRecycling.textContent = item.recyclingInfo;
        itemDetailModal.classList.remove('hidden');
        itemDetailModal.classList.add('flex');
        isPaused = true; // <-- ADICIONADO: Pausa ao abrir detalhes
    }

    function closeItemDetails() {
        playSound('clique-ui'); 
        itemDetailModal.classList.add('hidden');
        itemDetailModal.classList.remove('flex');
        // Só despausa se o livro também estiver fechado
        if (bookModal.classList.contains('hidden')) {
        isPaused = false;
        }
    }
    
    function redirecionarParaSelecao() {
        window.location.href = "selecao_de_fases.html"; 
    }

    // === ADICIONADO DA FASE 1: Função de Orientação ===
    function handleOrientationChange(e) {
        const orientationWarning = document.getElementById('orientation-warning');
        if (e.matches) {
            // Se está em modo retrato, pausa o jogo e MOSTRA o aviso
            orientationWarning.classList.remove('hidden');
            orientationWarning.classList.add('flex');
            isPaused = true;
        } else {
            // Se está em modo paisagem, ESCONDE o aviso
            orientationWarning.classList.add('hidden');
            orientationWarning.classList.remove('flex');
            
            // E despausa, *a menos que* um modal já esteja aberto
            // Adaptado para os modais da Fase 2
            const isAnyModalOpen = bookModal.classList.contains('flex') ||
                                stageTransitionScreen.classList.contains('flex') ||
                                endScreen.classList.contains('flex') ||
                                startScreen.classList.contains('flex') ||
                                itemDetailModal.classList.contains('flex');
                                
            if (!isShowingIntro && !isAnyModalOpen) {
                isPaused = false;
            }
        }
    }
    // === FIM DA ADIÇÃO ===

    function init() {
        startButton.addEventListener('click', () => { 
            initAudio(); 
            playSound('clique-ui'); 
            startIntroduction(); 
        });
    
        finalActionButton.addEventListener('click', () => {
            playSound('clique-ui'); 
            const texts = fase2LangData[settings.language];
            if (finalActionButton.textContent === texts.btn_continuar) {
                redirecionarParaSelecao(); 
            } else {
                startGame(); 
            }
        });

        backToMenuButton.addEventListener('click', () => {
            playSound('clique-ui');
            window.location.href = "../menu/menu_index.html";
        });

        nextStageButton.addEventListener('click', () => {
            playSound('clique-ui'); 
            handleNextButtonClick();
        });
        bookButton.addEventListener('click', () => {
            playSound('clique-ui'); 
            openBook();
        });
        bookModalClose.addEventListener('click', () => {
            playSound('clique-ui'); 
            closeBook();
        });
    
        itemDetailClose.addEventListener('click', closeItemDetails);
        itemDetailModal.addEventListener('click', (e) => { 
            if (e.target === itemDetailModal) closeItemDetails();
        });

        setupDragAndDrop(); // Para mouse/desktop
        setupTouchControls(); 
        setupBook();

        // === ADICIONADO DA FASE 1: Listeners de Orientação ===
        const portraitMediaQuery = window.matchMedia("(orientation: portrait)");
        portraitMediaQuery.addEventListener('change', handleOrientationChange);
        handleOrientationChange(portraitMediaQuery); // Checa a orientação inicial
        // === FIM DA ADIÇÃO ===
    }
    
    function startIntroduction() {
        startScreen.classList.add('hidden');
        isShowingIntro = true;
        introStep = 0;
        showNextIntroDialogue();
    }
    
    function showNextIntroDialogue() {
        if (introStep < introDialogues.length) {
            const dialogue = introDialogues[introStep];
            
            stageMacawSprite.dataset.spriteKey = 'macaw_falando'; 
            stageMacawSprite.src = AccessibilityManager.getUISprite('macaw_falando');

            document.getElementById('stage-title').textContent = dialogue.title;
            document.getElementById('stage-explanation').textContent = dialogue.text;
            stageTransitionScreen.classList.remove('hidden');
            stageTransitionScreen.classList.add('flex');
            isPaused = true; // <-- ADICIONADO: Pausa durante o diálogo
            introStep++;
        } else {
            isShowingIntro = false;
            stageTransitionScreen.classList.add('hidden');
            isPaused = false; // <-- ADICIONADO: Despausa para começar
            startGame();
        }
    }

    function handleNextButtonClick() {
        if (isShowingIntro) {
            showNextIntroDialogue();
        } else {
            resumeGame();
        }
    }

    function startGame() {
        stopGameIntervals();
        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        stageTransitionScreen.classList.add('hidden'); // Garante que está escondido
        gameHeader.classList.remove('hidden');
        gameMain.classList.remove('hidden');
        timer = INITIAL_TIME;
        totalScore = 0;
        currentStageIndex = 0;
        isPaused = false;
        setupStage();
        startTimer();
        scheduleRandomDialogue();
        startBackgroundMusic(); 
    }
    
    function stopGameIntervals() {
        clearInterval(timerInterval);
        clearTimeout(macawTimeout);
        clearTimeout(otherDialogueTimeout);
        stopBackgroundMusic(); 
        stopSound('alerta-cronometro'); 
    }
    
    function setupStage() {
        stageScore = 0;
        const stage = STAGES[currentStageIndex];
        const totalStages = STAGES.length;
        stageLabelEl.textContent = `${fase2LangData[settings.language].etapa_label} ${stage.stage}/${totalStages}`;
        updateScore(0);
        bins.forEach(bin => {
            bin.classList.toggle('active', stage.categories.includes(bin.dataset.category));
        });
        generateTrashItems();
    }

    function generateTrashItems() {
        const TRASH_ITEMS = getTranslatedTrashItems();
        trashSpawnArea.innerHTML = '';
        const stage = STAGES[currentStageIndex];
        const availableItems = [];
        stage.categories.forEach(cat => {
            TRASH_ITEMS[cat].forEach(item => {
                availableItems.push({ ...item, category: cat });
            });
        });

        // Modificado para gerar apenas os itens da meta (goal)
        for (let i = 0; i < stage.goal; i++) {
            const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
            
            const trashEl = document.createElement('div');
            trashEl.className = 'trash-item';
            trashEl.style.backgroundImage = `url('${getIconPathByColorMode(randomItem)}')`;
            trashEl.draggable = true;
            trashEl.dataset.category = randomItem.category;
            trashEl.id = `trash-${i}-${Date.now()}`;
            trashEl.style.left = `${Math.random() * 95}%`; 
            trashEl.style.top = `${Math.random() * 95}%`;
            trashEl.style.transform = `rotate(${Math.random() * 360}deg)`;
            trashSpawnArea.appendChild(trashEl);
        }
    }

    function handleCorrectDrop(trashEl, binEl) {
        playSound('acerto'); 
        playSound('bonus-tempo'); 
        stageScore++;
        totalScore++;
        timer += TIME_BONUS;
        showMacawMessage(macawBonusMessage, 3000, 'feliz'); 
        updateScore(stageScore);
        updateTimerDisplay();
        trashEl.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        trashEl.style.transform = 'scale(0)';
        trashEl.style.opacity = '0';
        binEl.classList.add('correct-bin');
        setTimeout(() => binEl.classList.remove('correct-bin'), 700);
        setTimeout(() => {
            trashEl.remove(); 
            if (trashSpawnArea.children.length === 0) { 
                if (currentStageIndex < STAGES.length - 1) {
                    playSound('fim-fase'); 
                    setTimeout(advanceStage, 500); 
                } else {
                    playSound('fim-fase'); 
                    setTimeout(() => endGame(true), 500);
                }
            }
        }, 300);
    }

    function handleWrongDrop(binEl) {
        playSound('erro'); 
        showMacawMessage(getRandomDialogue('hints'), 5000, 'triste');
        binEl.classList.add('wrong-bin');
        setTimeout(() => binEl.classList.remove('wrong-bin'), 500);
    }

    function advanceStage() {
        isPaused = true;
        currentStageIndex++;
        const stage = STAGES[currentStageIndex];
        const stageDialogue = dialogues.stages[`stage${currentStageIndex + 1}`];
        
        stageMacawSprite.dataset.spriteKey = 'macaw_falando'; 
        stageMacawSprite.src = AccessibilityManager.getUISprite('macaw_falando');

        document.getElementById('stage-title').textContent = stage.title;
        document.getElementById('stage-explanation').textContent = stageDialogue;
        stageTransitionScreen.classList.remove('hidden');
        stageTransitionScreen.classList.add('flex');
    }

    function resumeGame() {
        stageTransitionScreen.classList.add('hidden');
        isPaused = false;
        setupStage();
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (isPaused) return; 
            timer--;
            updateTimerDisplay();
            if (timer <= 15 && timer > 0) {
                timerEl.classList.add('timer-warning');
                if (settings.sfx && audioInitialized && (timer % 2 === 0)) { playSound('alerta-cronometro'); } 
            } else {
                timerEl.classList.remove('timer-warning');
                stopSound('alerta-cronometro'); 
            }
            if (timer <= 0) {
                timer = 0; // Trava em 0
                updateTimerDisplay();
                endGame(false);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
        const seconds = (timer % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }

    function updateScore(currentStageScore) {
        const stage = STAGES[currentStageIndex];
        stageScoreEl.textContent = `${currentStageScore} / ${stage.goal}`; 
    }

    function showMacawMessage(text, duration = 4000, expression = 'falando') {
        if (macawTimeout) clearTimeout(macawTimeout);

        const spriteKey = `macaw_${expression}`; 
        macawSprite.dataset.spriteKey = spriteKey; 
        macawSprite.src = AccessibilityManager.getUISprite(spriteKey); 

        macawText.textContent = text;
        macawMessage.classList.remove('opacity-0');
        macawTimeout = setTimeout(() => {
            macawMessage.classList.add('opacity-0');
        }, duration);
    }

    function scheduleRandomDialogue() {
        if (otherDialogueTimeout) clearTimeout(otherDialogueTimeout);
        otherDialogueTimeout = setTimeout(() => {
            if (!isPaused && !isShowingIntro) {
                showMacawMessage(getRandomDialogue('other'), 4000, 'falando');
            }
            scheduleRandomDialogue();
        }, 20000 + Math.random() * 15000);
    }

    function endGame(isWinner) {
        isPaused = true; // Pausa o jogo
        stopGameIntervals();
        playSound('avaliacao-final'); 
        gameHeader.classList.add('hidden');
        gameMain.classList.add('hidden');
        document.getElementById('final-score').textContent = totalScore;
        const texts = fase2LangData[settings.language]; 
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = '';
        let stars = 0, message = "", title = "";
        let macawEndSpriteKey = 'macaw_triste'; 
        
        if (isWinner) {
            title = texts.end_title_win;
            stars = 3;
            message = dialogues.performance[2];
            macawEndSpriteKey = 'macaw_feliz'; 
            
            if (finalActionButton) {
                finalActionButton.setAttribute('data-key', 'btn_jogar_novo'); 
                finalActionButton.textContent = texts.btn_jogar_novo; 
            }
        } else {
            title = texts.end_title_timeup;
            const totalPossibleScore = STAGES.reduce((acc, stage) => acc + stage.goal, 0);
            const percentage = totalScore / totalPossibleScore;
            if (percentage > 0.7) {
                stars = 2;
                message = dialogues.performance[1];
                macawEndSpriteKey = 'macaw_feliz'; 
            } else if (totalScore > 0) {
                stars = 1;
                message = dialogues.performance[0];
                macawEndSpriteKey = 'macaw_curiosa'; 
            } else {
                stars = 0;
                message = getRandomDialogue('defeat');
                macawEndSpriteKey = 'macaw_triste'; 
            }
            if (finalActionButton) {
                finalActionButton.setAttribute('data-key', 'btn_jogar_novo');
                finalActionButton.textContent = texts.btn_jogar_novo; 
            }
        }
        
        endMacawSprite.dataset.spriteKey = macawEndSpriteKey; 
        endMacawSprite.src = AccessibilityManager.getUISprite(macawEndSpriteKey);

        for (let i = 0; i < 3; i++) {
            starsContainer.appendChild(document.createElement('span')).textContent = i < stars ? '⭐' : '☆';
        }
        document.getElementById('end-title').textContent = title;
        document.getElementById('end-score-text-before').textContent = texts.end_score_text; 
        document.getElementById('end-score-text-after').textContent = texts.end_score_items;
        document.getElementById('end-message').textContent = message;
        endScreen.classList.remove('hidden');
        endScreen.classList.add('flex');
    }

    function setupDragAndDrop() {
        document.addEventListener('dragstart', e => { 
            if (e.target.classList.contains('trash-item')) { 
                if (isPaused || isShowingIntro) {
                    e.preventDefault();
                    return;
                }
                playSound('pegar-soltar'); 
                e.dataTransfer.setData('text/plain', e.target.dataset.category); 
                e.dataTransfer.setData('elementId', e.target.id); 
                setTimeout(() => e.target.classList.add('opacity-50'), 0); 
            } 
        });
        document.addEventListener('dragend', e => { 
            if (e.target.classList.contains('trash-item')) { 
                e.target.classList.remove('opacity-50'); 
            } 
        });
        
        bins.forEach(bin => { 
            bin.addEventListener('dragover', e => { 
                e.preventDefault(); 
                if (bin.classList.contains('active')) { 
                    bin.classList.add('drag-over'); 
                } 
            }); 
            
            bin.addEventListener('dragleave', e => { bin.classList.remove('drag-over'); }); 
            
            bin.addEventListener('drop', e => { 
                e.preventDefault(); 
                if (isPaused) return;
                bin.classList.remove('drag-over'); 
                const droppedCategory = e.dataTransfer.getData('text/plain'); 
                const binCategory = bin.dataset.category; 
                const elementId = e.dataTransfer.getData('elementId'); 
                const trashEl = document.getElementById(elementId); 
                const isCorrect = (trashEl && droppedCategory === binCategory);
                const isActive = bin.classList.contains('active'); 
                if (isActive && isCorrect) {
                    handleCorrectDrop(trashEl, bin); 
                } else {
                    handleWrongDrop(bin); 
                } 
            }); 
        });
    }

    // --- INÍCIO: FUNÇÕES DE CONTROLE DE TOQUE (TOUCH) (ADIÇÃO) ---

    function setupTouchControls() {
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    }

    function handleTouchStart(e) {
        const trashEl = e.target.closest('.trash-item');
        if (!trashEl || isPaused || isShowingIntro) return;
        e.preventDefault();
        activeTrashEl = trashEl;
        playSound('pegar-soltar');
        const touch = e.touches[0];
        const spawnAreaRect = trashSpawnArea.getBoundingClientRect();
        const rect = activeTrashEl.getBoundingClientRect();
        initialTouchX = touch.clientX - rect.left;
        initialTouchY = touch.clientY - rect.top;
        originalTrashLeft = activeTrashEl.style.left;
        originalTrashTop = activeTrashEl.style.top;
        originalTrashTransform = activeTrashEl.style.transform;
        activeTrashEl.classList.add('opacity-50');
        activeTrashEl.style.zIndex = 100;
        activeTrashEl.style.transition = 'none'; 
        let newX = touch.clientX - spawnAreaRect.left - initialTouchX;
        let newY = touch.clientY - spawnAreaRect.top - initialTouchY;
        activeTrashEl.style.left = `${newX}px`;
        activeTrashEl.style.top = `${newY}px`;
        activeTrashEl.style.transform = 'scale(1.1)'; 
    }

    function handleTouchMove(e) {
        if (!activeTrashEl || isPaused || isShowingIntro) return;
        e.preventDefault(); 
        const touch = e.touches[0];
        const spawnAreaRect = trashSpawnArea.getBoundingClientRect();
        let newX = touch.clientX - spawnAreaRect.left - initialTouchX;
        let newY = touch.clientY - spawnAreaRect.top - initialTouchY;
        activeTrashEl.style.left = `${newX}px`;
        activeTrashEl.style.top = `${newY}px`;
        activeTrashEl.style.display = 'none';
        const elAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
        activeTrashEl.style.display = ''; 
        const dropTarget = elAtPoint ? elAtPoint.closest('.bin') : null;
        if (dropTarget !== currentDroppable) {
            if (currentDroppable) {
                currentDroppable.classList.remove('drag-over');
            }
            currentDroppable = dropTarget;
            if (currentDroppable && currentDroppable.classList.contains('active')) {
                currentDroppable.classList.add('drag-over');
            }
        }
    }

    function handleTouchEnd(e) {
        if (!activeTrashEl) return;
        const elToReset = activeTrashEl; 
        activeTrashEl = null; 
        let droppedSuccessfully = false;
        if (currentDroppable) {
            const droppedCategory = elToReset.dataset.category;
            const binCategory = currentDroppable.dataset.category;
            const isCorrect = (droppedCategory === binCategory);
            const isActive = currentDroppable.classList.contains('active');
            if (isActive && isCorrect) {
                handleCorrectDrop(elToReset, currentDroppable);
                droppedSuccessfully = true;
            } else {
                handleWrongDrop(currentDroppable);
            }
            currentDroppable.classList.remove('drag-over');
            currentDroppable = null;
        }
        if (!droppedSuccessfully) {
            elToReset.style.transition = 'left 0.3s ease, top 0.3s ease, transform 0.3s ease, opacity 0.3s ease, z-index 0.3s ease';
            elToReset.classList.remove('opacity-50');
            elToReset.style.zIndex = 15; 
            elToReset.style.left = originalTrashLeft;
            elToReset.style.top = originalTrashTop;
            elToReset.style.transform = originalTrashTransform;
            setTimeout(() => {
                elToReset.style.transition = 'transform 0.2s ease, opacity 0.3s ease'; 
            }, 300);
        }
    }
    // --- FIM: FUNÇÕES DE CONTROLE DE TOQUE (TOUCH) ---


    // --- FUNÇÕES DO GUIA/LIVRO (MANTIDO) ---
    function setupBook() {
        prepareBookContent();
        bookButton.addEventListener('click', () => { openBook(); }); 
        bookModalClose.addEventListener('click', () => { closeBook(); }); 
        prevPageBtn.addEventListener('click', () => { playSound('clique-ui'); changePage(-1); }); 
        nextPageBtn.addEventListener('click', () => { playSound('clique-ui'); changePage(1); }); 
        itemDetailClose.addEventListener('click', closeItemDetails); 
    }

    function prepareBookContent() { 
        const TRASH_ITEMS = getTranslatedTrashItems();
        allBookItems = [];
        const categoryOrder = ['organicos', 'papel', 'metais', 'vidros', 'plasticos', 'rejeitos'];
        categoryOrder.forEach(categoryKey => {
            TRASH_ITEMS[categoryKey].forEach(item => { 
                allBookItems.push({ ...item, groupName: TRASH_GROUP_NAMES[categoryKey] }); 
            });
        });
        calculateBookPages(); 
    }

    function calculateBookPages() {
        bookPages = [];
        const itemsPerSpread = ITEMS_PER_SPREAD; 
        for (let i = 0; i < allBookItems.length; i += itemsPerSpread) {
            bookPages.push(allBookItems.slice(i, i + itemsPerSpread));
        }
    }
    
    function renderPage(pageNumber) { 
        currentPage = pageNumber; 
        const pageData = bookPages[currentPage - 1] || [];
        pageSections.forEach(section => section.innerHTML = ''); 
        const sectionMap = {}; 
        pageSections.forEach((section, index) => {
            section.innerHTML = '';
            const startIndex = index * ITEMS_PER_ROW;
            const endIndex = startIndex + ITEMS_PER_ROW;
            const itemsInSection = pageData.slice(startIndex, endIndex);
            if (itemsInSection.length > 0) {
                const groupName = itemsInSection[0].groupName; 
                let itemsContainer = document.createElement('div');
                itemsContainer.className = 'items-container'; 
                section.appendChild(itemsContainer);
                sectionMap[index] = { container: itemsContainer, items: itemsInSection };
            }
        });
        Object.values(sectionMap).forEach(data => {
            const itemsContainer = data.container;
            data.items.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'book-item'; 
                itemEl.onclick = () => { showItemDetails(item); };
                const img = document.createElement('img');
                img.src = getIconPathByColorMode(item); 
                img.alt = item.name;
                img.className = ''; 
                const name = document.createElement('p');
                name.textContent = item.name;
                name.className = ''; 
                itemEl.appendChild(img);
                itemEl.appendChild(name);
                itemsContainer.appendChild(itemEl);
            });
        });
        updateBookNavigation(); 
    }
    
    function updateBookNavigation() { 
        const totalPages = bookPages.length;
        const texts = fase2LangData[settings.language];
        pageIndicator.textContent = `${texts.livro_pagina} ${currentPage} / ${totalPages}`; 
        prevPageBtn.disabled = currentPage === 1; 
        nextPageBtn.disabled = currentPage === totalPages; 
    }
    
    function changePage(direction) { 
        const newPage = currentPage + direction; 
        const totalPages = bookPages.length;
        if (newPage > 0 && newPage <= totalPages) { 
            bookPagesContainer.classList.add('fade-out'); 
            setTimeout(() => { 
                renderPage(newPage); 
                bookPagesContainer.classList.remove('fade-out'); 
            }, 300); 
        } 
    }

    function openBook() { 
        isPaused = true; 
        prepareBookContent(); 
        renderPage(1); 
        bookModal.classList.remove('hidden'); 
        bookModal.classList.add('flex'); 
    }

    function closeBook() { 
        isPaused = false; 
        bookModal.classList.add('hidden'); 
        bookModal.classList.remove('flex'); 
    }

    // --- INICIA O JOGO ---
    loadSettings(); 
    init();
};