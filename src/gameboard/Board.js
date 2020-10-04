import React from 'react'
import BoardRow from './BoardRow'

const Board = ({ player, handlePlayerClick, moves }) => {


    return (
        <div>
            <h1 className="name center-text line-height"><span style={{ textTransform: 'capitalize' }}>{player.player.getName()}</span> board</h1>
            <div className="board">
                <BoardRow row={1} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={2} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={3} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={4} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={5} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={6} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={7} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={8} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={9} moves={moves} handlePlayerClick={handlePlayerClick} />
                <BoardRow row={10} moves={moves} handlePlayerClick={handlePlayerClick} />
            </div>
        </div>
    )
}

export default Board
