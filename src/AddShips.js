import React, { useState } from 'react'

const AddShips = ({ gameboard, startGame }) => {
    const [smShip, setSmShip] = useState({
        x: '',
        y: '',
        direction: 'down'
    });
    const [mdShip, setMdShip] = useState({
        x: '',
        y: '',
        direction: 'down'
    });
    const [lgShip, setLgShip] = useState({
        x: '',
        y: '',
        direction: 'down'
    });

    const handleSmChange = e => setSmShip({ ...smShip, [e.target.name]: e.target.value })
    const handleMdChange = e => setMdShip({ ...mdShip, [e.target.name]: e.target.value })
    const handleLgChange = e => setLgShip({ ...lgShip, [e.target.name]: e.target.value })

    const handleAddShips = () => {
        gameboard.addShip(3, { x: +smShip.x, y: +smShip.y, direction: smShip.direction });
        gameboard.addShip(4, { x: +mdShip.x, y: +mdShip.y, direction: mdShip.direction });
        gameboard.addShip(5, { x: +lgShip.x, y: +lgShip.y, direction: lgShip.direction });
        startGame();
    }

    return (
        <div>
            <select
                value={smShip.direction} name='direction'
                onChange={handleSmChange}>
                <option value="down">down</option>
                <option value="right">right</option>
            </select>
            <input
                placeholder="Input row"
                type='number'
                value={smShip.x}
                name='x'
                onChange={handleSmChange} />
            <input
                placeholder="Input column"
                type='number'
                value={smShip.y}
                name='y'
                onChange={handleSmChange} /><br />
            <select
                value={mdShip.direction} name='direction'
                onChange={handleMdChange}>
                <option value="down">down</option>
                <option value="right">right</option>
            </select>
            <input
                placeholder="Input row"
                type='number'
                value={mdShip.x}
                name='x'
                onChange={handleMdChange} />
            <input
                placeholder="Input column"
                type='number'
                value={mdShip.y}
                name='y'
                onChange={handleMdChange} /><br />
            <select
                value={lgShip.direction} name='direction'
                onChange={handleLgChange}>
                <option value="down">down</option>
                <option value="right">right</option>
            </select>
            <input
                placeholder="Input row"
                type='number'
                value={lgShip.x}
                name='x'
                onChange={handleLgChange} />
            <input
                placeholder="Input column"
                type='number'
                value={lgShip.y}
                name='y'
                onChange={handleLgChange} /><br />
            <button onClick={handleAddShips}>Add Ship</button>
        </div>
    )
}

export default AddShips