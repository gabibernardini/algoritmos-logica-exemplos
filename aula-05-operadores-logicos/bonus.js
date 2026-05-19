const prompt = require("prompt-sync")();

// Entrada de dados
const valorCompra = parseFloat(prompt("Digite o valor da compra: "));
const ehVip = prompt("É cliente VIP? (s/n): ").toLowerCase();
const temCupom = prompt("Possui cupom? (s/n): ").toLowerCase();
const parcelasAtrasadas = prompt("Tem parcelas atrasadas? (s/n): ").toLowerCase();


const isVip = ehVip === "s";
const hasCupom = temCupom === "s";
const hasAtraso = parcelasAtrasadas === "s";

// Verificação dos Cenários
// Cenário A: VIP E compra > 500
const cenarioA = isVip && valorCompra > 500;

// Cenário B: tem cupom E NÃO possui parcelas atrasadas
const cenarioB = hasCupom && !hasAtraso;

// Decisão do Super Desconto (Cenário A OU Cenário B)
if (cenarioA || cenarioB) {
    console.log("Parabéns! O Super Desconto foi APLICADO.");
} else {
    console.log("Desculpe, o desconto foi NEGADO.");
}