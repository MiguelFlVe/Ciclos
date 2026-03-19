// 1. Usamos un ciclo for para repetir el proceso 5 vecess
for (let i = 1; i <= 5; i++) {

  // 2. Pedimos el nombre y la nota del estudiante
  let nombre = prompt("Nombre del estudiante " + i + ":");
  let nota = prompt("Ingrese la nota de " + nombre + ":");

  // Convertimos la nota a número decimal
  nota = parseFloat(nota);

  // 3. Condicional para ver si aprueba o reprueba
  if (nota >= 3.0) {
    alert(nombre + " tiene un promedio de " + nota + " - APROBADO ");
  } else {
    alert(nombre + " tiene un promedio de " + nota + " - REPROBADO ");
  }
}

alert("Ya se registraron los 5 estudiantes.");