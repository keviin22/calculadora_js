//Função para inserir mais de um número diferente no display
function insert(num){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
//Função Limpar: Limpa todos os números de uma única vez.
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
//Função Backspace: apaga um numero por vez.
function apagar(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
}
//Função calcular: Calcular a operação desejada
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        alert("Não há nada para calcular! Por favor insira uma operação")
        document.getElementById('resultado').innerHTML = "Error"
    }
}