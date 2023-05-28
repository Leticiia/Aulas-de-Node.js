// Implementar uma calculadora básica onde o usuário deverá 
// digitar dois valores numéricos e também a operação desejada.
// Considerar a quatro operações básicas. Em seguida, o 
// programa deverá calcular o mostrar o resultado.
const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite o primeiro valor: ', (num1) => {
  teclado.question('Digite o segundo valor: ', (num2) => {
    teclado.question('Digite a operação: ', (oper) => { 
      if (oper == '+') {
        console.log('A soma é ' + (parseFloat(num1) + parseFloat(num2)));
      }
      else if (oper == '-') {
        console.log('A subtração é ' + (parseFloat(num1) - parseFloat(num2)));
      }
      else if (oper == '*') {
        console.log('A multiplicação é ' + (parseFloat(num1) * parseFloat(num2)));
      }
      else if (oper == '/') {
        console.log('A divisão é ' + (parseFloat(num1) / parseFloat(num2)));
      }
      else {
        console.log('Operação inválida!');
      }
      teclado.close();
    });
  });
});