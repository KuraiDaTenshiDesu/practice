function closePopup(event: Event): void {
  let target = <HTMLElement> event.target;
  let head_menu_popup: HTMLElement | null = document.querySelector('.head-menu_popup');
  let small_menu_btn: HTMLElement | null = document.querySelector('.head-menu__small_menu-btn');
  
  if (target.tagName === 'A') {
    if (head_menu_popup !== null && small_menu_btn !== null) {
      head_menu_popup.classList.remove('head-menu_popup__active');
      small_menu_btn.classList.remove('head-menu__small_menu-btn__active');
    }
  }
}

export default closePopup;