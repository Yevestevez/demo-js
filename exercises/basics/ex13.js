// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

const text = 'pizza';

// Con bucle while i--
function reverse(text) {
    let result = ''; // declarar variable asignando un string vacío
    let i = text.length - 1; // declarar índice asígnando la longitud del string -1, ya que empieza a contar en el cero

    // condición: mientas el índice sea mayor o igual que cero (para incluir la primera letra del string)
    while (i >= 0) {
        // result = result + text[i];
        result += text[i]; // guarda la letra en la posición del índice en la variable result. Igual que
        i--; // retrocede a la posición anterior del string
    }

    return result;
}

console.log(`while (i--): [${text}] al revés es [${reverse(text)}]`);

// Con bucle while i++
function reverse2(text) {
    let result = '';
    let i = 0;

    while (i < text.length) {
        result = text[i] + result;
        i++;
    }

    return result;
}

console.log(`while (i++): [${text}] al revés es [${reverse2(text)}]`);

// Con bucle for i--
function reverse3(text) {
    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result;
}

console.log(`for (i--): [${text}] al revés es [${reverse3(text)}]`);

// Con bucle for -> i++
function reverse4(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}

console.log(`for (i++): [${text}] al revés es [${reverse4(text)}]`);
