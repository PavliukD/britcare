(() => {
    const slider = document.querySelector('.filter-frice-slider')
    const priseInput = document.querySelector('.filter-price-input')

    priseInput.value = slider.max
    slider.value = slider.max

    slider.addEventListener('input', () => {
        priseInput.value = slider.value
    })

    priseInput.addEventListener('input', () => {
        slider.value = priseInput.value
    })

})();