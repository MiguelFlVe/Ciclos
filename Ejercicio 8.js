// Inicio

// Ejercicio 8: Control de acceso

// Crea un programa que solicite un usuario y contraseña. El programa debe permitir hasta 3 intentos; si el usuario falla en todos, mostrar un mensaje de "Acceso denegado". Si acierta, mostrar "Bienvenido".

// Solución:

// Definición de variables
const usuarioCorrecto = "CorrectUser";
const contrasenaCorrecta = "CorrectPass";
let intentos, maxintentos, user, pass;
intentos = 0;
maxintentos = 3;

// Ciclo de intentos
while (intentos < maxintentos) {
    user = prompt("Ingrese su usuario:");
    pass = prompt("Ingrese su contraseña:");
    if (user === usuarioCorrecto && pass === contrasenaCorrecta) {
        alert("Bienvenido");
        break;
    } else {
        intentos++;
        alert("Usuario o contraseña incorrectos. Intento " + intentos + " de " + maxintentos);
    }
}
if (intentos === maxintentos) {
    alert("Acceso denegado");
}

// Fin