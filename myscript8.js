//Estructura de desicion logica

//Hacer un algoritmo que, dados dos valores numericos A y B, escriba un mensaje diciendo si A es mayor, menor o igual a B.

function comprararnumero(a,b){
    if (a > b) {
        document.getElementById("demo8.0").innerHTML = "A es Mayor que B"
    } else {
        document.getElementById("demo8.0").innerHTML = `${a} es MENOr que ${b} `
    }
}
    