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