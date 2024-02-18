const numero = parseInt(prompt("Digite o número desejado:"))
resultado = ""
for (let i = 0; i <= 20; i++) {
 
    result = numero * i;
    resultado += "Tabuada de " + numero + "x" + i + ": " + result + "\n";

}

alert(resultado)