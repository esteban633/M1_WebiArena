
const input = document.querySelector("#nuevaTarea");
const botonAñadir = document.querySelector("#añadir");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

// guardo aquí las tareas para poder contar cuántas quedan pendientes
// (podría leerlo del DOM cada vez, pero así es más claro y no depende del HTML)
let tareas = [];

// --- añadir una tarea nueva ---
botonAñadir.addEventListener("click", añadirTarea);

// también permito añadir con Enter, que si no es un poco incómodo
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") añadirTarea();
});

function añadirTarea() {
  const texto = input.value.trim(); // trim quita espacios al principio/final

  // si no ha escrito nada, no hacemos nada
  if (texto === "") return;

  const tarea = {
    id: Date.now(), // uso la fecha como id único, es rápido y no se repite
    texto: texto,
    completada: false,
  };

  tareas.push(tarea);
  input.value = ""; // limpio la caja después de añadir
  pintarLista();
}

// --- pinta toda la lista de nuevo a partir del array "tareas" ---
// (lo hago así -borrar todo y recrearlo- para no perder el hilo con tareas sueltas)
function pintarLista() {
  lista.innerHTML = ""; // limpio la lista antes de repintar

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completada");

    const span = document.createElement("span");
    span.textContent = tarea.texto; // textContent y no innerHTML, por seguridad

    // al pulsar el texto, se marca/desmarca como completada
    span.addEventListener("click", () => {
      tarea.completada = !tarea.completada;
      pintarLista();
    });

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "✕";
    botonBorrar.addEventListener("click", () => {
      // me quedo solo con las tareas que NO tengan este id
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

// --- bonus: modo oscuro con la tecla "d" ---
document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    document.body.classList.toggle("oscuro");
  }
});