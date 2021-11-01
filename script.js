let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-left .d-1-3')
console.log(numeros)

let etapaAtual = 0;
let numeroDigitado = ''; // vai guardar os numeros que o cliente digitar

//Esta função limpa a tela
function comecarEtapa() {
  let etapa = etapas[etapaAtual]; //comoeça com vereador

  let numeroHtml = '';

  //monta os quadrados de votacao
  for(let i = 0; i < etapa.numeros; i++) {
    if(i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    }else{
      numeroHtml += '<div class="numero"></div>';
    }
console.log(numeroHtml)

  }

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display= 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
console.log(numeros.innerHTML)

}

function atualizaInterface() {

}



function clicou(value) {
  let elNumero = document.querySelector('.numero.pisca');
  if(elNumero !== null) {
    elNumero.innerHTML = value;
    numero = `${numero}${value}`;
  }
}

function branco() {
  alert('Clicou em BRANCO');
}
function corrige() {
  alert('Clicou em CORRIGE');
}
function confirma() {
  alert('Clicou em CONFIRMA');
}



comecarEtapa();