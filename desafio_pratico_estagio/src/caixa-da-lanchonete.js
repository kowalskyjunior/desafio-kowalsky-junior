class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        const cardapio = [{
            codigo: "cafe",
            descricao: "Café",
            valor: 3.00,
        },
        {
            codigo: "chantily",
            descricao: "Chantily (extra do café)",
            valor: 1.50, 
        },
        {
            codigo: "suco",
            descricao: "Suco Natural",
            valor: 6.20,
        },
        {
            codigo: "sanduiche",
            descricao: "Sanduíche",
            valor: 6.50, 
        },
        {
            codigo: "queijo",
            descricao: "Queijo (extra do Sanduíche)",
            valor: 2.00,
        },
        {
            codigo: "salgado",
            descricao: "Salgado",
            valor: 7.25,
        },
        {
           codigo: "combo1",
           descricao: "1 Suco e 1 Sanduíche",
           valor: 9.50,
        },
        {
            codigo: "combo2",
            descricao: "1 Café e 1 Sanduíche",
            valor: 7.50,
        },
    ];

    const formasDePagamento = [{
        tipo: "dinheiro",
        porcentagem: -0.05,
    },
    {
        tipo: "debito",
        porcentagem: 0,
    },
    {
        tipo: "credito",
        porcentagem: 0.03,
    },
];

let totvalor = 0;
let extraSanduice = false;
let extraChantily = false;
let extraQueijo = false;
let extraCafe = false;

for(const item of itens){
    const [codigo, quantidade] = item.split(",");
    const itemDetails = cardapio.find((itemDesc) => itemDesc.codigo === codigo
    );

    if(quantidade <= 0){
        return "Quantidade inválida!"
    };

    if(!itemDetails){
        return "Item inválido!"
    };
    
    if(codigo === "sanduiche"){
        extraSanduice = true;
    } else if(codigo === "chantily"){
        extraChantily = true;
    } else if(codigo === "queijo"){
        extraQueijo = true;
    } else if(codigo === "cafe"){
        extraCafe = true;
    };

    totvalor += itemDetails.valor * parseInt(quantidade);
}

if(itens.length === 0){
    return "Não há itens no carrinho de compra!";
};

const formasDePagamentoValido = formasDePagamento.find ((tipo) => tipo.tipo === formaDePagamento
);

if(!formasDePagamentoValido){
    return "Forma de pagamento inválida!"
};

    if((!extraCafe && extraChantily) || (!extraSanduice && extraQueijo)){
        return "Item extra não pode ser pedido sem o principal"
    };

    const porcentagemDesconto = formasDePagamentoValido.porcentagem;
    totvalor *= 1 + porcentagemDesconto;

    return `R$ ${totvalor.toFixed(2).replace(".",",")}`

};

};

export { CaixaDaLanchonete };
