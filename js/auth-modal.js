(() => {
    const open = document.querySelector('.header-user-link')
    const close = document.querySelector('.auth-close-modal')
    const backdrop = document.querySelector('.auth')

    open.addEventListener('click', toggleModal)
    close.addEventListener('click', toggleModal)

    function toggleModal() {
        backdrop.classList.toggle('is-hidden')
    }
})();