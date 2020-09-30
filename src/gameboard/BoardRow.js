import React from 'react'
import Square from './Square'

const BoardRow = ({ row, handlePlayerClick, moves }) => {
    return (
        <div className="row">
            <Square row={row} col={1} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={2} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={3} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={4} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={5} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={6} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={7} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={8} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={9} moves={moves} handlePlayerClick={handlePlayerClick} />
            <Square row={row} col={10} moves={moves} handlePlayerClick={handlePlayerClick} />
        </div>
    )
}

export default BoardRow
