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
import showHeadMenuPopup from './modules/scripts/show_head_menu_popup';
import showSmallPopup from './modules/scripts/show_small_popup';
import closePopup from './modules/scripts/close_popup';
import showCurrentYear from './modules/scripts/show_current_year';
import editCardsContainer from './modules/scripts/edit_cards_container';
import cardsSlider from './modules/scripts/cards_slider';
import closePopups from './modules/scripts/close_popups';
import aboutUsSlider from './modules/scripts/about_us_slider';
import validatePhone from './modules/scripts/validate_phone';
import getInfoFromAPI from './modules/scripts/get_info_from_api';
import showVideo from './modules/scripts/show_video';
getInfoFromAPI();
let app_container = document.querySelector('#app');
if (app_container !== null) {
    app_container.innerHTML = app;
}
showCurrentYear();
let menu_btn = document.getElementById("menu-btn");
let head_menu_nav = document.querySelector('.head-menu_popup_nav_list');
let slider_arrow_left = document.querySelector('.clients_slider_arrow__left');
let slider_arrow_right = document.querySelector('.clients_slider_arrow__right');
let rates_btns = document.querySelector('.rates_buttons');
let cases_container = document.querySelector('.cases_container');
let phone_inp = document.getElementById('phone');
let popup_phone_inp = document.getElementById('popup-phone');
if (menu_btn !== null) {
    menu_btn.addEventListener('click', () => showHeadMenuPopup());
}
if (head_menu_nav !== null) {
    head_menu_nav.addEventListener('click', (event) => closePopup(event));
}
if (slider_arrow_left !== null && slider_arrow_right !== null) {
    slider_arrow_right.addEventListener('click', () => arrowClick(1));
    slider_arrow_left.addEventListener('click', () => arrowClick(-1));
}
window.addEventListener('resize', () => editCardsContainer());
if (rates_btns !== null) {
    rates_btns.addEventListener('click', (event) => cardsSlider(event));
}
document.addEventListener('click', (event) => showSmallPopup(event));
if (cases_container !== null) {
    cases_container.addEventListener('click', (event) => { showVideo(event); });
}
setInterval(() => { aboutUsSlider(); }, 3000);
if (phone_inp !== null) {
    phone_inp.addEventListener('input', (event) => { validatePhone(event.target); });
}
if (popup_phone_inp !== null) {
    popup_phone_inp.addEventListener('input', (event) => { validatePhone(event.target); });
}
document.addEventListener('click', (event) => { closePopups(event); });
