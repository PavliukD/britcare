(() => {
    const cards = document.querySelectorAll('.item-product-card')
    const buttons = document.querySelectorAll('.promotional-goods-button')

    let startSet = 1

    const step = 4

    const pages = Math.ceil(cards.length / step)

    buttons[1].addEventListener('click', () => {
        for (let i = 0; i < (startSet) * step; i++){
            cards[i].classList.add('is-hidden')
        }
        
        for (let i = startSet * step; i < (startSet + 1) * step; i++){
            if (!cards[i]) {
                return
            }
            cards[i].classList.remove('is-hidden')
        }
        startSet++
        if (startSet > pages) {
            startSet = pages
        }
    })

    buttons[0].addEventListener('click', () => {
        startSet--
        if (startSet < 1) {
            startSet = 1
        }
        console.log(startSet)
        for (let i = (startSet - 1) * step; i < (startSet) * step; i++){
            if (!cards[i]) {
                return
            }
            cards[i].classList.remove('is-hidden')
        }
        for (let i = (startSet ) * step; i < startSet * step; i++){
            if (!cards[i]) {
                return
            }
            cards[i].classList.add('is-hidden')
        }
        console.log(startSet)
        

    })
})();