import React, { useState } from 'react';
import './App.css';
import Board from './gameboard/Board';
import Gameboard from './gameboard/Gameboard';
import Player from './player/Player';
import AddShips from './AddShips';
import Alert from './Alert';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({
    player: Player('User'),
    gameboard: Gameboard()
  });
  const [bot, setBot] = useState({
    player: Player('bot'),
    gameboard: Gameboard()
  });
  const [userMoves, setUserMoves] = useState({ hits: [], misses: [] });
  const [botMoves, setBotMoves] = useState({ hits: [], misses: [] });
  const [isAlert, setIsAlert] = useState({ value: false, msg: null, type: null });

  const startGame = () => {
    setGameStarted(true);
    // bot.gameboard.addShip(3, { x: 1, y: 1, direction: 'down' });
    // bot.gameboard.addShip(4, { x: 1, y: 2, direction: 'down' });
    // bot.gameboard.addShip(5, { x: 1, y: 3, direction: 'down' });
    bot.gameboard.addRandomShip(3);
    bot.gameboard.addRandomShip(4);
    bot.gameboard.addRandomShip(5);
  }

  const handlePlayerClick = (coordinates) => {
    try {
      bot.gameboard.receiveAttack(coordinates);
      setBotMoves({ hits: bot.gameboard.getHits(), misses: bot.gameboard.getMisses() });
    } catch (error) {
      setIsAlert({ value: true, msg: error.message, type: 'basic' });
      return
    }

    if (bot.gameboard.allSunk()) {
      setIsAlert({ value: true, msg: `${user.player.getName()} wins!`, type: 'gameover' });
      return
    } else {
      user.gameboard.receiveAttack();
      setUserMoves({ hits: user.gameboard.getHits(), misses: user.gameboard.getMisses() });
      if (user.gameboard.allSunk()) {
        setIsAlert({ value: true, msg: `${bot.player.getName()} wins!`, type: 'gameover' });
        return
      }
    }
  }

  const newGame = () => {
    setGameStarted(false);
    setUser({
      player: Player('User'),
      gameboard: Gameboard()
    });
    setBot({
      player: Player('bot'),
      gameboard: Gameboard()
    });
    setUserMoves({ hits: [], misses: [] });
    setBotMoves({ hits: [], misses: [] });
  }

  return (
    <div>
      <h1 className="center-text line-height">Battleship⛴</h1>
      {isAlert.value && <Alert message={isAlert.msg} setAlert={setIsAlert} newGame={newGame} type={isAlert.type} />}
      <div className="boards">
        {gameStarted && <Board player={bot} moves={botMoves} handlePlayerClick={handlePlayerClick} />}
        {gameStarted && <Board player={user} moves={userMoves} />}
      </div>
      {!gameStarted && <AddShips
        gameboard={user.gameboard}
        startGame={startGame}
        setAlert={setIsAlert}
      />}
    </div>
  );
}

export default App;
