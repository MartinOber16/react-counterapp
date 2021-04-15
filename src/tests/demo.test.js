// https://jestjs.io/es-ES/docs/expect

describe('Pruebas en el archivo demo.test.js', () => {
    test('deben ser iguales los strings', () => {
    
        // 1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })
});



