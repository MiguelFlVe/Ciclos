// --- Programa: Tienda de Productos (Ejercicio 5) ---

let totalCompra = 0;
let continuar = true;

alert("--- Bienvenido a la Tienda Virtual ADSO ---");

// Usamos un ciclo while porque no sabemos cuántos productos llevará el usuario
while (continuar) {
  let nombreProducto = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt(`Ingrese el precio de '${nombreProducto}':`));

  // Validamos que el precio sea un número válido
  if (!isNaN(precio) && precio > 0) {
    totalCompra += precio; // Acumulamos el valor en el total
    alert(`Producto: ${nombreProducto} añadido.\nSubtotal actual: $${totalCompra.toLocaleString()}`);
  } else {
    alert("Precio no válido. Intente de nuevo.");
  }

  // Preguntamos si desea seguir comprando
  let respuesta = prompt("¿Desea registrar otro producto? (si/no)").toLowerCase();
  if (respuesta !== "si" && respuesta !== "s") {
    continuar = false;
  }
}

// Lógica de descuento (10% si supera los $100.000)
let descuento = 0;
let valorFinal = totalCompra;

if (totalCompra > 100000) {
  descuento = totalCompra * 0.10;
  valorFinal = totalCompra - descuento;
  alert(`¡Felicidades! Se aplicó un descuento del 10% ($${descuento.toLocaleString()}).`);
}

// Resultado Final
alert(`--- RESUMEN DE COMPRA ---\nTotal Bruto: $${totalCompra.toLocaleString()}\nDescuento: $${descuento.toLocaleString()}\nVALOR A PAGAR: $${valorFinal.toLocaleString()}\n\n¡Gracias por su compra!`);