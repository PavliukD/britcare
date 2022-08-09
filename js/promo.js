(() => {
    const button = document.querySelector('.promo-button-add')
    const field = document.querySelector('.promo-add-wrap')

    button.addEventListener('click', showField)

    function showField() {
        field.classList.remove('is-hidden')
    }
})();