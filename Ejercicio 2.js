//Ejercicio 2 – Tabla de multiplicar personalizada

let continuar = "si";

while (continuar == "si") {
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar"));

    let tabla = "";

    for (let i = 1; i <= 12; i++) {
        tabla += numero + " x " + i + " = " + numero * i + "\n";
    }

    alert(tabla);

    continuar = prompt("¿Desea consultar otra tabla? (si/no)");
}
