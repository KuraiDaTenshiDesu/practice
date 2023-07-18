function showSmallPopup(event: MouseEvent): void {
    let target = <HTMLElement> event.target;
    let popup: HTMLElement | null = document.querySelector('.popup');
    
    if (target.id === 'welcome-popup-btn' || target.classList.contains('rates_card_button-wrap_button')) {
        if (popup !== null) {
            popup.classList.remove('popup__hidden');
        }
    }
}

export default showSmallPopup;