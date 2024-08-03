export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    des: string;
    imagem: string;
    quantidadeEstoque: number;
}

export const produtos: IProduto[] = [
    {
        id: 1, descricao: "Biblioteca da Meia-Noite", preco: 37.74, des: "", imagem: "https://m.media-amazon.com/images/I/51kAYMwbQIL._SR480,440_.jpg",
        quantidadeEstoque: 12
    },
    {
        id: 2, descricao: "É Assim que Acaba: 1", preco: 44.90, des: "", imagem: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SR480,440_.jpg",
        quantidadeEstoque: 21
    },
    {
        id: 3, descricao: "Cleopatra e Frankenstein", preco: 43.80, des: "", imagem: "https://m.media-amazon.com/images/I/4168HkDg1SL._SR480,440_.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 4, descricao: "Livro do Bill - Edição com brinde!", preco: 159.90, des: "", imagem: "https://m.media-amazon.com/images/I/51AYKwUl1wL._SR480,440_.jpg",
        quantidadeEstoque: 14
    },
    {
        id: 5, descricao: "É assim que começa", preco: 44.77, des: "", imagem: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SR480,440_.jpg",
        quantidadeEstoque: 8
    },
    {
        id: 6, descricao: "Imperfeitos", preco: 17.19, des: "", imagem: "https://m.media-amazon.com/images/I/51Aep6qdvwL._SR480,440_.jpg",
        quantidadeEstoque: 7
    },
    {
        id: 7, descricao: "O Deus que destrói sonhos", preco: 25.90, des: "", imagem: "https://m.media-amazon.com/images/I/51uLDBFvH4L._SR480,440_.jpg",
        quantidadeEstoque: 3
    },
    {
        id: 8, descricao: "Verity", preco: 42.79, des: "", imagem: "https://m.media-amazon.com/images/I/51ABRx3d7GL._SR480,440_.jpg",
        quantidadeEstoque: 16
    },
    {
        id: 9, descricao: "Manual de Persuasão do FBI", preco: 37.40, des: "", imagem: "https://m.media-amazon.com/images/I/41PMpWyCpzL._SR480,440_.jpg",
        quantidadeEstoque: 45
    },
    {
        id: 10, descricao: "1984", preco: 11.90, des: "", imagem: "https://m.media-amazon.com/images/I/51feD87yuEL._SR480,440_.jpg",
        quantidadeEstoque: 23
    },
    {
        id: 11, descricao: "Minha culpa: 1", preco: 49.14, des: "", imagem: "https://m.media-amazon.com/images/I/51FA2CXlV+L._SR480,440_.jpg",
        quantidadeEstoque: 12
    },
    {
        id: 12, descricao: "Mob Psycho 100 (2 em 1) Vol. 1", preco: 39.92, des: "", imagem: "https://m.media-amazon.com/images/I/71z81R2ZA6L._SR480,440_.jpg",
        quantidadeEstoque: 14
    },
    {
        id: 13, descricao: "Tartarugas Ninja: O Último Ronin", preco: 86.30, des: "", imagem: "https://m.media-amazon.com/images/I/51MxAoGgyGL._SR480,440_.jpg",
        quantidadeEstoque: 34
    },
    {
        id: 14, descricao: "Eu e Esse Meu Coração", preco: 29.33, des: "", imagem: "https://m.media-amazon.com/images/I/51hb+WADSUL._SR480,440_.jpg",
        quantidadeEstoque: 45
    },
    {
        id: 15, descricao: "A razão do amor (Sucesso do TikTok)", preco: 49.10, des: "", imagem: "https://m.media-amazon.com/images/I/81bkmJnflPL._AC._SR360,460.jpg",
        quantidadeEstoque: 23
    },
]