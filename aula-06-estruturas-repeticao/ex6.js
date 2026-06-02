const prompt = require('prompt-sync')()

// Solicita o número ao usuário e converte para inteiro
let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

console.log("\n--- Tabuada do " + numero + " ---");

// Estrutura de repetição Para (For) de 1 até 10
for (let i = 1; i <= 10; i++) {
    // Calcula o resultado da linha atual
    let resultado = numero * i;
    
    // Exibe formatado: Ex: 5 x 1 = 5
    console.log(numero + " x " + i + " = " + resultado);
}