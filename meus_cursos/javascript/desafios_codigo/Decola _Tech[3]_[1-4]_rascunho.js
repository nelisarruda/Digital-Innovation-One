/*
 ============== Desafio de Código - Decola Tech #3  ==============  
 1 / 4 - Soma de Pares Consecutivos
 ----------------------------------------------------------------
 O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0.
 Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par.
 Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12,
 enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

*/

var d = -1;
var meuArray = [];

function total(meuArray) {
  var soma = 0;
  for (var i = 0; i < meuArray.length; i++) {
    soma += meuArray[i];
  }
  return soma;
}

function nRam(d) {
  return d = Math.floor(Math.random() * 12);
}

while (d !== 0) {
  d = nRam();

  if ((d % 2 === 0) && (d !== 0)) {
    meuArray[0] = d
    for (i = 0; i < 4; i++) {
      meuArray[i + 1] = meuArray[i] + 2;
    }
    console.log(total(meuArray))
  }
  else if ((d % 2 !== 0) && (d !== 0)) {
    meuArray[0] = d + 1;
    for (i = 0; i < 4; i++) {
      meuArray[i + 1] = meuArray[i] + 2;
    }
    console.log(total(meuArray))
  }
}
