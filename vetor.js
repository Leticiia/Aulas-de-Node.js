var meses = new Array("Janeiro",
  "Fevereiro", "Março", "Abril", "Maio",
  "Junho", "Julho", "Agosto", "Setembro",
  "Outubro", "Novembro", "Dezembro");

console.log(meses[3]);
console.log(meses.length);

var texto = '';
for(var i = 0; i < meses.length; i++) {
  texto += meses[i] + ', '; 
}
console.log(texto);
