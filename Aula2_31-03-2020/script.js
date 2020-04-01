
function myFunction() {
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var altura = +formulario.altura.value;
    var imc = ((kilos / (altura * altura)));

    document.getElementById("demo").innerHTML = "Seu IMC é "+imc.toFixed(2);  
}

function medFunction(){
    document.getElementById("med").innerHTML = " A média de idade da família do Guilherme é "+ ((30+20+15+10)/4);  
}

function idaFunction(){
    var form = document.getElementById("form");
    var ano = +form.ano.value;
    var atual = +form.atual.value;
    var edad = atual - ano; 

    document.getElementById("de").innerHTML = "A sua idade é "+ edad;  
}




