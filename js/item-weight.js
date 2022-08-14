(() => {
    const cards = document.querySelectorAll('.item-buy')
    console.log(cards)
    
    cards.forEach(card => new setWeight(card))

    function setWeight(card) {
        const button = card.querySelector('.item-buy-weight')
        const text = card.querySelector('.product-card-meta-weight-text')
        const weights = card.querySelectorAll('.product-card-meta-weight-variants-item')
        const weightsList = card.querySelector('.product-card-meta-weight-variants')

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