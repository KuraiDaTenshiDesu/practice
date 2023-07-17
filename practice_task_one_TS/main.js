"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/reset.css");
require("./styles/main.css");
require("./styles/about-bitrix.css");
require("./styles/about-us.css");
require("./styles/audit.css");
require("./styles/benefits.css");
require("./styles/cases.css");
require("./styles/clients.css");
require("./styles/competentions.css");
require("./styles/footer.css");
require("./styles/head-menu.css");
require("./styles/how-we-work.css");
require("./styles/popup.css");
require("./styles/rates.css");
require("./styles/solutions.css");
require("./styles/welcome.css");
require("./styles/media.css");
const app_1 = __importDefault(require("./modules/app"));
const clients_slider_1 = __importDefault(require("./modules/scripts/clients_slider"));
const show_popup_1 = __importDefault(require("./modules/scripts/show_popup"));
const close_popup_1 = __importDefault(require("./modules/scripts/close_popup"));
const show_current_year_1 = __importDefault(require("./modules/scripts/show_current_year"));
const edit_cards_container_1 = __importDefault(require("./modules/scripts/edit_cards_container"));
const cards_slider_1 = __importDefault(require("./modules/scripts/cards_slider"));
const close_popups_1 = __importDefault(require("./modules/scripts/close_popups"));
const about_us_slider_1 = __importDefault(require("./modules/scripts/about_us_slider"));
const validate_phone_1 = __importDefault(require("./modules/scripts/validate_phone"));
const get_info_from_api_1 = __importDefault(require("./modules/scripts/get_info_from_api"));
document.querySelector('#app').innerHTML = app_1.default;
(0, show_current_year_1.default)();
// POPUP EVENT LISTENERS
document.getElementById("menu-btn").addEventListener('click', () => (0, show_popup_1.default)());
document.querySelector('.head-menu_popup_nav_list').addEventListener('click', (event) => (0, close_popup_1.default)(event));
// CLIENTS SLIDER EVENT LISTENERS
document.querySelector('.clients_slider_arrow__right').addEventListener('click', () => (0, clients_slider_1.default)(1));
document.querySelector('.clients_slider_arrow__left').addEventListener('click', () => (0, clients_slider_1.default)(-1));
// RATES EVENT LISTENERS
(0, edit_cards_container_1.default)();
window.addEventListener('resize', () => { edit_cards_container_1.default; });
document.querySelector('.rates_buttons').addEventListener('click', (event) => (0, cards_slider_1.default)(event));
document.addEventListener('click', (event) => {
    if (event.target.id === 'welcome-popup-btn' || event.target.classList.contains('rates_card_button-wrap_button')) {
        document.querySelector('.popup').classList.remove('popup__hidden');
    }
});
// CASES EVENT LISTENERS
document.querySelector('.cases_container').addEventListener('click', (event) => {
    if (event.target.classList.contains('cases_case_preview')) {
        document.querySelectorAll('.cases_video')[event.target.dataset.video].classList.remove('cases_video__hidden');
    }
});
// ABOUT US SLIDER
setInterval(() => { (0, about_us_slider_1.default)(); }, 3000);
// PHONE VALIDATION EVENT LISTENERS
document.getElementById('phone').addEventListener('input', () => { (0, validate_phone_1.default)(); });
// CLOSE POPUPS EVENT LISTENER
document.addEventListener('click', (event) => { (0, close_popups_1.default)(event); });
(0, get_info_from_api_1.default)();
