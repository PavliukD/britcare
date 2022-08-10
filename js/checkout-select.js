(() => {
    const selects = document.querySelectorAll('.checkout-select-button')
    const options = document.querySelectorAll('.checkout-select-values-wrap')
    const text = document.querySelectorAll('checkout-select-button-text')

    window.addEventListener('click', onWindowClick)

    selects.forEach(select => {
        new onClickSelect(select)
        options.forEach(option => {
            if (option.dataset.for !== select.dataset.for){
                return
            }
            select.children[0].innerText = option.children[1].children[0].innerText.trim()
        })
    })
    
    function onClickSelect(select){
        select.addEventListener('click', () => {
            options.forEach(option => {
                if (option.dataset.for !== select.dataset.for){
                    return
                }
                option.classList.remove('is-hidden')
                const variants = option.querySelectorAll('.checkout-select-value')
                variants.forEach(child => child.addEventListener('click', (e) => {
                    select.children[0].innerText = e.currentTarget.innerText.trim()
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