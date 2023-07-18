function showHeadMenuPopup() {
  let popup: HTMLElement | null = document.querySelector('.head-menu_popup');
  let small_menu_btn: HTMLElement | null = document.querySelector('.head-menu__small_menu-btn');

  if (popup !== null && small_menu_btn !== null) {
    popup.classList.toggle('head-menu_popup__active');
  
    if (popup.classList.contains('head-menu_popup__active')) {
      small_menu_btn.classList.add('head-menu__small_menu-btn__active')
    } else {
      small_menu_btn.classList.remove('head-menu__small_menu-btn__active')
    }
  }
}

export default showHeadMenuPopup;