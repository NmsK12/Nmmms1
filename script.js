// Frases personalizadas para cada foto, más largas y profundas
const frases = [
  "1. Dicen que el alcohol revela la verdad... y la verdad es que me encantas, Deysi. No importa cuántas veces lo intente ocultar, siempre termino pensando en ti, incluso cuando el mundo da vueltas y yo también.",
  "2. Si cada sonrisa tuya fuera un trago, ya estaría perdido (y feliz). Hay algo en tu risa que me desarma, y aunque a veces me gane el trago, tu alegría siempre me levanta.",
  "3. No sé si eres mi crush o mi crash, pero siempre termino pensando en ti. Eres ese pensamiento que aparece en los momentos más inesperados, y aunque a veces me tropiece, prefiero caer por ti que caminar derecho sin emoción.",
  "4. Si amar fuera bug, yo sería el código más roto por ti. Y aunque intento arreglarme, siempre encuentro una razón para volver a ti, porque eres ese error que no quiero corregir nunca.",
  "5. Hay fotos tuyas que me hacen reír, y otras que me hacen querer llamarte (aunque esté borracho). Pero todas me recuerdan que, sobrio o no, eres la mejor parte de mis días y mis noches.",
  "6. Dicen que el amor es ciego, pero yo te veo y me convenzo de que no. Porque cada vez que te miro, encuentro una razón más para seguir apostando por nosotros, aunque a veces pierda la apuesta.",
  "7. Si la vida fuera un programa, tú serías el error que no quiero corregir. Prefiero mil veces reiniciar contigo que vivir en un sistema perfecto pero sin ti.",
  "8. No soy poeta, pero contigo hasta el HTML se me hace romántico. Cada línea de código, cada palabra, cada intento de impresionarte, es solo una excusa para decirte que aún me gustas, y mucho.",
  "9. Si me pierdo, que sea en tus fotos... o en un bar, pero prefiero tus fotos. Porque en ellas encuentro recuerdos, sueños y la esperanza de que algún día volvamos a reír juntos como antes.",
  "10. No tengo backup de ti, así que mejor no te vayas nunca. Porque perderte sería como borrar el mejor archivo de mi vida, y no hay papelera de reciclaje que me devuelva lo que siento por ti.",
  "11. Si esta web no te convence, me queda escribirte una canción (nivel borracho 10). Pero mientras tanto, aquí estoy, abriéndome en HTML, esperando que al menos te saque una sonrisa y, quién sabe, tal vez un mensaje."
];

const mensajesLaterales = [
  "Tranquila, Deysi. Estoy aprendiendo a ser mejor, poco a poco.",
  "Prometo que voy a dejar el alcohol, o al menos intentarlo de verdad.",
  "No quiero que te preocupes por mí, quiero que sonrías.",
  "Sé que a veces exagero, pero estoy trabajando en eso.",
  "No busco que todo vuelva a ser igual, solo que estés bien.",
  "Gracias por tu paciencia, aunque a veces no la merezca.",
  "Estoy aprendiendo a quererme para poder quererte mejor.",
  "No soy perfecto, pero cada día intento ser mejor por ti y por mí.",
  "Si alguna vez te hice enojar, lo siento de corazón.",
  "Quiero que estés tranquila, de verdad.",
  "Si algún día quieres hablar, aquí estaré, sin presiones."
];

const fotos = [
  "img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg",
  "img/foto6.jpg", "img/foto7.jpg", "img/foto8.jpg", "img/foto9.jpg", "img/foto10.jpg", "img/foto11.jpg"
];

let indice = 0;

// Pantallas
const inicio = document.getElementById('inicio');
const galeria = document.getElementById('galeria');
const final = document.getElementById('final');

document.addEventListener('DOMContentLoaded', () => {
  inicio.classList.add('epic-in');
});

document.getElementById('btn-galeria').onclick = () => {
  inicio.classList.remove('activa');
  galeria.classList.add('activa');
  mostrarFoto();
};

document.getElementById('btn-siguiente').onclick = () => {
  indice++;
  if (indice < fotos.length) {
    mostrarFoto();
  } else {
    galeria.classList.remove('activa');
    final.classList.add('activa');
  }
};

function mostrarFoto() {
  const foto = document.getElementById('foto');
  foto.classList.remove('anim-foto');
  void foto.offsetWidth; // trigger reflow for animation
  foto.classList.add('anim-foto');
  document.getElementById('foto').src = fotos[indice];
  document.getElementById('frase').textContent = frases[indice];
  document.getElementById('mensaje-lateral').textContent = mensajesLaterales[indice];
}

// Estrellas animadas
function crearEstrellas() {
  const estrellas = document.querySelector('.estrellas');
  for (let i = 0; i < 80; i++) {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';
    estrella.style.top = Math.random() * 100 + 'vh';
    estrella.style.left = Math.random() * 100 + 'vw';
    estrella.style.width = estrella.style.height = (Math.random() * 2 + 1) + 'px';
    estrella.style.opacity = Math.random();
    estrellas.appendChild(estrella);
  }
}
crearEstrellas();

// Corazones flotando
document.body.insertAdjacentHTML('beforeend', '<div class="corazones"></div>');
function crearCorazones() {
  const corazones = document.querySelector('.corazones');
  setInterval(() => {
    const corazon = document.createElement('div');
    corazon.className = 'corazon';
    corazon.textContent = '❤';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (2 + Math.random() * 3) + 's';
    corazones.appendChild(corazon);
    setTimeout(() => corazon.remove(), 5000);
  }, 700);
}
crearCorazones();
