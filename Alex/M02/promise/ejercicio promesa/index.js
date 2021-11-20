// const paises = new Promise((resolve, reject) => {
//     const resultado = [
//         { id: 1, nombre: 'México' },
//         { id: 2, nombre: 'Peru' },
//         { id: 3, nombre: 'Colombia' },
//       ];
      
//     resolve(resultado);
// });

// const estados = new Promise((resolve, reject) => {
//     const resultado = [
//         { id: 1, nombre: 'Aguascalientes', idPais: 1 },
//         { id: 2, nombre: 'Baja california', idPais: 1 },
//         { id: 3, nombre: 'Baja california sur', idPais: 1 },
//         { id: 4, nombre: 'Campeche', idPais: 1 },
//         { id: 5, nombre: 'Guainía', idPais: 3 },
//         { id: 5, nombre: 'Huila', idPais: 3 },
//   ];
//   resolve (resultado);
// });

// async function ejecutarPromesas() {
// try {
//     const getPaises = await paises;
//     const getEstados = await estados;

//     const estadosDeMexico = getEstados.filter(estado => estado.idPais === 1);
//     const estadosDeMexicoMayus= estadosDeMexico.map(estado => 
//         estado.nombre.toUpperCase()
//     );
//     console.log(estadosDeMexicoMayus);
// } catch (e) {
//     console.log('hubo un error');
//     console.log(e);
// }

// ejecutarPromesas();

const paises = new Promise((resolve, reject) => {
    const resultado = [
        { id: 1, nombre: 'México' },
        { id: 2, nombre: 'Peru' },
        { id: 3, nombre: 'Colombia' },
      ];
      
    resolve(resultado);
});

const estados = new Promise((resolve, reject) => {
    const resultado = [
        { id: 1, nombre: 'Aguascalientes', idPais: 1 },
        { id: 2, nombre: 'Baja california', idPais: 1 },
        { id: 3, nombre: 'Baja california sur', idPais: 1 },
        { id: 4, nombre: 'Campeche', idPais: 1 },
        { id: 5, nombre: 'Guainía', idPais: 3 },
        { id: 5, nombre: 'Huila', idPais: 3 },
  ];
  resolve (resultado);
});

async function ejecutarPromesas() {
try {
    const getPaises = await paises;
    const getEstados = await estados;

    const estadosDeMexico = getEstados.filter(estado => estado.idPais === 1);
    const estadosDeMexicoMayus= estadosDeMexico.map(estado => 
        estado.nombre.toUpperCase()
    );
    console.log(estadosDeMexicoMayus);
} catch (e) {
    console.log('hubo un error');
    console.log(e);
}

ejecutarPromesas();