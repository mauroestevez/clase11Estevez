

// Armamos el creador de objetos para los clientes

class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.asignado = false;
    }
    prestamoAsignado() {
        this.asignado = true;
    }
};

// Creamos los clientes ya existentes

const mauro = new Cliente("Mauro", "21");
const karina = new Cliente("Karina", "46");
const franco = new Cliente("Franco", "18");
const pablo = new Cliente("Pablo", "44");





let botonInicial = document.getElementById("btnInicial")
botonInicial.addEventListener("click", despejar)
function despejar(){
    let primerParrafo = document.getElementById("primerParrafo");
    let segundoParrafo = document.getElementById("segundoParrafo");
    primerParrafo.remove();
    segundoParrafo.remove();
    botonInicial.remove();
    let formulario = document.createElement("form");
    formulario.innerHTML = "<form id = nombre><input type=text><input type=submit value=Enviar></form>";
    let padreDiv = document.getElementById("padreDiv");
    padreDiv.append(formulario);
    // let input1 = document.getElementById("nombre");
    // input1.addEventListener("input", () => {
    //     let entrada = document.createElement("p");
    //     entrada.innerText = "Hola " + input1.value;
    //     padreDiv.append(entrada);
    // })
    let input1 = document.getElementById("nombre");
    input1.addEventListener("submit", validar);
    function validar(e){
        e.preventDefault();
        // let entradita = document.createElement("p");
        // entrada.innerText = "Hola " + e.target.value;
        // padreDiv.append(entradita);
        console.log("hola");
        
    }

}

// Definimos una variable con el nombre del usuario

// let entrada = prompt("Ingrese su nombre por favor... (debe ser cliente del banco)");

// Creamos un array con los clientes del banco

const clientes = ["karina", "mauro", "franco", "pablo"];

// Armamos un while para comprobar que el nombre del usuario coincida con algun cliente ya registrado del banco

while(clientes.includes(entrada) == false){
    console.log("No eres un cliente del banco");
    entrada = prompt("Ingrese su nombre por favor... (debe ser cliente del banco)");
}

console.log("Bienvenid@ " + entrada + " !!");


// Asignamos las dos variables principales interactuando con el usuario

let monto = parseInt(prompt("Ingrese el monto que necesita:"));

// Armamos una funcion para sumarle el interes cobrado por el banco al monto requerido

function interes (num1) {
    return num1 * 1.36;
}

// Creamos una variable para el monto final a pagar

let montoTotal = interes(monto);

// Le mostramos al cliente cual es el monto total

console.log("La tasa de interés es del 36%, por lo que el monto total a abonar será de " + montoTotal + " pesos");

// Le pedimos al cliente que elija la cantidad de cuotas

let cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 9 o 12)"));

// Armamos un While para dar solo 3 opciones de cantidad de cuotas

while((cantidadCuotas != 3) && (cantidadCuotas != 9) && (cantidadCuotas != 12)){
    console.log("Cantidad de cuotas no disponible");
    cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 9 o 12)"));
}

// Mostramos cuantas cuotas se han seleccionado

console.log("Usted ha seleccionado " + cantidadCuotas + " cuotas");


// Designamos una funcion para dividir

function montoCuota (num1, num2) {
    return num1 / num2;
}

// Ejecutamos la funcion dentro de una variable

let resultado = montoCuota(monto, cantidadCuotas);

// Mostramos el resultado de la variable

console.log(" Usted debera pagar " + cantidadCuotas + " cuotas de " + resultado + " pesos");

console.log("Muchas gracias por usar nuestros servicios");

// Asignamos una variable con la puntuacion del usuario

let opinion = parseInt(prompt("Puntue el funcionamiento de la herramienta del 1 al 10"));

// Usamos un IF para responder una u otra cosa segun el puntaje

if(opinion == 10){
    console.log("Muchas gracias !!!!!");
}
else{
    console.log("Seguiremos trabajando, gracias por puntuar");
}













