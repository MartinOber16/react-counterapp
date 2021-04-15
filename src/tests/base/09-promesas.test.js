import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('getHeroeByIdAsync debe retornar un Heroe', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done(); // llamar el done para finalizar la prueba. Es necesario para promesas
            });

    });

    test('getHeroeByIdAsync debe retornar que no existe el Heroe', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
            .then( heroe => {

            })
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done(); // llamar el done para finalizar la prueba. Es necesario para promesas
            });

    });
    
});
