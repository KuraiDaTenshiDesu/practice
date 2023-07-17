import './styles/reset.css';
import './styles/main.css';

import './styles/about-bitrix.css';
import './styles/about-us.css';
import './styles/audit.css';
import './styles/benefits.css';
import './styles/cases.css';
import './styles/clients.css';
import './styles/competentions.css';
import './styles/footer.css';
import './styles/head-menu.css';
import './styles/how-we-work.css';
import './styles/popup.css';
import './styles/rates.css';
import './styles/solutions.css';
import './styles/welcome.css';
import './styles/media.css';

import app from './modules/app';
import arrowClick from './modules/scripts/clients_slider';
import showPopup from './modules/scripts/show_popup';
import closePopup from './modules/scripts/close_popup';
import showCurrentYear from './modules/scripts/show_current_year';
import editCardsContainer from './modules/scripts/edit_cards_container';
import cardsSlider from './modules/scripts/cards_slider';
import closePopups from './modules/scripts/close_popups';
import aboutUsSlider from './modules/scripts/about_us_slider';
import validatePhone from './modules/scripts/validate_phone';
import getInfoFromAPI from './modules/scripts/get_info_from_api';

document.querySelector('#app')!.innerHTML = app;

showCurrentYear();

// POPUP EVENT LISTENERS

document.getElementById("menu-btn")!.addEventListener('click', () => showPopup());
document.querySelector('.head-menu_popup_nav_list')!.addEventListener('click', (event) => closePopup(event));

// CLIENTS SLIDER EVENT LISTENERS

document.querySelector('.clients_slider_arrow__right')!.addEventListener('click', () => arrowClick(1));
document.querySelector('.clients_slider_arrow__left')!.addEventListener('click', () => arrowClick(-1));

// RATES EVENT LISTENERS

editCardsContainer();
window.addEventListener('resize', () => {editCardsContainer});
document.querySelector('.rates_buttons')!.addEventListener('click', (event) => cardsSlider(event));

document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement)!.id === 'welcome-popup-btn' || (event.target as HTMLElement)!.classList.contains('rates_card_button-wrap_button')) {
        document.querySelector('.popup')!.classList.remove('popup__hidden');
    }
})

// CASES EVENT LISTENERS

document.querySelector('.cases_container')!.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('cases_case_preview')) {
        document.querySelectorAll('.cases_video')[(event.target as any).dataset.video].classList.remove('cases_video__hidden');
    }
})

// ABOUT US SLIDER

setInterval(() => {aboutUsSlider()}, 3000);

// PHONE VALIDATION EVENT LISTENERS

document.getElementById('phone')!.addEventListener('input', () => {validatePhone()})

// CLOSE POPUPS EVENT LISTENER

document.addEventListener('click', (event) => {closePopups(event)});

getInfoFromAPI();