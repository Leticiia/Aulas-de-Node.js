const readline = require('readline');

const tec = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

tec.question("Digite um número: ", (num) => {
    if (num %2 ==0){
        console.log('O número ' +num+ ' par');
    }else{
        console.log('O número '+num+ ' é impar');
    }
    
    tec.close();
})