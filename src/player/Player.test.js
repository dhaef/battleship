const Player = require('./Player');

test('Add new player', () => {
    const alex = Player('Alex');
    expect(alex.getName()).toBe('Alex');
});

test('Add score to player', () => {
    const alex = Player('Alex');
    alex.addScore();
    expect(alex.getScore()).toBe(1);
});