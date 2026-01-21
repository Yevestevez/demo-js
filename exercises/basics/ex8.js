// Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

const a = 3;

function cube(a) {
    const result = a * a * a;
    return result;
}

console.log(cube(a)); // 27

const cubeArrow = () => a * a * a;
console.log(cubeArrow(a)); // 27
