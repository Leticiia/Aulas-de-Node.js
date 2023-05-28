/*2) A Lei de Ohm define que a resistência (R) de um condutor é obtida através da divisão 
da tensão aplicada (V) dividida pela intensidade de corrente elétrica (A). Desta forma, 
desenvolva em Node.js um programa que a partir de uma tensão e corrente, digitadas pelo 
usuário, calcular e mostrar o valor da resistência.*/

const { stdout } = require('process');
const readline = require ('readline');

const tec = readline.createInterface({
    input: process.stdin,
    output:stdout
});

tec.question('Qual a tensão(v):  ', (v) =>
tec.question('Qual é a corrente elétrica(a): ', (a) =>
{
var r = parseFloat(v)/parseFloat(a);
console.log('A resistência(R) será de: ', r);
tec.close;
}));
