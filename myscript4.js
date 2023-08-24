// AREGLOS

const numerosPrimos = [2, 3, 5 , 7, 11, 13, 17,];

document.getElementById("demo4.0").
innerHTML = numerosPrimos;

document.getAnimations("demo4.1").
innerHTML = numerosPrimos[3];

document.getElementById("demo4.2").
innerHTML = numerosPrimos.length;

datosRecibidos = [76587, 8.98, "violeta", null, undefined, [1, "talla", false,], {marca: "lenovo", ram: 8}];

document.getElementById("demo4.3").
innerHTML = datosRecibidos;

document.getElementById("demo4.4").
innerHTML = datosRecibidos [5][4];

//formas de crear un arreglo

var misMaterias = []

const misVideojuegos = new Array (
    "Mario Bross",
    "Zelda",
    "super metroid"

);

Profesiones = [

    "Ingenieria",
    "Medicina",
    "Diseño",
    "Economia",
    "Derecho",

]

document.getElementById("demo 4.5").
innerHTML = Profesiones

document.getElementById("demo4.6").
innerHTML = Profesiones.pop();

//Objetos

let pc1 = {
    nombre: "Estigma",
    marca: "lenovo",
    procesador: "Intel Core I7",
    ram: "16g",
    disco: "1TB",
    cantidad: 5

};

//document.getElementById("demo4.7").
innerHTML = pc1["marca"];

document.getElementById("demo4.7").
innerHTML = pc1.disco;

fraseSalida = `Esta est mi computadora, su nombre es:
${pc1["nombre"]},
su marca es ${pc1["marca"]},
con un procesador ${pc1["procesador"]},
con una ram de ${pc1["ram"]},
y un disco duro de ${pc1["disco"]}
`;

document.getElementById("demo4.8").
innerHTML = fraseSalida;




