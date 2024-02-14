const name = prompt("Digite seu nome:");
let cidades = ""
numeroCidade = 0

let opcao = prompt("Já visitou alguma cidade? s (sim) | n (nao)");
opcao.toLowerCase()
while (opcao === "s") {
   if (opcao === "s"){
    cidade = prompt('Digite o nome da cidade:')
    cidades += " - " + cidade + "\n"
    numeroCidade ++
    opcao = prompt('Você visitou alguma outra cidade? s (sim) | n (nao)')
  }
  }

  alert(`
  Nome: ${name}.\n
  Cidades visitadas: \n${cidades}\n
  Número de Cidades visitadas: ${numeroCidade}
  `)


