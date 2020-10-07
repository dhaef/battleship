const Ship = require('../ship/Ship');

const Gameboard = () => {
    let ships = [];
    let misses = [];
    let hits = []

    const addShip = (length, coordinates) => {
        const newShip = Ship(length, coordinates);
        if (checkIfShipSpotTaken(newShip)) {
            ships.push(newShip);
        } else {
            throw Error('Invalid Ship placement')
        }
    };
    const addRandomShip = length => {
        let shipDirection = Math.random() > .5 ? 'right' : 'down';
        let shipCoordinates;

        if (shipDirection === 'right') {
            shipCoordinates = { x: Math.floor(Math.random() * 10) + 1, y: Math.floor(Math.random() * (10 - length)) + 1, direction: shipDirection }
        } else if (shipDirection === 'down') {
            shipCoordinates = { x: Math.floor(Math.random() * (10 - length)) + 1, y: Math.floor(Math.random() * 10) + 1, direction: shipDirection }
        }

        // ships.push(Ship(length, shipCoordinates));

        const newShip = Ship(length, shipCoordinates);
        if (checkIfShipSpotTaken(newShip)) {
            ships.push(newShip);
        } else {
            addRandomShip(length);
        }
    };
    const checkIfShipSpotTaken = ship => {
        if (ships.length === 0) { return true };

        let newShipArrValue = ship.coordinates.direction === 'down' ? ship.coordinates.x : ship.coordinates.y;
        let newShipSingleValue = ship.coordinates.direction === 'down' ? ship.coordinates.y : ship.coordinates.x;

        for (let i = 0; i < ships.length; i++) {
            let currentShipArrValue = ships[i].coordinates.direction === 'down' ? ships[i].coordinates.x : ships[i].coordinates.y;
            let currentShipSingleValue = ships[i].coordinates.direction === 'down' ? ships[i].coordinates.y : ships[i].coordinates.x;
            for (let j = 0; j < currentShipArrValue.length; j++) {
                if (newShipSingleValue === currentShipSingleValue
                    && newShipArrValue.includes(currentShipArrValue[j])) {
                    return false;
                }
            }
        }

        return true;
    }

    const getShips = () => ships;
    const getMisses = () => misses;
    const getHits = () => hits;

    const receiveAttack = (attackCoordinates) => {
        const { x, y } = attackCoordinates
            ? attackCoordinates
            : { x: Math.floor(Math.random() * 10) + 1, y: Math.floor(Math.random() * 10) + 1 }

        const combined = misses.concat(hits);

        combined.forEach(pick => {
            if (x === pick.x && y === pick.y) {
                if (attackCoordinates) {
                    throw Error('Already tried this spot');
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