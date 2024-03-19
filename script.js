//Variables
let texto = '';
let resultado = '';
let index = 0;
let encriptaciones = ["ai", "enter", "imes", "ober", "ufat"]
let vocalesEncriptar = ["a", "e", "i", "o", "u"]


//Funcion encargada de encriptar el texto
function encriptarTexto() { 
    let aux = "";
    resultado = "";

    texto = document.getElementById('texto').value;
    if (texto != "") {
        texto = texto.toLowerCase();
        limpiar();
        for (i = 0; i < texto.length; i++) {
            aux = texto[i];
            if (vocalesEncriptar.includes(aux)) {
                aux = encriptaciones[vocalesEncriptar.indexOf(aux)];
            }
            resultado += aux;
        }
        document.getElementById('resultado').value = resultado;
        
        //Se elimina la imagen del background para dar lugar al texto encriptado
        document.getElementById('resultado').style.backgroundImage = "none";
    }
    else {
        document.getElementById('texto').placeholder = "No ha ingresado ningun texto para encriptar";
        sound();
    }
}


//Funcion encargada de desencriptar un texto
function desencriptarTexto(){
    texto = document.getElementById('texto').value;

    if (texto != "") {
        limpiar();
        resultado = texto;
    
        for (i = 0; i < encriptaciones.length; i++) {
            resultado = resultado.replaceAll(encriptaciones[i], vocalesEncriptar[i])
        }
        console.log(resultado);
        document.getElementById('resultado').value = resultado;
    
        //Se elimina la imagen del backgroun para dar lugar al texto desencriptado
        document.getElementById('resultado').style.backgroundImage = "none";
    }
    else {
        document.getElementById('texto').placeholder = "No hay texto que desencriptar";
        sound();
    }
}


//Funcion encargada de copiar el texto resultante al portapapeles
function copiar() {
    const resultado = document.getElementById('resultado');

    if (resultado.value != "") {
        navigator.clipboard.writeText(resultado.value);
    } else {
        resultado.placeholder = "No hay ningun resultado para copiar."
        color(true);
        sound();
    }
    limpiar();
}


//Limpiar los textarea
function limpiar() {
    document.getElementById('texto').value = "";
    document.getElementById('resultado').value = "";
    document.getElementById('resultado').style.backgroundImage = "url(images/Muñeco.png)";
}


//Reproducir sonido de error
function sound() {
    var sonido = new Audio('resources/335586__littlerainyseasons__warning.mp3');
    sonido.play();
}


//Reproducir musica
function music() {
    document.getElementById('music').play();
}