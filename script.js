let indiceAtual = 0;

function moverCarrossel(direcao) {
  const imagens = document.querySelectorAll(".carrossel-imagem");
  const totalImagens = imagens.length;
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = totalImagens - 1;
  } else if (indiceAtual >= totalImagens) {
    indiceAtual = 0;
  }

  const carrossel = document.querySelector(".carrossel");
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}
