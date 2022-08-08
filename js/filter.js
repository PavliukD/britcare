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