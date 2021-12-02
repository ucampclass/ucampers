/*
const promesa1 = new Promise ((resuelve, rechaza) => {
    setTimeout(() => {
        const sumar = 2 + 2;
        resuelve(sumar);
    }, 3000);
})

promesa1.then ((resultado) => {
    console.log ('La promesa se ejecuta correctamente');
})
.catch (error => {
    console.log ('Mi promesa falló');
})
.finally (() => {
    console.log ('Ha finalizado la promesa');
});

*/
const saludar = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 4000);
});

saludar.then(resolve => {
    console.log('Hola mundo');
}).catch(error => {
    console.log('Hubo un error');
}).finally(() => {
    console.log('Ha finalizado');
});