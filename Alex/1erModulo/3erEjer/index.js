//const img =document.querySelector('img');
//setTimeout (() => {
//    img.setAttribute('src','https://w7.pngwing.com/pngs/478/415/png-transparent-jake-the-dog-rendering-drawing-jake-animals-carnivoran-photography-thumbnail.png');
//    console.log (img.attributes);    
//}, 4000);

const img = document.querySelector('#image');
img.setAttribute('src','https://w7.pngwing.com/pngs/478/415/png-transparent-jake-the-dog-rendering-drawing-jake-animals-carnivoran-photography-thumbnail.png');
img.setAttribute('alt','Jake el Perro');
img.classList.add('border-img');

const link=document.querySelector('a');
link.setAttribute('href','https://www.google.com');
link.setAttribute('target','_blank');

//const.insertarElemento = document.querySelector('article');
//insertarElemento.appendChild(img);//