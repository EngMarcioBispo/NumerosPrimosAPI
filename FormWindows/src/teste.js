const entradaForm = require('prompt-sync')({sigint: true});

const entrada = entradaForm("Digite o número intero: ")
let resultadoDivisores = [];
let resultadoPrimos = [];


/*
for(let contadorDivisor = 1;contadorDivisor <=entrada; contadorDivisor++){
   
    if(entrada%contadorDivisor==0){
        numerosDivisores1 += contadorDivisor+','
    }  
    for(let contadorPrimo = 2; contadorPrimo < contadorDivisor; contadorPrimo++){
        if(contadorDivisor % contadorPrimo === 0){
            numeroPrimo1 = false;
            break
        }            
    }
    console.log(contadorDivisor);
    if(numeroPrimo1){
        
        divisoresPrimos1 += contadorDivisor+','
        }   
}

console.log({
    'Números divisores':numerosDivisores1,
    'Divisores Primos':divisoresPrimos1
});

*/

/*function divisoresPrimos(primo){
   let numeroPrimo = true 
    for(let contadorDivisor of resultadoDivisores){    
        for(let contadorPrimo = 2; contadorPrimo < contadorDivisor; contadorPrimo++){
            if(contadorDivisor % contadorPrimo === 0){
              numeroPrimo = false;
              break
            }              
        } 
         if(numeroPrimo){
        resultadoPrimos.push(contadorDivisor)        
        }            
    } 
    return console.log({
        'Divisores Primos':resultadoPrimos
    });     
} */
  

//=================================================================


function numerosDiveres(divisor){
    for(let contadorDivisor = 1;contadorDivisor <=divisor; contadorDivisor++){
        if(divisor%contadorDivisor==0){
            resultadoDivisores.push(contadorDivisor)
        }         
    }    
}

function arrayNumerosPrimos(primos){
    for(let contadorDivisor of primos){       
        if(numeroPrimo(contadorDivisor)){
         resultadoPrimos.push(contadorDivisor)         
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
    arrayNumerosPrimos(resultadoDivisores)
    return console.log({
        'Divisores Primos':resultadoPrimos 
    }); 
}

function exibirResultadoDiviresPrimos(){
    numerosDiveres(entrada)
    return console.log({
        'Números divisores':resultadoDivisores
    }); 
}

exibirResultadoDiviresPrimos()
exibirResultadoNumerosDivisores()
