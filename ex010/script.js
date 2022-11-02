let resultado = window.document.getElementById('res')

function primeiroBotao() {
    resultado.innerHTML += `<p><em>Você clicou no <strong>primeiro</strong> botão</em></p>`
}

function segundoBotao() {
    resultado.innerHTML += `<p><em>Você clicou no <strong>segundo</strong> botão</em></p>`
}

function terceiroBotao() {
    resultado.innerHTML += `<p><em>Você clicou no <strong>terceiro</strong> botão</em></p>`
}

function quartoBotao() {
    resultado.innerHTML += `<p><em>Você clicou no <strong>quarto</strong> botão</em></p>`
}

function zerar() {
    resultado.innerHTML = `<p>Aqui vou registrar suas ações com os botões acima.           
    </p>`
}