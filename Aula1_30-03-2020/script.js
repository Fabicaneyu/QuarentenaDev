function myFunction() {
    
    dias = 365;
    idade = 30;

    edad= dias * idade;

    batidas = 75;
    hora = 60;
    cor= batidas * hora;

    dia = cor * 24;

    result = edad * dia; 


    
    document.getElementById("demo").innerHTML = "Meu coração já bateu "+result+" vezes";

}

function galFunction(){

    qtd = 15;
    preco = 300;
    precoGal =  preco / qtd; 


    document.getElementById("chick").innerHTML = "Foi pago "+precoGal+" reais por cada galinha";  
}

function balFunction(){

    qtd = 19;
    add = 45;
    total = qtd + add;

    document.getElementById("bal").innerHTML = "Maria tem agora "+total+" balas";  
}


function raiFunction(){
    pi = 3.14;
    raio = 2;
    area = pi * raio * raio; 


    document.getElementById("rai").innerHTML = "A área da circunferência é "+area;  
}


