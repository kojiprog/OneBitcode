const name = prompt("Digite seu nome:");
const lastName = prompt("Digite seu sobrenome:");
const fieldOfStudy = prompt("Campo de estudos:");
const yearOfBirth = parseInt(prompt("Ano de nascimento:"));

alert(`Nome completo: ${name + "  " + lastName}\n
Campo de estudos: ${fieldOfStudy}\n
Idade: ${2024 - yearOfBirth}`);
