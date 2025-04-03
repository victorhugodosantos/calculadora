let visor = document.getElementById('visor');
let valorAtual = '';

function adicionarValor(valor) {
    valorAtual += valor;
    visor.value = valorAtual;
}

function calcular() {
    try {
        let resultado = eval(valorAtual);
        visor.value = resultado;
        valorAtual = resultado.toString();
    } catch (e) {
        visor.value = 'Erro';
        valorAtual = '';
    }
}

function limpar() {
    valorAtual = '';
    visor.value = '';
}

function backspace() {
    valorAtual = valorAtual.slice(0, -1);
    visor.value = valorAtual;
}
