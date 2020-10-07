import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

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

BoardRow.propTypes = {
    row: PropTypes.number.isRequired,
    moves: PropTypes.object.isRequired,
    handlePlayerClick: PropTypes.func.isRequired,
}

export default BoardRow
