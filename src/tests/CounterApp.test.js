import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp.js', () => {
    
    //let wrapper; // undefined
    let wrapper = shallow( <CounterApp /> ); // Para tener el intellicense, total es en desarrollo

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar <CounterApp /> correctamente', () => {
        
        //const wrapper = shallow( <CounterApp /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar el valor de 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        const textoH2 = wrapper.find('h2').text(); //.trim()
        expect( textoH2 ).toBe( '100' );

    });
    
    test('debe incrementar con el botón de +1', () => {
        
        //const wrapper = shallow( <CounterApp /> );
        wrapper.find('button').at(0).simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();
        expect( textoH2 ).toBe( '11' );
        
    });

    test('debe decrementar con el botón de -1', () => {
        
        //const wrapper = shallow( <CounterApp /> );
        wrapper.find('button').at(2).simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();
        expect( textoH2 ).toBe( '9' );
        
    });

    test('debe colocar el valor por defecto con el botón de reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();
        expect( textoH2 ).toBe( '100' );
        
    });
    
})
