const body = document.querySelector('body');
let rgbVal = 0;

let backgroundChange = () => {
    rgbVal++;
    if (rgbVal <= 255) {
        body.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
        requestAnimationFrame(backgroundChange)
        console.log(rgbVal);

    }
}
backgroundChange()