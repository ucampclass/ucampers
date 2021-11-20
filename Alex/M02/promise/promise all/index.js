const promesa1 = new Promise((resolve, reject) => {
  const dbIds =[1,2,3];
    resolve('dbIds');
});
const promesa2 = new Promise((resolve, reject) => {
    const dbUsers =[
        {id:1, nombre:'Juan', idCurso:1},
        {id:2, nombre:'Pedro', idCurso:2},
        {id:3, nombre:'Ulises', idCurso:3}
    ];
      resolve('dbUsers');
  });

  const promesa3 = new Promise((resolve, reject) => {
    const dbCursos =[
        {id:1, nombre:'HTML'},
        {id:2, nombre:'CSS'},
    ];
      resolve('dbCursos');
  });
  
//  promesa1.then((ids) => {
//      promesa2.then((users) => {
//          promesa3.then((cursos) => {
//             console.log(ids);
//             console.log(users);
//             console.log(cursos);
// });
// });              
// });

async function ejecutarPromesas(){
    
    try{
    const ids = await promesa1;
    const users = await promesa2;
    const cursos = await promesa3;
    console.log(ids);
    console.log(users);
    console.log(cursos);
        }    catch (error){
        console.log(error);
}
}

ejecutarPromesas();