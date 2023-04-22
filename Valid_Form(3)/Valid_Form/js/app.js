console.log("Estamos Conectados")
document.write("<h1>Mensaje de js</h1>");
alert("Desinstala el lol");

var nt1 = 7.0;
var nt2 = 1.0;
var nt3 = 2.5;
var nt4 = 3.1;
var suma = nt1 + nt2 + nt3 + nt4;
/*console.log("La suma de sus notas es: ",suma);
console.log("Su promedio es: ",suma/4);*/

/*if(suma/4>4){
    console.log("Aprobado!")
}
else{
    console.log("Peeeeeeeeeeeeeeencaaaaaaaaa")
}*/


//sentencia Switch

var vProm = suma / 4;
var sw = 0;

if (vProm >= 1 && vProm < 4) {
    sw = 3;
} else if (vProm >= 4 && vProm < 5) {
    sw = 4;
} else if (vProm >= 5 && vProm < 6) {
    sw = 5;
} else if (vProm >= 6 && vProm <= 7) {
    sw = 6;
}

switch (sw) {
    case 3:
        console.log("Promedio: " + vProm + " Peeeeeeencaaaaaaaaaaa");
        break;
    case 4:
        console.log("Promedio: " + vProm + " Justito");
        break;
    case 5:
        console.log("Promedio: " + vProm + " Bueno");
        break;
    case 6:
        console.log("Promedio: " + vProm + " Excelente");
        break;
    default:
        console.log("Promedio no generado");
}

//ArrayList
var vArray = ["Juan Perez", 50, 4.3, true];
console.log(vArray);
console.log("Nombre :" + vArray[0]);
console.log("Edad :" + vArray[1]);
console.log("Promedio :" + vArray[2]);
console.log("Casado :" + vArray[3]);

//Ciclos  Iterativos

for (var x = 1; x < vArray.length; x++) {
    console.log(vArray[x]);

}

while () {

}