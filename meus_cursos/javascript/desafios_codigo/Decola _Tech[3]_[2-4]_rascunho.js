/*
 ======================== Desafio de C�digo - Decola Tech #3  ========================  
 2 / 4 - 
 ----------------------------------------------------------------
Enunciado:

Com base na tabela abaixo, escreva um programa que leia o c�digo de um item e a quantidade deste item.
A seguir, calcule e mostre o valor da conta a pagar.

---------------------------------------------------
|   CODIGO          ESPECIFICA��O       PRE�O     |
---------------------------------------------------
|     1               Hotdog         R$ 4.00      |
|     2              X-Salada        R$ 4.50      |
|     3              X-Bacon         R$ 5.00      |
|     4           Torrada Simples    R$ 2.00      |
|     5            Refrigerante      R$ 1.50      |
---------------------------------------------------

*/
// ======================== C�digo original do desafio vvvv ========================

// a fun��o gets � implementada dentro do sistema para ler as entradas(inputs) dos dados e a fun��o print para imprimir a sa�da (output) de dados e j� pula uma linha ("\n")
// Abaixo segue um exemplo de c�digo que voc� pode ou n�o utilizar

// let lines = gets().split("\n");
// let line = lines.shift().split(" ");
// let X = parseInt(line[0]);
// let Y = parseInt(line[1]);

// var price = 0;

//     if (X == ) {
//       price  = ;
//     }
//     else if (X == ) {
//       price  = ;
//     }
//     else if (X == ) {
//       price  =  ;
//     }
//     else if (X == ) {
//       price  =  ;
//     }
//     else if (X == ) {
//       price  =  ;
//     }
//     print( ""  +     .toFixed());

// C�digo pr�prio vvvvv



let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

var price = 0;

if (X == 1) price = 4.00;

else if (X == 2) price = 4.50;

else if (X == 3) price = 5.00;

else if (X == 4) price = 2.00;

else if (X == 5) price = 1.50;

print( "Total: R$ "  + (line[1] * price).toFixed(2));