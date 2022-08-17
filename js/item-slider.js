(() => {
    const slider = document.querySelectorAll('.popular-slider')
    // const data = document.querySelectorAll('.popular-products-list')

    slider.forEach(element => {
        const buttons = element.querySelectorAll('.popular-slider-item')

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const data = document.querySelector(`#${e.currentTarget.parentElement.dataset.name}`)
                let dataItems = data.querySelectorAll('.product-card')

                if (dataItems.length === 0){
                    dataItems = data.getElementsByTagName('li')
                }

                dataItemsPackage = dataItems.length / 3
        
                if (e.currentTarget.dataset.number === "1"){
                    console.log('1')
                    buttons[0].classList.add('active')
                    buttons[1].classList.remove('active')
                    buttons[2].classList.remove('active')
                    for(let i = 0; i < dataItemsPackage; i ++){
                        dataItems[i].classList.remove('is-hidden')
                        
                    }
        
                    for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
        
                    for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
                }
        
                if (e.currentTarget.dataset.number === "2"){
                    console.log('2')
                    buttons[1].classList.add('active')
                    buttons[0].classList.remove('active')
                    buttons[2].classList.remove('active')
                    for(let i = 0; i < dataItemsPackage; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
        
                    for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
                        dataItems[i].classList.remove('is-hidden')
                    }
        
                    for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
                }
        
                if (e.currentTarget.dataset.number === "3"){
                    console.log('3')
                    buttons[2].classList.add('active')
                    buttons[0].classList.remove('active')
                    buttons[1].classList.remove('active')
                    for(let i = 0; i < dataItemsPackage; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
        
                    for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
                        dataItems[i].classList.add('is-hidden')
                    }
        
                    for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
                        dataItems[i].classList.remove('is-hidden')
                    }
                } 
            })
        })
    });

    // function clickButton(e){
    //     const data = document.querySelector(`#${e.currentTarget.parentElement.dataset.name}`)
    //     const dataItems = data.querySelectorAll('.product-card')
    //     dataItemsPackage = dataItems.length / 3

    //     if (e.currentTarget.dataset.number === "1"){
    //         console.log('1')
    //         for(let i = 0; i < dataItemsPackage; i ++){
    //             dataItems[i].classList.remove('is-hidden')
    //             e.currentTarget.classList.add('active')
    //         }

    //         for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }

    //         for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }
    //     }

    //     if (e.currentTarget.dataset.number === "2"){
    //         console.log('2')
    //         for(let i = 0; i < dataItemsPackage; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }

    //         for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
    //             dataItems[i].classList.remove('is-hidden')
    //             e.currentTarget.classList.add('active')
    //         }

    //         for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }
    //     }

    //     if (e.currentTarget.dataset.number === "3"){
    //         console.log('3')
    //         for(let i = 0; i < dataItemsPackage; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }

    //         for(let i = dataItemsPackage; i < dataItemsPackage * 2; i ++){
    //             dataItems[i].classList.add('is-hidden')
    //             e.currentTarget.classList.remove('active')
    //         }

    //         for(let i = dataItemsPackage * 2; i < dataItemsPackage * 3; i ++){
    //             dataItems[i].classList.remove('is-hidden')
    //             e.currentTarget.classList.add('active')
    //         }
    //     }
    // }
})()