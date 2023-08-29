//FUNCIONES

//Primera forma

let numero1 =  "pedro";

function HacerSuma(numero1, numero2){
    let suma = numero1 + numero2;

    return suma
};

document.getElementById("demo6.0").innerHTML = HacerSuma(3, 7);

document.getElementById("demo6.1").innerHTML = numero1;

//Segunda forma

HacerResta  = function (numero1, numero2){
    let resta = numero1 - numero2;
    return resta
};

document.getElementById("demo6.2").innerHTML = HacerResta(9,3);

document.getElementById("demo6.3").innerHTML = HacerResta(9, -233)

//Tercera forma

const HacerMultiplicacion = (numero1, numero2) => {
    let multiplicar = numero1 * numero2;

    return multiplicar
};

//funciones anonimas

function (){
    
};

() => {

};



