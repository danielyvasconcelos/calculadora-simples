let numero1= document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let resultado = document.querySelector('span');

function somar(){
    //função será chama no onclick no botão chamar 
    resultado.innerHTML= parseInt(numero1.value) + parseInt(numero2.value);
    //!parseInt transforma a variavel em numero, pois sem ele a função iria apenas concatenar o resultado ;
}
// o  mesmo esquema será feitos nas outras funções, incluindo o onclick no html 
function subtrair(){
    resultado.innerHTML= parseInt(numero1.value) - parseInt(numero2.value);
}

function multiplicar(){
    resultado.innerHTML= parseInt(numero1.value) * parseInt(numero2.value);
}
function dividir(){
    resultado.innerHTML= parseInt(numero1.value) / parseInt(numero2.value);
}
function limpar(){
    numero1.value="";
    numero2.value="";

}