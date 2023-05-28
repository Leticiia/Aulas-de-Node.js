const readline = require('readline');

const tec = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

tec.question("Digite um número: ", (num) => {
    if (num > 5){
        console.log("O valor " +num +  ' é maior que 5');
    }
    else if(num < 5){
        console.log("O valor " +num +  ' é menor que 5');
    } 
    else{
        console.log("O valor " +num +  ' é igual a 5');
    }
    tec.close();
})