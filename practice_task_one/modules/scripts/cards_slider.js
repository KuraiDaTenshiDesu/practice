let service_button;
let integration_button;
let cards_container;
let card_wrap;

window.addEventListener('DOMContentLoaded', () => {
    service_button = document.getElementById("service-button");
    integration_button = document.getElementById("integration-button");

    cards_container = document.querySelector('.rates_cards');
    card_wrap = document.querySelector('.rates_card-wrapper');
})

function cardsSlider(event) {
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
    } else {
        if (event.target === service_button) {
                integration_button.classList.remove("rates_button_active");
                service_button.classList.add("rates_button_active");
    
                cards_container.style.transform = `translate(0, 0)`;
        } 
        
        if (event.target === integration_button) {
                service_button.classList.remove("rates_button_active");
                integration_button.classList.add("rates_button_active");
    
                cards_container.style.transform = `translate(-${card_wrap.offsetWidth * 3}px, 0)`
        }
    }
}

export default cardsSlider;