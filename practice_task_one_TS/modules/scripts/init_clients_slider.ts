function initClientsSlider(): void {

    if (window.screen.width >= 1100 && window.screen.width <= 1900) {
        let clients_swiper = new Swiper('.clients-swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        })
    } else if (window.screen.width >= 800 && window.screen.width < 1100) {
        let clients_swiper = new Swiper('.clients-swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 2,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        })
    } else if (window.screen.width < 800) {
        let clients_swiper = new Swiper('.clients-swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 2,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        })
    } else {
        let clients_swiper = new Swiper('.clients-swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 4,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        })
    }

}

export default initClientsSlider;