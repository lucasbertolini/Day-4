
let numeroGerado = parseInt(Math.random() * 10);
let tentativasTexto = document.querySelector('#tentativas');
let respostaTexto = document.querySelector('#resposta');
let tentativas = 0;
function adivinhar(){
    console.log(numeroGerado);
    let resposta = document.querySelector('input').value

    if(resposta == numeroGerado){
        respostaTexto.innerHTML = 'Parabéns, você acertou o número!!!';
        document.querySelector('#jogar').disabled = true;
    }else {
        if(tentativas > 3){
           respostaTexto.innerHTML = `Você gastou todas as suas tentivas e perdeu, o número era ${numeroGerado}`;
           document.querySelector('#jogar').disabled = true;
           return
        }
        tentativasTexto.innerHTML = tentativas;
        respostaTexto.innerHTML = 'Pense melhor e tente novamente!!'
        tentativas++
    
    }
}
document.querySelector('#reiniciar').addEventListener('click', () => {
    tentativas = 0;
    document.querySelector('#jogar').disabled = false;
    numeroGerado = parseInt(Math.random() * 10);
    tentativasTexto.innerHTML = '';
    respostaTexto.innerHTML = '';
    resposta.textContent = ' ';
})

