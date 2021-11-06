let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-left .d-1-3')

let etapaAtual = 0;
let numeroDigitado = ''; // vai guardar os numeros que o eleitor digitar
let numeroEmBranco = false;

//Esta função limpa a tela
function comecarEtapa() {
  let etapa = etapas[etapaAtual]; //comoeça com vereador

  let numeroHtml = '';
  numeroDigitado = '';
  numeroEmBranco = false;

  //monta os quadrados de votacao
  for(let i=0; i < etapa.numeros; i++) {
    if(i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    }else{
      numeroHtml += '<div class="numero"></div>';
    }

  }

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display= 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;

}

function atualizaInterface() {
  let etapa = etapas[etapaAtual]
  let candidato = etapa.candidatos.filter((item) => {
    if(item.numero === numeroDigitado) {
      return true;
    }else{
      return false;
    }
  });

  if(candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `Nome: ${candidato.nome}<br> Partido: ${candidato.partido}`
    
    let fotosHtml = '';
    for(let i in candidato.fotos) {
      fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
    }
    lateral.innerHTML = fotosHtml;
  }else{
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
  }
}

function clicou(value) {
  let elNumero = document.querySelector('.numero.pisca');
  if(elNumero !== null) {
    elNumero.innerHTML = value;
    numeroDigitado = `${numeroDigitado}${value}`;

    //logica de mandar o pisca p/ proximo numero
    elNumero.classList.remove('pisca');
    if(elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add('pisca');
    }else{
      atualizaInterface();
    }
  }
}

function branco() {
  if(numeroDigitado === '') {
    numeroEmBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
    lateral.innerHTML = '';

  }else {
    alert("Para votar em BRANCO, não pode ter digitado nenhum número!")
    comecarEtapa();
  }
}
function corrige() {
  comecarEtapa();
}
function confirma() {
  alert('Clicou em CONFIRMA');
}

comecarEtapa();