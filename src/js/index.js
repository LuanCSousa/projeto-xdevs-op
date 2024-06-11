// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
// passo 3 - fazer aparecer o próximo cartão da lista
// passo 4 - buscar o cartão que esta selecionado e esconder

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
// anterior da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
// passo 3 - fazer aparecer o cartão anterior da lista
// passo 4 - buscar o cartão que esta selecionado e esconder

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
    cartoes[cartaoAtual].classList.remove("selecionado");
    if(cartaoAtual === cartoes.length-1) {
        cartaoAtual = 0;
    } else cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener('click', function () {
    cartoes[cartaoAtual].classList.remove("selecionado");
    if(cartaoAtual === 0) {
        cartaoAtual = cartoes.length-1;
    } else cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});