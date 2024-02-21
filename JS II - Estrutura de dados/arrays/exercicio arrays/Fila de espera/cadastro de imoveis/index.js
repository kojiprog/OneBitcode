const imoveis = [];
opcao = "";
do {
  
  

  const menu = prompt(`Imoveis cadastrado: ${imoveis.length}\n
    Digite a opção desejada:
    1. Cadastrar imóvel
    2. Consultar imóvel
    3. Sair`);

  switch (menu) {
    case "1":
      const imovel = {}
      imovel.proprietario = prompt('Nome do proprietário:')
      imovel.quartos = prompt('Quantidade de quartos:')
      imovel.banheiro = prompt("Quantidade de banheiros:");
      imovel.garagem = prompt("Quantidade de garagem:");

      const confirmacao = confirm(`Salvar esta imóvel?
      Proprietário: ${imovel.proprietario}
      Quantidade de quarto: ${imovel.quartos}
      Quantidade de banheiro: ${imovel.banheiro}
      Quantidade de garagem: ${imovel.garagem}`);

      if(confirmacao){
        imoveis.push(imovel)
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(`Imóvel: ${i + 1}
        Proprietário: ${imoveis[i].proprietario}
        N° Quartos: ${imoveis[i].quartos}
        N° Banheiro: ${imoveis[i].banheiro}
        N° Garagem: ${imoveis[i].garagem}`);
      }
      break;
    case "3":
      alert("Encerrando...");
      opcao = "3";
      break;

    default:
      alert("Opção inválida, tente novamente...");
      break;
  }
} while (opcao !== "3");
