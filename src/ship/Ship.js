const Ship = (length, { x, y, direction }) => {
    if (length < 3 || length > 5) { throw Error("Invalid length") }

    let coordinates;

    if (direction === 'down') {
        if ((x + length) > 10 || y > 10 || x < 1 || y < 1) {
            throw Error(`Invalid Coordinates for you ship with length of ${length}`);
        }
        let xArr = [];
        for (let i = 0; i < length; i++) {
            xArr.push(x + i);
        }
        coordinates = { x: xArr, y: y, direction: direction }
    } else if (direction === 'right') {
        if (x > 10 || (y + length) > 10 || x < 1 || y < 1) {
            throw Error(`Invalid Coordinates for you ship with length of ${length}`);
        }
        let yArr = [];
        for (let i = 0; i < length; i++) {
            yArr.push(y + i);
        }
        coordinates = { x: x, y: yArr, direction: direction }
    }

    let hitCount = 0;

    const hit = () => {
        hitCount++;
    }

    const isSunk = () => {
        return length === hitCount;
    }

    const getHitCount = () => hitCount;

    return { hit, isSunk, coordinates, getHitCount }
}

// const newShip = Ship(3, { x: 3, y: 2, direction: 'right' });
// console.log(newShip);

module.exports = Ship;