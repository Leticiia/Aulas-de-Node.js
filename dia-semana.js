var hoje = new Date();
var diaSemana = hoje.getDay();
var nomeDia = "";
switch(diaSemana) {
 case 0:
 nomeDia = "Domingo";
 break;
 case 1:
 nomeDia = "Segunda-feira";
 break;
 case 2:
 nomeDia = "Terça-feira";
 break;
 case 3:
 nomeDia = "Quarta-feira";
 break;
 case 4:
 nomeDia = "Quinta-feira";
 break;
 case 5:
 nomeDia = "Sexta-feira";
 break;
 case 6:
 nomeDia = "Sábado";
}
console.log ("Hoje é " + nomeDia);
