import React from 'react';

export const Boton = () => {
    const emitirSaludo = () => {
        console.log('Debo mandar un saludo');
        alert ('Hola bienvenido al curso de Reactjs');
    };

    return (
        <div>
            <button onClick={emitirSaludo}>Saludar</button>        
        </div>
    );
};
