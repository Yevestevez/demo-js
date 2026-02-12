// La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

const maxNum = 25;

const fibonacciSerieCalc = (maxNum) => {
    const result = [0, 1];
    let newNum = 0;

    for (let i = result.at(-1); ; i++) {
        newNum = result[i] + result[i - 1];
        if (newNum > maxNum) break;
        result.push(newNum);
    }

    return result;
};

console.log(fibonacciSerieCalc(maxNum));
