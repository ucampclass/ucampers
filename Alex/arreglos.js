let nombreObjeto = new Object()

nombreObjeto.nombre = "Joe"
nombreObjeto.apellido = "Doe"
nombreObjeto.edad = 35

nombreObjeto.saludar = function(){
  return `Hola. Un gusto.`
}

console.log(nombreObjeto.nombre);
console.log(nombreObjeto.edad);

console.log(nombreObjeto.apellido);
console.log(nombreObjeto.saludar());
