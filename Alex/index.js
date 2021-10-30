class Persona {
    nombre;
    edad;
    sexo;
    saludar (){
        console.log("Hola mi nombre es ${this.nombre}");
    }
}

class Alumno extends Persona {
    
    matricula;
    turno;
    cicloEscolar;
}

class Profesor extends Persona {
    materia;
    turno;
    cicloEscolar;
}

const alumnoJuan = new Alumno();
alumnoJuan.nombre = 'Juan';
alumnoJuan.edad = '18';
alumnoJuan.sexo = 'Masculino';
alumnoJuan.matricula = 'abc123';
alumnoJuan.turno = 'Matutino';
alumnoJuan.cicloEscolar = '2020-2021';
alumnoJuan.saludar();

const profesorPedro = new Profesor();
profesorPedro.nombre = 'Pedro';
profesorPedro.edad = '35';
profesorPedro.sexo = 'M';
profesorPedro.materia = 'Matematicas';
profesorPedro.turno = 'Matutino';
profesorPedro.cicloEscolar = '2020-2021';
profesorPedro.saludar();