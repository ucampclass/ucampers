const img =document.querySelector('img');
setTimeout (() => {
    img.setAttribute('src','https://w7.pngwing.com/pngs/478/415/png-transparent-jake-the-dog-rendering-drawing-jake-animals-carnivoran-photography-thumbnail.png');
    console.log (img.attributes);    
}, 4000);

//const img = document.createElement('img');
//img.setAttribute('src','https://w7.pngwing.com/pngs/478/415/png-transparent-jake-the-dog-rendering-drawing-jake-animals-carnivoran-photography-thumbnail.png');
//img.setAttribute('alt','Jake el Perro');
//img.classList.add('imagen');

//const.insertarElemento = document.querySelector('article');
//insertarElemento.appendChild(img);//