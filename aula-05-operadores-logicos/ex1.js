// Instalação do módulo para rodar
// npm install prompt-sync

// Chamada do módulo para rodar este programa
const prompt = require('prompt-sync')()

// Coletando a nota e a frequência (Digitando pelo usuário)
let nota = parseFloat(prompt("Informe a nota: (0 a 10): "))
let frequencia = parseFloat(prompt("Informe a frequência: (0 a 100%): "))
console.log("")

// Condicional para verificar se Aprovado ou não
if (nota >= 7 && frequencia >= 75) {
    console.log("Aluno Aprovado!")
} else {
    console.log("Aluno Reprovado!")
}
