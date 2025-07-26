const mensaje = `Mi amor...

Desde que me hechizaste, tu poción de besos y abrazos
me curan y me dan calidez, me siento bien junto a ti y quiero estar contigo y seas la dueña de mi corazón, solo de ti.

Gracias por estos 9 meses mágicos, por todo el amor que me das y por cómo me haces sentir.
Espero que esta carta encantada te saque una sonrisa, como tú me las sacas a mí cada día.

Con todo mi corazón encantado,

🪄 Tu mago enamorado 💖

TE AMO MUCHO KAREN, MI ESPOSITA :3`;

let index = 0;
const mensajeElemento = document.getElementById("mensaje");

function escribirMensaje() {
  if (index < mensaje.length) {
    mensajeElemento.innerHTML += mensaje.charAt(index);
    index++;
    setTimeout(escribirMensaje, 35);
  }
}

function lanzarLumos() {
  document.getElementById("vela").classList.remove("oculto");
}

function lanzarAmorium() {
  document.getElementById("corazones").classList.remove("oculto");
}

function lanzarRecuerdium() {
  document.getElementById("recuerdo").classList.remove("oculto");
}

window.onload = escribirMensaje;
