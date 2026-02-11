// Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

const diceFaces = '6';

const diceThrow = (diceFaces) => {
    if (diceFaces != Number(diceFaces)) {
        return 'Not a number';
    } else if (diceFaces % 2 != 0) {
        return 'Not even';
    } else {
        return Math.ceil(Math.random() * diceFaces);
    }
};

const result = diceThrow(diceFaces);

if (result === 'Not a number') {
    console.log('¡Eso no es un número!');
} else if (result === 'Not even') {
    console.log('El número de caras debe ser par');
} else {
    console.log(
        `Lanzas 1d${diceFaces} y el resultado de la tirada es ${result}`,
    );
}
