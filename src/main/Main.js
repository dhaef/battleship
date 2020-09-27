const Player = require('../player/Player');
const Gameboard = require('../gameboard/Gameboard');

const Main = () => {
    const players = [];

    const player1 = Player("Mia");
    const bot = Player("Bot");

    const player1Board = Gameboard();
    const botBoard = Gameboard();

    players.push({ player: player1, board: player1Board });
    players.push({ player: bot, board: botBoard });

    player1Board.addShip(3, { x: 1, y: 1, direction: 'right' });
    player1Board.addShip(4, { x: 3, y: 6, direction: 'down' });
    // player1Board.addShip(5, { x: 10, y: 4, direction: 'right' });

    botBoard.addShip(3, { x: 1, y: 1, direction: 'right' });
    botBoard.addShip(4, { x: 6, y: 6, direction: 'down' });
    // botBoard.addShip(5, { x: 8, y: 1, direction: 'right' });

    const isGameOver = () => {
        if (player1Board.allSunk()) {
            return "bot Wins!"
        } else if (botBoard.allSunk()) {
            return "player 1 Wins!"
        } else {
            return "Game not over"
        }
    }

    return { isGameOver, players }
}

module.exports = Main;