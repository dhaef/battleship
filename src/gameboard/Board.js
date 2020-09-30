import React from 'react'
import BoardRow from './BoardRow'

const Board = ({ player, handlePlayerClick }) => {

    return (
        <div>
            <h1>{player.player.getName()}</h1>
            <div className="board">
                <BoardRow row={1} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={2} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={3} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={4} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={5} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={6} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={7} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={8} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={9} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={10} board={player.gameboard} handlePlayerClick={handlePlayerClick} />
            </div>
        </div>
    )
}

export default Board
