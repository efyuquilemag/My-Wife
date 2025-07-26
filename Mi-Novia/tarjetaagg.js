function agregarTarjeta(seccion) {
  const contenedor = document.getElementById(seccion);

  const nombre = prompt("¿Qué nombre deseas ponerle a esta nueva tarjeta?");
  const enlace = prompt("¿Cuál es el enlace o archivo HTML de este detalle? (por ejemplo: detalles/mes10.html)");

  if (nombre && enlace) {
    const nuevaTarjeta = document.createElement("a");
    nuevaTarjeta.href = enlace;
    nuevaTarjeta.className = "card";
    nuevaTarjeta.textContent = nombre;

    contenedor.insertBefore(nuevaTarjeta, contenedor.lastElementChild);
  }
}
