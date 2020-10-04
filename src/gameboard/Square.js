import React, { useState, useEffect } from 'react'

const Square = ({ row, col, handlePlayerClick, moves }) => {
    const [hit, setHit] = useState(false);
    const [miss, setMiss] = useState(false);

    useEffect(() => {
        moves.misses.forEach(miss => {
            if (miss.x === row && miss.y === col) {
                setMiss(true);
            }
        });

        moves.hits.forEach(hit => {
            if (hit.x === row && hit.y === col) {
                setHit(true);
            }
        });
    }, [moves, row, col])

    return (
        <>
            {handlePlayerClick
                ? <div
                    className={`square ${miss ? 'miss' : hit ? 'hit' : null}`}
                    onClick={() => handlePlayerClick({ x: row, y: col })}
                ></div>
                : <div
                    className={`square ${miss ? 'miss' : hit ? 'hit' : null}`}
                ></div>}
        </>
    )
}

export default Square
