// DATA DO RELACIONAMENTO
const dataInicio = new Date("2025-08-24");

let musicaTocando = false;
const musica = document.getElementById("musica");

// CONTADOR COM SEGUNDOS
function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `<span>${dias}</span> dias, <span>${horas}</span> horas, <span>${minutos}</span> minutos e <span>${segundos}</span> segundos ❤️`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// MÚSICA
function toggleMusica() {
  if (musicaTocando) {
    musica.pause();
    musicaTocando = false;
  } else {
    musica.play().catch(() => {
      alert("Não foi possível tocar a música. Verifique se o arquivo musica.mp3 existe.");
    });
    musicaTocando = true;
  }
}

// TELA SURPRESA
function mostrarSurpresa() {
  document.getElementById("surpresa").style.display = "flex";
}

function fecharSurpresa() {
  document.getElementById("surpresa").style.display = "none";
  // Tenta tocar música ao fechar surpresa (interação do usuário)
  if (!musicaTocando) {
    musica.play().then(() => {
      musicaTocando = true;
    }).catch(() => {});
  }
}

// CORAÇÕES
const container = document.querySelector(".coracoes");
function criarCoracao() {
  const coracao = document.createElement("span");
  coracao.innerHTML = "❤️";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 15 + "px";
  coracao.style.animationDuration = Math.random() * 3 + 6 + "s";
  container.appendChild(coracao);
  setTimeout(() => coracao.remove(), 9000);
}
setInterval(criarCoracao, 400);

// MODAL ZOOM
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Fechar modal com ESC e clique fora
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") fecharModal();
});

// ANIMAÇÃO FADE-IN AO ROLAR
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
