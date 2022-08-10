function getVals(){
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByClassName("custom-input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    console.log(slide1)
    console.log(slide2)
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

window.onload = function(){
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}