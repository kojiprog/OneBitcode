const nomes = ["sal", "pimenta", "açucar", "salsa", "cebolinha", "feijão"];
const carne = ['gado', 'frango', 'porco']

//ADICIONAR ELEMENTOS NO FINAL DA LISTA = push
nomes.push("abacate");
console.log(nomes);

//ADICIONAR ELEMENTOS NO INICIO DA LISTA = unshift
nomes.unshift("MELÃO");
console.log(nomes);

//REMOVE ELEMENTOS NO FINAL DA LISTA = pop
nomes.pop();
console.log(nomes);

//REMOVE ELEMENTOS NO INICIO DA LISTA = shift
inicio = nomes.shift();
console.log(inicio);
console.log(nomes);

//VERIFICA SE O ELEMENTO EXISTE NA LISTA = includes - retorna true or false
const inclui = nomes.includes("Limão");
console.log(inclui);

//CORTAR
//CORTAR = slice(indice inicio; indice fim)

let corte = nomes.slice(1,3);
console.log(corte);

//CONCATENAR

const tudoJunto = corte.concat(carne, 'cordeiro')
console.log(tudoJunto);

//substituição dos elementos = splice
const tudoJuntoMisturado = tudoJunto.splice(1,2, 'laranja', 'coco')
console.log(tudoJuntoMisturado);