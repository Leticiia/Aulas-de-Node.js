// digitar 3 números, em seguida, calcular
// a média deles


const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });

teclado.question('Digite o primeiro número: ', (n1) => {
    teclado.question('Digite o segundo número: ', (n2) => {
        teclado.question('Digite o terceiro número: ', (n3) => {
         var soma = parseInt(n1) + parseInt(n2) +parseInt(n3) ; 
         var media = soma / 3;  
         console.log('O resultado da média é: ' +media) ;
        teclado.close();
        })
    })
});