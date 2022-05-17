
/*
 ============== Desafios Iniciais Js - Carrefour Web #1  ==============  
 1 / 3 - Teorema da Divisão Euclidiana
 ----------------------------------------------------------------
Enunciado:

Desafio
Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 

*/
/* ======================== Codigo original do desafio ========================

// a funcao gets e implementada dentro do sistema para ler as entradas(inputs) dos dados e a funcao print para imprimir a sa?da (output) de dados e j? pula uma linha ("\n")
// Abaixo segue um exemplo de codigo que voce pode ou nao utilizar

let totalDeDias = parseInt(gets());

let qtdAnos, qtdMeses;

qtdAnos = parseInt(          );
totalDeDias= totalDeDias %       ;

qtdMeses= parseInt(             );
totalDeDias=                            ;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

print(resultado);

*/
// ============================= codigo proprio =============================
let idadeEmDias = 400;

let qtdDias, qtdMeses, qtdAnos;


qtdAnos = idadeEmDias / 365;
qtdMeses = (idadeEmDias % 365)/12;
qtdDias = meses % 30;


let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
qtdDias + " dia(s)");

console.log(resultado);