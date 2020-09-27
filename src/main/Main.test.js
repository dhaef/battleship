const Game = require('./Main');

test('Test players added to a new game', () => {
    const game = Game();
    expect(game.players).toHaveLength(2);
});

test('Game is not over', () => {
    const game = Game();
    game.players[1].board.receiveAttack({ x: 1, y: 1 });
    game.players[0].board.receiveAttack({ x: 1, y: 1 });
    game.players[1].board.receiveAttack({ x: 6, y: 6 });
    game.players[0].board.receiveAttack({ x: 3, y: 6 });
    expect(game.isGameOver()).toBe('Game not over');
})

test('Player 1 wins', () => {
    const game = Game();
    game.players[1].board.receiveAttack({ x: 1, y: 1 });
    game.players[0].board.receiveAttack({ x: 1, y: 1 });
    game.players[1].board.receiveAttack({ x: 6, y: 6 });
    game.players[0].board.receiveAttack({ x: 3, y: 6 });
    game.players[1].board.receiveAttack({ x: 1, y: 2 });
    game.players[0].board.receiveAttack({ x: 1, y: 2 });
    game.players[1].board.receiveAttack({ x: 7, y: 6 });
    game.players[0].board.receiveAttack({ x: 4, y: 6 });
    game.players[1].board.receiveAttack({ x: 1, y: 3 });
    game.players[0].board.receiveAttack({ x: 1, y: 3 });
    game.players[1].board.receiveAttack({ x: 8, y: 6 });
    game.players[0].board.receiveAttack({ x: 5, y: 6 });
    game.players[1].board.receiveAttack({ x: 9, y: 6 });
    expect(game.isGameOver()).toBe('player 1 Wins!');
});

test('bot wins', () => {
    const game = Game();
    game.players[1].board.receiveAttack({ x: 1, y: 1 });
    game.players[0].board.receiveAttack({ x: 1, y: 1 });
    game.players[1].board.receiveAttack({ x: 6, y: 6 });
    game.players[0].board.receiveAttack({ x: 3, y: 6 });
    game.players[1].board.receiveAttack({ x: 1, y: 2 });
    game.players[0].board.receiveAttack({ x: 1, y: 2 });
    game.players[1].board.receiveAttack({ x: 7, y: 6 });
    game.players[0].board.receiveAttack({ x: 4, y: 6 });
    game.players[1].board.receiveAttack({ x: 1, y: 3 });
    game.players[0].board.receiveAttack({ x: 1, y: 3 });
    game.players[1].board.receiveAttack({ x: 8, y: 6 });
    game.players[0].board.receiveAttack({ x: 5, y: 6 });
    game.players[1].board.receiveAttack({ x: 9, y: 5 });
    game.players[0].board.receiveAttack({ x: 6, y: 6 });
    expect(game.isGameOver()).toBe('bot Wins!');
});