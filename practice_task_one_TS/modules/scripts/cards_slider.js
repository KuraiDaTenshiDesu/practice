function cardsSlider(event) {
    let service_button = document.getElementById("service-button");
    let integration_button = document.getElementById("integration-button");
    let cards_container = document.querySelector('.rates_cards');
    let card_wrap = document.querySelector('.rates_card-wrapper');
    if (integration_button !== null && service_button !== null && cards_container !== null && card_wrap !== null) {
        if (window.screen.width <= 799) {
            if (event.target === service_button) {
                integration_button.classList.remove("rates_button_active");
                service_button.classList.add("rates_button_active");
                cards_container.style.transform = `translateY(0)`;
            }
            if (event.target === integration_button) {
                service_button.classList.remove("rates_button_active");
                integration_button.classList.add("rates_button_active");
                cards_container.style.transform = `translateY(-${(card_wrap.offsetHeight + 30) * 3}px)`;
            }
        }
        else {
            if (event.target === service_button) {
                integration_button.classList.remove("rates_button_active");
                service_button.classList.add("rates_button_active");
                cards_container.style.transform = `translate(0, 0)`;
            }
            if (event.target === integration_button) {
                service_button.classList.remove("rates_button_active");
                integration_button.classList.add("rates_button_active");
                cards_container.style.transform = `translate(-${card_wrap.offsetWidth * 3}px, 0)`;
            }
        }
    }
}
export default cardsSlider;
