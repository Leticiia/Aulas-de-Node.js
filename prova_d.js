//Desenvolver uma aplicação usando o Node.JS que determine o preço final de uma compra, 
//a partir dos seguintes dados digitados pelo usuário: produto, quantidade e preço unitário. 
//Em seguida, para determinar o preço final, devem-se utilizar os seguintes critérios para cálculo: 

// d) 	O preço final será obtido somando o preço total (bruto) com o valor do imposto e subtraindo o valor do desconto. 
 
const readline = require('readline');

const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

teclado.question('Digite qual será o produto: ', (produto) => {
    teclado.question('Digite a quantidade: ', (quant) => {
        teclado.question('Digite o  valor unitário: ', (preco) => {
     var preco_total = parseFloat(preco)*parseInt(quant); 

     if (preco_total < 1500){
        var imposto = preco_total * 0.025;
        var total = preco_total + imposto;
        
        console.log('O valor total do produto ' + (produto) +' é de R$ ' +total+ ' reais');
    }else if(preco_total >= 1500 && preco_total< 2500){
        var imposto = preco_total * 0.05;
        var total = preco_total + imposto;
       
        console.log('O valor total do produto ' + (produto) +' é de R$ ' +total+ ' reais');
    }
    else if(preco_total >= 2500 && preco_total< 6000){
        var desc = preco_total * 0.0475;
        var imposto = preco_total * 0.0825;
        var total = (preco_total - desc) + imposto;

        console.log('O valor total do produto ' + (produto) +' com desconto  e imposto é de R$ ' +total+ ' reais');
    }
    else if(preco_total >= 6000){
        var desc = preco_total * 0.0475;
        var imposto = preco_total * 0.25125;
        var total = (preco_total - desc) + imposto;



        console.log('O valor total do produto ' + (produto) +' com desconto  e imposto é de R$ ' +total+ ' reais');
    }
    teclado.close();
})
})
});
