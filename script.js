//adicionando a funcao pula
function pula(event) {
  if (event.keyCode === 32) {
    if (!pulando) {
      pula();
    }
  }
}

function pula() {
  pulando = true;

  let upInterval = setInterval(() => {
    if (posicao >= 150) {
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (posicao <= 0) {
          clearInterval(downInterval);
          pulando = false;
        } else {
          posicao -= 20;
          dino.style.bottom = posicao + 'px';
        }
      }, 20);
    } else {
      // Subindo
      posicao += 20;
      dino.style.bottom = posicao + 'px';
    }
  }, 20);
}
