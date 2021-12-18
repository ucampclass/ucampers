import React from 'react'

export const Imagen = () => {
    const urlImagen=
    'http://pm1.narvii.com/7720/dcad10438583098c4c781d13a89ccd9c63648f7br1-500-281v2_uhq.jpg'; 
    const saludos = 'Hola Mundo usando JSX Imagen';

    return (
        <div>
            <img src={urlImagen} alt='' />
            <h2>{saludos}</h2>   
        </div>
    );
};

export default Imagen;

//rafc código que crea la estructura
