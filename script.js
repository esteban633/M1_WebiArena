const input = document.querySelector("#nuevaTarea");
const botonAñadir = document.querySelector("#añadir");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

//guardo aqui las tareas para poder contar cuantas quedan pendientes
let tareas = [];

//añadir nueva tarea
botonAñadir.addEventListener("click", añadirTarea);

//añado tarea con enter para facilitar uso
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") añadirTarea();
});

function añadirTarea() {
  const texto = input.value.trim(); //Sirve para quitar espacios

  if (texto === "") return;

  const tarea = {
    id: Date.now(), //uso la fecha como id único, es rápido y no se repite
    texto: texto,
    completada: false,
  };

  tareas.push(tarea);
  input.value = ""; //vacio la caja despues de añadir
  pintarLista();
}

//Vuelvo a crear la lista desde cero a partir del array "tareas" de arriba
function pintarLista() {
  lista.innerHTML = ""; //borro antes de repintar
  
  if (tareas.length === 0) {
  lista.innerHTML = "<li style='opacity:0.6'>No hay ninguna tarea que hacer, chill.</li>";
}

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completada");

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    //al hacer click, se marca o desmarca como completada
    span.addEventListener("click", () => {
      tarea.completada = !tarea.completada;
      pintarLista();
    });

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "✕";
    botonBorrar.addEventListener("click", () => {
      //me quedo solo con las tareas que no tengan este id
      tareas = tareas.filter((t) => t.id !== tarea.id);
      pintarLista();
    });

    li.appendChild(span);
    li.appendChild(botonBorrar);
    lista.appendChild(li);
  });

  actualizarContador();
}

function actualizarContador() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  contador.textContent = `${pendientes} tareas pendientes`;
}

//modo oscuro con la tecla "F2"
document.addEventListener("keydown", (event) => {
  if (event.key === "F2") {
    document.body.classList.toggle("oscuro");
  }
});