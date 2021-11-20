const saludar = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve();
}, 4000);
});

saludar.then (resolve => {
    console.log('Hola mundo');
    }).catch(error => {
        console.log('Hubo un Error');
    }).finally(() => {
        console.log('Ha finalizado la promesa');
    });