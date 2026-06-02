// Importando o módulo
const prompt = require('prompt-sync')()

// Pergunta de qual é o valor da nota
let nota = Number(prompt('Digite a nota do aluno (digite -1 para encerrar): '))

// Declarando variáveis
let soma = 0
let contador = 0

// Lógica para calcular
while (nota !== -1) { // enquanto variável nota for diferente de -1
    soma += nota // Guarda a soma de todos os valores digitados
    contador++ // Incrementa o contador

    nota = Number(prompt('Digite a nota do aluno (digite -1 para encerrar): '))
}

// Calculando a média e exibindo na tela
if (contador > 0) {
    // Calcula a média pegando a soma dos valores 
    // e dividindo pelo número de valores digitados
    let media = soma / contador

    // Exibe na tela
    console.log('A média das notas é: ', media.toFixed(2))
} else {
    console.log('Nenhuma nota foi informada. ')
}