let boletosVendidos = 0;
const totalBoletos = 15;

alert("--- Bienvenida a la Taquilla del Cine (Película de Adultos) ---");

// Usamos un ciclo 'while' para que siga hasta completar los 15 boletos
while (boletosVendidos < totalBoletos) {

  let faltantes = totalBoletos - boletosVendidos;
  alert("Boletos vendidos: " + boletosVendidos + ". Quedan: " + faltantes);

  // 1. Preguntamos la edad del comprador actual
  let edad = prompt("Cliente nuevo: ¿Qué edad tienes?");
  edad = Number(edad);

  // 2. Revisamos la regla de oro (Mayor de 18)
  if (edad >= 18) {
    boletosVendidos = boletosVendidos + 1; // Sumamos un boleto vendido
    alert("¡Venta exitosa! Boleto número " + boletosVendidos + " entregado.");
  } else {
    // Si es menor, no sumamos nada a 'boletosVendidos'
    alert("Lo siento, eres menor de edad. Esta película es para adultos. ¡Siguiente en la fila!");
  }
}

alert("¡Se han agotado los 15 boletos! La sala está llena.");