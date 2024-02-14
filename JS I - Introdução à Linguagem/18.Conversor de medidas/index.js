const medida = parseFloat(
  prompt("Informe o valor em (m)metros:")
);

const opcao = parseInt(
  prompt(
    "Selecione o número correspondente a opção desejada:\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)"
  )
);

switch (opcao) {
    case 1:
        result = medida*1000
        alert(`${medida}(m) em milímetro: ${result}(mm)`)
        break;
    case 2:
        result = medida*100
        alert(`${medida}(m) em centímetro: ${result}(cm)`)
        break;
    case 3:
        result = medida*10
        alert(`${medida}(m) em decímetro: ${result}(dm)`)
        break;
    case 4:
        result = medida /10
        alert(`${medida}(m) em decâmetro: ${result}(dam)`)
        break;
    case 5:
        result = medida / 100
        alert(`${medida}(m) em hectômetro: ${result}(hm)`)
        break;
    case 6:
        result = medida /1000
        alert(`${medida}(m) em quilômetro: ${result}(km)`)
        break;

    default:
        alert('Opção Invalida, tente novamente.')
        break;
}