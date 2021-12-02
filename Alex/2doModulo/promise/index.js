const promesa1 = new Promise ((resuelve, rechaza) => {
    setTimeout(() => {
        const sumar = 2 + 2;
        rechaza(sumar);
    }, 3000);
})

promesa1.then ((resultado) => {
    console.log (resultado);
})
.catch (error => {
    console.log ('Hubo un error con el paquete');
})