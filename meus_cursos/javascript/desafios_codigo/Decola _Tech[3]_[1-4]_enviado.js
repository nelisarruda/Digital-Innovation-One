/*
 ============== Desafio de C�digo - Decola Tech #3  ==============  
 1 / 4 - Soma de Pares Consecutivos
 ----------------------------------------------------------------
 O programa deve ler um valor inteiro D indefinidas vezes, ele s� ir� parar quando o valor de D for igual a 0.
 Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par.
 Se o valor de entrada for 4, por exemplo, a sa�da deve ser 40, que � o resultado da opera��o: 4+6+8+10+12,
 enquanto que se o valor de entrada for 11, por exempo, a sa�da deve ser 80, que � a soma de 12+14+16+18+20.

*/


let x = parseInt(gets());
while (x !== 0)
{
    let soma = 0
    if  (x % 2  !== 0  )
    {
        x =x+1;
    }
    for (let i = 0; i < 5; i++) {
        soma += x;
        x += 2;
    }
    print(soma);
    x = parseInt(gets());
}
