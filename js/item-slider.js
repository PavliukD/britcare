(() => {
    const sliders = document.querySelectorAll('.popular-slider')
    const window = document.querySelector('body')
    // const lists = document.querySelectorAll('.popular-products-list')

    sliders.forEach(slider => {

        const list = document.querySelector(`#${slider.dataset.name}`)
        let step = 3

        for (let i = 0; i < list.children.length; i++){
            list.children[i].classList.add('is-hidden')
        }

        let pages = 0
        if (window.clientWidth >= 1140){
            pages = Math.ceil(list.children.length / 3)
        }

        else if (window.clientWidth >= 768){
            pages = Math.ceil(list.children.length / 2)
            step = 2
        }

        else if (window.clientWidth < 768){
            pages = Math.ceil(list.children.length / 1)
            step = 1
        }

        for (let i = 0; i < step; i++){
            list.children[i].classList.remove('is-hidden')
        }

        let inner = []


        for (let i = 1; i <= pages; i++){
            const sliderButton = `
            <div class="popular-slider-item" data-number="${i}">
                <div class="popular-slider-point">
                </div>
            </div>`
            inner.push(sliderButton)
        }

        slider.innerHTML = inner.join('')
        slider.children[0].classList.add('active')

        for (let i = 3; i <= pages - 1; i++){
            slider.children[i].classList.add('hidden')
        }

        
        
        for (let i = 0; i < slider.children.length; i++){
            slider.children[i].addEventListener('click', (e) => {                
                for (let i = 0; i < slider.children.length; i ++){
                    slider.children[i].classList.remove('active')
                }
                e.currentTarget.classList.add('active')
                changeList(e.currentTarget)
                changeButton(e.currentTarget)
            })        
        }

        function changeButton(button){
            const shownButtons =  slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            if (Number(button.dataset.number) === 1){
                return
            }
            if (Number(button.dataset.number) === pages){
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
            if (button.dataset.number === rightButton.dataset.number){
                setTimeout(() => {
                    leftButton.classList.add('hidden')
                },250)
                const number = Number(rightButton.dataset.number)
                setTimeout(() => {
                    slider.children[number].classList.remove('hidden')
                }, 250)
                return
            }
        }

        function changeList (button){
            const shownButtons =  slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            

            if (Number(button.dataset.number) === 1 && !leftButton.classList.contains('active')){
                return
            }
            if (Number(button.dataset.number) === pages && !rightButton.classList.contains('active')){
                return
            }
            if (button.dataset.number > leftButton.dataset.number){
                for (let i = 0; i < list.children.length; i++){

                        list.children[i].classList.add('is-hidden')

                }
                for (let i = Number(button.dataset.number-1) * step; i < (Number(button.dataset.number)) * step; i++){                   

                            list.children[i].classList.remove('is-hidden')

                }
                return
            }
            if (button.dataset.number < rightButton.dataset.number){
                for (let i = 0; i < list.children.length; i++){

                        list.children[i].classList.add('is-hidden')

                }
                for (let i = Number(button.dataset.number-1) * step; i < (Number(button.dataset.number)) * step; i++){
                            list.children[i].classList.remove('is-hidden')
                }
                return
            }
        }

    })
})()

                