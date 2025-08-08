/*
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.9259259259
Luiz Otávio nasceu em 1980
 */
const nome = "Kauãn Kelvin";
const sobrenome = "Mendes";
const idade = 20;
const peso = 60;
const altura = 1.92;
let indiceMassaCorporal;//peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = (peso / (altura * altura));

anoNascimento = (2025 - idade);

console.log(nome, sobrenome, "tem", idade, 
"anos, pesa", peso, "Kg tem", altura,
" de altura e seu IMC é de ", indiceMassaCorporal, nome,
"nasceu em ", anoNascimento);