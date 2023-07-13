import logo from './head_menu_icons/logo.svg?raw'
import phone from './head_menu_icons/phone_icon.svg?raw'

let head_menu = `
<div class = "head-menu">
  ${logo}

  <nav class = "head-menu_nav">
    <ul class = "head-menu_nav_list">
      <li><a class = "head-menu_nav_link" href = "#about-bitrix">Что такое Битрикс24</a></li>
      <li><a class = "head-menu_nav_link" href = "#how-we-work">Как мы работаем</a></li>
      <li><a class = "head-menu_nav_link" href = "#rates">Тарифы</a></li>
      <li><a class = "head-menu_nav_link" href = "#competentions">Наши компетенции</a></li>
      <li><a class = "head-menu_nav_link" href = "#cases">Кейсы</a></li>
      <li><a class = "head-menu_nav_link" href = "#about-us">О нас</a></li>
    </ul>
  </nav>

  <div class = "head-menu_info">
    <a class = "head-menu_info_phone" href = "tel:8-800-511-59-25">8-800-511-59-25</a>
    <a class = "head-menu_info_email" href = "mailto:sales@palax.info">sales@palax.info</a>
  </div>
</div>

<div class = "head-menu__small">
  <a class = "head-menu__small_menu-btn" id = "menu-btn">
    <img class = "head-menu__small_menu-btn_img" id = "menu-icon" src = "./img/menu_icon.png">
  </a>
  ${logo}
  ${phone}
</div>

<div class = "head-menu_popup">
  <nav class = "head-menu_popup_nav">
    <ul class = "head-menu_popup_nav_list">
      <li><a class = "head-menu_popup_nav_link" href = "#about-bitrix">Что такое Битрикс24</a></li>
      <li><a class = "head-menu_popup_nav_link" href = "#how-we-work">Как мы работаем</a></li>
      <li><a class = "head-menu_popup_nav_link" href = "#rates">Тарифы</a></li>
      <li><a class = "head-menu_popup_nav_link" href = "#competentions">Наши компетенции</a></li>
      <li><a class = "head-menu_popup_nav_link" href = "#cases">Кейсы</a></li>
      <li><a class = "head-menu_popup_nav_link" href = "#about-us">О нас</a></li>
    </ul>
  </nav>
</div>
`;

export default head_menu;