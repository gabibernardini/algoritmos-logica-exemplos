const prompt = require("prompt-sync")();

// Entrada de dados
const resposta = prompt("O produto está esgotado? (s/n): ").toLowerCase();

// Transformamos a resposta em um valor Booleano (true/false)
const estaEsgotado = resposta === "s";

// Verificação das condições
if (!estaEsgotado) {
    // Se NÃO (!) está esgotado, o produto está disponível
    console.log("Produto disponível para venda.");
    
    console.log("--- Executando código de venda... ---");
    // O seu código de venda (processar pagamento, dar baixa no sistema, etc.) entra aqui!
    
} else {
    // Caso contrário (se está esgotado)
    console.log("Por favor, reabasteça o estoque.");
}