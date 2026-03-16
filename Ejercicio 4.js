// 1. Empezamos con algo de dinero
let miSaldo = 500;

console.log("Bienvenido. Tienes: $" + miSaldo);

// 2. Usamos 'while' (mientras) para repetir el proceso
while (miSaldo > 0) {

  let retiro = prompt("Tu saldo es $" + miSaldo + ". ¿Cuánto quieres retirar?");

  // Convertimos lo que escribió el usuario a un número
  retiro = Number(retiro);

  // 3. Revisamos si el dinero alcanza
  if (retiro <= miSaldo) {
    // Si alcanza, restamos
    miSaldo = miSaldo - retiro;
    alert("Retiro exitoso. Te quedan: $" + miSaldo);
  } else {
    // Si no alcanza, avisamos y cortamos el ciclo
    alert("¡No tienes suficiente dinero! El cajero se cerrará.");
    break; // Esto detiene el proceso de inmediato
  }
}

alert("Gracias por usar nuestro cajero.");