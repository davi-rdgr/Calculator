function insert(num) {
    let result = document.querySelector('.show-result');
    let resultContent = result.innerHTML;
    result.innerHTML = resultContent + num;
}

// Função para limpar a expressão:
function clean() {
    let clearValor = document.querySelector('.show-result');
    
    // Limpa o conteúdo da expressão enviando uma string vazia:
    clearValor.innerHTML = "";

    // Reseta a cor de fundo do botão de reset para o padrão. Esta funcionalidade trabalha junto com o catch error:
    let cError = document.querySelector('.reset')
    cError.style.backgroundColor = '#0D1117'
}

// Função para apagar o último caractere escrito no visor:
function erase() {
    let result = document.querySelector('.show-result');
    let resultContent = result.innerHTML;

    // Remove o último caractere da expressão, contando o número de caracteres e removendo o último:
    result.innerHTML = resultContent.substring(0, resultContent.length - 1);
}

// Função para calcular o resultado da expressão:
function calculate() {
    let result = document.querySelector('.show-result');
    let resultContent = result.innerHTML;

    // Confere se a expressão contém apenas caracteres válidos usando da expressão regular:
    if (/^[0-9+\-*/.%]*$/.test(resultContent)) {
        try {
            // Avalia a expressão e atualiza o resultado no elemento HTML
            let calculateResult = new Function('return ' + resultContent)();
            result.innerHTML = calculateResult;
        } catch (error) {
            // Em caso de erro, exibe uma mensagem e destaca o botão de reset em vermelho:
            result.innerHTML = 'Error' + '<br>' + 'Click on C to reset';
            let cError = document.querySelector('.reset')
            cError.style.backgroundColor = '#ff0000';
        }
    }
}
