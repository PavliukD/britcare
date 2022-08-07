(() => {
    const modal = document.querySelector('[data-modal]')
    const acceptButton = document.querySelector('[data-modal-accept-button]')

    acceptButton.addEventListener('click', onclick)

    function onclick() {
        modal.classList.add('is-hidden')
    }
})();