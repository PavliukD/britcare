(() => {
    const slider = document.querySelector('.filter-frice-slider')
    const priseInput = document.querySelector('.filter-price-input')

    priseInput.value = slider.max
    slider.value = slider.max

    slider.addEventListener('input', () => {
        priseInput.value = slider.value
    })

    priseInput.addEventListener('input', () => {
        slider.value = priseInput.value
    })

})();

// (() => {
//     const thumb = document.querySelector('.custom-slider-thumb')
//     const point = document.querySelector('.custom-slider-point')
//     const slider = document.querySelector('.custom-slider')
//     const wrap = document.querySelector('.custom-slider-wrap')

//     wrap.addEventListener('mouseover', trackMouse)
//     wrap.addEventListener('click', onClick)

//     let offset = 0

//     function trackMouse(e){
//         offset = e.offsetX
//     }

//     console.dir(point)
//     console.dir(thumb)

//     point.addEventListener('mousedown', moveMouse)
//     point.addEventListener('mouseup', () => {
//         point.removeEventListener('mousemove', trackPosition)
//     })

//     function moveMouse(){
//         point.addEventListener('mousemove', trackPosition)
//     }

//     function trackPosition(){
//         console.log(offset)
//         // point.offsetLeft = offset
//     }

//     function onClick(e){
//         console.log(e.offsetX)
//         point.style.left = e.offsetX
//         thumb.style.width = e.offsetX
//     }
// })();

