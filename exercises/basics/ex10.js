// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.

function randomNum() {
    return Math.floor(Math.random() * 11);
}

for (let i = 1; i <= 10; i++) {
    console.log(i, randomNum());
}

//console.log(randomNum());
