let operandoa;
let operandob;
let operacion;
function init(){
    // declaracion de las variables
    let resultado = document.getElementById('resultado');
        cero = document.getElementById('cero');
        uno = document.getElementById('uno');
        dos = document.getElementById('dos');
        tres = document.getElementById('tres');
        cuatro = document.getElementById('cuatro');
        cinco = document.getElementById('cinco');
        seis = document.getElementById('seis');
        siete = document.getElementById('siete');
        ocho = document.getElementById('ocho');
        nueve = document.getElementById('nueve');
        sumar = document.getElementById('suma');
        restar = document.getElementById('resta');
        multiplicar = document.getElementById('multiplicacion');
        dividir = document.getElementById('division');
        igual = document.getElementById('igual');
        reset = document.getElementById('reset');

    // declaracion de los eventos
        uno.onclick = function(e) {
            resultado.textContent = resultado.textContent +'1';
        }
        dos.onclick = function(e) {
            resultado.textContent = resultado.textContent +'2';
        }
        tres.onclick = function(e) {
            resultado.textContent = resultado.textContent +'3';
        }
        cuatro.onclick = function(e) {
            resultado.textContent = resultado.textContent +'4';
        }
        cinco.onclick = function(e) {
            resultado.textContent = resultado.textContent +'5';
        }
        seis.onclick = function(e) {
            resultado.textContent = resultado.textContent +'6';
        }
        siete.onclick = function(e) {
            resultado.textContent = resultado.textContent +'7';
        }
        ocho.onclick = function(e) {
            resultado.textContent = resultado.textContent +'8';
        }
        nueve.onclick = function(e) {
            resultado.textContent = resultado.textContent +'9';
        }
        cero.onclick = function(e) {
            resultado.textContent = resultado.textContent + '0';
        }
        reset.onclick = function(e) {
            resetear();
        }
        suma.onclick = function(e){
            operandoa = resultado.textContent;
            operacion = '+';
            limpiar();
        }
        resta.onclick = function(e) {
            operandoa = resultado.textContent;
            operacion = "-";
            limpiar();
        }
        multiplicacion.onclick = function(e) {
            operandoa = resultado.textContent;
            operacion = '*';
            limpiar();
        }
        division.onclick = function(e) {
            operandoa = resultado.textContent;
            operacion = '/';
            limpiar();
        }

        igual.onclick = function(e){
            operandob = resultado.textContent;
            resolver();
        }

    }

    function limpiar(){
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver() {
        let res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-": 
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob)
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resetear();
        resultado.textContent = res;
        
        
    }
        
            
