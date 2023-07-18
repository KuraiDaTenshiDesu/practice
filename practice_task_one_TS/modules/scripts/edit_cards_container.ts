function editCardsContainer(): void {
    let cards_container: HTMLElement | null = document.querySelector('.rates_cards');
    let card_wrap: HTMLElement | null = document.querySelector('.rates_card-wrapper');

    if (cards_container !== null && card_wrap !== null) {
        let card_height = card_wrap.offsetHeight;
        
        if (window.screen.width <= 799) {
            cards_container.style.height = `${(card_height + 30) * 3}px`;
        } else {
            cards_container.style.height = `auto`;
        }
    }
}

export default editCardsContainer;