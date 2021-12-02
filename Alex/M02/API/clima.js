const buscar = () => {
    const dato = document.querySelector('#nombre');
    console.log();
    if(dato.value !=='');{
        console.log(dato.value);
    }
}

function obtenerValorDelApi(nombre){
    const url ='api.openweathermap.org';
    const token ='ff0290eeb882971a40835a92e21bf250';
    const endpoint ='/data/2.5/weather?q=${nombre}&appid=${token}&units=metric');    
    fetch ('${url}${endpoint}')
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
        mostrarResultadoEnPantalla(resultado);
    })
    .catch((error) => {
        console.log('Hubo un error');
        console.log(error);
    });
}

function mostrarResultadoEnPantalla(objeto){
    const h1 =document.querySelector('h1');
    h1.innerHTML = 'La temperatura actual es: ${objeto.main.temp}';
}