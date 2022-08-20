
// header-shop-button
(() => {
    const button = document.querySelector('.header-shop-button')
    const menu = document.querySelector('.header-shop-nav')
    const iconUp = document.querySelector('[data-shop-button-up]')
    const iconDown = document.querySelector('[data-shop-button-bottom]')

    button.addEventListener('click', onCick)

    function onCick() {
        if (menu.classList.contains('is-hidden')) {
            menu.classList.remove('is-hidden')
            iconDown.classList.add('is-hidden')
            iconUp.classList.remove('is-hidden')
            return
        }
        menu.classList.add('is-hidden')
        iconDown.classList.remove('is-hidden')
        iconUp.classList.add('is-hidden')
    }
})();

// modal
(() => {
    const modal = document.querySelector('[data-modal]')
    const acceptButton = document.querySelector('[data-modal-accept-button]')

    acceptButton.addEventListener('click', onclick)

    function onclick() {
        modal.classList.add('is-hidden')
    }
})();


// faq
(() => {
    const questions = document.querySelectorAll('[data-faq-question]')

    questions.forEach(element => new CreateAction(element))

    function CreateAction(element) {
        const button = element.querySelector('.faq-questions-list-item-button')
        const title = element.querySelector('.faq-question-title')
        const text = element.querySelector('.faq-question-answer-text')
        const iconUp = element.querySelector('[data-faq-icon-up]')
        const iconDown = element.querySelector('[data-faq-icon-down]')
        
        button.addEventListener('click', onClick)

        function onClick() {
            if (element.classList.contains('hide-answer')) {
                element.classList.remove('hide-answer')
                element.classList.add('open-answer')
                title.classList.remove('hide-answer')
                title.classList.add('open-answer')
                text.classList.remove('hide-answer')
                text.classList.add('open-answer')
                iconUp.classList.remove('is-hidden')
                iconDown.classList.add('is-hidden')
                return
            }
            element.classList.add('hide-answer')
            element.classList.remove('open-answer')
            title.classList.add('hide-answer')
            title.classList.remove('open-answer')
            text.classList.add('hide-answer')
            text.classList.remove('open-answer')
            iconUp.classList.add('is-hidden')
            iconDown.classList.remove('is-hidden')
        }
    }
})();

// rewindButton
(() => {
    const button = document.querySelector('.footer-rewind-button')

    button.addEventListener('click', onClick)

    function onClick() {
        window.scrollTo(0, 0)
    }
})();


// modal-memory-button
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


// auth-modal
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


// mobile header menu
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


// item slider
(() => {
    const sliders = document.querySelectorAll('.popular-slider')
    const window = document.querySelector('body')
    // const lists = document.querySelectorAll('.popular-products-list')

    sliders.forEach(slider => {

        const list = document.querySelector(`#${slider.dataset.name}`)
        let step = 3

        for (let i = 0; i < list.children.length; i++) {
            list.children[i].classList.add('is-hidden')
        }

        let pages = 0
        if (window.clientWidth >= 1140) {
            pages = Math.ceil(list.children.length / 3)
        }

        else if (window.clientWidth >= 768) {
            pages = Math.ceil(list.children.length / 2)
            step = 2
        }

        else if (window.clientWidth < 768) {
            pages = Math.ceil(list.children.length / 1)
            step = 1
        }

        for (let i = 0; i < step; i++) {
            list.children[i].classList.remove('is-hidden')
        }

        let inner = []


        for (let i = 1; i <= pages; i++) {
            const sliderButton = `
            <div class="popular-slider-item" data-number="${i}">
                <div class="popular-slider-point">
                </div>
            </div>`
            inner.push(sliderButton)
        }

        slider.innerHTML = inner.join('')
        slider.children[0].classList.add('active')

        for (let i = 3; i <= pages - 1; i++) {
            slider.children[i].classList.add('hidden')
        }

        
        
        for (let i = 0; i < slider.children.length; i++) {
            slider.children[i].addEventListener('click', (e) => {
                for (let i = 0; i < slider.children.length; i++) {
                    slider.children[i].classList.remove('active')
                }
                e.currentTarget.classList.add('active')
                changeList(e.currentTarget)
                changeButton(e.currentTarget)
            })
        }

        function changeButton(button) {
            const shownButtons = slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            if (Number(button.dataset.number) === 1) {
                return
            }
            if (Number(button.dataset.number) === pages) {
                return
            }
            if (button.dataset.number === leftButton.dataset.number) {
                setTimeout(() => {
                    rightButton.classList.add('hidden')
                }, 250)
                const number = Number(leftButton.dataset.number) - 2
                setTimeout(() => {
                    slider.children[number].classList.remove('hidden')
                }, 250)

                return
            }
            if (button.dataset.number === rightButton.dataset.number) {
                setTimeout(() => {
                    leftButton.classList.add('hidden')
                }, 250)
                const number = Number(rightButton.dataset.number)
                setTimeout(() => {
                    slider.children[number].classList.remove('hidden')
                }, 250)
                return
            }
        }

        function changeList(button) {
            const shownButtons = slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            

            if (Number(button.dataset.number) === 1 && !leftButton.classList.contains('active')) {
                return
            }
            if (Number(button.dataset.number) === pages && !rightButton.classList.contains('active')) {
                return
            }
            if (button.dataset.number > leftButton.dataset.number) {
                for (let i = 0; i < list.children.length; i++) {

                    list.children[i].classList.add('is-hidden')

                }
                for (let i = Number(button.dataset.number - 1) * step; i < (Number(button.dataset.number)) * step; i++) {

                    list.children[i].classList.remove('is-hidden')

                }
                return
            }
            if (button.dataset.number < rightButton.dataset.number) {
                for (let i = 0; i < list.children.length; i++) {

                    list.children[i].classList.add('is-hidden')

                }
                for (let i = Number(button.dataset.number - 1) * step; i < (Number(button.dataset.number)) * step; i++) {
                    list.children[i].classList.remove('is-hidden')
                }
                return
            }
        }

    })
})();


