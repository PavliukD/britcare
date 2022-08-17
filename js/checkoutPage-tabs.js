(() => {
    const newUser = document.querySelector('#new-user')
    const oldUser = document.querySelector('#old-user')

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