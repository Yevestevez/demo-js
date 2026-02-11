// Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

const num = 20;

const countDown = (num) => {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
};

countDown(num);
