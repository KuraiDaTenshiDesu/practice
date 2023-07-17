let container: HTMLElement | null;
let slide: HTMLElement | null;
let slide_counter: number;

window.addEventListener('DOMContentLoaded', () => {
    container = <HTMLElement>document.querySelector('.about-us_body_slider');
    slide = <HTMLElement>document.querySelector('.about-us_body_img');
    slide_counter = 1;
})

function aboutUsSlider() {
    if (slide_counter >= container!.childElementCount) {
        container!.style.transform = `translate(0, 0)`;
        slide_counter = 1;
    } else {
        container!.style.transform = `translate(-${slide_counter * slide!.offsetWidth}px, 0)`;
        slide_counter++;
    }
}

export default aboutUsSlider;