function closePopup(event: Event) {
  if ((event.target as HTMLElement)!.tagName === 'A') {
    document.querySelector('.head-menu_popup')!.classList.remove('head-menu_popup__active');
    document.querySelector('.head-menu__small_menu-btn')!.classList.remove('head-menu__small_menu-btn__active')
  }
}

export default closePopup;