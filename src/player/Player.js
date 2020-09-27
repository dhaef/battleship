
const Player = name => {
    let score = 0;
    const getName = () => name;
    const getScore = () => score;
    const addScore = () => score++;

    return { getName, getScore, addScore }
}

module.exports = Player;