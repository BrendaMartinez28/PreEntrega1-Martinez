//PRE ENTREGA NUMERO 3:
// SEGUN LA CANTIDAD DE PACIENTES, VEREMOS LA LISTA DE PACIENTES QUE TENEMOS Y SU INFORMACION

const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // No deja que la página se recargue al enviar el formulario
  
  const paciente = {
    nombre: form.nombre.value,
    telefono: form.telefono.value,
    dni: form.dni.value,
    motivoConsulta: form['motivo-consulta'].value,
    legajo: Math.floor(Math.random() * 100000) // Genera un legajo al azar
  };
  
  turnos.push(paciente);
  localStorage.setItem('turnos', JSON.stringify(turnos));
  actualizarListaTurnos();
  
  
  form.reset(); // Limpia el formulario
});

for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  console.log("--> En la clave " + clave + " está este dato", {
    valor: localStorage.getItem(clave),
  })};



