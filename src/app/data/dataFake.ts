export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    des: string;
    imagem: string;
    quantidadeEstoque: number;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number
}

export const produtos: IProduto[] = [
    {
        id: 1, descricao: "Biblioteca da Meia-Noite", preco: 37.74, des: "A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo.", imagem: "https://m.media-amazon.com/images/I/51kAYMwbQIL._SR480,440_.jpg",
        quantidadeEstoque: 12
    },
    {
        id: 2, descricao: "É Assim que Acaba: 1", preco: 44.90, des: "Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta.", imagem: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SR480,440_.jpg",
        quantidadeEstoque: 21
    },
    {
        id: 3, descricao: "Cleopatra e Frankenstein", preco: 43.80, des: "Cleo, uma pintora inglesa de vinte e quatro anos, ainda está tentando encontrar o seu lugar na intensa Nova York, quando, alguns meses antes de seu visto de estudante vencer, conhece Frank. Vinte anos mais velho, o publicitário Frank tem uma vida repleta de todos os excessos que faltam à de Cleo.", imagem: "https://m.media-amazon.com/images/I/4168HkDg1SL._SR480,440_.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 4, descricao: "Livro do Bill - Edição com brinde!", preco: 159.90, des: "O demônio que aterrorizou Gravity Falls voltou do além para finalmente contar seu lado da história em um novo livro escrito por ninguém menos do que o próprio Bill Cipher.", imagem: "https://m.media-amazon.com/images/I/51AYKwUl1wL._SR480,440_.jpg",
        quantidadeEstoque: 14
    },
    {
        id: 5, descricao: "É assim que começa", preco: 44.77, des: "Lily Bloom continua administrando uma floricultura. Seu ex-marido abusivo, Ryle Kincaid, ainda é um    cirurgião. Mas agora os dois estão oficialmente divorciados e dividem a guarda da filha, Emerson.", imagem: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SR480,440_.jpg",
        quantidadeEstoque: 8
    },
    {
        id: 6, descricao: "Imperfeitos", preco: 17.19, des: "Olive se sente como a gêmea azarada da casa: dos acidentes estranhamente inexplicáveis ao fracasso na vida profissional e amorosa ― nada dá certo para ela.", imagem: "https://m.media-amazon.com/images/I/51Aep6qdvwL._SR480,440_.jpg",
        quantidadeEstoque: 7
    },
    {
        id: 7, descricao: "O Deus que destrói sonhos", preco: 25.90, des: "O Deus cristão não pode ser domesticado.", imagem: "https://m.media-amazon.com/images/I/51uLDBFvH4L._SR480,440_.jpg",
        quantidadeEstoque: 3
    },
    {
        id: 8, descricao: "Verity", preco: 42.79, des: "Um casal apaixonado. Uma intrusa. Três mentes doentias. Finalista do prêmio Goodreads como melhor romance de 2019, Verity é o primeiro thriller de Colleen Hoover e deixa os leitores envolvidos do começo ao fim.", imagem: "https://m.media-amazon.com/images/I/51ABRx3d7GL._SR480,440_.jpg",
        quantidadeEstoque: 16
    },
    {
        id: 9, descricao: "Manual de Persuasão do FBI", preco: 37.40, des: "Ex-agente do FBI ensina como influenciar, atrair e conquistar pessoas!", imagem: "https://m.media-amazon.com/images/I/41PMpWyCpzL._SR480,440_.jpg",
        quantidadeEstoque: 45
    },
    {
        id: 10, descricao: "1984", preco: 11.90, des: "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.", imagem: "https://m.media-amazon.com/images/I/51feD87yuEL._SR480,440_.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 11, descricao: "Minha culpa: 1", preco: 49.14, des: "Noah Morgan leva uma vida tranquila com a mãe em Toronto, no Canadá. Ao passar férias em um cruzeiro, sua mãe conhece com um advogado misterioso e endinheirado da Califórnia, com quem se casa. As duas precisam, então, se mudar para Los Angeles a fim de morar com a nova família, e para isso Noah deixa toda a sua vida antiga para trás.", imagem: "https://m.media-amazon.com/images/I/51FA2CXlV+L._SR480,440_.jpg",
        quantidadeEstoque: 12
    },
    {
        id: 12, descricao: "Mob Psycho 100 (2 em 1) Vol. 1", preco: 39.92, des: "Ao chegar em 100... ele explode!! Mob é um estudante do ginasial que sonha com uma juventude normal, mas que possui incríveis... Poderes sobrenaturais!!! Vários tentam se aproveitar do garoto, mas “algo” começa a agir dentro dele!! Assim, começa a história de um Esper poderoso e de sua juventude explosiva!!", imagem: "https://m.media-amazon.com/images/I/71z81R2ZA6L._SR480,440_.jpg",
        quantidadeEstoque: 14
    },
    {
        id: 13, descricao: "Tartarugas Ninja: O Último Ronin", preco: 86.30, des: "Após 27 anos de espera, uma história jamais vista da dupla que criou as TARTARUGAS NINJA é apresentada aos fãs de quadrinhos com um tratamento impecável de roteiro e arte!! E depois do sucesso arrebatador que foi seu lançamento nos Estados Unidos, chegou a hora do público brasileiro também se deleitar com O ÚLTIMO RONIN!!!", imagem: "https://m.media-amazon.com/images/I/51MxAoGgyGL._SR480,440_.jpg",
        quantidadeEstoque: 34
    },
    {
        id: 14, descricao: "Eu e Esse Meu Coração", preco: 29.33, des: "Leah MacKenzie, de 17 anos, não tem coração. O que a mantém viva é um coração artificial que ela carrega dentro de uma mochila. Com seu tipo sanguíneo raro, um transplante é como um sonho distante. Conformada, ela tenta se esquecer de que está com os dias contados, criando uma lista de “coisas para fazer antes de morrer”.", imagem: "https://m.media-amazon.com/images/I/51hb+WADSUL._SR480,440_.jpg",
        quantidadeEstoque: 45
    },
    {
        id: 15, descricao: "A razão do amor (Sucesso do TikTok)", preco: 49.10, des: "No novo livro da autora best-seller de A hipótese de amor , uma cientista será obrigada a colaborar com seu rival em um projeto de proporções interestelares, e os resultados prometem ser explosivos.", imagem: "https://m.media-amazon.com/images/I/81bkmJnflPL._AC._SR360,460.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 16, descricao: "Amor, teoricamente", preco: 49.10, des: "Dois físicos rivais colidem em meio a um turbilhão de disputas acadêmicas e caóticos namoros de mentira nesta nova comédia romântica da autora de A hipótese do amor.", imagem: "https://m.media-amazon.com/images/I/81mBAOFbqKL._SY466_.jpg",
        quantidadeEstoque: 25
    },
    {
        id: 17, descricao: "Amor & Gelato: 1", preco: 45.00, des: "Um verão na Itália, uma antiga história de amor e um segredo de família", imagem: "https://m.media-amazon.com/images/I/41WSqO6wTeL._SY445_SX342_.jpg",
        quantidadeEstoque: 31
    },
    {
        id: 18, descricao: "Melhor do que nos filmes", preco: 44.92, des: "Sucesso no TikTok, livro de Lynn Painter vai conquistar os fãs de comédias românticas com uma protagonista determinada a encontrar seu “felizes para sempre”", imagem: "https://m.media-amazon.com/images/I/61y5iLUKS3L._SY466_.jpg",
        quantidadeEstoque: 19
    },
    {
        id: 19, descricao: "As mil partes do meu coração", preco: 44.90, des: "Nem todo erro merece uma consequência. Às vezes a única coisa que ele merece é o perdão. Um livro sensível e viciante da rainha do romance,  As mil partes do meu coração mostra que nunca é tarde demais para perdoar e reconstruir pontes com quem nos magoou.", imagem: "https://m.media-amazon.com/images/I/814pUv-EGbL._SY466_.jpg",
        quantidadeEstoque: 29
    },
    {
        id: 20, descricao: "Quarta asa: 1", preco: 49.10, des: "Em Quarta Asa, best-seller #1 do The New York Times, uma jovem precisa sobreviver ao treinamento em uma escola de elite para poderosos cavaleiros de dragões, onde a única regra é se formar... ou morrer tentando.", imagem: "https://m.media-amazon.com/images/I/61in0ogKvdL._SY466_.jpg",
        quantidadeEstoque: 54
    },
    {
        id: 21, descricao: "Entendendo Algoritmos", preco: 49.10, des: "Um guia ilustrado para programadores e outros curiosos.", imagem: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY466_.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 22, descricao: "Fogo & Sangue – Volume 1", preco: 76.90, des: "A arrebatadora história dos Targaryen ganha vida neste novo livro de George R.R. Martin, autor de As Crônicas de Gelo e Fogo, série que inspirou a adaptação de sucesso da HBO, Game of Thrones.", imagem: "https://m.media-amazon.com/images/I/818yNY0mMZL._SY466_.jpg",
        quantidadeEstoque: 13
    },
    {
        id: 23, descricao: "Demon Slayer - Kimetsu No Yaiba Vol. 17", preco: 27.35, des: "O Kisatsutai invade o Castelo do Infinito para derrotar Muzan! Shinobu está travando uma batalha árdua contra Douma, o Segundo Jougen, devido ao fato de seus venenos não terem efeito nele. Diante dessas circunstâncias, será que ela conseguirá vingar a morte de sua irmã mais velha...?! Enquanto isso, um oni conhecido se põe no caminho de Zenitsu!!", imagem: "https://m.media-amazon.com/images/I/71DX97BlSAL._SY466_.jpg",
        quantidadeEstoque: 28
    },
    {
        id: 24, descricao: "A hipótese do amor", preco: 37.74, des: "Quando um namoro de mentira entre cientistas encontra a irresistível força da atração, todas as teorias cuidadosamente calculadas sobre o amor são postas à prova.", imagem: "https://m.media-amazon.com/images/I/81LTEfXYgcL._SY466_.jpg",
        quantidadeEstoque: 41
    },
    {
        id: 25, descricao: "Todas as suas (im)perfeições", preco: 40.42, des: "Uma inesquecível história da rainha do drama Colleen Hoover, Todas as suas (im)perfeições fala sobre um casamento conturbado e uma promessa esquecida que pode ser capaz de salvá-lo.", imagem: "https://m.media-amazon.com/images/I/81Vhnel+xxL._SY466_.jpg",
        quantidadeEstoque: 43
    },
    {
        id: 26, descricao: "Caçador sem coração: 1", preco: 51.90, des: "Com este livro, Kristen Ciccarelli dá início a uma emocionante duologia de fantasia romântica, em que o único perigo maior do que ser uma bruxa é se apaixonar.", imagem: "https://m.media-amazon.com/images/I/819kt0LhQmL._SY466_.jpg",
        quantidadeEstoque: 47
    },
    {
        id: 27, descricao: "A Ilha Perdida Gullstruck", preco: 55.90, des: "Em uma ilha cercada por florestas densas e vulcões adormecidos, colonizadores buscam aplicar leis arcaicas a uma nova terra, caçadores de recompensas perseguem os vivos e um povo é desprezado é desprezada por todos. É neste cenário, em meio a antigas tensões e novas calamidades, que duas irmãs se veem envolvidas em uma teia mortal de enganos.", imagem: "https://m.media-amazon.com/images/I/81AZJ9L6JwL._SY466_.jpg",
        quantidadeEstoque: 27
    },
    {
        id: 28, descricao: "It: A coisa", preco: 71.27, des: "Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.", imagem: "https://m.media-amazon.com/images/I/91g9Dvtf+jL._SY466_.jpg",
        quantidadeEstoque: 62
    },
]