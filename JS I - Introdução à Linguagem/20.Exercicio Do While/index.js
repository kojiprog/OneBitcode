let opcao = "5"
do {
 opcao = prompt(`Olá, digite o númeto da opção desejada:
opção 1
opção 2
opção 3
opção 4
opção5`)
    switch (opcao) {
        case "1":
            alert('opção 1 selecionada')
            break;
        case "2":
        alert('opção 2 selecionada')
            break
        case "3":
        alert('opção 3 selecionada')
            break
        case "4":
        alert('opção 4 selecionada')
            break
        case "5":
        alert('Encerrando o Programa')
            break
    
        default:
            alert('Opção inválida')
            break;
    }
} while (opcao !== "5");