let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});  
  }

  function exibirMensagemInicial(){
    exibirTextoNaTela('h1', ' Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
  }
    
exibirMensagemInicial();

  function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
      exibirTextoNaTela('h1','Acertou!');
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
      exibirTextoNaTela('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto é Menor');
        }else {
          exibirTextoNaTela('p','O número secreto é Maior');
        }
        tentativas++;
        limparCampo();
            }
      }

function gerarNumeroAleatorio() {
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementoNaLista == numeroLimite) {
    listaDeNumerosSorteados = {};
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled' , true)
}