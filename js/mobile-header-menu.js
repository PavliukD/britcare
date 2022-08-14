(() => {
    const openButton = document.querySelector('.mobile-header-menu-open')
    const closeButton = document.querySelector('.mobile-header-menu-close')
    const menu = document.querySelector('.header-nav')
    const items = document.querySelectorAll('.header-user-item')

    openButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)

    function toggleMenu() {
        openButton.classList.toggle('is-hidden')
        closeButton.classList.toggle('is-hidden')

        if (openButton.classList.contains('is-hidden')) {
            menu.style.display = "block"
            items[0].style.display = "block"
            return
        }
                    menu.style.display = "none"
            items[0].style.display = "none"
    }
})();