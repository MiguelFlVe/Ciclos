// --- Programa: Promedio de Notas (Ejercicio 4) ---

// Definimos la cantidad de estudiantes
const totalEstudiantes = 5;

// Iniciamos un ciclo para solicitar los datos de manera ordenada
for (let i = 1; i <= totalEstudiantes; i++) {

  // Solicitamos el nombre del estudiante
  let nombre = prompt(`Estudiante #${i}\nIngrese el nombre:`);

  // Solicitamos la nota (convertimos el texto a número decimal con parseFloat)
  let nota = parseFloat(prompt(`Ingrese la nota final de ${nombre}:`));

  // Validamos que el dato ingresado sea un número válido
  if (isNaN(nota)) {
    alert("Error: Por favor ingrese un número válido para la nota.");
    i--; // Restamos 1 al contador para repetir la entrada de este estudiante
    continue;
  }

  // Lógica condicional para determinar aprobación
  if (nota >= 3.0) {
    alert(`RESULTADO:\nEstudiante: ${nombre}\nNota: ${nota}\nEstado: APROBADO ✅`);
  } else {
    alert(`RESULTADO:\nEstudiante: ${nombre}\nNota: ${nota}\nEstado: REPROBADO ❌`);
  }
}

alert("Proceso de ingreso de notas finalizado.");