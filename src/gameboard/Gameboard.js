const Ship = require('../ship/Ship');

const Gameboard = () => {
    // o = open spot
    // m = missed hit
    // s = ship spot
    // h = hit ship spot
    let grid = new Array(10).fill(new Array(10).fill('o'));
    let ships = [];
    let misses = [];

    const addShip = (length, coordinates) => ships.push(Ship(length, coordinates));

    const getShips = () => ships;
    const getMisses = () => misses;

    const receiveAttack = ({ x, y }) => {
        ships.forEach(ship => {
            if (ship.coordinates.direction === 'down') {
                if (ship.coordinates.x.includes(x) && ship.coordinates.y === y) {
                    ship.hit()
                } else {
                    misses.push({ x, y })
                }
            } else if (ship.coordinates.direction === 'right') {
                if (ship.coordinates.x === x && ship.coordinates.y.includes(y)) {
                    ship.hit()
                } else {
                    misses.push({ x, y })
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

    return { addShip, getShips, receiveAttack, getMisses, allSunk }
}

module.exports = Gameboard;