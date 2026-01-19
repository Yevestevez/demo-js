//const y let (var ya no se suele usar en js moderno)
const PI = 3.14; // constante, el valor no se puede modificar
let userAge = 22; // el valor se puede modificar

// DECLARACIÓN variables
let userName;

// ASIGNACIÓN de valor
userName = 'Pepe';

// MODIFICACIÓN
userName = 'Jose';
userAge = 23;

// Declaración + inicialización en una sola línea [= INICIALIZACIÓN]
let userEmail = 'pepe@mail.com';

// OBJETOS
// Declaración + asignación
const user = {
    name: 'Luis',
    age: 24,
};

console.log(user);

user.age = 25; // MUTACIÓN del objeto
console.log(user.age);
// user = {} -> NO permite reasignar el objeto, podemos cambiar solo las propiedades

//user.job = 'developer'; Inyectar propiedad al objeto con un valor ya definido, no permitido en TS

// delete user.name; // Eliminar una propiedad del objeto, no permitido en TS
