let masa;
do { 
    masa = parseFloat(prompt("Ingrese su masa (kg)"));
} while (isNaN(masa) || masa<0);
let altura;
do {
    altura = parseFloat(prompt("Ingrese su altura (m)"))
} while (isNaN(altura) || altura<0)

let Bim = masa/(altura*altura)
alert (Bim)
if (18.5>Bim)
alert ("la persona esta por debajo del peso ideal");
else if (Bim<29.99)
alert ("La persona supera el paso ideal");
else if (30<Bim)
alert ("la persona es obesa")