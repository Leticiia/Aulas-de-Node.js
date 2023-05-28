//Desenvolver uma aplicação usando o Node.JS que determine o preço final de uma compra, 
//a partir dos seguintes dados digitados pelo usuário: produto, quantidade e preço unitário. 
//Em seguida, para determinar o preço final, devem-se utilizar os seguintes critérios para cálculo: 
 
//a)	O preço total (bruto) é obtido multiplicando o preço unitário com a quantidade. 

const readline = require('readline');

const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

teclado.question('Digite qual será o produto: ', (produto) => {
    teclado.question('Digite a quantidade: ', (quant) => {
        teclado.question('Digite o  valor unitário: ', (preco) => {
     var preco_total = parseFloat(preco)*parseInt(quant); 
     console.log('O preço final do produto ' + (produto) + ' é  de R$ '+preco_total+ ' reais' ) ;
    teclado.close();
})
})
});