const Ship = require('./Ship');

describe('Ship', () => {
    let ship;
    beforeEach(() => {
        ship = Ship(3, { x: 3, y: 2, direction: 'right' });
    });

    test('isSunk() to record false', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    })

    test('isSunk() to record true', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })

})