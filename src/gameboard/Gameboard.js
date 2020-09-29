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

        misses.concat(hits).forEach(pick => {
            if (x === pick.x && y === pick.y) {
                throw Error('Already tried this spot');
            }
        })

        ships.forEach(ship => {
            if (ship.coordinates.direction === 'down') {
                if (ship.coordinates.x.includes(x) && ship.coordinates.y === y) {
                    hits.push({ x, y });
                    ship.hit()
                    console.log('hitD')
                } else if (!ship.coordinates.x.includes(x) && ship.coordinates.y !== y) {
                    if (!misses.find(miss => {
                        if (miss.x === x && miss.y === y) {
                            return miss
                        }
                    })) {
                        misses.push({ x, y })
                    }
                    console.log('missD')
                }
            } else if (ship.coordinates.direction === 'right') {
                if (ship.coordinates.x === x && ship.coordinates.y.includes(y)) {
                    hits.push({ x, y });
                    ship.hit()
                    console.log('hitR')
                } else if (ship.coordinates.x !== x && !ship.coordinates.y.includes(y)) {
                    if (!misses.find(miss => {
                        if (miss.x === x && miss.y === y) {
                            return miss
                        }
                    })) {
                        misses.push({ x, y })
                    }
                    console.log('hitD')
                }
            }
        })
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