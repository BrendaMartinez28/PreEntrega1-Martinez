//PRE ENTREGA NUMERO 1:
// SEGUN CUANTO PACIENTES ATENDEREMOS, CALCULAMOS LO QUE TRABAJAREMOS
function multiplicar(tiempoPaciente, numeroPacientes) {
    let resultado = tiempoPaciente * numeroPacientes;
    return resultado;
}

let numeroPacientes = parseInt(prompt("¿Cuantos pacientes atenderemos hoy? Teniendo en cuanta que cada consulta demora 30 minutos"));
while (isNaN(numeroPacientes)) {
    numeroPacientes = parseInt(prompt("¿Cuantos pacientes atenderemos hoy? Teniendo en cuanta que cada consulta demora 30 minutos"));
}
for (let turno = 1; turno <= numeroPacientes; turno++) {
    let nombre = prompt("¿Como se llama el paciente " + turno + "?")
    while (nombre === "" || !isNaN(nombre) || nombre === " ") {
        nombre = prompt("¿Como se llama el paciente " + turno + "?");
    }
    alert("El paciente " + nombre + ", tiene asignado el turno numero " + turno);
    console.log("El paciente " + nombre + " , tiene asignado el turno numero " + turno);

}
let tiempoPaciente = 30;
let resultado = multiplicar(tiempoPaciente, numeroPacientes);
alert("Segun nuestros calculos aproximadamente trabajaremos " + resultado + " minutos.");
