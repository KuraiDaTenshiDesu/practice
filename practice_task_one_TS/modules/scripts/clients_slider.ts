import getSliderRows from "./get_slider_rows";

let slides: NodeList | null;
let length: number;
let current: number;
let slider: HTMLElement | null;
let slides_on_page: number;
let slide_width: number;

window.addEventListener('DOMContentLoaded',() => {
  current = 0;
  slider = <HTMLElement>document.querySelector('.clients_slider_container');
  slides_on_page = getSliderRows();

  slider.style.transform = `translate3d(0, 0, 0)`;
})

window.addEventListener('resize', () => {
  slides_on_page = getSliderRows();
  slide_width = (slides![0] as HTMLElement).offsetWidth;
})

function arrowClick(direction: number) {
  slides = <NodeList>document.querySelectorAll('.clients_client');
  length = slides.length;
  slide_width = (slides[0] as HTMLElement).offsetWidth;
  
  current += direction;

  if (current < 0) {
    current = length - slides_on_page;
  } else if (current >= length - slides_on_page) {
    current = 0;
  }
  
  slider!.style.transform = `translate3d(${-(current) * slide_width}px, 0, 0)`;
}

export default arrowClick;