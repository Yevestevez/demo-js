// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

const num = 5;

// v1. Función básica con if/else
function oddOrEven(num) {
    let result;

    if (num % 2 === 0) {
        result = 'par';
    } else {
        result = 'impar';
    }

    return result;
}

// v2. Función básica con if/else optimizada
function oddOrEven2(num) {
    let result = 'impar';

    if (num % 2 === 0) {
        result = 'par';
    }

    return result;
}

// v3. Operador ternario
function oddOrEven3(num) {
    let result = num % 2 === 0 ? 'par' : 'impar';
    return result;
}

// v4. Función flecha
const oddOrEven4 = (num) => {
    if (num % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
};

const oddOrEven5 = (num) => (num % 2 === 0 ? 'par' : 'impar'); // v5. Operador ternario + función flecha

console.log(`v1: el número ${num} es`, oddOrEven(num));
console.log(`v2: el número ${num} es`, oddOrEven2(num));
console.log(`v3: el número ${num} es`, oddOrEven3(num));
console.log(`v4: el número ${num} es`, oddOrEven4(num));
console.log(`v5: el número ${num} es`, oddOrEven5(num));
