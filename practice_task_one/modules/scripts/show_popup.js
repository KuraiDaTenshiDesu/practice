function showPopup() {
  let popup = document.querySelector('.head-menu_popup');
  let icon = document.getElementById('menu-icon');

  popup.classList.toggle('head-menu_popup__active');

  if (popup.classList.contains('head-menu_popup__active')) {
    document.querySelector('.head-menu__small_menu-btn').classList.add('head-menu__small_menu-btn__active')
  } else {
    document.querySelector('.head-menu__small_menu-btn').classList.remove('head-menu__small_menu-btn__active')
  }
}

export default showPopup;