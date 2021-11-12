//variaveis globais
var botao_adicionar = document.querySelector("#adicionar_dados");
var campo_data = document.querySelector("input[name='ano']");
var hoje = new Date();
var ano_atual = hoje.getFullYear();

//Funções
function adicionar_dados(event) {
    event.preventDefault();
    var ano_informado = campo_data.value;

    if (ano_informado >= 1921 && ano_informado <= ano_atual) {

        console.log("A data digitada está OK!");
    } else {

        document.querySelector(".alerta").innerHTML = "Data invalida!!";
    }


}

//Rotina principal
botao_adicionar.addEventListener('click', adicionar_dados);