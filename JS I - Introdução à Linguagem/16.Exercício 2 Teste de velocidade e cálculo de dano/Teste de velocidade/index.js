const carro_01 = prompt("Digite o nome do primeiro carro:");
const carro_velocidade01 = parseInt(
  prompt("Digite a velocidade do primeiro carro:")
);
const carro_02 = prompt("Digite o nome do segundo carro:");
const carro_velocidade02 = parseInt(
  prompt("Digite a velocidade do primeiro carro:")
);
 if (carro_velocidade01 > carro_velocidade02) {
  alert(`O carro ${carro_01} está mais rápido`);
} else if (carro_velocidade01 < carro_velocidade02) {
  alert(`O carro ${carro_02} está mais rápido`);
} else if (carro_velocidade01 == carro_velocidade02) {
  alert("Os carros estão na mesma velocidade.");
}else{
    alert('A velocidade precisa ser um número')
}
