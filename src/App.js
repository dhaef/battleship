import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './gameboard/Board';
import Gameboard from './gameboard/Gameboard';
import Player from './player/Player';
import AddShips from './AddShips';

const user = {
  player: Player('User'),
  gameboard: Gameboard()
}
const bot = {
  player: Player('bot'),
  gameboard: Gameboard()
}

function App() {
  const [userShips, setUserShips] = useState([]);
  const [botShips, setBotShips] = useState([]);

  const startGame = () => {
    setUserShips(user.gameboard.getShips());
    bot.gameboard.addShip(3, { x: 1, y: 1, direction: 'down' });
    bot.gameboard.addShip(4, { x: 1, y: 2, direction: 'down' });
    bot.gameboard.addShip(5, { x: 1, y: 3, direction: 'down' });
    // bot.gameboard.addRandomShip(3);
    // bot.gameboard.addRandomShip(4);
    // bot.gameboard.addRandomShip(5);
    setBotShips(bot.gameboard.getShips());
  }

  const handlePlayerClick = (coordinates) => {
    bot.gameboard.receiveAttack(coordinates);
    if (bot.gameboard.allSunk()) {
      return 'Player 1 wins'
    } else {
      user.gameboard.receiveAttack();
      if (user.gameboard.allSunk()) {
        return 'Bot wins'
      }
    }
  }

  return (
    <div>
      {userShips.length > 0 && <Board player={user} />}
      {userShips.length > 0 && <Board player={bot} handlePlayerClick={handlePlayerClick} />}
      {userShips.length === 0 && <AddShips
        gameboard={user.gameboard}
        startGame={startGame}
      />}
    </div>
  );
}

export default App;
