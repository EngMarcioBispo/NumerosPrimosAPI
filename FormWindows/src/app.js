const entradaForm = require('prompt-sync')({sigint: true});

const entrada = entradaForm("Digite o número intero: ")
let arrayDivisores = [];
let arrayPrimos = [];

function numerosDiveres(divisor){
    for(let contadorDivisor = 1;contadorDivisor <=divisor; contadorDivisor++){
        if(divisor%contadorDivisor==0){
            arrayDivisores.push(contadorDivisor)
        }         
    }    
}

function arrayNumerosPrimos(primos){
    for(let contadorDivisor of primos){       
        if(numeroPrimo(contadorDivisor)){
            arrayPrimos.push(contadorDivisor)         
        } 
    }    
}

function numeroPrimo(primo){
    for(let contadorPrimo = 2; contadorPrimo < primo; contadorPrimo++){
        if(primo % contadorPrimo === 0){
          return false;          
        }              
    } 
    return true;
}

function exibirResultadoNumerosDivisores(){
    arrayNumerosPrimos(arrayDivisores)
    return console.log({
        'Divisores Primos':arrayPrimos
    }); 
}

function exibirResultadoDiviresPrimos(){
    numerosDiveres(entrada)
    return console.log({
        'Números divisores':arrayDivisores
    }); 
}

exibirResultadoDiviresPrimos()
exibirResultadoNumerosDivisores()
