let container;
let slide;
let slide_counter = 1;
function aboutUsSlider() {
    container = document.querySelector('.about-us_body_slider');
    slide = document.querySelector('.about-us_body_img');
    if (container !== null && slide !== null) {
        if (slide_counter >= container.childElementCount) {
            container.style.transform = `translate(0, 0)`;
            slide_counter = 1;
        }
        else {
            container.style.transform = `translate(-${slide_counter * slide.offsetWidth}px, 0)`;
            slide_counter++;
        }
    }
}
export default aboutUsSlider;
