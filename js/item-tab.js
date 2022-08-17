(() => {
    const items = document.querySelectorAll('.item-checkout-select')
    
    items.forEach(item => {

        item.addEventListener('click', () => {
            const text = item.getElementsByTagName('p')
            text[0].classList.toggle('is-hidden')
        })
    })
})();