(() => {
    const sliders = document.querySelectorAll('.popular-slider')
    const window = document.querySelector('body')
    // const lists = document.querySelectorAll('.popular-products-list')

    sliders.forEach(slider => {

        const list = document.querySelector(`#${slider.dataset.name}`)
        let step = 1

        for (let i = 0; i < list.children.length; i++){
            list.children[i].classList.add('is-hidden')
        }

        let pages = list.children.length

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
            if (button.dataset.number === leftButton.dataset.number){
                rightButton.classList.add('hidden')
                const number = Number(leftButton.dataset.number) - 2
                slider.children[number].classList.remove('hidden')
                return
            }
            if (button.dataset.number === rightButton.dataset.number){
                leftButton.classList.add('hidden')
                const number = Number(rightButton.dataset.number)
                slider.children[number].classList.remove('hidden')
                return
            }
        }

        function changeList (button){
            console.log('change list')
            const shownButtons =  slider.querySelectorAll('.popular-slider-item:not(.hidden)')
            const leftButton = shownButtons[0]
            const rightButton = shownButtons[shownButtons.length - 1]
            console.dir(list.children.length)
            

            if (Number(button.dataset.number) === 1 && !leftButton.classList.contains('active')){
                return
            }
            if (Number(button.dataset.number) === pages && !rightButton.classList.contains('active')){
                return
            }
            if (button.dataset.number > leftButton.dataset.number){
                for (let i = 0; i < list.children.length; i++){
                    list.children[i].classList.add('is-hidden')
                    console.log(list.children[i])
                }
                for (let i = Number(button.dataset.number-1) * step; i < (Number(button.dataset.number)) * step; i++){                   
                    list.children[i].classList.remove('is-hidden')
                }
                return
            }
            if (button.dataset.number < rightButton.dataset.number){
                for (let i = 0; i < list.children.length; i++){
                    list.children[i].classList.add('is-hidden')
                    console.log(list.children[i])
                }
                for (let i = Number(button.dataset.number-1) * step; i < (Number(button.dataset.number)) * step; i++){
                    list.children[i].classList.remove('is-hidden')
                }
                return
            }
        }

    })
})()

                