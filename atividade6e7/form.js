var enviar = document.getElementById('submit');

enviar.addEventListener('click', function () {
    validarFormulario();
});

function validarForm() {

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirmacao = document.getElementById('confirmacao').value;

    var Erro = document.getElementById('Erro');

    if (nome.trim() == "") {

        Erro.textContent = "Qual o seu nome?";
        return false;
    }

    if (senha.trim() == "") {

        Erro.textContent = "Digite sua Senha";
        return false;
    }
    if (senha.length < 8) {

        Erro.textContent = "A senha deve conter mais de 8 dígitos";
        return false;
    }
    if (confirmacao.trim() == "") {

        Erro.textContent = "Digite sua senha novamente";
        return false;
    }
    else if (senha !== confirmacao) {

        Erro.textContent = 'A senha e confirmação de senha devem ser iguais';
        return false;
    }
    else {
        Erro.textContent = '';
        alert('Login realizado com sucesso');
        return true;
    }
}



function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Modo Escuro";
}
function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Modo Claro";
}

