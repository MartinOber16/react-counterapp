import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');
 
//ReactDOM.render( <PrimeraApp /> , divRoot );
//ReactDOM.render( <PrimeraApp saludo="Hola Mundo!" /> , divRoot );
//ReactDOM.render( <PrimeraApp saludo={123} /> , divRoot );
ReactDOM.render( <CounterApp value={ 100 } /> , divRoot );
