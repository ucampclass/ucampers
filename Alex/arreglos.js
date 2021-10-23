//let edad = 30
//concatenar un string
//let nombre =`Alex mi edad es ${edad} años`;
//console.log(nombre);

/*primera propuesta
for (let i=0; i<=10; i++){
    console.log(2*i);
}*/

/*segunda propuesta
for (let i=1; i<=10; i++){
    console.log(`2 x ${i} = ${2*i}`);
}*/

/*tercera propuesta
const tabla = [1,2,3,4,5,6,7,8,9,10];

for (let i = 1; i<= tabla.length; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}*/

//cuarta propuesta ejercicio 1
const valores = [1,2,3,4,5,6,7,8,9,10];
//for (let i=1; i <=valores.length; i++) {
//    console.log(`${i} x 2 = ${i*2}`);}
//console.log(valores.length);
//console.log(valores);
for (let i=0; i<10; i++) {
    console.log(valores[i]);
    console.log(i);
}
