function initAboutUsSlider(): void {
    let about_us_swiper = new Swiper('.about-us-swiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
    })
}

export default initAboutUsSlider;