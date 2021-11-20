const status1 = new Promise((resolve, reject) => {
    const valor =6;
    if (valor > 5) {
        resolve('Es mayor a 5');
    } else {
        reject('Menor a 5');
    }
});

   status1.then((data)=>{
       console.log(data);
   })
   .catch((error)=>{
       console.log(error);
   });
   