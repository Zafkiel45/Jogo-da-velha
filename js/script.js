const player = document.querySelectorAll('.player');
const blocks = document.querySelectorAll('.item')
let cont = 0
let playerIndex = 0


// POSSIBILIDADES DE COMBINAÇÕES PARA VENCER NO JOGO DA VELHA
const winner = [
    [0,1,2],
    [3,4,5], // Horizontal 
    [6,7,8],

    [0,4,8],
    [2,4,6], // vertical

    [0,3,6],
    [1,4,7], //diagnal
    [2,5,8],
]


blocks.forEach(function(evento){ // para cada elemento no "blocks"
    evento.addEventListener('click', function(item){ // adiciona o elemento "click"
        const color = item.target // pega o elemento que teve o evento ativado

        if(playerIndex == 0 && evento.classList.contains('white')){ // condicional
            color.style.backgroundColor = 'red' // altera para fundo vermelho
            evento.classList.remove('white') // remove a classe "white"
            evento.classList.add('red') // adiciona a classe "red"
            cont++ // incrementa a variável "cont" 
            playerIndex++ // incrementa "playIndex"
            vencedor() // chama a função "vencedor()" e se caso as condições forem atendidas, mostra uma mensagem
        } else if(playerIndex == 1 && evento.classList.contains('white')){ // funciona da mesma forma que anterior
            color.style.backgroundColor = 'blue'
            evento.classList.remove('white')
            evento.classList.add('blue')
            cont++
            playerIndex-- // decremanda a variável "playIndex"
            vencedor()
        }
    })
})

function vencedor(){ // cria uma função com o nome vencedor()
    for(let element = 0; element < winner.length; element++){ // laço que passa por todos os elementos do "winner"
        const [i,j,k] = winner[element] // armazena os valores do elemento nas 3 variáveis

        // quando atingir alguma das condições, mostra o vencedor 
        // Ou da velha
        if(blocks[i].classList.contains('red') &&
        blocks[j].classList.contains('red') && // 
        blocks[k].classList.contains('red')){
            return (alert('vermelho venceu'), location.reload())
        } else if(blocks[i].classList.contains('blue') &&
        blocks[j].classList.contains('blue') &&
        blocks[k].classList.contains('blue')){
            return alert('azul venceu'), location.reload()
        } else if(cont == 9) {
            return alert('deu velha'), location.reload()
        }
    }
}




