import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola Martin ', () => {
        const nombre = 'Martin';
        const saludo = getSaludo(nombre);
        
        expect( saludo ).toBe( 'Hola ' + nombre );
    });

    test('getSaludo debe retornar Hola Carlos si no hay parametros ', () => {
        const nombre = 'Carlos';
        const saludo = getSaludo();
        
        expect( saludo ).toBe( 'Hola ' + nombre );
    });
    
});
