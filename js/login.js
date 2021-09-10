    
//      FUNÇÃO PARA VERIFICAR SE TODOS OS CAMPOS FORAM PREENCHIDOS
    var email = document.getElementById ('email').value
    var password = document.getElementById ('password').value
    const enviar = document.getElementById('enviar')
    enviar.addEventListener('click', pegarForm)
    

var pessoa = []

function pegarForm() {
    const email = document.getElementById ('email').value
    const password = document.getElementById ('password').value
    const firstName = document.getElementById ('first-name').value
    const lastName = document.getElementById ('last-name').value


    if(firstName == false) {
        alert('Digite seu nome')
    }else if(lastName == false) {
        alert('Digite seu sobrenome')
    }else if(email == false) {
        alert('Digite seu email')
    }else if(password == false) {
        alert('Digite uma senha')
    }else {
        pessoa.push (firstName, lastName, email, password)
        console.log(pessoa)
    }
}

//      FUNÇÃO PARA ABRIR A TELA DE LOGIN
    const abrirLogin = document.querySelector('.recuperar')
    abrirLogin.addEventListener('click', abrirModalLogin)

function abrirModalLogin() {
    const abrir = document.querySelector('.login')
    abrir.style.marginLeft = '0'
}


    const cancelar = document.querySelector('.btn-cancelar')
    cancelar.addEventListener('click', fecharLogin)

function fecharLogin() {
    const fecharModal = document.querySelector('.login')
    fecharModal.style.marginLeft = '-100%'
}


//         FUNÇÃO PARA VERIFICAR LOGIN

    const checar = document.querySelector('.btn-login')
    checar.addEventListener('click', checarLogin)

     var pessoaLogin = []

function checarLogin() {
    const emailLogin = document.getElementById('email-usuario').value
    const passwordLogin = document.getElementById('password-usuario').value
    pessoaLogin.push (emailLogin, passwordLogin)
    
    if(pessoa[3] == pessoaLogin[1] && pessoa[4] == pessoaLogin[2]){
        window.location.href = 'principal.html'
    }else {
        alert('Usuário ou senha incorretos')
    }
}