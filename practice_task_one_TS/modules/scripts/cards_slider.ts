let service_button: HTMLElement | null;
let integration_button: HTMLElement | null;
let cards_container: HTMLElement | null;
let card_wrap: HTMLElement | null;

window.addEventListener('DOMContentLoaded', () => {
    service_button = <HTMLElement>document.getElementById("service-button");
    integration_button = <HTMLElement>document.getElementById("integration-button");

    cards_container = <HTMLElement>document.querySelector('.rates_cards');
    card_wrap = <HTMLElement>document.querySelector('.rates_card-wrapper');
})

function cardsSlider(event: Event) {
    if (window.screen.width <= 799) {
        if (event.target === service_button) {
                integration_button!.classList.remove("rates_button_active");
                service_button!.classList.add("rates_button_active");
    
                cards_container!.style.transform = `translateY(0)`;
        } 
        
        if (event.target === integration_button) {
                service_button!.classList.remove("rates_button_active");
                integration_button!.classList.add("rates_button_active");
    
                cards_container!.style.transform = `translateY(-${(card_wrap!.offsetHeight + 30) * 3}px)`;
        }
    } else {
        if (event.target === service_button) {
                integration_button!.classList.remove("rates_button_active");
                service_button!.classList.add("rates_button_active");
    
                cards_container!.style.transform = `translate(0, 0)`;
        } 
        
        if (event.target === integration_button) {
                service_button!.classList.remove("rates_button_active");
                integration_button!.classList.add("rates_button_active");
    
                cards_container!.style.transform = `translate(-${card_wrap!.offsetWidth * 3}px, 0)`
        }
    }
}

export default cardsSlider;