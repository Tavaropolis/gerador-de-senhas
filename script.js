let botao = document.querySelector('#button');
let sliderElement = document.querySelector('#slider');
let numeroCaracteres = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
let tooltip = document.querySelector('#tooltip');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@!'
charset = charset.split('');
let novaSenha = [];

sliderElement.addEventListener('input', () => {
    numeroCaracteres.textContent = sliderElement.value;
})

botao.addEventListener('click', () => {
    novaSenha = [];
    geraSenha(sliderElement.value);
    containerPassword.classList.remove('hidden');
    tooltip.classList.remove('hidden');
})

tooltip.addEventListener('click', () => {
    navigator.clipboard.writeText(novaSenha);
    window.alert("Senha copiada com sucesso!");
})

const geraSenha = (numeroCaracteres) => {
    let caracter = Math.floor(Math.random() * (charset.length - 0 + 1) + 0);
    if (!charset[caracter]) {
        geraSenha(numeroCaracteres);
    } else {
        novaSenha.push(charset[caracter]);
        console.log(novaSenha);
    }

    if (novaSenha.length != sliderElement.value) {
        geraSenha(numeroCaracteres);
    } else {
        novaSenha = novaSenha.join('');
        password.textContent = novaSenha;
    }
    
}