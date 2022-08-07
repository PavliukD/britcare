(() => {
    const button = document.querySelector('.header-shop-button')
    const menu = document.querySelector('.header-shop-nav')
    const iconUp = document.querySelector('[data-shop-button-up]')
    const iconDown = document.querySelector('[data-shop-button-bottom]')

    button.addEventListener('click', onCick)

    function onCick(){
        if (menu.classList.contains('is-hidden')) {
            menu.classList.remove('is-hidden')
            console.log(menu.classList)
            iconDown.classList.add('is-hidden')
            iconUp.classList.remove('is-hidden')
            return
        }
        menu.classList.add('is-hidden')
        console.log(menu.classList)
        iconDown.classList.remove('is-hidden')
        iconUp.classList.add('is-hidden')
    }
})()