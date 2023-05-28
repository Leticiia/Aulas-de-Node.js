const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite um número: ', (numero) => {
  if (numero % 5 == 0) {
    console.log (numero + ' é múltiplo de 5.');
  }
  else {
    console.log (numero + ' não é múltiplo de 5.');
  }
  teclado.close();
});