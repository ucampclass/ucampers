const bootcamp = {
    nombre: 'Ucamp',
    tipo: 'fullstack',
    modulos: [
        {nombre: 'css', cursado: true},
        {nombre: 'javascript', cursado: true},
        {nombre: 'react', cursado: false}
    ],
    saludar: (nombre) => {
        console.log(`Hola soy ${nombre}`);
    }
}


console.log (bootcamp.nombre);
console.log (bootcamp.tipo);
console.log (bootcamp.modulos[0].nombre);
console.log (bootcamp.modulos[0].cursado);
console.log (bootcamp.saludar('Alex'));

bootcamp.modulos.forEach(modulo => {
    console.log(modulo.nombre);
});