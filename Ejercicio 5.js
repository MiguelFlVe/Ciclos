// 1. Empezamos con el primer corredor de los 8
for (let corredor = 1; corredor <= 8; corredor++) {

  alert("¡Es el turno del Corredor número " + corredor + "!");

  // 2. Intentamos que este corredor dé sus 4 vueltas
  for (let vuelta = 1; vuelta <= 4; vuelta++) {

    // Preguntamos si se cansó
    let cansado = prompt("Corredor " + corredor + " - Vuelta " + vuelta + ". ¿Te cansaste? (Escribe 'si' o 'no')");

    if (cansado === "si") {
      alert("El corredor " + corredor + " se cansó. ¡Siguiente!");
      break; // El corredor actual se sale, pero el ciclo de 8 sigue
    } else {
      alert("Corredor " + corredor + " completó la vuelta " + vuelta);
    }

    // Si llega a la última vuelta sin decir "si"
    if (vuelta === 4) {
      alert("¡EXCELENTE! El corredor " + corredor + " terminó las 4 vueltas.");
    }
  }
}

alert("La competencia de los 8 corredores ha terminado.");