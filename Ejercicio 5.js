// 1. Variables iniciales
let total = 0;
let continuar = "si";

// 2. Ciclo para pedir productos
while (continuar == "si") {
  let precio = prompt("¿Cuánto cuesta el producto?");

  // Sumamos el precio al total
  total = total + parseFloat(precio);

  continuar = prompt("¿Quieres comprar otro producto? (si/no)");
}

// 3. Aplicar descuento si el total es mayor a 100.000
if (total > 100000) {
  let descuento = total * 0.10;
  total = total - descuento;
  alert("Se aplicó un descuento del 10%");
}

// 4. Mostrar resultado final
alert("El total a pagar es: $" + total);