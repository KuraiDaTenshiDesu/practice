function editCardsContainer() {
    let cards_container = document.querySelector('.rates_cards');
    let card_wrap = document.querySelector('.rates_card-wrapper');
    let card_height = card_wrap.offsetHeight;

    if (window.screen.width <= 799) {
        cards_container.style.height = `${(card_height + 30) * 3}px`;
    } else {
        cards_container.style.height = `auto`;
    }
}

export default editCardsContainer;