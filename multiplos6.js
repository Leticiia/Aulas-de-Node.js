// A partir de 200 números sorteados entre 1 e 1000, mostrar 
// e indicar quantos são múltiplos de 6.
var contador = 0;
for (var i = 1; i <= 200; i++) {
  var valor = Math.floor(Math.random() * 1000 + 1);
  if (valor % 6 == 0) {
    console.log(valor);
    contador++;
  }
}
console.log('Há ' + contador + ' números múltiplos de 6.');