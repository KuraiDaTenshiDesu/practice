function showPopup() {
  let popup = document.querySelector('.head-menu_popup');
  let icon = document.getElementById('menu-icon');

  popup.classList.toggle('head-menu_popup__active');

  if (popup.classList.contains('head-menu_popup__active')) {
    icon.src = './img/close_icon.png';
  } else {
    icon.src = './img/menu_icon.png';
  }
}

export default showPopup;