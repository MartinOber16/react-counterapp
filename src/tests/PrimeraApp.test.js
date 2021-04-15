import React from 'react'; // imr y tab
//import { render } from "@testing-library/react";
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
        
    //     const saludo = 'Hola, Soy Goku';

    //     //const wrapper = render( <PrimeraApp saludo={ saludo } /> );
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> ); // wrapper.getByText()

    //     expect( getByText( saludo ) ).toBeInTheDocument(); // Agregar import '@testing-library/jest-dom/extend-expect'; en setupTests.js

    // });
    
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Este es el subtitulo';
        
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subTitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text(); // Funciona igual que el querySelector

        expect( textoParrafo ).toBe( subTitulo );

    });
    
});
