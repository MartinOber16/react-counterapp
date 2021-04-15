// rafcp para crear el componente automaticamente
// Manejo de eventos https://es.reactjs.org/docs/events.html
// Los hooks son funciones

import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ( { value = 10 }) => {

    // Hook
    const [ counter, setCounter ] = useState( value );

    const handleAdd = (e) => {
        //console.log(e);
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 );
    }
    
    const handleReset = () => {
        setCounter( value );
    }

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            {/* <button onClick={ (e) => handleAdd(e) }>+1</button> */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;