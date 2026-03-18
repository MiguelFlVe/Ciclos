// Inicio 

// Ejercicio 7: Contador de pares e impares

// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos fueron pares y cuántos impares.

// Solución:

// Definición de variables
let numeros, pares, impares, invalido;
pares = 0;
impares = 0;
invalido = 0;

// Ciclo para el ingreso de los números
for (let i = 0; i < 10; i++) {
    numeros = prompt("Ingrese un número entero: ");
    if (Number.isInteger(numeros)) {
        if (numeros % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    } else {
        alert("Por favor, ingrese un número entero válido.");
        invalido++;
    }
}

// Mostrar resultados
alert("Cantidad de números pares: " + pares);
alert("Cantidad de números impares: " + impares);
alert("Cantidad de entradas inválidas: " + invalido);

// Fin