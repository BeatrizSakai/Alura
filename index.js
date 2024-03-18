const texto = document.querySelector(".texto");
const mensagem = document.querySelector(".textoPronto");
const botaoCopiar = document.querySelector(".botaoCopiar")

window.addEventListener("load", function() {     
    botaoCopiar.style.display = 'none';   
});

function criptografarTexto() {
    escondeImagem();
    const textoCriptografado = criptografar(texto.value);
    mensagem.value = textoCriptografado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    document.getElementById("textoNaoEncontrado").style.display = 'none';
    document.getElementById("digite").style.display = 'none';
    document.getElementById("textoPronto").style.display = 'block';
    texto.value = "";
    mostrarCopiar();
}

function escondeImagem() {
    document.getElementById("imgBusca").style.display = "none";
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function descriptografarTexto(){
    escondeImagem();
    const textoDescriptografado = descriptografar(texto.value);
    mensagem.value =  textoDescriptografado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    document.getElementById("textoNaoEncontrado").style.display = 'none';
    document.getElementById("digite").style.display = 'none';
    document.getElementById("textoPronto").style.display = 'block';
    texto.value = "";
    mostrarCopiar();
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

// --Botão Copiar--
function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value)
}

function mostrarCopiar() {
    botaoCopiar.style.display = "block";
}
