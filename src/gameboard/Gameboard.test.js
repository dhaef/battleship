const Gameboard = require('./Gameboard');

test('Add new ship', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' })
    expect(game.getShips()).toHaveLength(1);
})

test('Add new ship that is too large', () => {
    const game = Gameboard();
    expect(() => {
        game.addShip(6, { x: 2, y: 3, direction: 'down' })
    }).toThrow();
})

test('Add new ship that has invalid coordinates', () => {
    const game = Gameboard();
    expect(() => {
        game.addShip(6, { x: 0, y: 11, direction: 'down' })
    }).toThrow();
})

test('Try an attack miss', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' });
    game.receiveAttack({ x: 1, y: 5 });
    expect(game.getMisses()).toHaveLength(1);
})

test('Try an attack hit', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' });
    game.receiveAttack({ x: 2, y: 3 });
    let hitShip = game.getShips().find(ship => {
        if (ship.coordinates.x.includes(2) && ship.coordinates.y === 3) {
            return ship;
        }
    })
    expect(hitShip.getHitCount()).toBe(1);
    expect(game.getMisses()).toHaveLength(0);
    expect(game.getHits()).toHaveLength(1);
})

test('Try an attack on the same spot', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' });
    game.receiveAttack({ x: 1, y: 5 });
    expect(() => {
        game.receiveAttack({ x: 1, y: 5 })
    }).toThrow();
})

test('Not all ships have been sunk', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' });
    game.addShip(3, { x: 5, y: 7, direction: 'right' });
    game.receiveAttack({ x: 2, y: 3 });
    expect(game.allSunk()).toBe(false);
});

test('All ships have been sunk', () => {
    const game = Gameboard();
    game.addShip(3, { x: 2, y: 3, direction: 'down' });
    game.addShip(4, { x: 5, y: 6, direction: 'right' });
    game.receiveAttack({ x: 2, y: 3 });
    game.receiveAttack({ x: 3, y: 3 });
    game.receiveAttack({ x: 4, y: 3 });
    game.receiveAttack({ x: 5, y: 6 });
    game.receiveAttack({ x: 5, y: 7 });
    game.receiveAttack({ x: 5, y: 8 });
    game.receiveAttack({ x: 5, y: 9 });
    expect(game.allSunk()).toBe(true);
});