let container;
let slide;
let slide_counter;
window.addEventListener('DOMContentLoaded', () => {
    container = document.querySelector('.about-us_body_slider');
    slide = document.querySelector('.about-us_body_img');
    slide_counter = 1;
});
function aboutUsSlider() {
    if (slide_counter >= container.childElementCount) {
        container.style.transform = `translate(0, 0)`;
        slide_counter = 1;
    }
    else {
        container.style.transform = `translate(-${slide_counter * slide.offsetWidth}px, 0)`;
        slide_counter++;
    }
}
export default aboutUsSlider;
