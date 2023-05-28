var hoje = new Date();
var diaSemana = hoje.getDay();
var nomeDia = "";
if(diaSemana == 0) {
     nomeDia = "Domingo";
}
else if (diaSemana ==1){
    nomeDia = "Segunda-feira";
 }
 else if (diaSemana ==  2){
    nomeDia = "Terça-feira";
}
else if (diaSemana == 3){
 nomeDia = "Quarta-feira";
}
else if (diaSemana == 4){
    nomeDia = "Quinta-feira";
}
else if (diaSemana == 5){
    nomeDia = "Sexta-feira";
}
else{
 nomeDia = "Sábado";
}
console.log ("Hoje é " + nomeDia);