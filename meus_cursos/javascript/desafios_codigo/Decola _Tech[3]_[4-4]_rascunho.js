/*
 ============== Desafio de Código - Decola Tech #3  ==============  
 4 / 4 - 
 ----------------------------------------------------------------
Enunciado:
Dado um inteiro num, retorne o número de etapas para reduzi-lo a zero .
Em uma etapa, se o número atual for par, você deve dividi-lo por 2, caso contrário, você deve subtrair 1 dele.

===================== Exemplo 1 =====================

Entrada: 4
Saída: 6

Explicação: 

Etapa 1) 14 é par; divida por 2 e obtenha 7. 
Etapa 2) 7 é ímpar; subtraia 1 e obtenha 6.
Etapa 3) 6 é par; divida por 2 e obtenha 3. 
Etapa 4) 3 é ímpar; subtraia 1 e obtenha 2. 
Etapa 5) 2 é par; divida por 2 e obtenha 1. 
Etapa 6) 1 é ímpar; subtraia 1 e obtenha 0.

===================== Exemplo 2 =====================

Entrada: 8
Saída: 4

Explicação: 

Etapa 1) 8 é par; divida por 2 e obtenha 4. 
Etapa 2) 4 é par; divida por 2 e obtenha 2. 
Etapa 3) 2 é par; divida por 2 e obtenha 1. 
Etapa 4) 1 é ímpar; subtraia 1 e obtenha 0.


*/
/* ======================== Código original do desafio ========================

let lines =       ;
 
var numberOfSteps =                                          ;
      num = parseInt(          );
 
    let count = 0;
    while(num        ){
        (num%2       ) ? num=    /2: num=            ;
        count++;
    }
print(            ) ;


*/
// ============================= Código próprio =============================

const entrada = [14, 8];

const gets = () => entrada.shift()

let lines = gets();
 
// var numberOfSteps = count;
      num = parseInt(lines);
 
    let count = 0;
    while(num >= 1){
        if(num % 2 === 0 ) num /=2;
        else num -= 1;
        count++;
    }
console.log(count);


