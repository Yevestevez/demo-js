// Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

const names = ['Harry', 'Hermione', 'Ron', ''];
const surnames = ['Potter', 'Granger', 'Weasley'];
const randomNum = Math.ceil(Math.random() * 99);
