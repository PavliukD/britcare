(() => {
    const button = document.querySelector('.open-filters-button')
    const openImage = document.querySelector('.open-filters-button-image-open')
    const closeImage = document.querySelector('.open-filters-button-image-close')
    const openText = document.querySelector('.open-filters-button-text-open')
    const closeText = document.querySelector('.open-filters-button-text-close')
    const filter = document.querySelector('.shop-filter')

    button.addEventListener('click', onClick)

    function onClick() {
        button.classList.toggle('open')
        openImage.classList.toggle('is-hidden')
        closeImage.classList.toggle('is-hidden')
        openText.classList.toggle('is-hidden')
        closeText.classList.toggle('is-hidden')

        if (button.classList.contains('open')) {
            filter.style.display = "none"
            return
        }

        filter.style.display = "block"
    }
})();