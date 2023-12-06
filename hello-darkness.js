const body = document.querySelector('body');
let rgbVal = 255;

let backgroundChange = setInterval(() => {
    body.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
    rgbVal--;
    if (rgbVal === 0) {
        clearInterval(backgroundChange);
    }
    console.log(rgbVal);
}, 500);