// gallery slider
(() => {
    const gallery = document.querySelectorAll('.gallery-card')
    const buttons = document.querySelectorAll('.gallery-nav-buttons-item')
    if (!buttons.length) {
        return
    }

    let startCount = 0
    const check = gallery.length - 1

    buttons[1].addEventListener('click', () => {

        if (startCount === check) {
            return
        }
        // gallery[startCount].style.display = 'none'
        gallery[startCount].classList.add('hidde')
        startCount++
        console.log(startCount)
    })

    buttons[0].addEventListener('click', () => {
        console.log(startCount)
        startCount--
        if (startCount === -1) {
            startCount = 0
            return
        }
        
        gallery[startCount].classList.remove('hidde')
        
        console.log(startCount)
    })
})();


// item tab
(() => {
    const items = document.querySelectorAll('.item-checkout-select')
    
    items.forEach(item => {

        item.addEventListener('click', () => {
            const text = item.getElementsByTagName('p')
            text[0].classList.toggle('is-hidden')
        })
    })
})();

// item page slider
(() => {
    const cards = document.querySelectorAll('.item-product-card')
    const buttons = document.querySelectorAll('.promotional-goods-button')

    if (!cards.length || !buttons.length) {
        return
    }

    let startSet = 0

    const step = 4

    const pages = Math.ceil(cards.length / step)

    buttons[1].addEventListener('click', () => {
        if (startSet === pages - 1) {
            return
        }

        for (let i = 0; i < cards.length; i++){
            cards[i].classList.add('is-hidden')
        }
        startSet++
        for (let i = startSet * step; i < (startSet + 1) * step; i++){
            cards[i].classList.remove('is-hidden')
        }
    })

    buttons[0].addEventListener('click', () => {
        if (startSet === 0) {
            return
        }
        for (let i = 0; i < cards.length; i++){
            cards[i].classList.add('is-hidden')
        }
        startSet --

        for (let i = startSet * step; i < (startSet + 1) * step; i++){
            cards[i].classList.remove('is-hidden')
        }
    })
})();

// item page image slider
(() => {
    const check = document.querySelector('.item-image-wrap')
    if (!check) {
        return
    }

    const sliders = document.querySelectorAll('.popular-slider')

    sliders.forEach(slider => {

        const list = document.querySelector(`#${slider.dataset.name}`)
        let step = 1

        for (let i = 0; i < list.children.length; i++) {
            list.children[i].classList.add('is-hidden')
        }

        let pages = list.children.length

        for (let i = 0; i < step; i++) {
            list.children[i].classList.remove('is-hidden')
        }

        let inner = []


        for (let i = 1; i <= pages; i++) {
            const sliderButton = `
            <div class="popular-slider-item" data-number="${i}">
                <div class="popular-slider-point">
                </div>
            </div>`
            inner.push(sliderButton)
        }

        slider.innerHTML = inner.join('')
        slider.children[0].classList.add('active')

        for (let i = 3; i <= pages - 1; i++) {
            slider.children[i].classList.add('hidden')
        }

        
        
        for (let i = 0; i < slider.children.length; i++) {
            slider.children[i].addEventListener('click', (e) => {
                for (let i = 0; i < slider.children.length; i++) {
                    slider.children[i].classList.remove('active')
                }
                e.currentTarget.classList.add('active')
                changeList(e.currentTarget)
                changeButton(e.currentTarget)
            })
        }

        function changeButton(button) {
            const shownButtons = slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            if (Number(button.dataset.number) === 1) {
                return
            }
            if (Number(button.dataset.number) === pages) {
                return
            }
            if (button.dataset.number === leftButton.dataset.number) {
                rightButton.classList.add('hidden')
                const number = Number(leftButton.dataset.number) - 2
                slider.children[number].classList.remove('hidden')
                return
            }
            if (button.dataset.number === rightButton.dataset.number) {
                leftButton.classList.add('hidden')
                const number = Number(rightButton.dataset.number)
                slider.children[number].classList.remove('hidden')
                return
            }
        }

        function changeList(button) {
            console.log('change list')
            const shownButtons = slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            console.dir(list.children.length)
            

            if (Number(button.dataset.number) === 1 && !leftButton.classList.contains('active')) {
                return
            }
            if (Number(button.dataset.number) === pages && !rightButton.classList.contains('active')) {
                return
            }
            if (button.dataset.number > leftButton.dataset.number) {
                for (let i = 0; i < list.children.length; i++) {
                    list.children[i].classList.add('is-hidden')
                    console.log(list.children[i])
                }
                for (let i = Number(button.dataset.number - 1) * step; i < (Number(button.dataset.number)) * step; i++) {
                    list.children[i].classList.remove('is-hidden')
                }
                return
            }
            if (button.dataset.number < rightButton.dataset.number) {
                for (let i = 0; i < list.children.length; i++) {
                    list.children[i].classList.add('is-hidden')
                    console.log(list.children[i])
                }
                for (let i = Number(button.dataset.number - 1) * step; i < (Number(button.dataset.number)) * step; i++) {
                    list.children[i].classList.remove('is-hidden')
                }
                return
            }
        }

    })
})();

