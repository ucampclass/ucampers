//const seleccionarPorId = document.getElementById('titulo');

//seleccionarPorId.classList.add('color');
//console.log (seleccionarPorId);
//console.log (seleccionarPorId.attributes);

//const PorId = document.getElementById('descansa');
//PorId.classList.add('versus');

//const porClase = document.getElementsByClassName ('texto');
//console.log (porClase);

const porID = document.getElementById ('titulo');
console.log (porID.className);
console.log (porID.innerText);

setTimeout (() => {
    porID.classList.add ('color');
}, 5000);

const Selector = document.querySelector ('#texto');
console.log (Selector.className);
console.log (Selector.innerText);