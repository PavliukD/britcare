(() => {
    const button = document.querySelector('.footer-rewind-button')

    button.addEventListener('click', onClick)

    function onClick() {
        window.scrollTo(0, 0)
    }
})();