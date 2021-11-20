function saludar (saludo, miFuncion){
 miFuncion(saludo.toUpperCase());
}

saludar("Hola ucampers", function(valor){
    console.log(valor);
});