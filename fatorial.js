// Considerando um número inteiro digitado pelo usuário, 
// calcular e exibir o valor da sua fatorial. Por exemplo, 
// se o usuário digitar 4, temos que a fatorial é 4 x 3 x 
// 2 x 1, isto é, 24.
const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var fat = 1;
teclado.question('Digite um número: ', (num) => {
  for (var cont = num; cont > 1; cont--) {
    fat = fat * cont;
  }
  console.log('A fatorial de ' + num + ' é ' + fat);
  teclado.close();
});