// memory button
(() => {
    const button = document.querySelector('.old-user-help-button-memory')
    if (!button) {
        return
    }
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

// promo
(() => {
    const button = document.querySelector('.promo-button-add')
    if (!button) {
        return
    }
    const field = document.querySelector('.promo-add-wrap')

    button.addEventListener('click', showField)

    function showField() {
        field.classList.remove('is-hidden')
    }
})();

// checkoutPage tabs
(() => {
    const newUser = document.querySelector('#new-user')
    const oldUser = document.querySelector('#old-user')
    if (!newUser || !oldUser) {
        return
    }

    const oldUserButton = newUser.querySelector('.old')
    const newUserButton = oldUser.querySelector('.new')
    
    oldUserButton.addEventListener('click', () => {
        newUser.classList.add('is-hidden')
        oldUser.classList.remove('is-hidden')
    })

    newUserButton.addEventListener('click', () => {
        newUser.classList.remove('is-hidden')
        oldUser.classList.add('is-hidden')
    })

})();

// paws
(() => {
    const paws = document.querySelector('.give-four-icons-wrap')
    const button = document.querySelector('.give-four-button')
    const text = document.querySelector('.give-four-button-text')
    const icon = document.querySelector('.give-four-button-icon')
    if (!button) {
        return
    }

    button.addEventListener('click', showPaws)

    function showPaws() {
        paws.style.opacity = "100%"
        button.style.backgroundColor = "#1C1919"
        text.style.color = "#F6B626"
        icon.style.fill = "#F6B626"
    }
})();

// filter
(() => {
    const selects = document.querySelectorAll('.shop-filter-select')
    const options = document.querySelectorAll('.shop-option-values')
    const icons = document.querySelectorAll

    window.addEventListener('click', onWindowClick)

    selects.forEach(select => {
        new onClickSelect(select)
        options.forEach(option => {
            if (option.dataset.for !== select.dataset.for){
                return
            }
            select.innerText = option.children[0].innerText.trim()
        })
    })
    
    function onClickSelect(select){
        select.addEventListener('click', () => {
            options.forEach(option => {
                if (option.dataset.for !== select.dataset.for){
                    return
                }
                option.classList.remove('is-hidden')
                const variants = option.querySelectorAll('.shop-option-value')
                variants.forEach(child => child.addEventListener('click', (e) => {
                    select.innerText = e.currentTarget.innerText.trim()
                }))
            })
        })
    }

    function onWindowClick(e){
        let check = false
        selects.forEach(select => {
            if(select !== e.target){
                return
            }
            check = true
        })
        if(check){
            return
        }
        options.forEach(option => option.classList.add('is-hidden'))
    }
})();

// custom slider 
(() => {
    function getVals() {
        // Get slider values
        var parent = this.parentNode;
        var slides = parent.getElementsByClassName("custom-input");
        var slide1 = parseFloat(slides[0].value);
        var slide2 = parseFloat(slides[1].value);
        // Neither slider will clip the other, so make sure we determine which is larger
        if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
        const minPrice = document.getElementById('min-price')
        const maxPrice = document.getElementById('max-price')
        minPrice.value = slide1
        maxPrice.value = slide2

        minPrice.addEventListener('input', () => {
            slides[0].value = minPrice.value
        })

        maxPrice.addEventListener('input', () => {
            slides[1].value = maxPrice.value
        })
        //   var displayElement = parent.getElementsByClassName("rangeValues")[0];
        //       displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
    }

    window.onload = function () {
        // Initialize Sliders
        var sliderSections = document.getElementsByClassName("range-slider");
        for (var x = 0; x < sliderSections.length; x++) {
            var sliders = sliderSections[x].getElementsByTagName("input");
            for (var y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    }
})();

// open filter 
(() => {
    const button = document.querySelector('.open-filters-button')
    const openImage = document.querySelector('.open-filters-button-image-open')
    const closeImage = document.querySelector('.open-filters-button-image-close')
    const openText = document.querySelector('.open-filters-button-text-open')
    const closeText = document.querySelector('.open-filters-button-text-close')
    const filter = document.querySelector('.shop-filter')
    if (!button) {
        return
    }

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


