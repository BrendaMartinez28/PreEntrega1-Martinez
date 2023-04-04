//PRE ENTREGA NUMERO 1:
// SEGUN CUANTO PACIENTES ATENDEREMOS, CALCULAMOS LO QUE TRABAJAREMOS
let numeroPacientes = parseInt(prompt("¿Cuantos pacientes atenderemos hoy? Teniendo en cuanta que cada consulta demora 30 minutos"));
for (let turno = 1; turno <= numeroPacientes; turno++) {
let nombre = prompt("¿Como se llama el paciente " + turno + "?")    
alert("El paciente "+ nombre + ", tiene asignado el turno numero " + turno);
console.log("El paciente " + nombre + " , tiene asignado el turno numero " + turno); 

}
let tiempoPaciente = 30;
let tiempoDeTrabajo = 0;
tiempoDeTrabajo = tiempoPaciente * numeroPacientes;
alert("Segun nuestros calculos aproximadamente trabajaremos " + tiempoDeTrabajo + " minutos.");