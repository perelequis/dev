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
            "Quando o tempo de cozimento estiver completo, teste com um palito para garantir que o bolo esteja totalmente assado."
        ],
        prepTime: "15 min",
        cookTime: "30 min",
        servings: "8 porções"
    },
    {
        id: 2,
        name: "Palha Italiana",
        author: "Péricles Rossetti",
        image: "🍪",
        category: "Doce",
        ingredients: [
            "1 lata de leite condensado",
            "2 colheres de sopa de manteiga",
            "2 colheres de sopa de cacau em pó (ou achocolatado)",
            "1 pacote de biscoito Maria (aproximadamente 200g)",
            "Leite em pó para polvilhar"
        ],
        instructions: [
            "Quebre os biscoitos em pedaços pequenos, evitando farelos, e reserve.",
            "Prepare o brigadeiro: Em uma panela, misture o leite condensado, a manteiga e o cacau em pó. Cozinhe em fogo baixo, mexendo continuamente, até que a mistura engrosse e comece a desgrudar do fundo da panela.",
            "Ainda com o brigadeiro morno, incorpore os biscoitos, garantindo que fiquem bem cobertos.",
            "Despeje a mistura em uma assadeira untada ou forrada com papel manteiga, espalhando uniformemente.",
            "Deixe esfriar completamente antes de cortar em quadrados ou retângulos.",
            "Polvilhe com leite em pó antes de servir."
        ],
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "12 porções"
    },
    {
        id: 3,
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
            "Quando a mistura começar a engrossar e desgrudar do fundo da panela (cerca de 8-10 minutos), adicione metade do leite em pó Ninho e misture bem.",
            "Despeje a calda quente sobre a pipoca e misture rapidamente com uma colher de pau até que toda a pipoca esteja coberta.",
            "Polvilhe o restante do leite em pó Ninho por cima e misture delicadamente.",
            "Deixe esfriar completamente antes de servir. A pipoca ficará crocante conforme esfria."
        ],
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "6 porções"
    },
    {
        id: 4,
        name: "Miojo Cremoso",
        author: "Péricles Rossetti",
        image: "🍜",
        category: "Salgado",
        ingredients: [
            "1 pacote de miojo (sabor de sua preferência)",
            "200 ml de água",
            "2 colheres de sopa de creme de leite (pode ser de caixinha)",
            "1 colher de sopa de requeijão cremoso (opcional, mas deixa mais cremoso)",
            "Queijo ralado a gosto (opcional)"
        ],
        instructions: [
            "Coloque a água numa panela e leve ao fogo.",
            "Quando ferver, adicione o macarrão e cozinhe por 2 a 3 minutos (até amolecer).",
            "Quando o macarrão estiver quase no ponto, adicione o tempero do pacote, o creme de leite e o requeijão.",
            "Mexa bem, mantendo no fogo baixo para não talhar o creme de leite.",
            "Misture até o molho encorpar e ficar cremoso.",
            "Desligue o fogo e, se quiser, adicione queijo ralado.",
            "Coloque no prato e sirva ainda quente."
        ],
        prepTime: "2 min",
        cookTime: "6 min",
        servings: "1 porção"
    },
    {
        id: 5,
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
            "Desligue o fogo, acrescente o creme de leite e mexa até ficar homogêneo (não deixar ferver para não talhar).",
            "Sirva quente, acompanhado de arroz branco e batata palha."
        ],
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "4 porções"
    }
];
