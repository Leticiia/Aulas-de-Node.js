/*3) A partir dos lados de um retângulo ou quadrado, digitados pelo usuário, elaborar uma 
aplicação Node.js que calcule e exiba o valor da área da figura e informe se é um retângulo 
ou um quadrado. Lembrando que a área é obtida pela multiplicação da base (L) pela altura 
(A).*/

const { stdout } = require('process');

const readline = require ('readline');

const tec = readline.createInterface({
    input: process.stdin,
    output:stdout
});

tec.question('Informe a base(L): ', (l) =>
tec.question('Informe a altura(A): ', (a) =>{
    var area = parseFloat(l)*parseFloat(a);

    if(l == a){
        console.log('É um quadrado com área de: ', area);
    }else{
        console.log('É um retângulo com área de: ', area);
    }
    tec.close();
}));