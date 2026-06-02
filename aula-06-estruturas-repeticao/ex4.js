const prompt = require('prompt-sync')()

// Declara a variável que vai armazenar a senha digitada
let senha;

// Estrutura de repetição do...while (Faça...Enquanto)
do {
    // Esse bloco sempre vai rodar pelo menos a primeira vez
    senha = prompt("Digite a senha de acesso: ");

    if (senha !== "1234") {
        console.log("Senha incorreta! Tente novamente.");
    }

} while (senha !== "1234"); // Condição de teste no final

// Só chega aqui quando a condição do while virar FALSA (ou seja, quando a senha for "1234")
console.log("Acesso permitido!");