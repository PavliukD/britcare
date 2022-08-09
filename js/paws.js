(() => {
    const paws = document.querySelector('.give-four-icons-wrap')
    const button = document.querySelector('.give-four-button')

    button.addEventListener('mouseover', showPaws)
    button.addEventListener('mouseout', hidePaws)

    function showPaws() {
        paws.style.display = "block"
    }

    function hidePaws() {
        paws.style.display = "none"
    }

})()