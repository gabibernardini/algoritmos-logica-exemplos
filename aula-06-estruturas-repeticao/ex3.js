const prompt = require('prompt-sync')()

// Solicita o número ao usuário e converte para inteiro
let numero = parseInt(prompt("Digite um número inteiro positivo: "));

// Inicializa as variáveis de controle e acumulação
let contador = 1;
let soma = 0;

// Estrutura de repetição Enquanto (While)
while (contador <= numero) {
    soma = soma + contador; 
    contador++;             
}

// Exibe o resultado final
console.log("A soma de 1 até " + numero + " é: " + soma);