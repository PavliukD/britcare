(() => {
    const gallery = document.querySelectorAll('.gallery-card')
    const buttons = document.querySelectorAll('.gallery-nav-buttons-item')

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
})()