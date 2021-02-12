const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let pulando = false;
let GameOver = false;
let posicao = 0;


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

//funcao que cria cactus aleatoriamente e caso dino colida da gameover.
function criaCactus() {
  const cactus = document.createElement('div');
  let cactusPosicao = 1000;
  let cactusAleatorios = Math.random() * 6000;

  if (GameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosicao + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosicao < -60) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosicao > 0 && cactusPosicao < 60 && posicao < 60) {
      // Game over
      clearInterval(leftTimer);
      GameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosicao -= 10;
      cactus.style.left = cactusPosicao + 'px';
    }
  }, 20);

  setTimeout(criaCactus, cactusAleatorios);
}

criaCactus();
document.addEventListener('keyup', pula);