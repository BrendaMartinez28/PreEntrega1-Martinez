//PRE ENTREGA NUMERO 1:
// SEGUN CUANTO PACIENTES ATENDEREMOS, CALCULAMOS LO QUE TRABAJAREMOS



function multiplicar(tiempoPaciente, numeroPacientes) {
    let resultado = tiempoPaciente * numeroPacientes;
    return resultado;
}


class Paciente {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
    }
}

let paciente0 = new Paciente("Juan","Vergara",25);
let paciente1 = new Paciente("Sofia","Martinez",23);
let paciente2 = new Paciente("Virginia","Tomassi", 28);

alert("Hoy viernes atenderemos 3 pacientes y estos son sus nombres");

misPacientes = [paciente0, paciente1, paciente2];

misPacientes.forEach(element => {
    console.log(element)
    
});

let pacienteAusente = misPacientes.pop();

alert("Surgio un inconveniente y el ultimo paciente no podra asistir a su consulta");
console.log("Surgio un inconveniente y el ultimo paciente no podra asistir a su consulta");

let pacienteDeUltimoMomento = misPacientes.push(new Paciente("Lucas","Muiño",22));

alert("En el transcurso del dia un paciente solicito una consulta de emergencia, ocupando el ultimo lugar libre del paciente que cancelo");
console.log("En el transcurso del dia un paciente solicito una consulta de emergencia, ocupando el ultimo lugar libre del paciente que cancelo");


console.log("La lista final de pacientes es ");
console.log(misPacientes);
alert("La lista final de pacientes es")

let tiempoPaciente = 30;
let numeroPacientes = 3; ;
let resultado = multiplicar(tiempoPaciente, numeroPacientes);
alert("Teniendo en cuenta que atenderemos 3 pacientes, hoy trabajaremos " + resultado + " minutos.");


