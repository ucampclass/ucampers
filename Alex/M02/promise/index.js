const promesa1 = new Promise((resuelve, rechaza) => {
  setTimeout(() => {
      const sumar= 2+2;
    rechaza('sumar');
  }, 3000);
});

promesa1.then(resultado =>{
    console.log('La promesa se ejecutó correctamente');
}
    ).catch((error) =>{
        console.log('Mi promesa falló');
    }
    ).finally(() =>{
        console.log('Ha filnalizado la promesa');
        });
