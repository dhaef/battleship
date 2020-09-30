import React, { useState } from 'react'

const Square = ({ row, col, board, handlePlayerClick }) => {
    const [hit, setHit] = useState(false);
    const [miss, setMiss] = useState(false);

    const handleClick = () => {
        handlePlayerClick({ x: row, y: col });

        const misses = board.getMisses();
        const hits = board.getHits();

        misses.forEach(miss => {
            if (miss.x === row && miss.y === col) {
                setMiss(true);
            }
        });

        hits.forEach(hit => {
            if (hit.x === row && hit.y === col) {
                setHit(true);
            }
        });
    }

    return (
        <>
            {handlePlayerClick
                ? <div
                    className={`square ${miss ? 'miss' : hit ? 'hit' : null}`}
                    onClick={handleClick}
                ></div>
                : <div
                    className={`square ${miss ? 'miss' : hit ? 'hit' : null}`}
                ></div>}
        </>
    )
}

export default Square
