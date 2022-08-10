(() => {
    const button = document.querySelector('.modal-help-button-memory')
    const check = button.querySelector('.radio-in')

    button.addEventListener('click', clickButton)

    function clickButton() {
        if (check.classList.contains('is-hidden')) {
            check.classList.remove('is-hidden')
            button.dataset.memory = true
            return
        }
                    check.classList.add('is-hidden')
            button.dataset.memory = false
    }

})();