function saludar(saludo,miFuncion) {
    miFuncion (saludo.toUpperCase());
}

saludar ("Hola", function (valor){
    console.log (valor);
});