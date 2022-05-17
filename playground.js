const entrada = 234;

let str = entrada.toString();

let product = 1;
let sum = 0;
let saida = 0;

for (let i = 0; i < str.length; i++){
    product *= parseInt(str[i]);
    sum += parseInt(str[i]);
}

saida = product - sum;

console.log(saida);