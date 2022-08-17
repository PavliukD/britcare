(() => {
    let cards = document.querySelectorAll('.product-card')
    if (cards.length === 0){
        cards = document.querySelectorAll('.shop-product-card')
    }
    if (cards.length === 0){
        cards = document.querySelectorAll('.item-product-card')
    }
    
    cards.forEach(card => new setWeight(card))

    function setWeight(card) {
        let button = card.querySelector('.product-card-meta-weight')
        if (!button){
            button = card.querySelector('.shop-product-card-meta-weight')
        }
        const text = card.querySelector('.product-card-meta-weight-text')
        let weights = card.querySelectorAll('.product-card-meta-weight-variants-item')
        if (weights.length === 0){
            weights = card.querySelectorAll('.shop-product-card-meta-weight-variants-item')
        }
        if (weights.length === 0){
            weights = card.querySelectorAll('.item-product-card-meta-weight-variants-item')
        }
        let weightsList = card.querySelector('.product-card-meta-weight-variants')
        if (!weightsList){
            weightsList = card.querySelector('.item-product-card-meta-weight-variants')
        }

        button.addEventListener('click', clickButton)

        function filterWeights() {
            weights.forEach(weight => {
            new changeWeight(weight)
            if (weight.innerText.trim() === text.innerText) {
                weight.classList.add('is-hidden')
                return
            }
        })
        }

        function changeWeight(weight) {
            weight.addEventListener('click', (e) => {
                text.innerText = e.target.innerText.trim()
                weightsList.classList.add('is-hidden')
            })
        }

        function clickButton() {
            weightsList.classList.toggle('is-hidden')
            weights.forEach(weight => weight.classList.remove('is-hidden'))
            filterWeights()
        }

    }
})();