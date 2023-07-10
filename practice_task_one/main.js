import './style.css'

document.querySelector('#app').innerHTML = `
  <div class = "head-menu">
    <img class = "head-menu_logo" src = "./img/logo.png" alt = "logo">

    <nav class = "head-menu_nav">
      <ul class = "head-menu_nav_list">
        <li class = "head-menu_nav_link">Что такое Битрикс24</li>
        <li class = "head-menu_nav_link">Как мы работаем</li>
        <li class = "head-menu_nav_link">Тарифы</li>
        <li class = "head-menu_nav_link">Наши компетенции</li>
        <li class = "head-menu_nav_link">Кейсы</li>
        <li class = "head-menu_nav_link">О нас</li>
      </ul>
    </nav>

    <div class = "head-menu_info">
      <p class = "head-menu_info_phone">8-800-511-59-25</p>
      <p class = "head-menu_info_email">sales@palax.info</p>
    </div>
  </div>
`