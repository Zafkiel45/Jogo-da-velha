const player = document.querySelectorAll('.player');
const blocks = document.querySelectorAll('.item')
let cont = 0

blocks.forEach(function(item){
    return item.addEventListener('click', function(color){
        let evento = color.target
        if(player[0].classList.contains('active-1')) {
            if(evento.classList.contains('white')){
                evento.style.backgroundColor = 'red'
                evento.classList.remove('white')
                evento.classList.add('red')
                player[0].classList.remove('active-1')
                player[1].classList.add('active-2')
                cont++
            }
        } else if(player[1].classList.contains('active-2')){
            if(evento.classList.contains('white')){
                evento.style.backgroundColor = 'blue'
                evento.classList.remove('white')
                evento.classList.add('blue')
                player[1].classList.remove('active-2')
                player[0].classList.add('active-1')
                cont++
            }
        }

        if(blocks[0].classList.contains('red') && blocks[1].classList.contains('red') && blocks[2].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[0].classList.contains('red') && blocks[4].classList.contains('red') && blocks[8].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[2].classList.contains('red') && blocks[4].classList.contains('red') && blocks[6].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[0].classList.contains('red') && blocks[3].classList.contains('red') && blocks[6].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[1].classList.contains('red') && blocks[4].classList.contains('red') && blocks[7].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[2].classList.contains('red') && blocks[5].classList.contains('red') && blocks[8].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[3].classList.contains('red') && blocks[4].classList.contains('red') && blocks[5].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()

        } else if(blocks[6].classList.contains('red') && blocks[7].classList.contains('red') && blocks[8].classList.contains('red')){
            alert('Vermelho venceu')
            location.reload()
            //Aqui é a possibilidade dos azuis ganharem
        }else if(blocks[0].classList.contains('blue') && blocks[1].classList.contains('blue') && blocks[2].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()
            
        } else if(blocks[0].classList.contains('blue') && blocks[4].classList.contains('blue') && blocks[8].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[2].classList.contains('blue') && blocks[4].classList.contains('blue') && blocks[6].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[0].classList.contains('blue') && blocks[3].classList.contains('blue') && blocks[6].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[1].classList.contains('blue') && blocks[4].classList.contains('blue') && blocks[7].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[2].classList.contains('blue') && blocks[5].classList.contains('blue') && blocks[8].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[3].classList.contains('blue') && blocks[4].classList.contains('blue') && blocks[5].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()

        } else if(blocks[6].classList.contains('blue') && blocks[7].classList.contains('blue') && blocks[8].classList.contains('blue')){
            alert('Azul venceu')
            location.reload()
        } else if(cont == 9) {
            alert('velha')
        }
    })
})




