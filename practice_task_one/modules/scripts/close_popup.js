function closePopup(event) {
  if (event.target.tagName === 'A') {
    document.querySelector('.head-menu_popup').classList.remove('head-menu_popup__active');
    document.getElementById('menu-icon').src = './img/menu_icon.png';
  }
}

export default closePopup;