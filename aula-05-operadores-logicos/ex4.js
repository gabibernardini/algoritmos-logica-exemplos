const prompt = require("prompt-sync")();

// Entrada de dados
const idade = parseInt(prompt("Digite a idade do candidato: "));
const sabeJS = prompt("Sabe JavaScript? (s/n): ").toLowerCase();
const sabePython = prompt("Sabe Python? (s/n): ").toLowerCase();

// Converter as respostas de texto para booleano (true/false)
const temIdade = idade >= 18;
const programadorJS = sabeJS === "s";
const programadorPython = sabePython === "s";

// Verificação das condições
if (temIdade && (programadorJS || programadorPython)) {
    console.log("Currículo Aceito para a vaga!");
} else {
    console.log("Currículo Recusado.");
}