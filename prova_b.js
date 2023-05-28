//Desenvolver uma aplicação usando o Node.JS que determine o preço final de uma compra, 
//a partir dos seguintes dados digitados pelo usuário: produto, quantidade e preço unitário. 
//Em seguida, para determinar o preço final, devem-se utilizar os seguintes critérios para cálculo: 

//b)	Caso o preço total (bruto) seja superior a R$ 2.500,00 aplicar um desconto de 4,75%. 

const readline = require('readline');

const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

teclado.question('Digite qual será o produto: ', (produto) => {
    teclado.question('Digite a quantidade: ', (quant) => {
        teclado.question('Digite o  valor unitário: ', (preco) => {
     var preco_total = parseFloat(preco)*parseInt(quant); 

     if (preco_total >= 2500){
        var desc = preco_total * 0.0475;
        var final = preco_total - desc;
        console.log('O valor do produto ' + (produto) +' com desconto é de R$ ' +final+ ' reais');
    }else{
        console.log('O valor do produto ' + (produto) +' é de  '+preco_total+ ' reais');
    }
    teclado.close();
})
})
});