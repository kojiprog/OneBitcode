let nomePersonagemAtaque = prompt('Digite o nome do personagem que vai atacar:')
let poderPersonagemAtaque = parseInt(prompt('Digite o poder do Personagem:'))

let nomePersonagemDefesa = prompt('Digite o nome do personagem que vai defender:')
let vidaPersonagemDefesa = parseInt(prompt('Quantidade de Vida:'))
let defesaPersonagemDefesa = parseInt(prompt('Quantidade de Defesa:'))
let escudoPersonagemDefesa = prompt('Possui escudo? [S ou N]')
let vidaAposAtaque = 0

if(escudoPersonagemDefesa == "S" || escudoPersonagemDefesa == "s"){
    escudoPersonagemDefesa = true  
}else if(escudoPersonagemDefesa == "N" || escudoPersonagemDefesa == "n"){
    escudoPersonagemDefesa = false
}

if(poderPersonagemAtaque > defesaPersonagemDefesa && escudoPersonagemDefesa == false){
    vidaAposAtaque = vidaPersonagemDefesa -(poderPersonagemAtaque - defesaPersonagemDefesa)
}else if(poderPersonagemAtaque > defesaPersonagemDefesa && escudoPersonagemDefesa == true){
    vidaAposAtaque = vidaPersonagemDefesa - ((poderPersonagemAtaque - defesaPersonagemDefesa)/2)
}else {
    alert(`O personagem ${nomePersonagemAtaque} não causou dano no personagem ${nomePersonagemDefesa}`)
    vidaAposAtaque = vidaPersonagemDefesa
}

alert(` -=== STATUS PERSONAGEM QUE ATACA ===-
Nome: ${nomePersonagemAtaque}.
Poder: ${poderPersonagemAtaque}\n\n
-=== STATUS PERSONAGEM QUE DEFENDE ===-
Nome: ${nomePersonagemDefesa}.
Vida: ${vidaPersonagemDefesa}.
Defesa: ${defesaPersonagemDefesa}
Escudo: ${escudoPersonagemDefesa}

- === STATUS APOS ATAQUE === -
Nome: ${nomePersonagemDefesa}.
Vida: ${vidaAposAtaque}.
Defesa: ${defesaPersonagemDefesa}
Escudo: ${escudoPersonagemDefesa}
`)