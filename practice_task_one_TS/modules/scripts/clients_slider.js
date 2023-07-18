import getSliderRows from "./get_slider_rows";
let slides;
let length;
let current;
let slider;
let slides_on_page;
let slide_width;
window.addEventListener('DOMContentLoaded', () => {
    current = 0;
    slider = document.querySelector('.clients_slider_container');
    slides_on_page = getSliderRows();
    if (slider !== null) {
        slider.style.transform = `translate3d(0, 0, 0)`;
    }
});
window.addEventListener('resize', () => {
    slides_on_page = getSliderRows();
    slide_width = slides[0].offsetWidth;
});
function arrowClick(direction) {
    slides = document.querySelectorAll('.clients_client');
    length = slides.length;
    slide_width = slides[0].offsetWidth;
    current += direction;
    if (current < 0) {
        current = length - slides_on_page;
    }
    else if (current >= length - slides_on_page) {
        current = 0;
    }
    if (slider !== null) {
        slider.style.transform = `translate3d(${-(current) * slide_width}px, 0, 0)`;
    }
}
export default arrowClick;
