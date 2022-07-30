

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

const clientes = ["karina", "mauro", "franco", "pablo"];





let botonInicial = document.getElementById("btnInicial")
botonInicial.addEventListener("click", despejar)
function despejar(){
    let primerParrafo = document.getElementById("primerParrafo");
    let segundoParrafo = document.getElementById("segundoParrafo");
    primerParrafo.remove();
    segundoParrafo.remove();
    botonInicial.remove();
    let padreDiv = document.getElementById("padreDiv");
    let saludoInicial = document.createElement("p");
    saludoInicial.innerText = "Ingrese su nombre por favor... (debe ser cliente del banco)";
    padreDiv.append(saludoInicial);

    let formulario = document.createElement("form");
    formulario.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
    formulario.id = "formu";
    padreDiv.append(formulario);
    // let input1 = document.getElementById("nombre");
    // input1.addEventListener("input", () => {
    //     let entrada = document.createElement("p");
    //     entrada.innerText = "Hola " + input1.value;
    //     padreDiv.append(entrada);
    // })
    let input = document.getElementById("formu");
    console.log(input);
    input.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        e.preventDefault();
        // let entradita = document.createElement("p");
        // entradita.innerText = "Hola " + e.target.children[0].value;
        // padreDiv.append(entradita);
        const clientes = ["karina", "mauro", "franco", "pablo"];
        if(clientes.includes(e.target.children[0].value)){
            let entradita = document.createElement("p");
            entradita.innerText = "Hola " + e.target.children[0].value;
            padreDiv.append(entradita);
            let botonContinuar = document.createElement("button");
            botonContinuar.innerText = "Continuar" ;
            botonContinuar.id = "botonContinuar";
            padreDiv.append(botonContinuar);
            let parrafos = document.getElementsByClassName("parrafos");
            let botonContinuar2 = document.getElementById("botonContinuar");
            // let botonContinuar2 = document.getElementById("botonContinuar");
            botonContinuar2.addEventListener("click", respuestaClick)
            function respuestaClick(){
                    let pedidoMonto = document.createElement("p");
                    pedidoMonto.innerText = "Ingrese el monto que necesita y presione Enviar:";
                    padreDiv.append(pedidoMonto);
                    let formulario2 = document.createElement("form");
                    formulario2.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
                    formulario2.id = "formu2";
                    padreDiv.append(formulario2);

                    let input2 = document.getElementById("formu2");
                    console.log(input2);
                    input2.addEventListener("submit", validarFormulario2);
                
                    function validarFormulario2(e){
                        e.preventDefault();
                        function interes (num1) {
                            return num1 * 1.36;
                        }
                        let montoTotal = interes(e.target.children[0].value);
                        let avisoMonto = document.createElement("p");
                        avisoMonto.innerText = "La tasa de interés es del 36%, por lo que el monto total a abonar será de " + montoTotal + " pesos";
                        padreDiv.append(avisoMonto);


                        let pedidoCuotas = document.createElement("p");
                        pedidoCuotas.innerText = "Ingrese cantidad de cuotas (3, 9 o 12)";
                        padreDiv.append(pedidoCuotas);
                        let formulario3 = document.createElement("form");
                        formulario3.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
                        formulario3.id = "formu3";
                        padreDiv.append(formulario3);

                        let input3 = document.getElementById("formu3");
                        console.log(input3);
                        input3.addEventListener("submit", validarFormulario3);
                
                        function validarFormulario3(e){
                                e.preventDefault();

                                if((e.target.children[0].value != 3) && (e.target.children[0].value != 9) && (e.target.children[0].value != 12)){
                                    let avisoNegativo = document.createElement("p");
                                    avisoNegativo.innerText = "Cantidad de cuotas no disponible";
                                    padreDiv.append(avisoNegativo);
                                }else{
                                    let avisoPositivo = document.createElement("p");
                                    avisoPositivo.innerText = "Usted ha seleccionado " + e.target.children[0].value + " cuotas";
                                    padreDiv.append(avisoPositivo);

                                    function montoCuota (num1, num2) {
                                            return num1 / num2;
                                    }  
                                    let resultado = montoCuota(montoTotal, e.target.children[0].value);

                                    let avisoFinal = document.createElement("p");
                                    avisoFinal.innerText = "Usted debera pagar " + e.target.children[0].value + " cuotas de " + resultado + " pesos";
                                    padreDiv.append(avisoFinal);

                                    let saludoFinal = document.createElement("p");
                                    saludoFinal.innerText = "Muchas gracias por usar nuestros servicios";
                                    padreDiv.append(saludoFinal);
                                }

                                
                                    

                                




                                
                        // let montoTotal = interes(e.target.children[0].value);
                        // let avisoMonto = document.createElement("p");
                        // avisoMonto.innerText = "La tasa de interés es del 36%, por lo que el monto total a abonar será de " + montoTotal + " pesos";
                        // padreDiv.append(avisoMonto);



                        }



                    }
            }
        }else{
            let entradita = document.createElement("p");
            entradita.innerText = "No eres un cliente del banco";
            padreDiv.append(entradita);
        }
        
    }
}








// Definimos una variable con el nombre del usuario

// let entrada = prompt("Ingrese su nombre por favor... (debe ser cliente del banco)");

// Creamos un array con los clientes del banco

// const clientes = ["karina", "mauro", "franco", "pablo"];

// Armamos un while para comprobar que el nombre del usuario coincida con algun cliente ya registrado del banco








// while(clientes.includes(entrada) == false){
//     console.log("No eres un cliente del banco");
//     entrada = prompt("Ingrese su nombre por favor... (debe ser cliente del banco)");
// }

// console.log("Bienvenid@ " + entrada + " !!");











// Asignamos las dos variables principales interactuando con el usuario

// let monto = parseInt(prompt("Ingrese el monto que necesita:")); --------------------------------------

// Armamos una funcion para sumarle el interes cobrado por el banco al monto requerido

function interes (num1) {
    return num1 * 1.36;
}

// Creamos una variable para el monto final a pagar

let montoTotal = interes(monto);

// Le mostramos al cliente cual es el monto total

console.log("La tasa de interés es del 36%, por lo que el monto total a abonar será de " + montoTotal + " pesos");

// Le pedimos al cliente que elija la cantidad de cuotas

// let cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 9 o 12)")); ----------------------------------

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

// let opinion = parseInt(prompt("Puntue el funcionamiento de la herramienta del 1 al 10")); ------------------------------------------

// Usamos un IF para responder una u otra cosa segun el puntaje

if(opinion == 10){
    console.log("Muchas gracias !!!!!");
}
else{
    console.log("Seguiremos trabajando, gracias por puntuar");
}













