const recipes = [
    {
        id: 1,
        name: "Brownie",
        author: "Péricles Rossetti",
        image: "🍫",
        category: "Doce",
        ingredients: [
            "4 ovos",
            "1 xícara de açúcar",
            "1 xícara de farinha de trigo",
            "2 xícaras de cacau em pó",
            "Aproximadamente 75g de manteiga (em temperatura ambiente ou derretida, mas não quente)",
            "1 barra de chocolate (opcional; chocolate amargo funciona bem)"
        ],
        instructions: [
            "Bata os ovos e o açúcar juntos até que a mistura fique lisa e uniforme.",
            "Incorpore a manteiga e misture bem (se usar manteiga derretida, certifique-se de que não esteja quente para não cozinhar os ovos).",
            "Adicione o cacau em pó até ficar completamente incorporado.",
            "Adicione a farinha e misture novamente até incorporar.",
            "Se estiver usando a barra de chocolate, pique-a e dobre uma parte na massa, reservando o restante para polvilhar por cima.",
            "Despeje a massa em uma forma untada e asse em forno pré-aquecido a 180°C por cerca de 30 minutos.",
            "Quando o tempo de cozimento estiver completo, teste com um palito para garantir que o brownie esteja totalmente assado."
        ],
        prepTime: "15 min",
        cookTime: "30 min",
        servings: "8 porções"
    },
    {
        id: 2,
        name: "Pipoca Doce",
        author: "Péricles Rossetti",
        image: "🍿",
        category: "Doce",
        ingredients: [
            "1/2 xícara de milho para pipoca",
            "3 colheres de sopa de óleo",
            "1 lata de leite condensado",
            "2 colheres de sopa de manteiga",
            "1 xícara de leite em pó Ninho",
            "1 pitada de sal"
        ],
        instructions: [
            "Em uma panela grande com tampa, aqueça o óleo em fogo médio-alto.",
            "Adicione o milho para pipoca, tampe a panela e aguarde estourar. Balance a panela ocasionalmente para não queimar.",
            "Quando parar de estourar, retire do fogo e transfira a pipoca para uma tigela grande, removendo os grãos que não estouraram.",
            "Na mesma panela, adicione o leite condensado, a manteiga e uma pitada de sal. Cozinhe em fogo baixo, mexendo sempre.",
            "Quando a mistura começar a engrossar e desgrudar do fundo da panela (cerca de 8-10 minutos), adicione metade do leite em pó e misture bem.",
            "Despeje a calda quente sobre a pipoca e misture rapidamente com uma colher de pau até que toda a pipoca esteja coberta.",
            "Polvilhe o restante do leite em pó por cima e misture delicadamente.",
            "Deixe esfriar completamente antes de servir. A pipoca ficará crocante conforme esfria."
        ],
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "6 porções"
    },
    {
        id: 3,
        name: "Miojo Cremoso",
        author: "Péricles Rossetti",
        image: "🍜",
        category: "Salgado",
        ingredients: [
            "1 pacote de miojo (sabor de sua preferência)",
            "200 ml de água",
            "2 colheres de sopa de creme de leite (pode ser de caixinha)",
            "1 colher de sopa de requeijão cremoso (opcional)",
            "Queijo ralado a gosto (opcional)"
        ],
        instructions: [
            "Coloque a água numa panela e leve ao fogo.",
            "Quando ferver, adicione o macarrão e cozinhe por 2 a 3 minutos (até amolecer).",
            "Quando o macarrão estiver quase no ponto, adicione o tempero do pacote, o creme de leite e o requeijão.",
            "Mexa bem, mantendo em fogo baixo para não talhar o creme de leite.",
            "Misture até o molho encorpar e ficar cremoso.",
            "Desligue o fogo e, se quiser, adicione queijo ralado.",
            "Coloque no prato e sirva ainda quente."
        ],
        prepTime: "2 min",
        cookTime: "6 min",
        servings: "1 porção"
    },
    {
        id: 4,
        name: "Strogonoff de Frango",
        author: "Péricles Rossetti",
        image: "🍗",
        category: "Salgado",
        ingredients: [
            "500g de peito de frango cortado em cubos",
            "1 cebola pequena picada",
            "2 dentes de alho picados",
            "2 colheres de sopa de óleo ou manteiga",
            "Sal a gosto",
            "1 colher de sopa de ketchup",
            "1 colher de sopa de mostarda",
            "1 caixinha (200g) de creme de leite"
        ],
        instructions: [
            "Em uma panela, aqueça o óleo ou manteiga e refogue a cebola e o alho até dourar.",
            "Acrescente o frango, tempere com sal, e frite até ficar bem cozido e levemente dourado.",
            "Adicione o ketchup e a mostarda, misturando bem.",
            "Desligue o fogo, acrescente o creme de leite e mexa até ficar homogêneo (não deixe ferver para não talhar).",
            "Sirva quente, acompanhado de arroz branco e batata palha."
        ],
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "4 porções"
    },
    {
        id: 5,
        name: "Lasanha",
        author: "Willyan Gabriel Soares Camargo",
        image: "🍝",
        category: "Salgado",
        ingredients: [
            "1 massa de lasanha",
            "600g de queijo (mussarela e parmesão)",
            "400g de presunto",
            "1kg de carne moída",
            "Molho de tomate (aproximadamente 500ml)",
            "1 cebola média picada",
            "2 dentes de alho picados",
            "Sal e pimenta a gosto",
            "Óleo para refogar"
        ],
        instructions: [
            "Cozinhe a massa de lasanha em água fervente com sal até ficar al dente. Escorra e reserve.",
            "Em uma panela grande, aqueça o óleo e refogue a cebola e o alho até dourar.",
            "Adicione a carne moída e cozinhe até ficar bem dourada, temperando com sal e pimenta.",
            "Acrescente o molho de tomate à carne e deixe cozinhar por 10 minutos em fogo baixo.",
            "Pré-aqueça o forno a 180°C e unte uma assadeira grande.",
            "Monte a lasanha em camadas: comece com um pouco de molho no fundo da assadeira.",
            "Coloque uma camada de massa, depois carne com molho, presunto e queijo.",
            "Repita as camadas até acabar os ingredientes, finalizando com queijo por cima.",
            "Cubra com papel alumínio e asse por 30 minutos.",
            "Retire o papel alumínio e asse por mais 15 minutos até dourar o queijo.",
            "Deixe descansar por 10 minutos antes de servir para firmar as camadas."
        ],
        prepTime: "30 min",
        cookTime: "45 min",
        servings: "8 porções"
    },
    {
        id: 6,
        name: "Pão Caseiro",
        author: "Marlene Rossetti Donda",
        image: "🥖",
        category: "Salgado",
        ingredients: [
            "5 xícaras de farinha de trigo",
            "2 colheres de sopa de manteiga",
            "2 ovos",
            "1 colher de sopa de fermento biológico seco",
            "2 colheres de sopa de açúcar",
            "1 colher de chá de sal",
            "1 xícara de água morna (aproximadamente)"
        ],
        instructions: [
            "Dissolva o fermento na água morna com uma pitada de açúcar e deixe descansar por 5 minutos até espumar.",
            "Em uma tigela grande, misture a farinha, o açúcar e o sal.",
            "Derreta a manteiga e deixe esfriar um pouco.",
            "Bata os ovos e misture com a manteiga derretida.",
            "Adicione a mistura de ovos e manteiga aos ingredientes secos.",
            "Acrescente o fermento dissolvido e misture bem até formar uma massa homogênea.",
            "Sove a massa por cerca de 10 minutos até ficar lisa e elástica.",
            "Modele os pãezinhos no formato desejado e coloque em assadeira untada.",
            "Deixe crescer por 30-40 minutos até dobrar de tamanho.",
            "Asse em forno pré-aquecido a 180°C por 20-25 minutos até dourar."
        ],
        prepTime: "20 min",
        cookTime: "25 min",
        servings: "12 pãezinhos"
    },
    {
        id: 7,
        name: "Bolo de Laranja",
        author: "Marlene Rossetti Donda",
        image: "🍊",
        category: "Doce",
        ingredients: [
            "1 laranja grande ou 2 pequenas (com casca)",
            "1 copo de óleo",
            "4 ovos",
            "2 copos de farinha de trigo",
            "2 copos de açúcar",
            "1 colher de sopa de fermento em pó"
        ],
        instructions: [
            "Lave bem a laranja e corte em pedaços, removendo apenas as sementes.",
            "No liquidificador, bata a laranja com casca junto com o óleo até ficar bem triturado.",
            "Adicione os ovos e bata novamente até misturar bem.",
            "Em uma tigela grande, misture a farinha, o açúcar e o fermento em pó.",
            "Despeje a mistura do liquidificador sobre os ingredientes secos.",
            "Misture delicadamente até incorporar todos os ingredientes.",
            "Despeje a massa em forma untada e enfarinhada.",
            "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
            "Teste com palito - se sair limpo, o bolo está pronto.",
            "Deixe esfriar antes de desenformar."
        ],
        prepTime: "15 min",
        cookTime: "40 min",
        servings: "10 porções"
    },
    {
        id: 8,
        name: "Pudim de Coco",
        author: "Marlene Rossetti Donda",
        image: "🥥",
        category: "Doce",
        ingredients: [
            "1 xícara de açúcar (para a calda)",
            "2 colheres de sopa de farinha de trigo",
            "2 colheres de sopa de açúcar",
            "2 copos de leite",
            "100g de coco ralado",
            "100g de queijo ralado",
            "3 ovos"
        ],
        instructions: [
            "Prepare a calda: em uma panela, derreta 1 xícara de açúcar até formar um caramelo dourado.",
            "Despeje o caramelo numa forma de pudim, espalhando bem pelo fundo e laterais. Reserve.",
            "No liquidificador, bata todos os ingredientes restantes: farinha, açúcar, leite, coco, queijo e ovos.",
            "Bata bem até obter uma mistura homogênea e cremosa.",
            "Despeje a mistura na forma caramelizada.",
            "Cubra com papel alumínio e cozinhe em banho-maria por 45-60 minutos.",
            "Para testar se está pronto, espete um palito - deve sair limpo.",
            "Deixe esfriar completamente antes de desenformar.",
            "Para desenformar, passe uma faca nas bordas e vire rapidamente num prato."
        ],
        prepTime: "20 min",
        cookTime: "60 min",
        servings: "8 porções"
    },
    {
        id: 9,
        name: "Pudim de Leite Condensado",
        author: "Marlene Rossetti Donda",
        image: "🍮",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "1 litro de leite",
            "5 ovos",
            "5 colheres de sopa de maisena",
            "5 colheres de sopa de açúcar",
            "1 xícara de açúcar (para a calda)"
        ],
        instructions: [
            "Prepare a calda: em uma panela, derreta 1 xícara de açúcar até formar um caramelo dourado.",
            "Despeje o caramelo numa forma de pudim, cobrindo bem o fundo. Reserve.",
            "No liquidificador, bata o leite condensado, o leite, os ovos, a maisena e o açúcar.",
            "Bata bem até obter uma mistura completamente lisa e homogênea.",
            "Passe a mistura por uma peneira fina para garantir que não há grumos.",
            "Despeje na forma caramelizada.",
            "Cubra com papel alumínio e cozinhe em banho-maria por 50-60 minutos.",
            "Teste com um palito - se sair limpo, está pronto.",
            "Deixe esfriar completamente na geladeira por pelo menos 4 horas.",
            "Para desenformar, passe uma faca nas bordas e vire num prato de servir."
        ],
        prepTime: "15 min",
        cookTime: "60 min",
        servings: "10 porções"
    },
    {
        id: 10,
        name: "Bolo de Banana Caramelizada",
        author: "Marlene Rossetti Donda",
        image: "🍌",
        category: "Doce",
        ingredients: [
            "3-4 bananas maduras fatiadas",
            "2 colheres de sopa de manteiga",
            "1 xícara de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó",
            "1 xícara e meia de leite",
            "2 ovos",
            "1/2 xícara de açúcar (para caramelizar)"
        ],
        instructions: [
            "Prepare o caramelo: em uma panela, derreta 1/2 xícara de açúcar até dourar.",
            "Despeje o caramelo no fundo de uma forma redonda, espalhando bem.",
            "Disponha as fatias de banana sobre o caramelo de forma decorativa.",
            "Em uma tigela, misture a farinha, o açúcar e o fermento.",
            "Em outra tigela, bata os ovos, adicione o leite e a manteiga derretida.",
            "Misture os ingredientes líquidos aos secos até formar uma massa homogênea.",
            "Despeje a massa cuidadosamente sobre as bananas caramelizadas.",
            "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
            "Deixe esfriar por 10 minutos antes de desenformar.",
            "Vire o bolo rapidamente num prato, deixando as bananas caramelizadas por cima."
        ],
        prepTime: "25 min",
        cookTime: "40 min",
        servings: "8 porções"
    },
    {
        id: 11,
        name: "Orelha de Padre",
        author: "Marlene Rossetti Donda",
        image: "🥨",
        category: "Doce",
        ingredients: [
            "2 ovos",
            "1 xícara de açúcar",
            "2 xícaras de leite",
            "1 colher de sopa de fermento em pó",
            "1 xícara de manteiga (em temperatura ambiente)",
            "Farinha de trigo (aproximadamente 4-5 xícaras)",
            "Óleo para fritar",
            "Açúcar refinado para polvilhar"
        ],
        instructions: [
            "Em uma tigela grande, bata os ovos com o açúcar até ficar cremoso.",
            "Adicione o leite e a manteiga, misturando bem.",
            "Acrescente o fermento e misture.",
            "Vá adicionando a farinha aos poucos, mexendo sempre, até formar uma massa que não grude nas mãos.",
            "Sove a massa por alguns minutos até ficar lisa e homogênea.",
            "Deixe descansar por 15 minutos coberta com um pano.",
            "Abra a massa com rolo, deixando com espessura de cerca de 0,5cm.",
            "Corte no formato desejado (retângulos, losangos ou tiras).",
            "Aqueça bastante óleo em uma panela funda.",
            "Frite as peças até ficarem douradas dos dois lados.",
            "Escorra em papel absorvente e polvilhe com açúcar refinado ainda quente."
        ],
        prepTime: "30 min",
        cookTime: "20 min",
        servings: "15 unidades"
    },
    {
        id: 12,
        name: "Sonho de Amor",
        author: "Marlene Rossetti Donda",
        image: "💕",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "2 gemas",
            "1 colher de sopa de margarina",
            "1/4 xícara de licor de cacau",
            "3 colheres de sopa de suco de limão"
        ],
        instructions: [
            "Em uma panela, misture o leite condensado com as gemas.",
            "Leve ao fogo baixo, mexendo sempre, até engrossar ligeiramente.",
            "Retire do fogo e adicione a margarina, mexendo até derreter completamente.",
            "Deixe esfriar um pouco e acrescente o licor de cacau.",
            "Por último, adicione o suco de limão e misture delicadamente.",
            "Leve à geladeira por pelo menos 2 horas antes de servir.",
            "Sirva em tacinhas individuais ou como recheio para bolos."
        ],
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "6 porções"
    },
    {
        id: 13,
        name: "Bolo de Bombom",
        author: "Marlene Rossetti Donda",
        image: "🍰",
        category: "Doce",
        ingredients: [
            "6 ovos",
            "1/2 xícara de óleo",
            "2 xícaras de farinha de trigo",
            "1 xícara de chocolate em pó",
            "2 xícaras de açúcar",
            "2 colheres de sopa de fermento em pó",
            "1 xícara de água quente"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma grande.",
            "Em uma tigela, bata os ovos até ficarem espumosos.",
            "Adicione o açúcar e continue batendo até ficar cremoso.",
            "Acrescente o óleo e misture bem.",
            "Em outra tigela, peneire a farinha, o chocolate em pó e o fermento.",
            "Alterne a adição dos ingredientes secos com a água quente, começando e terminando com os secos.",
            "Misture delicadamente até obter uma massa homogênea.",
            "Despeje na forma preparada e asse por 35-40 minutos.",
            "Teste com palito - se sair limpo, está pronto.",
            "Deixe esfriar antes de desenformar."
        ],
        prepTime: "20 min",
        cookTime: "40 min",
        servings: "12 porções"
    },
    {
        id: 14,
        name: "Mousse de Laranja",
        author: "Marlene Rossetti Donda",
        image: "🍊",
        category: "Doce",
        ingredients: [
            "1 xícara de suco de laranja",
            "1/2 colher de sopa de gelatina em pó sem sabor",
            "1 colher de sopa de casca ralada de laranja",
            "1 colher de sopa de suco de limão",
            "3 claras em temperatura ambiente",
            "1/4 xícara de açúcar",
            "1 xícara de creme de leite fresco"
        ],
        instructions: [
            "Em uma panela pequena, coloque 1/4 xícara do suco de laranja.",
            "Polvilhe a gelatina por cima e deixe descansar 5 minutos para amolecer.",
            "Leve ao fogo baixo e mexa até a gelatina dissolver completamente.",
            "Retire do fogo e junte o restante do suco de laranja, a casca ralada e o suco de limão.",
            "Coloque a mistura numa tigela e reserve.",
            "Coloque a tigela sobre uma bacia com água e gelo, mexendo sempre até engrossar ligeiramente.",
            "Bata as claras em neve, adicione o açúcar aos poucos até formar picos firmes.",
            "Bata o creme de leite até formar picos macios.",
            "Incorpore delicadamente as claras e depois o creme de leite à mistura de laranja.",
            "Distribua em taças e leve à geladeira por pelo menos 3 horas antes de servir."
        ],
        prepTime: "25 min",
        cookTime: "5 min",
        servings: "6 porções"
    },
    {
        id: 15,
        name: "Bom Bom Aberto de Morango",
        author: "Péricles Rossetti",
        image: "🍓",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "2 colheres de sopa de manteiga",
            "3 colheres de sopa de achocolatado em pó",
            "200g de biscoito Maria triturado",
            "1 pacote de gelatina sabor morango",
            "1 xícara de água quente",
            "1 lata de creme de leite",
            "Morangos frescos para decorar"
        ],
        instructions: [
            "Em uma panela, misture o leite condensado, manteiga e achocolatado.",
            "Leve ao fogo baixo, mexendo sempre até engrossar e desgrudar do fundo.",
            "Retire do fogo e adicione o biscoito triturado, misturando bem.",
            "Forre o fundo de uma forma com essa mistura de brigadeiro e biscoito.",
            "Dissolva a gelatina de morango na água quente conforme instruções da embalagem.",
            "Deixe esfriar um pouco e adicione o creme de leite, misturando bem.",
            "Despeje sobre a base de brigadeiro e leve à geladeira por 3 horas.",
            "Decore com morangos frescos cortados antes de servir.",
            "Corte em quadrados para servir."
        ],
        prepTime: "25 min",
        cookTime: "10 min",
        servings: "12 porções"
    },
    {
        id: 16,
        name: "Bom Bom Aberto de Uva Verde",
        author: "Péricles Rossetti",
        image: "🍇",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "2 colheres de sopa de manteiga",
            "3 colheres de sopa de achocolatado em pó",
            "200g de biscoito Maria triturado",
            "1 pacote de gelatina sabor uva",
            "1 xícara de água quente",
            "1 lata de creme de leite",
            "Uvas verdes sem sementes para decorar",
            "Corante verde (opcional)"
        ],
        instructions: [
            "Em uma panela, misture o leite condensado, manteiga e achocolatado.",
            "Leve ao fogo baixo, mexendo sempre até engrossar e desgrudar do fundo.",
            "Retire do fogo e adicione o biscoito triturado, misturando bem.",
            "Forre o fundo de uma forma com essa mistura de brigadeiro e biscoito.",
            "Dissolva a gelatina de uva na água quente conforme instruções da embalagem.",
            "Se desejar cor mais intensa, adicione algumas gotas de corante verde.",
            "Deixe esfriar um pouco e adicione o creme de leite, misturando bem.",
            "Despeje sobre a base de brigadeiro e leve à geladeira por 3 horas.",
            "Decore com uvas verdes cortadas ao meio antes de servir.",
            "Corte em quadrados para servir."
        ],
        prepTime: "25 min",
        cookTime: "10 min",
        servings: "12 porções"
    },
    {
        id: 17,
        name: "Bolacha Palito",
        author: "Marlene Rossetti Donda",
        image: "🍪",
        category: "Doce",
        ingredients: [
            "1 kg de farinha de trigo",
            "4 ovos",
            "4 colheres de sopa de manteiga",
            "1 copo de leite",
            "2 colheres de chá de sal amoníaco (ou fermento químico)",
            "10 colheres de sopa de açúcar",
            "1 pitada de sal"
        ],
        instructions: [
            "Em uma tigela grande, misture a farinha de trigo com o açúcar e a pitada de sal.",
            "Faça uma cavidade no centro e adicione os ovos.",
            "Derreta a manteiga e deixe esfriar um pouco.",
            "Adicione a manteiga derretida e o leite à mistura.",
            "Acrescente o sal amoníaco (ou fermento químico).",
            "Bata bem todos os ingredientes até formar uma massa homogênea.",
            "Sove a massa até ficar lisa e elástica.",
            "Abra a massa e corte em formato de palitos compridos.",
            "Coloque em assadeira untada e asse em forno pré-aquecido a 180°C por 15-20 minutos até dourar.",
            "Deixe esfriar antes de servir."
        ],
        prepTime: "25 min",
        cookTime: "20 min",
        servings: "30 unidades"
    },
    {
        id: 18,
        name: "Pudim de Pãozinho",
        author: "Marlene Rossetti Donda",
        image: "🍞",
        category: "Doce",
        ingredients: [
            "3 ovos",
            "1/2 litro de leite",
            "4-5 fatias de pão de forma (sem casca)",
            "1/2 xícara de coco ralado ou queijo ralado",
            "3 colheres de sopa de açúcar",
            "1 xícara de açúcar (para a calda)"
        ],
        instructions: [
            "Prepare a calda: derreta 1 xícara de açúcar até formar caramelo dourado e despeje numa forma de pudim.",
            "Corte o pão em pedaços e deixe de molho no leite por 10 minutos até amolecer.",
            "No liquidificador, bata os ovos, o açúcar, o pão umedecido com o leite e o coco (ou queijo).",
            "Bata bem até obter uma mistura homogênea e cremosa.",
            "Despeje a mistura na forma caramelizada.",
            "Cubra com papel alumínio e cozinhe em banho-maria por 40-50 minutos.",
            "Teste com palito - se sair limpo, está pronto.",
            "Deixe esfriar completamente antes de desenformar.",
            "Leve à geladeira por pelo menos 3 horas antes de servir."
        ],
        prepTime: "20 min",
        cookTime: "50 min",
        servings: "6 porções"
    },
    {
        id: 19,
        name: "Bolacha de Nata",
        author: "Marlene Rossetti Donda",
        image: "🥛",
        category: "Doce",
        ingredients: [
            "4 ovos",
            "2 copos de açúcar",
            "1 copo de nata (ou creme de leite fresco)",
            "1 caixa de maisena (500g)",
            "Farinha de trigo (aproximadamente 2-3 xícaras)",
            "2 colheres de sopa de fermento em pó"
        ],
        instructions: [
            "Em uma tigela grande, bata os ovos com o açúcar até ficar cremoso.",
            "Adicione a nata e misture bem.",
            "Acrescente a maisena aos poucos, mexendo sempre.",
            "Vá adicionando a farinha de trigo gradualmente até dar o ponto de massa que não grude nas mãos.",
            "Por último, adicione o fermento em pó e misture delicadamente.",
            "Sove a massa levemente até ficar homogênea.",
            "Abra a massa com rolo e corte no formato desejado (redondo ou quadrado).",
            "Coloque em assadeira untada, deixando espaço entre as bolachas.",
            "Asse em forno pré-aquecido a 180°C por 12-15 minutos até dourar levemente.",
            "Deixe esfriar antes de retirar da assadeira."
        ],
        prepTime: "30 min",
        cookTime: "15 min",
        servings: "40 unidades"
    },
    {
        id: 20,
        name: "Bolo de Fubá Cremoso",
        author: "Marlene Rossetti Donda",
        image: "🌽",
        category: "Doce",
        ingredients: [
            "3 ovos",
            "2 1/2 xícaras de fubá",
            "1/2 pacote de coco ralado (aproximadamente 50g)",
            "2 colheres de sopa de queijo ralado",
            "2 colheres de sopa de farinha de trigo",
            "1 colher de sopa de margarina",
            "1 colher de sopa bem cheia de fermento em pó",
            "2 xícaras de açúcar",
            "2 xícaras de leite morno"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma grande.",
            "No liquidificador, bata os ovos, o fubá, o coco, o queijo, a farinha de trigo, a margarina e o açúcar.",
            "Bata bem até obter uma mistura homogênea.",
            "Transfira a mistura para uma tigela grande.",
            "Adicione o leite morno e o fermento em pó, mexendo delicadamente até incorporar.",
            "A massa deve ficar cremosa e líquida.",
            "Despeje na forma untada e asse por 40-50 minutos.",
            "O bolo estará pronto quando dourar por cima e um palito sair limpo.",
            "Deixe esfriar um pouco antes de desenformar.",
            "Sirva morno ou frio."
        ],
        prepTime: "15 min",
        cookTime: "50 min",
        servings: "10 porções"
    },
    {
        id: 21,
        name: "Beijinho de Coco",
        author: "Marlene Rossetti Donda",
        image: "🥥",
        category: "Doce",
        ingredients: [
            "1 xícara de açúcar",
            "1 copo de leite",
            "1 xícara de coco ralado",
            "5 gemas",
            "Açúcar cristal para enrolar",
            "Cravos-da-índia para decorar"
        ],
        instructions: [
            "Em uma panela, misture o açúcar com o leite.",
            "Leve ao fogo médio, mexendo sempre, até formar um mingau consistente.",
            "Ainda morno, adicione o coco ralado e misture bem.",
            "Bata as gemas levemente e adicione aos poucos à mistura, mexendo sem parar.",
            "Continue mexendo até a mistura desgrudar do fundo da panela.",
            "Retire do fogo e deixe esfriar completamente.",
            "Com as mãos untadas, faça bolinhas com a massa.",
            "Passe cada bolinha no açúcar cristal.",
            "Decore cada beijinho com um cravo-da-índia no centro.",
            "Coloque em forminhas de papel e sirva."
        ],
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "20 unidades"
    },
    {
        id: 22,
        name: "Sequilhos de Polvilho",
        author: "Marlene Rossetti Donda",
        image: "⭕",
        category: "Doce",
        ingredients: [
            "1 xícara de polvilho doce",
            "1/2 xícara de farinha de trigo",
            "1/2 xícara de açúcar",
            "1/4 xícara de leite com uma pitada de sal",
            "2 colheres de sopa de manteiga",
            "2 ovos inteiros",
            "1/2 xícara de banha derretida (ou óleo)"
        ],
        instructions: [
            "Em uma tigela grande, misture o polvilho doce, a farinha de trigo e o açúcar.",
            "Faça uma cavidade no centro e adicione os ovos.",
            "Derreta a manteiga e a banha, deixe esfriar um pouco.",
            "Adicione a manteiga e banha derretidas à mistura.",
            "Acrescente o leite com sal aos poucos.",
            "Amasse bem todos os ingredientes até formar uma massa homogênea.",
            "Sove a massa até ficar lisa e elástica.",
            "Abra a massa com rolo e corte os sequilhos no formato desejado (redondo com furo no meio).",
            "Coloque em assadeira untada e asse em forno quente (200°C) por 15-20 minutos até dourar.",
            "Deixe esfriar antes de servir."
        ],
        prepTime: "25 min",
        cookTime: "20 min",
        servings: "25 unidades"
    },
    {
        id: 23,
        name: "Bolo Gelado",
        author: "Marlene Rossetti Donda",
        image: "🧊",
        category: "Doce",
        ingredients: [
            "4 ovos (separados)",
            "2 copos de farinha de trigo",
            "2 1/2 copos de açúcar",
            "1 colher de sopa de fermento em pó",
            "1 copo de leite morno"
        ],
        instructions: [
            "Bata as 4 claras em neve até formar picos firmes.",
            "Adicione as gemas uma a uma, batendo até ficarem bem claras e cremosas.",
            "Acrescente a farinha de trigo aos poucos, continuando a bater.",
            "Adicione o açúcar e continue batendo até incorporar bem.",
            "Misture delicadamente o fermento em pó.",
            "Por último, adicione o leite morno e mexa suavemente até homogeneizar.",
            "Despeje a massa em forma untada e enfarinhada.",
            "Asse em forno pré-aquecido a 180°C por 30-35 minutos.",
            "Deixe esfriar completamente antes de desenformar."
        ],
        prepTime: "20 min",
        cookTime: "35 min",
        servings: "10 porções"
    },
    {
        id: 24,
        name: "Pudim Gelado",
        author: "Marlene Rossetti Donda",
        image: "🍰",
        category: "Doce",
        ingredients: [
            "1 lata de leite",
            "1 lata de creme de leite",
            "1 lata de leite condensado",
            "3 colheres de sopa de manteiga",
            "1 colher de sopa de maisena",
            "1 gema",
            "Coco ralado a gosto",
            "1 bolo (para camadas)",
            "Guaraná (para umedecer o bolo)"
        ],
        instructions: [
            "No liquidificador, bata o leite, creme de leite, leite condensado, manteiga, maisena e gema.",
            "Leve a mistura ao fogo baixo, mexendo sempre até engrossar e cozinhar bem.",
            "Retire do fogo e deixe esfriar um pouco.",
            "Corte o bolo em fatias ou quadradinhos.",
            "Em um refratário, faça uma camada de bolo e umedeça com guaraná.",
            "Cubra com metade do creme preparado.",
            "Faça outra camada de bolo embebido no guaraná.",
            "Cubra com o restante do creme e polvilhe coco ralado por cima.",
            "Embrulhe em papel celofane e leve ao congelador.",
            "Deixe congelar por pelo menos 4 horas antes de servir."
        ],
        prepTime: "30 min",
        cookTime: "15 min",
        servings: "12 porções"
    },
    {
        id: 25,
        name: "Pastel Canudo",
        author: "Marlene Rossetti Donda",
        image: "🥟",
        category: "Salgado",
        ingredients: [
            "3 copos de farinha de trigo",
            "3 colheres de sopa de cachaça",
            "1 colher de chá de sal",
            "1 gema de ovo",
            "1 colher de chá de fermento em pó",
            "3 colheres de sopa de óleo",
            "Água (se necessário)"
        ],
        instructions: [
            "Em uma tigela, misture a farinha de trigo com o sal e o fermento.",
            "Faça uma cavidade no centro e adicione a gema, a cachaça e o óleo.",
            "Misture todos os ingredientes até formar uma massa homogênea.",
            "Se necessário, adicione um pouco de água para dar liga à massa.",
            "Sove a massa até ficar lisa e elástica.",
            "Deixe descansar por 15 minutos coberta com pano úmido.",
            "Abra a massa bem fina e corte em retângulos.",
            "Enrole cada retângulo em formato de canudo, selando as bordas com água.",
            "Frite em óleo quente até dourar.",
            "Escorra em papel absorvente e sirva quente."
        ],
        prepTime: "25 min",
        cookTime: "15 min",
        servings: "20 unidades"
    },
    {
        id: 26,
        name: "Pipoca de Araruta",
        author: "Marlene Rossetti Donda",
        image: "🍿",
        category: "Doce",
        ingredients: [
            "3 claras de ovo",
            "3 xícaras de açúcar",
            "1 colher de chá de sal amoníaco (ou fermento químico)",
            "3 xícaras de polvilho doce"
        ],
        instructions: [
            "Bata as claras em neve até formar picos firmes.",
            "Adicione o açúcar aos poucos, continuando a bater até formar um merengue consistente.",
            "Misture delicadamente o sal amoníaco (ou fermento químico).",
            "Incorpore o polvilho doce aos poucos, mexendo suavemente para não murchar as claras.",
            "A massa deve ficar consistente mas aerada.",
            "Com uma colher, faça pequenas porções da massa e coloque em assadeira untada.",
            "Asse em forno pré-aquecido a 150°C por 20-25 minutos até dourar levemente.",
            "Deixe esfriar completamente antes de retirar da assadeira.",
            "Ficam crocantes como pipoca quando prontas."
        ],
        prepTime: "20 min",
        cookTime: "25 min",
        servings: "30 unidades"
    },
    {
        id: 27,
        name: "Cueca Virada",
        author: "Marlene Rossetti Donda",
        image: "🥨",
        category: "Doce",
        ingredients: [
            "3 ovos inteiros",
            "3 colheres de sopa de óleo",
            "3 colheres de sopa de vinagre",
            "2 colheres de sopa de fermento em pó",
            "1 xícara de açúcar",
            "Farinha de trigo (aproximadamente 3-4 xícaras)"
        ],
        instructions: [
            "Em uma tigela, bata os ovos com o açúcar até ficar cremoso.",
            "Adicione o óleo e o vinagre, misturando bem.",
            "Acrescente o fermento em pó e misture.",
            "Vá adicionando a farinha de trigo aos poucos até dar o ponto de abrir a massa.",
            "A massa deve ficar consistente mas maleável.",
            "Sove levemente até ficar homogênea.",
            "Abra a massa com rolo, deixando com espessura média.",
            "Corte em tiras e faça o formato tradicional de cueca virada (laço).",
            "Frite em óleo quente até dourar dos dois lados.",
            "Escorra em papel absorvente e polvilhe açúcar refinado."
        ],
        prepTime: "30 min",
        cookTime: "20 min",
        servings: "25 unidades"
    },
    {
        id: 28,
        name: "Cocada",
        author: "Marlene Rossetti Donda",
        image: "🥥",
        category: "Doce",
        ingredients: [
            "2 kg de coco ralado fresco",
            "3 kg de açúcar cristal"
        ],
        instructions: [
            "Em uma panela grande e pesada, coloque o coco ralado e o açúcar.",
            "Leve ao fogo médio, mexendo sempre com colher de pau.",
            "Continue mexendo constantemente para não grudar no fundo.",
            "Deixe ferver, sempre mexendo, até o açúcar derreter completamente.",
            "Continue cozinhando até a mistura engrossar e começar a desgrudar da panela.",
            "O ponto está certo quando a cocada forma uma pasta consistente.",
            "Retire do fogo e despeje em assadeira untada.",
            "Deixe esfriar completamente antes de cortar em quadrados.",
            "Guarde em recipiente fechado para manter a textura."
        ],
        prepTime: "10 min",
        cookTime: "45 min",
        servings: "50 pedaços"
    },
    {
        id: 29,
        name: "Bolo de Queijo",
        author: "Marlene Rossetti Donda",
        image: "🧀",
        category: "Doce",
        ingredients: [
            "2 xícaras de queijo ralado",
            "1 xícara de coco ralado",
            "3 copos de açúcar",
            "1 copo de farinha de trigo",
            "6 ovos (separados)"
        ],
        instructions: [
            "Bata as claras em neve até formar picos firmes e reserve.",
            "Em outra tigela, bata as gemas com o açúcar até ficar cremoso.",
            "Adicione o queijo ralado e o coco ralado, misturando bem.",
            "Acrescente a farinha de trigo e misture até incorporar.",
            "Por último, incorpore delicadamente as claras em neve.",
            "Misture suavemente para não murchar as claras.",
            "Despeje a massa em forma untada e enfarinhada.",
            "Asse em forno brando (160°C) por 40-50 minutos.",
            "Teste com palito - se sair limpo, está pronto.",
            "Deixe esfriar antes de desenformar."
        ],
        prepTime: "20 min",
        cookTime: "50 min",
        servings: "12 porções"
    },
    {
        id: 30,
        name: "Bala de Pinga",
        author: "Marlene Rossetti Donda",
        image: "🍬",
        category: "Doce",
        ingredients: [
            "10 folhas de gelatina incolor",
            "3 folhas de gelatina vermelha",
            "3 xícaras de água fervente",
            "1 copo de cachaça (menos 2 dedos)",
            "1 colher de sopa de essência de abacaxi",
            "Açúcar cristal para polvilhar"
        ],
        instructions: [
            "Dissolva todas as gelatinas na água fervente, mexendo bem até dissolver completamente.",
            "Quando a gelatina estiver bem dissolvida, adicione a cachaça.",
            "Acrescente a essência de abacaxi e misture bem.",
            "Leve a mistura ao fogo baixo, mexendo sempre.",
            "Quando levantar fervura, retire imediatamente do fogo.",
            "Despeje em forma untada e deixe esfriar completamente.",
            "Leve à geladeira e deixe de um dia para o outro para ficar bem firme.",
            "No dia seguinte, corte com tesoura em formato de balas.",
            "Passe cada bala no açúcar cristal.",
            "Guarde em recipiente fechado."
        ],
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "40 balas"
    },
    {
        id: 31,
        name: "Palha Italiana Tradicional",
        author: "Marlene Rossetti Donda",
        image: "🍪",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "2 colheres de sopa de achocolatado em pó",
            "1/2 colher de sopa de margarina",
            "200g de biscoito Maria"
        ],
        instructions: [
            "Quebre os biscoitos em pedaços pequenos, evitando fazer farelos.",
            "Em uma panela, coloque o leite condensado, o achocolatado e a margarina.",
            "Leve ao fogo baixo, mexendo sempre até engrossar.",
            "Continue mexendo até a mistura desgrudar do fundo da panela.",
            "Retire do fogo e imediatamente adicione os biscoitos quebrados.",
            "Misture bem até todos os biscoitos ficarem cobertos com o brigadeiro.",
            "Despeje em uma forma rasa untada, espalhando uniformemente.",
            "Deixe esfriar completamente antes de cortar.",
            "Corte em quadrados ou retângulos para servir."
        ],
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "20 pedaços"
    },
    {
        id: 32,
        name: "Pudim Só de Gema",
        author: "Marlene Rossetti Donda",
        image: "🥚",
        category: "Doce",
        ingredients: [
            "5 gemas de ovo",
            "5 colheres de sopa de farinha de trigo",
            "1 xícara de açúcar",
            "2 copos de leite",
            "1 pires de coco ralado",
            "1 xícara de açúcar (para a calda)"
        ],
        instructions: [
            "Prepare a calda: derreta 1 xícara de açúcar até formar caramelo dourado e despeje numa forma de pudim.",
            "No liquidificador, bata as gemas, a farinha de trigo, o açúcar e o leite.",
            "Adicione o coco ralado e bata rapidamente apenas para misturar.",
            "Passe a mistura por uma peneira fina para garantir que não há grumos.",
            "Despeje na forma caramelizada.",
            "Cubra bem com papel alumínio.",
            "Cozinhe em banho-maria por 45-60 minutos.",
            "Teste com palito - se sair limpo, está pronto.",
            "Deixe esfriar completamente antes de desenformar.",
            "Leve à geladeira por pelo menos 4 horas antes de servir."
        ],
        prepTime: "20 min",
        cookTime: "60 min",
        servings: "8 porções"
    },
    {
        id: 33,
        name: "Beijo de Mulata",
        author: "Marlene Rossetti Donda",
        image: "💋",
        category: "Doce",
        ingredients: [
            "3 colheres de sopa de açúcar",
            "3 ovos",
            "1 colher de sopa de manteiga",
            "1 colher de chá de fermento em pó",
            "Farinha de trigo (até endurecer a massa)",
            "Óleo para fritar",
            "Coco ralado para passar"
        ],
        instructions: [
            "Em uma tigela, bata os ovos com o açúcar até ficar cremoso.",
            "Adicione a manteiga derretida e misture bem.",
            "Acrescente o fermento em pó e misture.",
            "Vá adicionando farinha de trigo aos poucos até a massa ficar consistente para fazer bolinhas.",
            "A massa deve estar firme o suficiente para modelar.",
            "Com as mãos untadas, faça bolinhas pequenas com a massa.",
            "Frite em óleo quente até dourar por todos os lados.",
            "Escorra em papel absorvente.",
            "Prepare a calda: misture 1 xícara de açúcar, 1/2 xícara de achocolatado e 10 colheres de leite. Cozinhe até engrossar.",
            "Passe as bolinhas fritas na calda e depois no coco ralado."
        ],
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "15 unidades"
    },
    {
        id: 34,
        name: "Bolo de Sonho",
        author: "Marlene Rossetti Donda",
        image: "☁️",
        category: "Doce",
        ingredients: [
            "2 xícaras de açúcar",
            "3 xícaras de farinha de trigo",
            "4 ovos (separados)",
            "1 colher de sopa de fermento em pó",
            "1 copo de suco de laranja",
            "Raspas de laranja ou limão"
        ],
        instructions: [
            "Bata as gemas com o açúcar até ficarem bem claras e cremosas.",
            "Adicione a farinha de trigo alternando com o suco de laranja.",
            "Acrescente as raspas de laranja ou limão e misture bem.",
            "Bata as claras em neve até formar picos firmes.",
            "Incorpore delicadamente as claras batidas à massa.",
            "Por último, adicione o fermento em pó e misture suavemente.",
            "Despeje em forma untada com margarina e polvilhada com farinha.",
            "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
            "Teste com palito - se sair limpo, está pronto."
        ],
        prepTime: "25 min",
        cookTime: "40 min",
        servings: "12 porções"
    },
    {
        id: 35,
        name: "Bolo de Mandioca",
        author: "Marlene Rossetti Donda",
        image: "🍠",
        category: "Doce",
        ingredients: [
            "400g de mandioca ralada",
            "400g de coco ralado",
            "3 xícaras de açúcar",
            "150g de margarina",
            "4 ovos inteiros",
            "1 colher de sopa de fermento em pó"
        ],
        instructions: [
            "Pré-aqueça o forno a 180°C e unte uma forma grande.",
            "Em uma tigela grande, misture a mandioca ralada com o coco ralado.",
            "Adicione o açúcar e misture bem.",
            "Derreta a margarina e deixe esfriar um pouco.",
            "Bata os ovos e adicione à mistura junto com a margarina derretida.",
            "Misture todos os ingredientes até ficar homogêneo.",
            "Por último, adicione o fermento em pó e misture delicadamente.",
            "Despeje na forma untada e asse por 45-50 minutos.",
            "O bolo estará pronto quando dourar e um palito sair limpo."
        ],
        prepTime: "20 min",
        cookTime: "50 min",
        servings: "12 porções"
    },
    {
        id: 36,
        name: "Bolo Pão de Ló",
        author: "Marlene Rossetti Donda",
        image: "🍰",
        category: "Doce",
        ingredients: [
            "6 ovos (separados)",
            "3 xícaras de açúcar",
            "1 xícara de farinha de trigo",
            "1/2 xícara de água morna",
            "5 colheres de chá de fermento em pó"
        ],
        instructions: [
            "Bata as gemas com o açúcar até ficarem bem claras e volumosas.",
            "Adicione a água morna e continue batendo.",
            "Incorpore a farinha de trigo peneirada, mexendo delicadamente.",
            "Bata as claras em neve até formar picos firmes.",
            "Incorpore as claras batidas à massa com movimentos suaves.",
            "Por último, adicione o fermento em pó e misture levemente.",
            "Despeje em forma untada e enfarinhada.",
            "Asse em forno pré-aquecido a 180°C por 30-35 minutos.",
            "Não abra o forno durante os primeiros 25 minutos para não murchar o bolo."
        ],
        prepTime: "25 min",
        cookTime: "35 min",
        servings: "10 porções"
    },
    {
    id: 37,
    name: "Bolo Pão de Ló",
    author: "Marlene Rossetti Donda",
    image: "🍰",
    category: "Doce",
    ingredients: [
        "6 ovos (separados)",
        "3 xícaras de açúcar",
        "1 xícara de farinha de trigo",
        "1/2 xícara de água morna",
        "5 colheres de chá de fermento em pó"
    ],
    instructions: [
        "Bata as gemas com o açúcar até ficarem bem claras e volumosas.",
        "Adicione a água morna e continue batendo.",
        "Incorpore a farinha de trigo peneirada, mexendo delicadamente.",
        "Bata as claras em neve até formar picos firmes.",
        "Incorpore as claras batidas à massa com movimentos suaves.",
        "Por último, adicione o fermento em pó e misture levemente.",
        "Despeje em forma untada e enfarinhada.",
        "Asse em forno pré-aquecido a 180°C por 30-35 minutos.",
        "Não abra o forno durante os primeiros 25 minutos para não murchar o bolo."
    ],
    prepTime: "25 min",
    cookTime: "35 min",
    servings: "10 porções"
},
{
    id: 38,
    name: "Rosquinha",
    author: "Marlene Rossetti Donda",
    image: "🍩",
    category: "Doce",
    ingredients: [
        "2 xícaras de leite morno",
        "2 colheres de sopa de fermento biológico",
        "1 xícara de açúcar",
        "4 ovos",
        "1 kg de farinha de trigo",
        "Margarina para untar"
    ],
    instructions: [
        "Dissolva o fermento no leite morno com uma pitada de açúcar.",
        "Deixe descansar por 10 minutos até espumar.",
        "Em uma tigela grande, bata os ovos com o açúcar.",
        "Adicione o fermento dissolvido e misture bem.",
        "Vá incorporando a farinha aos poucos até formar uma massa lisa.",
        "Sove a massa por 10 minutos até ficar elástica.",
        "Deixe crescer por 1 hora em local morno até dobrar de tamanho.",
        "Modele no formato de rosca e coloque em assadeira untada.",
        "Deixe crescer novamente por 30 minutos.",
        "Asse em forno pré-aquecido a 180°C por 25-30 minutos até dourar."
    ],
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "12 porções"
},
{
    id: 39,
    name: "Nhoque de Batata",
    author: "Marlene Rossetti Donda",
    image: "🥔",
    category: "Salgado",
    ingredients: [
        "500g de batata cozida e amassada",
        "Sal a gosto",
        "1 colher de sopa de margarina",
        "2 colheres de chá de maisena",
        "Farinha de trigo (se necessário)"
    ],
    instructions: [
        "Cozinhe as batatas com casca até ficarem bem macias.",
        "Descasque ainda quentes e amasse bem até ficar um purê liso.",
        "Tempere com sal a gosto.",
        "Adicione a margarina e a maisena, misturando bem.",
        "Se a massa estiver muito mole, adicione um pouco de farinha de trigo.",
        "A massa deve ficar consistente para modelar.",
        "Faça rolinhos e corte em pedaços pequenos.",
        "Passe cada nhoque pelo garfo para fazer os risquinhos tradicionais.",
        "Cozinhe em água fervente com sal até subirem à superfície.",
        "Sirva com molho de sua preferência."
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: "4 porções"
},
{
    id: 40,
    name: "Panquecas",
    author: "Marlene Rossetti Donda",
    image: "🥞",
    category: "Salgado",
    ingredients: [
        "3/4 xícara de farinha de trigo",
        "3/4 xícara de maisena",
        "2 ovos",
        "1 pitada de sal",
        "1 xícara de leite",
        "1 colher de sopa de margarina derretida"
    ],
    instructions: [
        "Em uma tigela, misture a farinha de trigo, maisena e sal.",
        "Em outra tigela, bata os ovos com o leite.",
        "Adicione a margarina derretida aos ovos e leite.",
        "Incorpore os ingredientes líquidos aos secos, mexendo até ficar liso.",
        "Se a massa ficar muito grossa, adicione um pouco mais de leite.",
        "Deixe a massa descansar por 15 minutos.",
        "Aqueça uma frigideira antiaderente em fogo médio.",
        "Despeje uma concha de massa e espalhe formando um círculo fino.",
        "Cozinhe até dourar embaixo, vire e doure o outro lado.",
        "Sirva com recheio doce ou salgado de sua preferência."
    ],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "8 panquecas"
},
{
    id: 41,
    name: "Bem Casado",
    author: "Marlene Rossetti Donda",
    image: "💑",
    category: "Doce",
    ingredients: [
        "6 ovos",
        "6 colheres de sopa de farinha de trigo",
        "6 colheres de sopa bem cheias de açúcar",
        "Manteiga para untar",
        "Farinha para polvilhar",
        "1 lata de leite condensado (recheio)",
        "2 gemas (recheio)",
        "1 colher de sopa de manteiga (recheio)",
        "1/4 xícara de suco de limão (recheio)",
        "Nozes ou amêndoas moídas (recheio)"
    ],
    instructions: [
        "Bata os ovos com o açúcar até ficar bem claro e volumoso.",
        "Incorpore delicadamente a farinha de trigo peneirada.",
        "Despeje em forma untada e polvilhada com farinha.",
        "Asse em forno pré-aquecido a 180°C por 20-25 minutos.",
        "Deixe esfriar e corte em círculos pequenos.",
        "Para o recheio: cozinhe o leite condensado com as gemas e manteiga até engrossar.",
        "Retire do fogo e adicione o suco de limão.",
        "Deixe esfriar e adicione as nozes moídas.",
        "Recheie as bolachinhas no meio com o creme.",
        "Una duas bolachinhas formando um sanduíche."
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: "20 unidades"
},
{
    id: 42,
    name: "Manjar de Ameixas Pretas",
    author: "Marlene Rossetti Donda",
    image: "🟣",
    category: "Doce",
    ingredients: [
        "1 litro de leite",
        "7 colheres de sopa de maisena",
        "1 xícara de açúcar",
        "1 lata de leite condensado",
        "2 vidros pequenos de leite de coco",
        "2 xícaras de açúcar (calda)",
        "3 1/2 xícaras de água fervente (calda)",
        "1 pau de canela (calda)",
        "500g de ameixas pretas secas (calda)"
    ],
    instructions: [
        "Dissolva a maisena em um pouco do leite frio.",
        "Em uma panela, aqueça o restante do leite com o açúcar.",
        "Adicione a maisena dissolvida, mexendo sempre até engrossar.",
        "Acrescente o leite condensado e o leite de coco, mexendo bem.",
        "Cozinhe até obter consistência de mingau grosso.",
        "Despeje água gelada numa forma e em seguida o manjar quente.",
        "Deixe esfriar e leve à geladeira.",
        "Para a calda: ferva a água com açúcar e canela até formar calda.",
        "Adicione as ameixas e cozinhe até ficarem macias.",
        "Sirva o manjar gelado coberto com a calda de ameixas."
    ],
    prepTime: "25 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 44,
    name: "Torta Deliciosa",
    author: "Marlene Rossetti Donda",
    image: "🍰",
    category: "Doce",
    ingredients: [
        "3 claras de ovo",
        "3 gemas de ovo",
        "1 xícara e meia de açúcar",
        "1 colher de chá de fermento em pó",
        "1 xícara de água",
        "3 gemas (para o creme)",
        "2 colheres de sopa de margarina",
        "1 lata de leite condensado",
        "2 colheres de sopa de leite",
        "1 creme de leite (cobertura)",
        "3 colheres de sopa de açúcar (cobertura)"
    ],
    instructions: [
        "Bata as claras em neve até formar picos firmes.",
        "Adicione as gemas uma a uma, batendo bem.",
        "Acrescente o açúcar e continue batendo até ficar cremoso.",
        "Incorpore delicadamente o fermento em pó.",
        "Por último, adicione a água e misture suavemente.",
        "Asse em forma untada a 180°C por 25-30 minutos.",
        "Para o creme: misture as 3 gemas, margarina, leite condensado e leite.",
        "Leve ao fogo baixo, mexendo sempre até engrossar.",
        "Deixe esfriar completamente.",
        "Para a cobertura: bata o creme de leite com açúcar até formar picos.",
        "Monte a torta: bolo, creme, cobertura de chantilly."
    ],
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 45,
    name: "Pãozinho de Queijo de Liquidificador",
    author: "Marlene Rossetti Donda",
    image: "🧀",
    category: "Salgado",
    ingredients: [
        "1 xícara de óleo",
        "1 xícara de leite",
        "2 xícaras de polvilho doce ou azedo",
        "1 colher de café de sal",
        "1 xícara de queijo ralado",
        "2 ovos"
    ],
    instructions: [
        "Pré-aqueça o forno a 180°C.",
        "No liquidificador, bata o óleo, leite, ovos e sal até misturar bem.",
        "Adicione o polvilho aos poucos, batendo até ficar homogêneo.",
        "Acrescente o queijo ralado e bata rapidamente apenas para incorporar.",
        "A massa deve ficar lisa e sem grumos.",
        "Unte forminhas de empada ou use forminhas de silicone.",
        "Distribua a massa nas forminhas, enchendo cerca de 2/3.",
        "Asse por 20-25 minutos até dourar e crescer.",
        "Sirva ainda morno para melhor sabor.",
        "Podem ser congelados depois de prontos e reaquecidos no forno."
    ],
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "20 unidades"
},
{
    id: 46,
    name: "Rocambole de Carne",
    author: "Marlene Rossetti Donda",
    image: "🌯",
    category: "Salgado",
    ingredients: [
        "2 ovos",
        "1/2 copo de óleo",
        "2 colheres de sopa de açúcar",
        "1 colher de chá de sal",
        "2 colheres de sopa de fermento em pó",
        "2 copos de leite morno",
        "Farinha de trigo (até dar ponto)",
        "Carne moída temperada (recheio)",
        "Presunto fatiado (recheio)",
        "Queijo mussarela fatiado (recheio)"
    ],
    instructions: [
        "Em uma tigela, bata os ovos com o açúcar e sal.",
        "Adicione o óleo e o leite morno, misturando bem.",
        "Acrescente o fermento em pó e misture.",
        "Vá adicionando farinha aos poucos até formar uma massa macia.",
        "A massa deve ficar meio mole, não muito dura.",
        "Deixe a massa crescer em local morno por 1 hora.",
        "Abra a massa com rolo em formato retangular.",
        "Espalhe a carne moída temperada, presunto e queijo.",
        "Enrole cuidadosamente, selando bem as bordas.",
        "Deixe crescer novamente por 30 minutos e asse a 180°C por 30-35 minutos."
    ],
    prepTime: "30 min",
    cookTime: "35 min",
    servings: "8 porções"
},
{
    id: 47,
    name: "Sorvete Caseiro",
    author: "Marlene Rossetti Donda",
    image: "🍦",
    category: "Doce",
    ingredients: [
        "1 litro de leite",
        "2 copos pequenos de açúcar",
        "2 colheres de sopa de manteiga",
        "2 colheres de sopa de maisena",
        "2 colheres de café de liga neutra",
        "2 colheres de café de emulsificante",
        "6 colheres de café de essência (sabor desejado)"
    ],
    instructions: [
        "No liquidificador, bata o leite, açúcar, manteiga, maisena, liga e essência.",
        "Não adicione o emulsificante ainda.",
        "Despeje a mistura em uma panela e leve ao fogo baixo.",
        "Mexa sempre até formar um mingau consistente.",
        "Deixe esfriar completamente e leve à geladeira por um dia.",
        "No dia seguinte, coloque a mistura na batedeira.",
        "Adicione o emulsificante e bata em velocidade alta.",
        "Bata até a mistura aumentar bastante de volume (cerca de 15-20 minutos).",
        "Leve ao congelador por 30 minutos antes de servir.",
        "Sirva em pequenas porções."
    ],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "8 porções"
},
{
    id: 48,
    name: "Coquinhos",
    author: "Marlene Rossetti Donda",
    image: "🥥",
    category: "Doce",
    ingredients: [
        "2 gemas de ovo",
        "1 caixa de mistura para bolo sabor coco",
        "1/2 xícara de manteiga gelada (100g)",
        "1 colher de sopa de água gelada",
        "1 xícara de açúcar de confeiteiro (cobertura)",
        "4 colheres de sopa de suco de limão (cobertura)",
        "Corante alimentício de várias cores"
    ],
    instructions: [
        "Bata ligeiramente as gemas em uma tigela.",
        "Coloque a mistura para bolo em um recipiente.",
        "Junte as gemas e a manteiga gelada à mistura.",
        "Misture com as pontas dos dedos sem formar farofa.",
        "Adicione a água gelada aos poucos até formar uma bola.",
        "Embrulhe a massa em filme plástico e leve à geladeira por 20 minutos.",
        "Abra pequenos pedaços da massa com 3mm de espessura.",
        "Corte no formato desejado e disponha na assadeira.",
        "Leve à geladeira por mais 15 minutos.",
        "Asse em forno a 180°C até dourar levemente.",
        "Para a cobertura: misture açúcar de confeiteiro com suco de limão e corante.",
        "Decore os biscoitos depois de frios."
    ],
    prepTime: "45 min",
    cookTime: "15 min",
    servings: "30 unidades"
},
{
    id: 49,
    name: "Bolo de Fubá Tradicional",
    author: "Marlene Rossetti Donda",
    image: "🌽",
    category: "Doce",
    ingredients: [
        "1 xícara de fubá",
        "1 xícara de farinha de trigo",
        "3 xícaras de açúcar",
        "4 xícaras de leite",
        "2 colheres rasas de manteiga",
        "3 ovos",
        "1 pires de queijo ralado",
        "1 pires de coco ralado",
        "2 colheres de sopa de fermento em pó"
    ],
    instructions: [
        "Em uma tigela grande, coloque a manteiga, açúcar e ovos inteiros.",
        "Bata bem até ficar cremoso.",
        "Aos poucos, vá adicionando o leite, mexendo sempre.",
        "Acrescente a farinha de trigo e o fubá, misturando bem.",
        "Por último, adicione o coco ralado, queijo ralado e fermento em pó.",
        "Unte uma forma com óleo.",
        "Despeje a massa na forma e deixe descansar por 2-3 minutos.",
        "Asse em forno pré-aquecido a 180°C por 40-45 minutos.",
        "Quando pronto, a massa se separa naturalmente - a parte de baixo fica cremosa."
    ],
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "12 porções"
},
{
    id: 50,
    name: "Pudim Gelado de Maizena",
    author: "Marlene Rossetti Donda",
    image: "🥥",
    category: "Doce",
    ingredients: [
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1 lata de leite",
        "1 vidro de leite de coco",
        "1 pacote de maizena sabor coco",
        "1 pacote de coco ralado"
    ],
    instructions: [
        "No liquidificador, bata todos os ingredientes até ficar bem homogêneo.",
        "Bata por cerca de 2-3 minutos para garantir que não há grumos.",
        "Despeje a mistura em uma forma ou refratário.",
        "Leve à geladeira por pelo menos 4 horas até firmar.",
        "Sirva bem gelado.",
        "Pode ser decorado com coco ralado por cima antes de servir."
    ],
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "8 porções"
},
{
    id: 52,
    name: "Torta Surpresa",
    author: "Marlene Rossetti Donda",
    image: "🎂",
    category: "Doce",
    ingredients: [
        "1 xícara de maisena",
        "2 xícaras de farinha de trigo",
        "1 xícara e meia de açúcar",
        "2 ovos",
        "1 colher de sopa de fermento em pó",
        "1 copo de leite",
        "Pudim de coco ou outro sabor (para recheio)",
        "Açúcar para caramelizar a forma"
    ],
    instructions: [
        "Prepare a calda: caramelize açúcar e despeje no fundo da forma.",
        "Em uma tigela, bata bem todos os ingredientes da massa até ficar homogênea.",
        "Divida a massa em duas partes iguais.",
        "Prepare um pudim de coco (ou outro sabor de sua preferência).",
        "Na forma caramelizada, coloque metade da massa.",
        "Adicione o pudim de coco por cima como recheio.",
        "Cubra com a outra metade da massa.",
        "Cozinhe em banho-maria por 30 minutos.",
        "Deixe esfriar antes de desenformar.",
        "Sirva gelado para melhor consistência."
    ],
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 53,
    name: "Bolo Pão de Ló Especial",
    author: "Marlene Rossetti Donda",
    image: "🍰",
    category: "Doce",
    ingredients: [
        "5 ovos (separados)",
        "2 xícaras de açúcar",
        "2 xícaras e meia de farinha de trigo",
        "1/2 xícara de água",
        "1 colher de sopa de fermento em pó",
        "1/2 lata de creme de leite (recheio)",
        "1/2 lata de leite condensado (recheio)",
        "1/2 copo de leite (recheio)",
        "2 colheres de sopa de maisena (recheio)",
        "6 claras (cobertura)",
        "1/2 lata de creme de leite (cobertura)",
        "1 colher de sopa de maisena (cobertura)",
        "1/2 copo de leite de coco (cobertura)",
        "Açúcar a gosto (cobertura)"
    ],
    instructions: [
        "Bata as claras em neve até formar picos firmes.",
        "Adicione as gemas, açúcar, farinha e água.",
        "Bata na batedeira até ficar homogêneo.",
        "Por último, adicione o fermento em pó delicadamente.",
        "Asse em forma untada a 180°C por 30-35 minutos.",
        "Para o recheio: misture todos os ingredientes e cozinhe até engrossar.",
        "Para a cobertura: bata as claras em suspiro, adicione os demais ingredientes.",
        "Monte o bolo: corte ao meio, recheie e cubra com a cobertura.",
        "Leve à geladeira por 2 horas antes de servir."
    ],
    prepTime: "40 min",
    cookTime: "35 min",
    servings: "12 porções"
},
{
    id: 54,
    name: "Bolo de Amendoim",
    author: "Marlene Rossetti Donda",
    image: "🥜",
    category: "Doce",
    ingredients: [
        "2 xícaras de amendoim (com ou sem casca)",
        "1 xícara de leite",
        "1 xícara de farinha de trigo",
        "1 colher de sopa de fermento em pó",
        "3 ovos",
        "2 xícaras de açúcar",
        "1 lata de leite condensado (cobertura)"
    ],
    instructions: [
        "No liquidificador, bata o amendoim, ovos, açúcar e leite até ficar bem triturado.",
        "Bata bem por cerca de 3-4 minutos para quebrar bem o amendoim.",
        "Despeje a mistura em uma tigela grande.",
        "Acrescente a farinha de trigo e misture bem.",
        "Por último, adicione o fermento em pó e misture delicadamente.",
        "Despeje em forma redonda untada com margarina.",
        "Asse em forno pré-aquecido a 180°C por 30 minutos.",
        "Deixe esfriar completamente.",
        "Cubra com leite condensado antes de servir.",
        "Pode decorar com amendoim picado por cima."
    ],
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 55,
    name: "Brigadeiro Tradicional",
    author: "Marlene Rossetti Donda",
    image: "🍫",
    category: "Doce",
    ingredients: [
        "1 lata de leite condensado",
        "1 colher de sopa de margarina",
        "1/2 kg de chocolate em pó",
        "1 colher rasa de cacau em pó",
        "2 colheres de sopa de açúcar"
    ],
    instructions: [
        "Em uma panela, misture todos os ingredientes.",
        "Leve ao fogo baixo, mexendo sempre com colher de pau.",
        "Deixe ferver até a mistura engrossar e começar a desgrudar do fundo da panela.",
        "O ponto está certo quando você consegue ver o fundo da panela ao mexer.",
        "Retire do fogo e deixe esfriar.",
        "Com as mãos untadas com manteiga, faça bolinhas.",
        "Passe no granulado de chocolate.",
        "Coloque em forminhas de papel para servir."
    ],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "25 unidades"
},
{
    id: 56,
    name: "Torta Negra",
    author: "Marlene Rossetti Donda",
    image: "🖤",
    category: "Doce",
    ingredients: [
        "6 ovos",
        "1/2 xícara de óleo",
        "2 xícaras de farinha de trigo",
        "2 xícaras de chocolate em pó",
        "2 xícaras de açúcar",
        "2 colheres de sopa de fermento em pó",
        "1 xícara de água morna",
        "4 colheres de sopa de margarina (recheio)",
        "4 colheres de sopa de açúcar (recheio)",
        "1 lata de creme de leite (recheio)"
    ],
    instructions: [
        "Pré-aqueça o forno a 180°C e unte uma forma grande.",
        "Em uma tigela, bata os ovos até ficarem espumosos.",
        "Adicione o açúcar e continue batendo até ficar cremoso.",
        "Acrescente o óleo e misture bem.",
        "Em outra tigela, peneire a farinha e o chocolate em pó.",
        "Alterne a adição dos ingredientes secos com a água morna.",
        "Por último, adicione o fermento em pó e misture delicadamente.",
        "Asse por 35-40 minutos até um palito sair limpo.",
        "Para o recheio: bata a margarina com açúcar até ficar cremoso, adicione o creme de leite.",
        "Corte o bolo ao meio, recheie e cubra com o creme."
    ],
    prepTime: "25 min",
    cookTime: "40 min",
    servings: "12 porções"
},
{
    id: 57,
    name: "Torta Princesa",
    author: "Marlene Rossetti Donda",
    image: "👸",
    category: "Doce",
    ingredients: [
        "3 ovos",
        "1 xícara de açúcar",
        "2 colheres de sopa de manteiga",
        "1/2 xícara de leite",
        "3 xícaras de farinha de trigo",
        "1 colher de sopa de fermento em pó"
    ],
    instructions: [
        "Pré-aqueça o forno a 180°C e unte uma forma.",
        "Em uma tigela, bata os ovos com o açúcar até ficar cremoso.",
        "Derreta a manteiga e deixe esfriar um pouco.",
        "Adicione a manteiga derretida e o leite à mistura de ovos.",
        "Incorpore a farinha de trigo aos poucos, mexendo bem.",
        "Por último, adicione o fermento em pó e misture delicadamente.",
        "Despeje a massa na forma preparada.",
        "Asse por 30-35 minutos até dourar e um palito sair limpo.",
        "Deixe esfriar antes de desenformar.",
        "Pode ser servida simples ou com cobertura de sua preferência."
    ],
    prepTime: "15 min",
    cookTime: "35 min",
    servings: "8 porções"
},
{
    id: 58,
    name: "Torta de Ameixa",
    author: "Marlene Rossetti Donda",
    image: "🟣",
    category: "Doce",
    ingredients: [
        "1 xícara de ameixas pretas sem caroço",
        "1 lata de leite condensado",
        "1/2 pacote de coco ralado",
        "3 ovos (separados)",
        "1 xícara de açúcar",
        "1/2 xícara de leite",
        "2 xícaras de farinha de trigo",
        "2 colheres de sopa de margarina",
        "1 colher de sopa de fermento em pó"
    ],
    instructions: [
        "Bata as claras em neve até formar picos firmes e reserve.",
        "Em outra tigela, bata as gemas com açúcar até ficar cremoso.",
        "Adicione o leite, farinha de trigo e margarina derretida.",
        "Incorpore delicadamente as claras em neve.",
        "Por último, adicione o fermento em pó e misture suavemente.",
        "Despeje a massa em forma redonda untada e enfarinhada.",
        "Distribua as ameixas por cima da massa.",
        "Cubra com leite condensado e polvilhe o coco ralado.",
        "Asse em forno pré-aquecido a 180°C por 30 minutos.",
        "Sirva morno ou frio."
    ],
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 59,
    name: "Creme Gelado",
    author: "Marlene Rossetti Donda",
    image: "🍨",
    category: "Doce",
    ingredients: [
        "1 litro de leite fervente",
        "2 caixas de maria mole",
        "1 lata de creme de leite",
        "1 lata de leite condensado"
    ],
    instructions: [
        "No liquidificador, bata todos os ingredientes até ficar bem homogêneo.",
        "Bata por cerca de 2-3 minutos para garantir que a maria mole se dissolva completamente.",
        "A mistura deve ficar lisa e cremosa.",
        "Despeje em uma tigela ou refratário.",
        "Leve à geladeira por pelo menos 4 horas.",
        "Sirva bem gelado em taças individuais.",
        "Pode ser decorado com frutas ou biscoitos antes de servir."
    ],
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "8 porções"
},
{
    id: 62,
    name: "Mousse de Maracujá",
    author: "Marlene Rossetti Donda",
    image: "💛",
    category: "Doce",
    ingredients: [
        "1 lata de cremousse de maracujá",
        "1 lata de leite condensado",
        "Suco de maracujá (medida da lata de creme de leite)"
    ],
    instructions: [
        "Coloque todos os ingredientes no liquidificador.",
        "Bata bem até ficar homogêneo e cremoso.",
        "Despeje em taças individuais ou refratário.",
        "Leve à geladeira por pelo menos 2 horas.",
        "Sirva bem gelado.",
        "Pode decorar com sementes de maracujá por cima."
    ],
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "6 porções"
},
{
    id: 63,
    name: "Bolacha da Maria",
    author: "Laís Cristina Rossetti Donda",
    image: "🍪",
    category: "Doce",
    ingredients: [
        "5 ovos",
        "2 xícaras de açúcar",
        "2 copos de óleo",
        "2 copos de leite quente",
        "2 colheres de sal amoníaco",
        "2 colheres de pó Royal",
        "1/2 xícara de polvilho doce",
        "2 colheres de margarina",
        "1 pitada de sal",
        "Raspas de limão a gosto",
        "Farinha até dar ponto"
    ],
    instructions: [
        "Em uma tigela grande, bata os ovos com o açúcar até ficar cremoso.",
        "Adicione o óleo e misture bem.",
        "Acrescente o leite quente aos poucos, mexendo sempre.",
        "Adicione a margarina derretida e misture.",
        "Incorpore o sal amoníaco, pó Royal e polvilho doce.",
        "Tempere com sal e raspas de limão.",
        "Vá adicionando farinha até dar o ponto de massa consistente.",
        "Sove a massa até ficar homogênea.",
        "Abra a massa e corte no formato desejado.",
        "Asse em forno pré-aquecido a 180°C por 15-20 minutos até dourar."
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: "40 unidades"
},
{
    id: 64,
    name: "Bolo de Guaraná",
    author: "Laís Cristina Rossetti Donda",
    image: "🥤",
    category: "Doce",
    ingredients: [
        "1 garrafa de guaraná",
        "4 xícaras de açúcar",
        "4 xícaras de farinha de trigo",
        "2 colheres de pó Royal"
    ],
    instructions: [
        "Em uma tigela grande, misture o açúcar com a farinha de trigo.",
        "Adicione o guaraná aos poucos, mexendo bem até incorporar.",
        "Acrescente o pó Royal e misture delicadamente.",
        "A massa deve ficar homogênea e sem grumos.",
        "Despeje em forma untada e enfarinhada.",
        "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
        "Teste com palito - se sair limpo, está pronto.",
        "Deixe esfriar antes de desenformar."
    ],
    prepTime: "15 min",
    cookTime: "40 min",
    servings: "12 porções"
},
{
    id: 66,
    name: "Pizza Rápida",
    author: "Laís Cristina Rossetti Donda",
    image: "🍕",
    category: "Salgado",
    ingredients: [
        "3 copos de farinha de trigo",
        "1 copo de leite",
        "1/2 copo de óleo",
        "1 ovo",
        "2 colheres de fermento Royal",
        "Sal a gosto"
    ],
    instructions: [
        "Coloque todos os ingredientes no liquidificador.",
        "Bata bem até formar uma massa homogênea.",
        "Unte uma forma de pizza ou assadeira grande.",
        "Despeje a massa na forma, espalhando uniformemente.",
        "Asse em forno pré-aquecido a 200°C por cerca de 5 minutos.",
        "Retire do forno e adicione os ingredientes da cobertura.",
        "Volte ao forno por mais 10-15 minutos até a cobertura derreter.",
        "Sirva quente."
    ],
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "6 porções"
},
{
    id: 67,
    name: "Bolacha de Mandioca",
    author: "Laís Cristina Rossetti Donda",
    image: "🍠",
    category: "Doce",
    ingredients: [
        "3 xícaras de açúcar",
        "1/2 copo de leite",
        "1 copo de leite",
        "2 colheres de sal amoníaco",
        "1 colher de pó Royal",
        "Farinha até dar ponto de massa de pão"
    ],
    instructions: [
        "Em uma tigela grande, misture o açúcar com o leite.",
        "Adicione o sal amoníaco e o pó Royal, mexendo bem.",
        "Vá adicionando farinha aos poucos até formar uma massa consistente.",
        "A massa deve ter consistência de massa de pão.",
        "Sove a massa até ficar lisa e homogênea.",
        "Abra a massa com rolo e corte no formato desejado.",
        "Coloque em assadeira untada.",
        "Asse em forno pré-aquecido a 180°C por 15-20 minutos até dourar.",
        "Deixe esfriar antes de servir."
    ],
    prepTime: "25 min",
    cookTime: "20 min",
    servings: "30 unidades"
},
{
    id: 69,
    name: "Calça Rasgada",
    author: "Laís Cristina Rossetti Donda",
    image: "👖",
    category: "Doce",
    ingredients: [
        "1kg de farinha de trigo",
        "3 ovos",
        "1 xícara de açúcar",
        "1 copo de leite",
        "1 colher de pó Royal",
        "1/3 xícara de óleo"
    ],
    instructions: [
        "Em uma tigela grande, bata os ovos com o açúcar.",
        "Adicione o leite e o óleo, misturando bem.",
        "Acrescente o pó Royal e misture.",
        "Vá incorporando a farinha aos poucos até formar uma massa consistente.",
        "Sove a massa até ficar lisa e homogênea.",
        "Abra a massa com rolo, deixando com espessura média.",
        "Corte em tiras e faça pequenos cortes no meio (daí o nome 'calça rasgada').",
        "Frite em óleo quente até dourar dos dois lados.",
        "Escorra em papel absorvente e polvilhe açúcar refinado."
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: "25 unidades"
},
{
    id: 70,
    name: "Rosca de Banana",
    author: "Laís Cristina Rossetti Donda",
    image: "🍌",
    category: "Doce",
    ingredients: [
        "4 xícaras de farinha de trigo",
        "2 colheres de açúcar",
        "1 colher de óleo",
        "1 copo de leite morno",
        "3 gemas",
        "Recheio de banana a gosto"
    ],
    instructions: [
        "Em uma tigela, bata as gemas com o açúcar até ficar cremoso.",
        "Adicione o óleo e o leite morno, misturando bem.",
        "Vá incorporando a farinha aos poucos até formar uma massa macia.",
        "Sove a massa até ficar lisa e homogênea.",
        "Abra a massa como para pastel, um pouco mais grossa.",
        "Espalhe o recheio de banana sobre a massa.",
        "Enrole como rocambole, selando bem as bordas.",
        "Corte em fatias e coloque na assadeira untada.",
        "Deixe crescer por 30-40 minutos.",
        "Asse em forno pré-aquecido a 180°C por 25-30 minutos até dourar.",
        "Quando assada, cubra com a calda de leite e açúcar."
    ],
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "10 porções"
},
{
    id: 75,
    name: "Calda para Rosca de Banana",
    author: "Laís Cristina Rossetti Donda",
    image: "🍯",
    category: "Doce",
    ingredients: [
        "3 xícaras de leite",
        "3 xícaras de açúcar",
        "1 pau de canela"
    ],
    instructions: [
        "Em uma panela, misture o leite com o açúcar.",
        "Adicione o pau de canela.",
        "Leve ao fogo médio, mexendo sempre até o açúcar dissolver.",
        "Deixe ferver até engrossar ligeiramente e formar uma calda.",
        "Retire o pau de canela.",
        "Despeje a calda quente sobre a rosca de banana já assada.",
        "Deixe a calda penetrar no pão antes de servir."
    ],
    prepTime: "5 min",
    cookTime: "15 min",
    servings: "Para 1 rosca"
}
    {
                id: 78,
                name: "Bolo de Forno Simples",
                author: "Laís Cristina Rossetti Donda",
                image: "🍰",
                ingredients: [
                    "4 colheres de sopa de manteiga",
                    "3 ovos",
                    "3 colheres de sopa de farinha de trigo",
                    "2 xícaras de açúcar",
                    "1 colher de sopa de pó Royal",
                    "Leite (se necessário)"
                ],
                instructions: [
                    "Derreta a manteiga e deixe esfriar um pouco.",
                    "Em uma tigela, bata os ovos com o açúcar até ficar cremoso.",
                    "Adicione a manteiga derretida e misture bem.",
                    "Incorpore a farinha de trigo aos poucos.",
                    "Se a massa estiver muito consistente, adicione um pouco de leite.",
                    "Por último, adicione o pó Royal e misture delicadamente.",
                    "Despeje em forma untada e enfarinhada.",
                    "Asse em forno pré-aquecido a 180°C por 25-30 minutos.",
                    "Teste com palito - se sair limpo, está pronto."
                ],
                prepTime: "15 min",
                cookTime: "30 min",
                servings: "8 porções"
            },




            {
                id: 83,
                name: "Calda de Chocolate",
                author: "Laís Cristina Rossetti Donda",
                image: "🍫",
                ingredients: [
                    "1 xícara de açúcar",
                    "1 xícara de Nescau",
                    "1 xícara de leite"
                ],
                instructions: [
                    "Em uma panela, misture todos os ingredientes.",
                    "Leve ao fogo médio, mexendo sempre.",
                    "Deixe ferver até engrossar e formar uma calda consistente.",
                    "Mexa constantemente para não grudar no fundo.",
                    "Retire do fogo quando atingir a consistência desejada.",
                    "Use para cobrir bolos, sorvetes ou outras sobremesas."
                ],
                prepTime: "5 min",
                cookTime: "10 min",
                servings: "Para 1 bolo"
            },
            {
                id: 84,
                name: "Pudim de Goiaba",
                author: "Laís Cristina Rossetti Donda",
                image: "🍑",
                ingredients: [
                    "5 xícaras de goiaba ralada",
                    "3 xícaras de açúcar",
                    "3 colheres de sopa de farinha de trigo",
                    "1 xícara de açúcar (para a calda)"
                ],
                instructions: [
                    "Prepare a calda: derreta 1 xícara de açúcar até formar caramelo dourado e despeje numa forma.",
                    "No liquidificador, bata a goiaba ralada, açúcar e farinha de trigo.",
                    "Bata bem até ficar completamente homogêneo.",
                    "Despeje na forma caramelizada.",
                    "Cubra com papel alumínio e asse em banho-maria por 50-60 minutos.",
                    "Teste com palito - se sair limpo, está pronto.",
                    "Deixe esfriar completamente antes de desenformar."
                ],
                prepTime: "20 min",
                cookTime: "60 min",
                servings: "8 porções"
            },
            {
                id: 85,
                name: "Pudim de Gemas",
                author: "Laís Cristina Rossetti Donda",
                image: "🍮",
                ingredients: [
                    "9 gemas",
                    "4 claras",
                    "1/4 colher de chá de sal",
                    "4 colheres de sopa de maisena",
                    "1 xícara de açúcar (para a calda)"
                ],
                instructions: [
                    "Prepare a calda: derreta 1 xícara de açúcar até formar caramelo dourado e despeje numa forma.",
                    "No liquidificador, bata as gemas, claras, sal e maisena até ficar homogêneo.",
                    "Bata bem até obter uma mistura lisa e cremosa.",
                    "Despeje na forma caramelizada.",
                    "Asse em banho-maria por 45-50 minutos.",
                    "Teste com palito - se sair limpo, está pronto.",
                    "Deixe esfriar completamente antes de desenformar."
                ],
                prepTime: "15 min",
                cookTime: "50 min",
                servings: "8 porções"
            },
            {
                id: 86,
                name: "Pão de Ló Doce",
                author: "Laís Cristina Rossetti Donda",
                image: "🍰",
                ingredients: [
                    "2 copos de farinha de trigo",
                    "2 xícaras de açúcar",
                    "1 copo de leite",
                    "1 colher de sopa de pó Royal",
                    "3 ovos"
                ],
                instructions: [
                    "Em uma tigela grande, bata os ovos com o açúcar até ficar cremoso.",
                    "Adicione o leite e misture bem.",
                    "Incorpore a farinha de trigo aos poucos, mexendo sempre.",
                    "Por último, adicione o pó Royal e misture delicadamente.",
                    "Despeje em forma untada e enfarinhada.",
                    "Asse em forno pré-aquecido a 180°C por 30-35 minutos.",
                    "Teste com palito - se sair limpo, está pronto.",
                    "Deixe esfriar antes de desenformar."
                ],
                prepTime: "15 min",
                cookTime: "35 min",
                servings: "10 porções"
            },
            {
                id: 87,
                name: "Creme de Milho",
                author: "Laís Cristina Rossetti Donda",
                image: "🌽",
                ingredients: [
                    "1 lata de creme de leite",
                    "2 colheres de sopa de maisena",
                    "2 latas de milho em conserva",
                    "1 xícara de leite",
                    "1 colher de chá de alho e cebola em pó",
                    "1 colher de sopa de margarina",
                    "Sal e pimenta a gosto"
                ],
                instructions: [
                    "No liquidificador, bata todos os ingredientes, exceto o creme de leite.",
                    "Bata bem até ficar homogêneo.",
                    "Despeje a mistura em um refratário próprio para microondas.",
                    "Leve ao microondas por 4 a 6 minutos na potência alta.",
                    "Retire e mexa bem no meio do tempo de cozimento.",
                    "Adicione o creme de leite e misture delicadamente.",
                    "Sirva quente como acompanhamento."
                ],
                prepTime: "10 min",
                cookTime: "6 min",
                servings: "6 porções"
            },
            {
                id: 88,
                name: "Bolo Rocambole",
                author: "Laís Cristina Rossetti Donda",
                image: "🌯",
                ingredients: [
                    "1 colher de sopa de margarina",
                    "1 lata de creme de leite",
                    "Sal e pimenta a gosto",
                    "3 ovos",
                    "1 xícara de açúcar",
                    "1 xícara de farinha de trigo",
                    "1 colher de chá de fermento em pó"
                ],
                instructions: [
                    "Bata os ovos com o açúcar até ficar cremoso.",
                    "Derreta a margarina e adicione à mistura.",
                    "Incorpore a farinha de trigo aos poucos.",
                    "Adicione o fermento em pó e misture delicadamente.",
                    "Despeje em assadeira untada e forrada com papel manteiga.",
                    "Asse em forno pré-aquecido a 180°C por 15-20 minutos.",
                    "Ainda morno, recheie com creme de leite temperado com sal e pimenta.",
                    "Enrole cuidadosamente e deixe esfriar antes de cortar."
                ],
                prepTime: "20 min",
                cookTime: "20 min",
                servings: "8 porções"
            },

            {
                id: 90,
                name: "Massa de Pão de Ló Grande",
                author: "Laís Cristina Rossetti Donda",
                image: "🍰",
                ingredients: [
                    "1,3 kg de farinha de trigo",
                    "100g de maisena",
                    "1 kg de açúcar",
                    "12 ovos",
                    "2 colheres de chá de sal",
                    "1 colher de sopa de pó Royal",
                    "2 copos de água"
                ],
                instructions: [
                    "Em uma tigela muito grande, bata os ovos com o açúcar até ficar bem cremoso.",
                    "Peneire juntos a farinha de trigo, maisena e sal.",
                    "Adicione os ingredientes secos alternando com a água.",
                    "Misture bem até obter uma massa homogênea.",
                    "Por último, incorpore o pó Royal delicadamente.",
                    "Divida a massa em formas untadas e enfarinhadas.",
                    "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
                    "Esta receita rende vários bolos ou um bolo muito grande para festa."
                ],
                prepTime: "30 min",
                cookTime: "40 min",
                servings: "30 porções"
            },
            {
                id: 91,
                name: "Bolo de Frutas",
                author: "Laís Cristina Rossetti Donda",
                image: "🍊",
                ingredients: [
                    "5 claras de ovo",
                    "5 gemas de ovo",
                    "2 limões (raspas e suco)",
                    "Margarina (aproximadamente 100g)",
                    "1 1/2 xícara de açúcar",
                    "2 xícaras de farinha de trigo",
                    "1 colher de sopa de rum",
                    "1 colher de sopa de fermento em pó",
                    "1 xícara de castanhas-do-pará picadas"
                ],
                instructions: [
                    "Bata as claras em neve até formar picos firmes e reserve.",
                    "Retire as raspas dos limões e reserve o suco.",
                    "Em uma tigela, misture a margarina com o açúcar até ficar cremoso.",
                    "Adicione as gemas uma a uma, batendo bem.",
                    "Incorpore a farinha de trigo e as raspas de limão.",
                    "Acrescente o rum e o fermento em pó, misturando bem.",
                    "Esprema os limões e adicione o suco, misturando levemente.",
                    "Incorpore delicadamente as claras em neve com movimentos de baixo para cima.",
                    "Por último, adicione as castanhas-do-pará picadas.",
                    "Despeje em forma de bolo inglês untada e enfarinhada.",
                    "Asse em forno médio (180°C) por aproximadamente 30 minutos."
                ],
                prepTime: "25 min",
                cookTime: "30 min",
                servings: "10 porções"
            },
            {
                id: 92,
                name: "Mousse de Limão",
                author: "Laís Cristina Rossetti Donda",
                image: "🍋",
                ingredients: [
                    "1 lata de creme de leite",
                    "1 lata de leite condensado",
                    "1/2 xícara de suco de limão (ou a gosto)",
                    "1 envelope de gelatina incolor",
                    "1 xícara de água quente"
                ],
                instructions: [
                    "Dissolva a gelatina incolor na água quente, mexendo bem até dissolver completamente.",
                    "No liquidificador, coloque o creme de leite, leite condensado e suco de limão.",
                    "Adicione a gelatina dissolvida e bata bem até ficar homogêneo.",
                    "Despeje em taças individuais ou em um refratário.",
                    "Leve à geladeira por pelo menos 2 horas até atingir a consistência desejada.",
                    "Sirva bem gelado.",
                    "Pode decorar com raspas de limão antes de servir."
                ],
                prepTime: "10 min",
                cookTime: "0 min",
                servings: "6 porções"
            },
            {
                id: 93,
                name: "Bolo de Chocolate Industrial",
                author: "Laís Cristina Rossetti Donda",
                image: "🍫",
                ingredients: [
                    "650g de farinha de trigo",
                    "550g de açúcar",
                    "270g de maisena",
                    "100g de emulsificante",
                    "50g de fermento em pó",
                    "15 ovos",
                    "1 copo americano de água",
                    "500g de chocolate (para cobertura após montar)"
                ],
                instructions: [
                    "Em uma batedeira industrial ou tigela muito grande, bata os ovos até ficarem espumosos.",
                    "Adicione o açúcar e continue batendo até ficar bem cremoso.",
                    "Incorpore o emulsificante e bata por mais alguns minutos.",
                    "Em outra tigela, peneire a farinha de trigo, maisena e fermento.",
                    "Adicione os ingredientes secos alternando com a água.",
                    "Bata até obter uma massa homogênea e lisa.",
                    "Divida a massa em formas untadas e enfarinhadas.",
                    "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
                    "Deixe esfriar completamente antes de desenformar.",
                    "Derreta o chocolate e cubra o bolo após montado.",
                    "Esta é uma receita para produção em grande quantidade."
                ],
                prepTime: "30 min",
                cookTime: "40 min",
                servings: "25 porções"
            },
            {
                id: 94,
                name: "Pão de Alho",
                author: "Laís Cristina Rossetti Donda",
                image: "🧄",
                ingredients: [
                    "1 cabeça de alho",
                    "1 colher de sal",
                    "1 copo de azeite",
                    "1 copo de leite",
                    "3 ovos",
                    "50g de fermento biológico",
                    "1 kg de farinha de trigo"
                ],
                instructions: [
                    "Descasque e pique o alho.",
                    "No liquidificador, bata o alho, sal, azeite, leite e ovos até ficar homogêneo.",
                    "Dissolva o fermento em um pouco de água morna.",
                    "Em uma tigela grande, coloque a farinha de trigo.",
                    "Adicione a mistura do liquidificador e o fermento dissolvido.",
                    "Misture bem até formar uma massa homogênea.",
                    "Sove a massa por 10 minutos até ficar lisa e elástica.",
                    "Deixe crescer por 1 hora até dobrar de tamanho.",
                    "Modele os pães no formato desejado.",
                    "Deixe crescer novamente por 30 minutos e asse a 180°C por 25-30 minutos."
                ],
                prepTime: "30 min",
                cookTime: "30 min",
                servings: "12 pãezinhos"
            },

            {
                id: 96,
                name: "Bolacha Fofa",
                author: "Laís Cristina Rossetti Donda",
                image: "🍪",
                ingredients: [
                    "2 xícaras de açúcar",
                    "500g de margarina",
                    "1 copo de água",
                    "2 colheres de sal amoníaco (ou fermento químico)",
                    "Farinha de trigo (até dar ponto de massa)"
                ],
                instructions: [
                    "Em uma tigela grande, misture o açúcar com a margarina até ficar cremoso.",
                    "Adicione a água e misture bem.",
                    "Acrescente o sal amoníaco e misture.",
                    "Vá adicionando farinha aos poucos até formar uma massa macia.",
                    "A massa deve ficar consistente mas fofa.",
                    "Sove levemente até ficar homogênea.",
                    "Abra a massa com rolo e corte no formato desejado.",
                    "Coloque em assadeira untada.",
                    "Asse em forno pré-aquecido a 180°C por 15-20 minutos até dourar levemente.",
                    "Deixe esfriar antes de servir - ficam bem fofas."
                ],
                prepTime: "25 min",
                cookTime: "20 min",
                servings: "30 unidades"
            },
            {
                id: 97,
                name: "Solo de Leite",
                author: "Laís Cristina Rossetti Donda",
                image: "🥛",
                ingredients: [
                    "1 lata de leite condensado",
                    "2 gemas",
                    "1 colher de manteiga",
                    "Leite de vaca (aproximadamente 1 xícara)"
                ],
                instructions: [
                    "No liquidificador, bata o leite condensado, gemas, manteiga e leite.",
                    "Bata bem até ficar completamente homogêneo.",
                    "Despeje a mistura em uma panela.",
                    "Leve ao fogo baixo, mexendo sempre até engrossar.",
                    "Continue mexendo até formar um creme consistente.",
                    "Retire do fogo e deixe esfriar completamente.",
                    "Sirva gelado como sobremesa ou use como recheio."
                ],
                prepTime: "10 min",
                cookTime: "15 min",
                servings: "6 porções"
            },
            {
                id: 98,
                name: "Bolo de Leite Especial",
                author: "Laís Cristina Rossetti Donda",
                image: "🥛",
                ingredients: [
                    "4 claras de ovo",
                    "4 colheres de açúcar refinado",
                    "1 lata de creme de leite",
                    "Leite (aproximadamente 1 xícara)"
                ],
                instructions: [
                    "Bata as claras em neve até formar picos firmes.",
                    "Adicione o açúcar refinado aos poucos, continuando a bater.",
                    "Incorpore delicadamente o creme de leite.",
                    "Adicione o leite aos poucos, mexendo suavemente.",
                    "Despeje em forma untada.",
                    "Asse em forno pré-aquecido a 160°C por 30-35 minutos.",
                    "O bolo deve ficar dourado e firme ao toque.",
                    "Deixe esfriar antes de desenformar."
                ],
                prepTime: "15 min",
                cookTime: "35 min",
                servings: "8 porções"
            },
            {
                id: 99,
                name: "Pudim de Queijo Fresco",
                author: "Laís Cristina Rossetti Donda",
                image: "🧀",
                ingredients: [
                    "500g de queijo fresco",
                    "3 ovos",
                    "1/2 xícara de açúcar (um pouco mais)",
                    "2 colheres de farinha de trigo",
                    "1 lata de leite condensado",
                    "2 latas de leite",
                    "1 xícara de açúcar (para a calda)"
                ],
                instructions: [
                    "Prepare a calda: derreta 1 xícara de açúcar até formar caramelo dourado e despeje numa forma.",
                    "No liquidificador, bata o queijo fresco, ovos, açúcar e farinha de trigo.",
                    "Adicione o leite condensado e o leite, batendo bem.",
                    "Bata até obter uma mistura completamente homogênea.",
                    "Passe por uma peneira para garantir que não há grumos.",
                    "Despeje na forma caramelizada.",
                    "Cubra com papel alumínio e cozinhe em banho-maria por 50-60 minutos.",
                    "Teste com palito - se sair limpo, está pronto.",
                    "Deixe esfriar completamente antes de desenformar."
                ],
                prepTime: "20 min",
                cookTime: "60 min",
                servings: "10 porções"
            },
            {
                id: 100,
                name: "Cobertura de Chocolate",
                author: "Laís Cristina Rossetti Donda",
                image: "🍫",
                ingredients: [
                    "1 lata de leite condensado",
                    "1 1/2 xícara de leite",
                    "1 colher de margarina"
                ],
                instructions: [
                    "Em uma panela, misture o leite condensado com o leite.",
                    "Adicione a margarina e misture bem.",
                    "Leve ao fogo baixo, mexendo sempre.",
                    "Cozinhe até engrossar e formar uma cobertura consistente.",
                    "Continue mexendo para não grudar no fundo.",
                    "Retire do fogo quando atingir a consistência desejada.",
                    "Use ainda morna para cobrir bolos redondos.",
                    "Espalhe uniformemente com uma espátula."
                ],
                prepTime: "5 min",
                cookTime: "15 min",
                servings: "Para 1 bolo"
            },
            {
                id: 101,
                name: "Massa Básica",
                author: "Laís Cristina Rossetti Donda",
                image: "🥧",
                ingredients: [
                    "200g de margarina",
                    "1 xícara cheia de açúcar",
                    "3 ovos",
                    "2 pitadas de sal"
                ],
                instructions: [
                    "Em uma tigela, bata a margarina com o açúcar até ficar cremoso.",
                    "Adicione os ovos um a um, batendo bem após cada adição.",
                    "Tempere com as pitadas de sal.",
                    "Continue batendo até obter uma massa homogênea.",
                    "Esta massa serve como base para diversos tipos de bolo.",
                    "Pode adicionar farinha e outros ingredientes conforme a receita desejada."
                ],
                prepTime: "10 min",
                cookTime: "0 min",
                servings: "Base para 1 bolo"
            },

            {
                id: 103,
                name: "Broa de Fubá",
                author: "Laís Cristina Rossetti Donda",
                image: "🌽",
                ingredients: [
                    "2 ovos",
                    "3 colheres de fermento em pó",
                    "2 xícaras de água",
                    "2 xícaras de farinha de trigo",
                    "500g de fubá",
                    "2 xícaras de açúcar",
                    "1 pitada de sal",
                    "Gotas de essência de baunilha"
                ],
                instructions: [
                    "Pré-aqueça o forno a 180°C e unte uma forma grande.",
                    "Em uma tigela grande, bata os ovos com o açúcar.",
                    "Adicione a água e misture bem.",
                    "Incorpore o fubá e a farinha de trigo aos poucos.",
                    "Tempere com sal e algumas gotas de baunilha.",
                    "Por último, adicione o fermento em pó e misture delicadamente.",
                    "Despeje na forma untada e enfarinhada.",
                    "Asse por 35-40 minutos até dourar e um palito sair limpo.",
                    "Deixe esfriar antes de desenformar."
                ],
                prepTime: "15 min",
                cookTime: "40 min",
                servings: "12 porções"
            },
            {
                id: 104,
                name: "Bolo de Sogra",
                author: "Laís Cristina Rossetti Donda",
                image: "👵",
                ingredients: [
                    "2 xícaras de açúcar",
                    "3 xícaras de farinha de trigo",
                    "4 ovos (separados)",
                    "1 colher de sopa de fermento em pó Royal",
                    "1 copo de suco de laranja",
                    "Casca de laranja ou limão ralada"
                ],
                instructions: [
                    "Bata as gemas com o açúcar até ficarem bem claras e esbranquiçadas.",
                    "Adicione a farinha de trigo aos poucos, alternando com o suco de laranja.",
                    "Incorpore a casca ralada de laranja ou limão.",
                    "Bata as claras em neve até formar picos firmes.",
                    "Incorpore delicadamente as claras batidas à massa.",
                    "Por último, adicione o fermento Royal e misture suavemente.",
                    "Despeje em forma untada e enfarinhada.",
                    "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
                    "Teste com palito - se sair limpo, está pronto."
                ],
                prepTime: "25 min",
                cookTime: "40 min",
                servings: "12 porções"
            },
            {
                id: 105,
                name: "Pãozinho Simples",
                author: "Laís Cristina Rossetti Donda",
                image: "🥖",
                ingredients: [
                    "1 kg de farinha de trigo",
                    "1 xícara de açúcar",
                    "1 colher de sopa de sal",
                    "150g de margarina",
                    "4 gemas",
                    "60g de fermento biológico",
                    "2 xícaras de leite morno",
                    "150g de margarina (adicional)"
                ],
                instructions: [
                    "Dissolva o fermento no leite morno por 5 minutos.",
                    "Junte o restante dos ingredientes e amasse bem.",
                    "Cubra com um saco plástico e deixe dobrar de volume.",
                    "Divida a massa em 4 partes.",
                    "Abra cada parte em círculo.",
                    "Corte em 8 pedaços, como pizza.",
                    "Passe manteiga em cada parte.",
                    "Faça cortes de 1 cm na parte mais larga antes de enrolar.",
                    "Role do canto para formar um círculo.",
                    "Coloque em forma retangular e deixe dobrar de volume.",
                    "Pincele com ovos batidos.",
                    "Asse em forno pré-aquecido a 180°C por 30 minutos."
                ],
                prepTime: "30 min",
                cookTime: "30 min",
                servings: "32 pãezinhos"
            },
            {
                id: 106,
                name: "Pão de Batata",
                author: "Laís Cristina Rossetti Donda",
                image: "🥔",
                ingredients: [
                    "1 kg de farinha de trigo branca",
                    "4 batatas cozidas e amassadas",
                    "1 xícara de açúcar",
                    "50g de margarina",
                    "30g de fermento biológico",
                    "1 litro de leite morno",
                    "1 ovo inteiro",
                    "1 colher de sopa de sal",
                    "1 copo de água morna"
                ],
                instructions: [
                    "Dissolva o fermento em uma xícara de leite morno.",
                    "À parte, junte a margarina, o açúcar e o ovo.",
                    "Misture a farinha, o fermento, o leite, as batatas, a água e o ovo.",
                    "Amasse bem com as mãos, sem bater a massa.",
                    "Evite correntes de ar enquanto a massa cresce.",
                    "Sove a massa e enrole os pães no formato redondo.",
                    "Coloque em uma assadeira.",
                    "Pincele com ovos batidos e deixe crescer até duplicar o volume.",
                    "Leve ao forno quente por 30 minutos."
                ],
                prepTime: "30 min",
                cookTime: "30 min",
                servings: "15 pãezinhos"
            },
            {
                id: 107,
                name: "Pãozinho de Presunto",
                author: "Laís Cristina Rossetti Donda",
                image: "🥪",
                ingredients: [
                    "500g de farinha de trigo",
                    "1 colher de sopa de sal",
                    "1 xícara de açúcar",
                    "100g de manteiga",
                    "500ml de leite",
                    "80g de fermento biológico",
                    "50g de manteiga (para untar)",
                    "Fatias de presunto",
                    "Fatias de mussarela"
                ],
                instructions: [
                    "Aqueça levemente o leite com o açúcar.",
                    "Adicione à massa a manteiga, o leite e a farinha.",
                    "Amasse bem em uma pedra de mármore enfarinhada.",
                    "Coloque em uma tigela untada e cubra com plástico.",
                    "Deixe descansar por 30 minutos.",
                    "Divida a massa em duas partes.",
                    "Abra cada parte em três retângulos.",
                    "Passe 50g de manteiga em cada parte, dobre em três.",
                    "Leve à geladeira por 15 minutos.",
                    "Repita esse processo mais duas vezes, dobrando a massa.",
                    "Corte em tiras de 1 cm de largura.",
                    "Coloque uma fatia de presunto e uma de mussarela dobradas no meio de cada tira.",
                    "Dobre a massa, corte em fatias e coloque em forma retangular.",
                    "Pincele e leve ao forno pré-aquecido a 170°C por cerca de 20 minutos."
                ],
                prepTime: "45 min",
                cookTime: "20 min",
                servings: "20 unidades"
            },
            {
                id: 108,
                name: "Pão de Linguiça",
                author: "Laís Cristina Rossetti Donda",
                image: "🌭",
                ingredients: [
                    "3 ovos",
                    "4 xícaras de açúcar",
                    "Fermento biológico (quantidade não especificada)",
                    "2 colheres de sopa de açúcar",
                    "1 colher de sal",
                    "1 kg de farinha de trigo",
                    "2 colheres de sopa de óleo",
                    "300g de linguiça (recheio)",
                    "2 colheres de sopa de óleo (recheio)",
                    "1 cebola ralada (recheio)"
                ],
                instructions: [
                    "Prepare o recheio: refogue a linguiça com óleo e cebola ralada.",
                    "Em uma tigela, bata os ovos com o açúcar.",
                    "Dissolva o fermento conforme instruções da embalagem.",
                    "Adicione o fermento, sal, farinha e óleo à mistura de ovos.",
                    "Amasse bem até formar uma massa homogênea.",
                    "Deixe crescer até dobrar de volume.",
                    "Abra a massa, distribua o recheio de linguiça.",
                    "Enrole e modele conforme desejado.",
                    "Deixe crescer novamente por 30 minutos.",
                    "Asse em forno pré-aquecido a 180°C por 25-30 minutos."
                ],
                prepTime: "30 min",
                cookTime: "30 min",
                servings: "10 porções"
            },


            {
                id: 111,
                name: "Pão Doce de Amônia",
                author: "Laís Cristina Rossetti Donda",
                image: "🍞",
                ingredients: [
                    "2 tabletes de fermento para pão (30g)",
                    "2 colheres de chá de açúcar",
                    "1/2 xícara de chá de leite morno",
                    "2 gemas",
                    "1 pitada de sal",
                    "6 xícaras de farinha de trigo",
                    "2 xícaras de chá de açúcar misturada com 2 colheres de sopa de canela em pó (para polvilhar)"
                ],
                instructions: [
                    "Dissolva o fermento no leite morno com as 2 colheres de açúcar.",
                    "Deixe descansar por 10 minutos até espumar.",
                    "Em uma tigela grande, bata as gemas levemente.",
                    "Adicione o fermento dissolvido e a pitada de sal.",
                    "Vá incorporando a farinha aos poucos até formar uma massa macia.",
                    "Sove a massa por 10 minutos até ficar lisa e elástica.",
                    "Deixe crescer por 1 hora até dobrar de tamanho.",
                    "Modele os pães no formato desejado.",
                    "Deixe crescer novamente por 30 minutos.",
                    "Asse em forno pré-aquecido a 180°C por 25-30 minutos.",
                    "Ainda morno, polvilhe com a mistura de açúcar e canela."
                ],
                prepTime: "30 min",
                cookTime: "30 min",
                servings: "12 pãezinhos"
            },
            {
                id: 112,
                name: "Talentosa",
                author: "Laís Cristina Rossetti Donda",
                image: "🍰",
                ingredients: [
                    "1 lata de leite condensado",
                    "100g de margarina",
                    "2 gemas",
                    "1/2 xícara de licor ou coco ralado",
                    "3 colheres de sopa de suco de limão"
                ],
                instructions: [
                    "Em uma panela, misture o leite condensado com as gemas.",
                    "Leve ao fogo baixo, mexendo sempre até engrossar ligeiramente.",
                    "Retire do fogo e adicione a margarina, mexendo até derreter.",
                    "Deixe esfriar um pouco e acrescente o licor ou coco ralado.",
                    "Por último, adicione o suco de limão e misture delicadamente.",
                    "Leve à geladeira por pelo menos 2 horas antes de servir.",
                    "Sirva em tacinhas individuais ou use como recheio."
                ],
                prepTime: "15 min",
                cookTime: "10 min",
                servings: "6 porções"
            },





            {
                id: 118,
                name: "Bolo de Cenoura",
                author: "Laís Cristina Rossetti Donda",
                image: "🥕",
                ingredients: [
                    "2 xícaras de farinha de trigo",
                    "4 ovos",
                    "3 cenouras médias",
                    "1 xícara de açúcar",
                    "1/2 xícara de óleo",
                    "1 colher de sopa de fermento em pó Royal"
                ],
                instructions: [
                    "Descasque e corte as cenouras em pedaços.",
                    "No liquidificador, bata as cenouras, ovos, açúcar e óleo até ficar homogêneo.",
                    "Despeje a mistura em uma tigela grande.",
                    "Adicione a farinha de trigo aos poucos, mexendo bem.",
                    "Por último, incorpore o fermento em pó delicadamente.",
                    "Despeje em forma untada e enfarinhada.",
                    "Asse em forno pré-aquecido a 180°C por 35-40 minutos.",
                    "Teste com palito - se sair limpo, está pronto.",
                    "Deixe esfriar antes de desenformar."
                ],
                prepTime: "15 min",
                cookTime: "40 min",
                servings: "10 porções"
            },
            {
                id: 119,
                name: "Quadradinhos de Queijo",
                author: "Laís Cristina Rossetti Donda",
                image: "🧀",
                ingredients: [
                    "400g de coco ralado",
                    "2 xícaras de açúcar",
                    "500g de queijo ralado",
                    "5 ovos",
                    "1 colher de sopa de margarina"
                ],
                instructions: [
                    "Pré-aqueça o forno a 180°C e unte uma forma retangular.",
                    "Em uma tigela grande, misture o coco ralado com o açúcar.",
                    "Adicione o queijo ralado e misture bem.",
                    "Bata os ovos levemente e incorpore à mistura.",
                    "Adicione a margarina derretida e misture até ficar homogêneo.",
                    "Despeje na forma untada, espalhando uniformemente.",
                    "Asse por 25-30 minutos até dourar levemente.",
                    "Deixe esfriar completamente antes de cortar em quadradinhos.",
                    "Sirva em temperatura ambiente."
                ],
                prepTime: "15 min",
                cookTime: "30 min",
                servings: "20 quadradinhos"
            },
            {
                id: 120,
                name: "Quindim Tradicional",
                author: "Laís Cristina Rossetti Donda",
                image: "🥥",
                ingredients: [
                    "40 gemas frescas",
                    "250g de açúcar",
                    "250ml de leite",
                    "200g de coco ralado",
                    "Margarina e açúcar para untar"
                ],
                instructions: [
                    "Unte forminhas individuais com margarina e polvilhe com açúcar.",
                    "Peneire as gemas para remover qualquer película.",
                    "Em uma tigela, misture delicadamente as gemas com o açúcar.",
                    "Adicione o leite aos poucos, mexendo suavemente.",
                    "Incorpore o coco ralado sem bater muito para não fazer espuma.",
                    "Distribua a mistura nas forminhas untadas.",
                    "Asse em banho-maria a 180°C por 25-30 minutos.",
                    "Os quindins estarão prontos quando dourados por cima.",
                    "Deixe esfriar antes de desenformar."
                ],
                prepTime: "25 min",
                cookTime: "30 min",
                servings: "40 unidades"
            },

            {
                id: 122,
                name: "Pudim Gelado Especial",
                author: "Laís Cristina Rossetti Donda",
                image: "🍮",
                ingredients: [
                    "4 colheres de sopa de farinha de trigo",
                    "2 copos de leite",
                    "1 colher de sopa de açúcar",
                    "1 bolo gelado (para camadas)",
                    "1 lata de leite",
                    "1 lata de creme de leite",
                    "1 lata de leite condensado",
                    "3 colheres de sopa de manteiga",
                    "1 gema",
                    "1 colher de sopa de maisena"
                ],
                instructions: [
                    "No liquidificador, bata o leite, farinha de trigo, açúcar e maisena.",
                    "Adicione a gema e bata novamente.",
                    "Leve ao fogo baixo, mexendo sempre até engrossar.",
                    "Em outra panela, misture leite condensado, leite e manteiga.",
                    "Cozinhe até formar um creme consistente.",
                    "Corte o bolo gelado em fatias.",
                    "Em um refratário, alterne camadas de bolo e creme.",
                    "Finalize com creme de leite por cima.",
                    "Leve à geladeira por pelo menos 4 horas antes de servir."
                ],
                prepTime: "30 min",
                cookTime: "20 min",
                servings: "10 porções"
            },







            {
                id: 130,
                name: "Bolacha Champanhe",
                author: "Laís Cristina Rossetti Donda",
                image: "🥂",
                ingredients: [
                    "7 gemas",
                    "5 ovos inteiros",
                    "2 xícaras de açúcar",
                    "60g de gelatina sem sabor",
                    "1/2 litro de água",
                    "500g de farinha de trigo",
                    "Essência de baunilha a gosto",
                    "Emulsificante (quantidade conforme embalagem)",
                    "30 claras (para suspiro)",
                    "3 xícaras de açúcar (para suspiro)"
                ],
                instructions: [
                    "Dissolva a gelatina na água conforme instruções.",
                    "Bata as gemas e ovos inteiros com açúcar até ficar cremoso.",
                    "Adicione a gelatina dissolvida e o emulsificante.",
                    "Incorpore a farinha de trigo e essência de baunilha.",
                    "Despeje em formas untadas e asse a 180°C por 25-30 minutos.",
                    "Para o suspiro: bata as 30 claras em neve.",
                    "Adicione o açúcar aos poucos até formar picos firmes.",
                    "Use o suspiro para decorar as bolachas.",
                    "Leve ao forno baixo para secar o suspiro."
                ],
                prepTime: "45 min",
                cookTime: "30 min",
                servings: "30 unidades"
            },


            {
                id: 133,
                name: "Suspiro Especial",
                author: "Laís Cristina Rossetti Donda",
                image: "☁️",
                ingredients: [
                    "1 litro de claras de ovo",
                    "3 kg de açúcar",
                    "1/2 litro de água (para calda)",
                    "13 gemas (para creme)",
                    "Canela em pó a gosto"
                ],
                instructions: [
                    "Esta é uma receita para grande quantidade.",
                    "Bata as claras em neve até formar picos firmes.",
                    "Prepare uma calda com água e parte do açúcar até dar ponto.",
                    "Adicione a calda quente às claras, batendo sempre.",
                    "Continue batendo até esfriar e formar suspiro consistente.",
                    "Para o creme: bata as gemas com açúcar restante.",
                    "Cozinhe em banho-maria até engrossar.",
                    "Tempere com canela em pó.",
                    "Asse os suspiros em forno baixo até secar.",
                    "Sirva com o creme gelado por 3 horas."
                ],
                prepTime: "60 min",
                cookTime: "120 min",
                servings: "50 unidades"
            },
            {
                id: 134,
                name: "Peti Four de Cajuzinho",
                author: "Laís Cristina Rossetti Donda",
                image: "🥜",
                ingredients: [
                    "1/4 xícara de farinha de cajuzinho",
                    "100g de açúcar",
                    "Chocolate em pó a gosto",
                    "Óleo para fritar"
                ],
                instructions: [
                    "Em uma tigela, misture a farinha de cajuzinho com o açúcar.",
                    "Adicione chocolate em pó a gosto e misture bem.",
                    "Forme pequenas bolinhas ou formas com a mistura.",
                    "Aqueça óleo em uma panela para fritar.",
                    "Frite os peti fours até dourar por todos os lados.",
                    "Escorra em papel absorvente.",
                    "Sirva ainda morno ou em temperatura ambiente."
                ],
                prepTime: "15 min",
                cookTime: "10 min",
                servings: "15 unidades"
            },

            {
                id: 136,
                name: "Sonho de Espalha",
                author: "Laís Cristina Rossetti Donda",
                image: "☁️",
                ingredients: [
                    "1 litro de água",
                    "600g de farinha de trigo",
                    "1 pitada de sal",
                    "Óleo para fritar"
                ],
                instructions: [
                    "Ferva a água com sal.",
                    "Adicione a farinha de trigo aos poucos, mexendo sempre.",
                    "Cozinhe até formar uma massa consistente.",
                    "Deixe esfriar um pouco.",
                    "Modele pequenas porções da massa.",
                    "Frite em óleo quente até dourar.",
                    "Escorra em papel absorvente.",
                    "Sirva quente polvilhado com açúcar."
                ],
                prepTime: "15 min",
                cookTime: "20 min",
                servings: "12 unidades"
            },
            {
                id: 137,
                name: "Massa Básica de Ovos",
                author: "Laís Cristina Rossetti Donda",
                image: "🥚",
                ingredients: [
                    "4 ovos",
                    "200g de maisena",
                    "500g de açúcar"
                ],
                instructions: [
                    "Bata os ovos até ficarem espumosos.",
                    "Adicione o açúcar aos poucos, batendo sempre.",
                    "Incorpore a maisena delicadamente.",
                    "Esta massa serve como base para diversos doces.",
                    "Pode ser assada ou usada como recheio.",
                    "Asse a 180°C por 25-30 minutos se for fazer bolo."
                ],
                prepTime: "15 min",
                cookTime: "30 min",
                servings: "Base para 1 receita"
            },
   
