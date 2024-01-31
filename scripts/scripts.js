let miboton = document.querySelector("button");
let resultado = document.querySelector("h3") 

function bmi(){
let a = parseFloat(prompt('Introduzca su altura en m: ')); // prompt pide al usuario su altura por pantalla
let b = parseFloat(prompt('Introduzca su peso en kg: ')); // parseFloat convierte un texto a numerico (real)
let imc = b / (a*a); // let declara una variable y le asigna un valor con =
localStorage.setItem('imc', imc);
let d = ' ';
localStorage.setItem('resultado', d);
if (imc < 16) { //ejemplo de condicional anidado
d = 'Delgadez grado III';
} else if (16 <= imc && imc <= 16.99) { // && es un operador lógico equivalente a AND
d = 'Delgadez grado II'; // en d se almacena el resultado correspondiente
} else if (17 <= imc && imc <= 18.49) {
d = 'Delgadez grado I';
} else if (18.50 <= imc && imc <= 24.99) {
d = 'Peso Normal';
} else if (25.00 <= imc && imc <= 29.99) {
d = 'Sobrepeso (Pre obeso)';
} else if (30.00 <= imc && imc <= 34.99) {
d = 'Obesidad grado I';
} else if (35.00 <= imc && imc <= 40.00) {
d = 'Obesidad grado II';
} else if (imc > 40.00) {
d = 'Obesidad grado III';
}
resultado.textContent = 'Su IMC es ' + imc.toFixed(2) + ' Kg/m2' + ' y se encuentra en la clasificación de ' + d;
}

miboton.onclick = function(){bmi();}