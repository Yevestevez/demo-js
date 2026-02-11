// Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

const text = 'murciélago';

const containAllVowels = (text) => {
    const vowels = 'aeiou';

    for (let i = 0; i < vowels.length; i++) {
        if (
            !text
                .normalize('NFD') // Separa letra de tilde
                .replace(/[\u0300-\u036f]/g, '') // Elimina la tilde
                .toLowerCase() // Convierte a minúsculas
                .includes(vowels[i])
        ) {
            return false;
        }
    }

    return true;
};

console.log(containAllVowels(text));
