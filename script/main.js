//PRE ENTREGA NUMERO 1:
// SEGUN CUANTO PACIENTES ATENDEREMOS, CALCULAMOS LO QUE TRABAJAREMOS


function multiplicar(tiempoPaciente, numeroPacientes) {
    let resultado = tiempoPaciente * numeroPacientes;
    return resultado;
}
class Paciente {
    constructor(nombre, apellido,) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
    }
}

let misPacientes = [];

let numeroPacientes = parseInt(prompt("¿Cuantos pacientes atenderemos hoy? Teniendo en cuanta que cada consulta demora 30 minutos"));
while (isNaN(numeroPacientes)) {
    numeroPacientes = parseInt(prompt("¿Cuantos pacientes atenderemos hoy? Teniendo en cuanta que cada consulta demora 30 minutos"));
}
for (let turno = 1; turno <= numeroPacientes; turno++) {

    let nombre = prompt("Ingrese el nombre del paciente" + turno + "?");
    let apellido = prompt("Ingrese el apellido del paciente" + turno + "?");

    let unPaciente = new Paciente(nombre, apellido);
    misPacientes.push(unPaciente);

}
console.log(
    "--> La cantidad de pacientes en mí lista, es de ", misPacientes.length);
let tiempoPaciente = 30;
let resultado = multiplicar(tiempoPaciente, numeroPacientes);
alert("Segun nuestros calculos aproximadamente trabajaremos " + resultado + " minutos.");


