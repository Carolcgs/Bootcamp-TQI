var jogador1 =0
var jogador2= 0
var placar


// if ternário
jogador1 != -1 &&jogador2 != -1 ? console.log('Os jogadores são válidos.') : console.log('Os jogadores são inválidos.')// if ternário estudar mais sobre ele

//usando o if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto.')
    placar =jogador1 >jogador2
} 
//usando else if
else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto')
}
// usando else
else {
    console.log('Ninguém marcou ponto')
}

//usando switch
/* switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!')
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!')
        break;
    default:
    console.log('Niguém ganhou!')
} */

/* Laços de repetição
são estruturas condicionais que repetem uma instrução até atingir determinada confição elas são. ex: for, for/in, for/of, while, do/while,*/

let array = ['valor1','valor2','valor3','valor4','valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2',propriedade3: 'valor3'}

//for executa uma instrução até que ela seja falsa
/* for(let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

for(let i in array){
    console.log(i)

}

// ex: for in com object
for(i in object){
    console.log(i)
} */
 
// for/of
for(i of array){
    console.log(i)
}

//while

var a = 0
/* while(a < 10){
    a++
    console.log(a)
} */
//do/while

do {
    a++
    console.log(a);
}while(a<10)

