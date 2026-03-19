// 1. El programa elige un número del 1 al 20
let numeroSecreto = 12; // Lo ponemos fijo primero para probar, o usa: Math.floor(Math.random() * 20) + 1;
let intento = 0;

alert("¡Adivina el número del 1 al 20!");

// 2. El ciclo se repite MIENTRAS el intento sea diferente al número secreto
while (intento != numeroSecreto) {

  intento = prompt("Introduce un número:");

  if (intento < numeroSecreto) {
    alert("Es más ALTO");
  }
  else if (intento > numeroSecreto) {
    alert("Es más BAJO");
  }
}

// 3. Si sale del ciclo es porque adivinó
alert("¡Felicidades! Ganaste.");