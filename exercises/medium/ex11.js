// Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

const userTool = 'rock';

const rockPaperScissors = (userTool = '') => {
    const toolSet = ['rock', 'paper', 'scissors'];

    const result = {
        userTool,
        tool: '',
        winner: '',
    };

    if (!toolSet.includes(userTool.toLowerCase())) {
        result.winner = 'Invalid option';
        return result;
    }

    const i = Math.floor(Math.random() * 3);
    result.tool = toolSet[i];

    const allResults = [
        ['draw', 'user', 'machine'],
        ['machine', 'draw', 'user'],
        ['user', 'machine', 'draw'],
    ];

    const user = toolSet.findIndex((userTool) => userTool === userTool);
    result.winner = allResults[i][user];
    return result;
};

console.log(rockPaperScissors(userTool));
