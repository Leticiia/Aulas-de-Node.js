// Considerando os dois arrays, exibir o nome do produto mais caro.
var produto = new Array('Televisor', 'Notebook', 'Geladeira', 'Sofá', 'Fogão');
var preco = new Array(1000.00, 2300.00, 960.00, 4500.00, 1300.00);

var produtoCaro = produto[0];
var precoCaro = preco[0];

for (var i = 1; i < produto.length; i++) {
  if (preco[i] > precoCaro) {
    produtoCaro = produto[i];
    precoCaro = preco[i];
  }
}
console.log('O produto mais caro é ' + produtoCaro);