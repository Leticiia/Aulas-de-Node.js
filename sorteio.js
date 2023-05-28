// Sortear 100 valores inteiros entre 1 e 1000.
// Exibir o valor médio dos elementos.
var soma = 0;
var media;
for (var i = 0; i < 100; i++) {
  soma += Math.floor(Math.random() * 1000 + 1);
}
media = soma / 100;
console.log('A média é ', media);