import React from 'react'
import Square from './Square'

const BoardRow = ({ row, board, handlePlayerClick }) => {
    return (
        <div className="row">
            <Square row={row} col={1} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={2} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={3} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={4} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={5} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={6} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={7} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={8} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={9} board={board} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={10} board={board} handlePlayerClick={handlePlayerClick} />
        </div>
    )
}

export default BoardRow
