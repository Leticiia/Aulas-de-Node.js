

var num = 1;
const readline = require('readline');

const tec = readline.createInterface({
input: process.stdin,
output: process.stdout
});

tec.question('Informe qual tabuada deseja apresentar: ', (dado) =>
{
    console.log('Tabuada do ', dado+ ':');

do {
 console.log(  dado,' x ', num, ' = ', num * dado);
 num += 1;
} while (num <= 10);
tec.close();
});