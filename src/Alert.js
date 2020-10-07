import React from 'react'
import PropTypes from 'prop-types'

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

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setAlert: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
}

export default Alert
