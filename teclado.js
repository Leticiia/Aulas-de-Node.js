const readline = require('readline');

const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

teclado.question('Digite o seu nome: ', (nome) => {
    teclado.question('Digite o seu ano de nascimento: ', (nasc) => {
     var idade =2023 - nasc;   
    console.log('Olá ' + (nome) + ' a sua idade é '+idade + ' anos.') ;
    teclado.close();
})
});