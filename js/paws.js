(() => {
    const paws = document.querySelector('.give-four-icons-wrap')
    const button = document.querySelector('.give-four-button')
    const text = document.querySelector('.give-four-button-text')
    const icon = document.querySelector('.give-four-button-icon')

    button.addEventListener('click', showPaws)

    function showPaws() {
        paws.style.display = "block"
        button.style.backgroundColor = "#1C1919"
        text.style.color = "#F6B626"
        icon.style.fill = "#F6B626"
    }
})()