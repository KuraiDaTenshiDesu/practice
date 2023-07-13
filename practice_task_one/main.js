import './style.css';
import app from './modules/app';
import arrowClick from './modules/scripts/slider';
import showPopup from './modules/scripts/show_popup';
import closePopup from './modules/scripts/close_popup';


document.querySelector('#app').innerHTML = app;

// POPUP EVENT LISTENERS

document.getElementById("menu-btn").addEventListener('click', () => showPopup());

document.querySelector('.head-menu_popup_nav_list').addEventListener('click', (event) => closePopup(event));

// SLIDER EVENT LISTENERS

document.querySelector('.clients_slider_arrow__right').addEventListener('click', () => arrowClick(1));
  
document.querySelector('.clients_slider_arrow__left').addEventListener('click', () => arrowClick(-1));