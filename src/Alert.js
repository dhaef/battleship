import React from 'react'

const Alert = ({ message, setAlert, newGame, type }) => {

    const handleCloseClick = () => {
        if (type === 'gameover') { newGame() }
        setAlert({ value: false, msg: null, type: null })
    }

    return (
        <div className="alert">
            <p>{message}</p>
            <button onClick={handleCloseClick}>Close</button>
        </div>
    )
}

export default Alert
