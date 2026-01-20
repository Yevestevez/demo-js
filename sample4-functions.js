// Declaración de la función
function render() {
    console.log('Función render');
}

render(); // Llamada o invocación a la función render()

function add() {
    return 2 + 2;
}

console.log(add());

// Argumentos y parámetros
function sus(n1, n2) {
    // (n1, n2) son PARÁMETROS de la función
    return n1 - n2;
}

console.log(sus(10, 4)); // (10, 4) son ARGUMENTOS que pasamos a la función
console.log(sus(7, 10));

function render2(text) {
    // (text) es el PARÁMETRO de la función
    console.log(text);
}

render2('Función render'); // Llamada a la función render2 con el ARGUMENTO 'Función render'

function add2(n1, n2) {
    const result = Number(n1) + Number(n2); // la variable result solo existe en la función ya que se crea aquí
    return result;
}

const a = 2;
const b = 6;

const r = add(a, b); // ARGUMENTOS = DATOS (no variables)
console.log(r);
