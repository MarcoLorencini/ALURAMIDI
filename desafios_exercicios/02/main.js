function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play(); //esta função seleciona o elemento html pelo id e acessa o atributo play() da tag audio
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //aqui eu seleciono o objeto da tela e digo o que executar no momento de onclick, no caso, executa a função que da play no audio