
import { data } from './database.js'

let carrinho = []

let cart = document.querySelector('.listCart')

let valorTotal = 0


let vitrine = document.querySelector('.vitrine')

function addCart (event){
    document.querySelector('.cartSpan').style.display = "none"
    document.querySelector('.textCart').style.display = "none"
   let id = event.target.getAttribute('id')
   for(let i = 0; i < data.length; i++){
       if(data[i].id == id){
           carrinho.push(data[i].id)
           valorTotal += data[i].value

           let div = document.createElement('div')
           let img = document.createElement('img')
           let div2 = document.createElement('div')
           let p1 = document.createElement('p')
           let p2 = document.createElement('p')
           let p3 = document.createElement('p')

           div.classList.add('compra')
           img.classList.add('final')
           div2.classList.add('container')
           p1.classList.add('final1')
           p2.classList.add('final2')
           p3.classList.add('final3')

           p1.innerText = data[i].nameItem
           p2.innerText = data[i].value.toFixed(2)
           p3.innerText = "Remover produto"
           
           img.setAttribute('src', data[i].img)

           p3.setAttribute('id', data[i].id)

           p3.setAttribute('valor', data[i].value)

           p3.addEventListener('click', removeCart )

           div.setAttribute('id', `cart-item-${data[i].id}`)

           cart.appendChild(div)
           div.appendChild(img)
           div.appendChild(div2)
           div2.appendChild(p1)
           div2.appendChild(p2)
           div2.appendChild(p3)

       }
   }
   document.querySelector('.quantidadeCart').innerText = carrinho.length
   document.querySelector('.valorCart').innerText = `R$ ${valorTotal.toFixed(2)}`
}

function removeCart(event){
    let price = event.target.getAttribute('valor')
    let id = event.target.getAttribute('id')

    for(let i = 0; i < carrinho.length; i++){
        if(carrinho[i] == id){
            carrinho.splice(i, 1)
            valorTotal -= price

            document.querySelector(`#cart-item-${id}`).remove()
        }
    }

    if(carrinho.length == 0){
        document.querySelector('.cartSpan').style.display = "block"
        document.querySelector('.textCart').style.display = "block"
    }
    document.querySelector('.quantidadeCart').innerText = carrinho.length
    document.querySelector('.valorCart').innerText = `R$ ${valorTotal.toFixed(2)}`
    
}

for(let i = 0; i < data.length; i++){
    let div = document.createElement('div')
    let img = document.createElement('img')
    let link1 = document.createElement('a')
    let h5 = document.createElement('h5')
    let paragrafo = document.createElement('p')
    let span = document.createElement('span')
    let link2 = document.createElement('a')

    div.classList.add('cards')
    img.classList.add('visualizar')
    paragrafo.classList.add('descricao')
    span.classList.add('valor')
    link1.classList.add('tipo')
    link2.classList.add('carrinho')

    img.setAttribute('src', data[i].img)

    link1.innerText = data[i].tag[0]
    h5.innerText = data[i].nameItem
    paragrafo.innerText = data[i].description
    span.innerText = `R$ ${data[i].value.toFixed(2)}`
    link2.innerText = data[i].addCart

    link2.setAttribute('id', data[i].id)
    link2.addEventListener('click', addCart)

    vitrine.appendChild(div)
    div.appendChild(img)
    div.appendChild(link1)
    div.appendChild(h5)
    div.appendChild(paragrafo)
    div.appendChild(span)
    div.appendChild(link2)

}


