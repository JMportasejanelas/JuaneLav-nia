// DATA DO RELACIONAMENTO
const dataInicio = new Date("2025-08-24");

// CONTADOR
function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} dias, ${horas} horas e ${minutos} minutos ❤️`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// TELA SURPRESA
function mostrarSurpresa() {
  document.getElementById("surpresa").style.display = "flex";
}

function fecharSurpresa() {
  document.getElementById("surpresa").style.display = "none";
}

// CORAÇÕES
const container = document.querySelector(".coracoes");
function criarCoracao() {
  const coracao = document.createElement("span");
  coracao.innerHTML = "❤️";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 15 + "px";
  coracao.style.animationDuration = Math.random() * 3 + 4 + "s";
  container.appendChild(coracao);
  setTimeout(() => coracao.remove(), 7000);
}
setInterval(criarCoracao, 500);

// MODAL ZOOM
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
