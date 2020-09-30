const Ship = require('../ship/Ship');

const Gameboard = () => {
    let ships = [];
    let misses = [];
    let hits = []

    const addShip = (length, coordinates) => ships.push(Ship(length, coordinates));
    const addRandomShip = length => {
        let shipDirection = Math.random() > .5 ? 'right' : 'down';
        let shipCoordinates;

        if (shipDirection === 'right') {
            shipCoordinates = { x: Math.floor(Math.random() * 10) + 1, y: Math.floor(Math.random() * (10 - length)) + 1, direction: shipDirection }
        } else if (shipDirection === 'down') {
            shipCoordinates = { x: Math.floor(Math.random() * (10 - length)) + 1, y: Math.floor(Math.random() * 10) + 1, direction: shipDirection }
        }

        ships.push(Ship(length, shipCoordinates));
    };

    const getShips = () => ships;
    const getMisses = () => misses;
    const getHits = () => hits;

    // Make random attack for comp or user

    const receiveAttack = (attackCoordinates) => {
        const { x, y } = attackCoordinates
            ? attackCoordinates
            : { x: Math.floor(Math.random() * 10) + 1, y: Math.floor(Math.random() * 10) + 1 }

        const combined = misses.concat(hits);

        combined.forEach(pick => {
            if (x === pick.x && y === pick.y) {
                if (attackCoordinates) {
                    throw 'Already tried this spot';
                } else if (!attackCoordinates) {
                    receiveAttack();
                }
            }
        });

        let didHit = false;
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].coordinates.direction === 'down') {
                if (ships[i].coordinates.x.includes(x) && ships[i].coordinates.y === y) {
                    hits.push({ x, y });
                    ships[i].hit();
                    didHit = true;
                }
            } else if (ships[i].coordinates.direction === 'right') {
                if (ships[i].coordinates.y.includes(y) && ships[i].coordinates.x === x) {
                    hits.push({ x, y });
                    ships[i].hit();
                    didHit = true
                }
            }
        }
        !didHit && misses.push({ x, y });
    }

    // Length isn't allowing for all ships to be sunk
    const allSunk = () => {
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }

    return { addShip, getShips, receiveAttack, getMisses, allSunk, getHits, addRandomShip }
}

module.exports = Gameboard;