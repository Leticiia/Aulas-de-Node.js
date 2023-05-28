//Desenvolver uma aplicação usando o Node.JS que determine o preço final de uma compra, 
//a partir dos seguintes dados digitados pelo usuário: produto, quantidade e preço unitário. 
//Em seguida, para determinar o preço final, devem-se utilizar os seguintes critérios para cálculo: 

/*c)	O valor do imposto será obtido através das seguintes faixas: 
 
Preço total (bruto) 	Valor do Imposto 
< R$ 1.500,00 	2,5% do preço total (bruto) 
>= R$ 1.500,00 e < R$ 2.500,00 	5,0% do preço total (bruto) 
>=  R$ 2.500,00 e < R$ 6.000,00 	8,25% do preço total (bruto) 
>=  R$ 6.000,00 	25,125% do preço total (bruto) */

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
        
        console.log('O valor total do produto ' + (produto) +' é de R$ ' +preco_total+ ' reais e tem imposto de R$ ' +imposto);
    }else if(preco_total >= 1500 && preco_total< 2500){
        var imposto = preco_total * 0.05;
       
        console.log('O valor total do produto ' + (produto) +' é de R$ ' +preco_total+ ' reais e tem imposto de R$ ' +imposto);
    }
    else if(preco_total >= 2500 && preco_total< 6000){
        var imposto = preco_total * 0.0825;

        console.log('O valor total do produto ' + (produto) +' é de R$ ' +preco_total+ ' reais e tem imposto de R$ ' +imposto);
    }
    else if(preco_total >= 6000){
        var imposto = preco_total * 0.25125;

        console.log('O valor total do produto ' + (produto) +' é de R$ ' +preco_total+ ' reais e tem imposto de R$ ' +imposto);
    }
    teclado.close();
})
})
});
