/*1) Desenvolver um programa em Node.js para uma determinada loja que precisa calcular 
o preço de venda de um produto. O cálculo deverá ser efetuado através da multiplicação 
do preço unitário pela quantidade vendida e, posteriormente, subtrair o valor do desconto. 
Considerar todas as variáveis do tipo de dado real, que serão digitadas pelo usuário.*/

const { stdout } = require('process');
const readline = require ('readline');

const tec = readline.createInterface({
    input: process.stdin,
    output:stdout
});

tec.question( 'Qual o preço unitário do produto:  ', (p) =>
tec.question('Qual a quantidade vendida: ', (qt) =>
tec.question('Qual o valor de desconto: ', (d) =>

{
    var pv = parseFloat(p)*parseFloat(qt)-parseFloat(d);
    console.log('O preço de venda será de: ', pv);
    tec.close();
})));
