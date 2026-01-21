function randomNum() {
    return Math.floor(Math.random() * 11);
}

const LIMIT = 5;
let i = 0;

// Bucle while --> La condición es externa y no tienen contador

while (i < LIMIT) {
    console.log('while', randomNum());
    i++;
}

// Bucle for --> La condición es interna y tienen contador

for (let i = 0; i <= LIMIT; i++) {
    console.log('for', randomNum());
}

// No dependiendo del contador

let v = 0;
const FINAL = 5;

while (v !== FINAL) {
    v = randomNum();
    console.log('while', v);
}

let v1 = 0;
for (let i = 0; i < 1; ) {
    v1 = randomNum();
    console.log('for', v1);
    if (v1 === FINAL) {
        break;
    }
}
