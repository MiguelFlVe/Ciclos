const saldoInicial = 1000;
let saldo = saldoInicial;
let continuar = "si";

while (continuar == "si") {
    let retiro = parseInt(prompt("Tu saldo es: " + saldo + "\nIngrese el monto a retirar"));

    if (retiro > saldo) {
        alert("Error: fondos insuficientes");
    } else {
        saldo = saldo - retiro;
        alert("Retiro exitoso. Tu nuevo saldo es: " + saldo);
    }

    continuar = prompt("¿Desea hacer otro retiro? (si/no)");
}

alert("Gracias por usar el cajero. Saldo final: " + saldo);
