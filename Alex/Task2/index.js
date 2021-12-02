function agregarElemento(){
 var nombre = document.getElementById("txtNombre").value;
 localStorage.setItem('keynombre', nombre);
 
}

function mostrarElemento(){
 var dato = localStorage.getItem('keynombre');
 console.log(dato);
 if(dato != null){
  document.getElementById("txtNombre").value = dato;
 }else{
  alert ("No hay nada que mostrar");
 }
 
}

function eliminarElemento(){
    localStorage.removeItem('keynombre');
}

function agregarElementos() {

    var nombre = document.getElementById("txtNombre").value;
    var number = document.getElementById("keyNumber").value;
    var memo = document.getElementById("keyMemo").value;

    if (nombre === "" || number === "") {
        BootstrapDialog.show({
            message: 'No puede dejar campos vacios'
        });
    }
//Editando
var id = document.getElementById("hdnid").value;

if (id !== "") {
    var objprospecto = {
    id: id,
    nombre: nombre,
    number: number,
    memo: memo} 
}else {
    //Nuevo
    var objprospecto = {
        id: uuidv4(),
        nombre: nombre,
        number: number,
        memo: memo}
    }
    
    var lista = [];
    
    localStorage.setItem("prospecto", JSON.stringify(objprospecto));
    //refresca la pantalla
    window.location.reload();
}

window.onload = function () {
    var objetoprospecto = localStorage.getItem("prospecto");

    if (objetoprospecto != null) {
    var objprospectoParse = JSON.parse(objetoprospecto);
        var templateTr = `<tr>
        <th scope="row">1</th>
        <td>${objprospectoParse.nombre}</td>
        <td>https://api.whatsapp.com/send?l=es&phone=521${objprospectoParse.number}</td>
        <td>${objprospectoParse.nombre} ${objprospectoParse.memo}</td>
        <td> <button class='btn btn-primary' onclick='EditarProspecto("${objprospectoParse.id}")'>Editar</button> </td>
        <td> <button class='btn btn-danger' onclick='eliminarProspecto("${objprospectoParse.id}")'>Eliminar</button> </td>
      </tr>`;

      var tbodyProspecto = document.getElementById("tbodyProspecto");
        tbodyProspecto.innerHTML = templateTr;
    }
}

function EditarProspecto(id) {
  
    var objetoProspecto = localStorage.getItem("prospecto");
    if (objetoProspecto != null) {
        var objProspectoParse = JSON.parse(objetoProspecto);
          
        if (objProspectoParse.id === id) {
            document.getElementById("txtNombre").value = objProspectoParse.nombre;
            document.getElementById("keyNumber").value = objProspectoParse.number;
            document.getElementById("keyMemo").value = objProspectoParse.memo;
        
            document.getElementById("hdnid").value = id;
        
        }
    }
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function eliminarProspecto(id) {
    BootstrapDialog.show({
        title: 'Eliminar datos',
        message: '¿Deseas eliminar este elemento?',
        buttons: [{
            label: 'Cancelar',
            action: function(dialog) {
                dialog.close();
            }
        }, {
            label: 'Aceptar',
            action: function(dialog) {
            localStorage.removeItem('prospecto');
            window.location.reload();
            }
        }]
    });
  }