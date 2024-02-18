let pacientes = ["Alexandre", "Kelly", "Duda"];
opcao = true;
let ConsultaPaciente = "";
do {
  const menu = parseInt(
    prompt(
      "-= Bem vindo =-\n Escolha o opção desejada:\n 1 - Novo paciente.\n 2 - Consultar pacientes. \n 3 - Deletar paciente. \n 0 - Sair"
    )
  );

  switch (menu) {
    case 1:
      const nomePaciente = prompt("Nome do paciente:");
      alert(`Paciente: ${nomePaciente} foi cadastrado com sucesso`);
      pacientes.push(nomePaciente);
      console.log(pacientes);
      break;
    case 2:
      ConsultaPaciente = "";
      for (i = 0; i < pacientes.length; i++) {
        ConsultaPaciente += `Paciente numero: [${i + 1}]: ${pacientes[i]}\n`;
      }
      alert(ConsultaPaciente);
      break;
    case 3:
      ConsultaPaciente = "";
      for (i = 0; i < pacientes.length; i++) {
        ConsultaPaciente += `Paciente numero: [${i + 1}]: ${pacientes[i]}\n`;
      }
      let deletarPaciente = parseInt(
        prompt(
          `Digite o numero do paciente que deseja deletar:\n Pacientes cadastrados:\n ${ConsultaPaciente}`
        )
      );
      consultaNumero = pacientes.includes(pacientes[deletarPaciente - 1]);
      console.log(consultaNumero);
      if (consultaNumero == true) {
        pacienteDeletado = pacientes.splice(deletarPaciente - 1, 1);
        alert(`Paciente ${pacienteDeletado} foi excluido com sucesso.`);
      } else {
        alert("Opção invalida, tente novamente.");
      }
      break;
    case 0:
      alert("Encerrando o Programa...");
      alert("Progama encerrado");
      opcao = false;
      break;

    default:
      alert("Opção invalida, tente novamente.");
      break;
  }
} while (opcao == true);
