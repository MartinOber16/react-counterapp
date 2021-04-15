// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

// Functional Components
// <Fragment></Fragment> para enviar mas elementos htmls sin incluirlos en un div extra
// <></> fragment de React sin importar

//const PrimeraApp = ( props ) => {
//const PrimeraApp = ( { saludo = "Holis" } ) => {
//const PrimeraApp = ( { saludo, subtitulo = "Soy un subtitulo" } ) => {
const PrimeraApp = ( { saludo, subtitulo } ) => {
    
    //const saludo = 'Hola Mundo';
    //const saludo = 1234;
    //const saludo = true; // no funciona
    //const saludo = {
    //     nombre: 'Martin',
    //     edad: 34
    // };

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    );

}

// Validar las propiedades
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Valores por defecto de las propiedades
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;