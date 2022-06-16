let N = parseInt(gets());
let jogador1, jogador2;

for (let i = 0; i < N; i++) {
    jogador1 = gets().toLowerCase();
    jogador2 = gets().toLowerCase();
            
    if(jogador1 === "ataque" && jogador2 === "ataque")
        print("Aniquilacao mutua");
    else if (jogador1 === "papel" && jogador2 === "papel")
        print("Ambos venceram");
    else if (jogador1 === "ataque") print("Jogador 1 venceu");
    else if (jogador2 === "ataque") print("Jogador 2 venceu");
    else if (jogador2 === "papel") print("Jogador 1 venceu");
    else if (jogador1 === "papel") print("Jogador 2 venceu");
    else print("Sem ganhador");
}