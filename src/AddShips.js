import React, { useState } from 'react'

const AddShips = ({ gameboard, startGame, setAlert }) => {
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
        try {
            gameboard.addShip(3, { x: +smShip.x, y: +smShip.y, direction: smShip.direction });
            gameboard.addShip(4, { x: +mdShip.x, y: +mdShip.y, direction: mdShip.direction });
            gameboard.addShip(5, { x: +lgShip.x, y: +lgShip.y, direction: lgShip.direction });
            startGame();
        } catch (error) {
            setAlert({ value: true, msg: error.message, type: 'basic' })
        }
    }

    return (
        <div className="addShips">
            <h3 className="center-text line-height">Place your ships </h3>
            <p className="center-text line-height">Boards are 10 x 10 and you have three ships with lengths of 3, 4, & 5.</p>
            <p className="center-text line-height">They can be vertical (down) or horizontal (right). They can only be placed so they don't over extend the board.</p>
            <div className="addShipsForm">
                <h5 className="center-text line-height">Small Ship [3 squares]</h5>
                <div className="addShip">
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
                        onChange={handleSmChange} />
                </div>
                <h5 className="center-text line-height">Medium Ship [4 squares]</h5>
                <div className="addShip">
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
                        onChange={handleMdChange} />
                </div>
                <h5 className="center-text line-height">Large Ship  [5 squares]</h5>
                <div className="addShip">
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
                        onChange={handleLgChange} />
                </div>
                <button onClick={handleAddShips}>Add Ships</button>
            </div>
        </div>
    )
}

export default AddShips
