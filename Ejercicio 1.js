// Ejercicio 1 – Números primos

for (let num = 2; num <= 50; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(num);
    }
}
