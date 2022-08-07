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