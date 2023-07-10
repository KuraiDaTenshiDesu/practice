import './style.css'
import logo from './img/logo.svg?raw'

let head_menu = `
<div class = "head-menu">
  ${logo}

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
`;

let welcome = `
<div class = "welcome">
  <div class = "welcome_info">
    <h1 class = "welcome_info_title">Внедрение и обслуживание CRM Битрикс 24</h1>
    <p class = "welcome_info_subtitle">От золотого партнера 1с-битрикс</p>
    <div class = "welcome_info_buttons">
      <button class = "welcome_info_button button__blue-green">Получить консультацию специалиста</button>
      <button class = "welcome_info_button button__transparent">Попробовать битрикс24 бесплатно</button>
    </div>
  </div>

  <div class = "welcome_images">
    <img class = "welcome_images_big-img" src = "./img/welcome_big_img.png" alt = "big-img">
    <div class = "welcome_images_smalls">
      <img class = "welcome_images_small" src = "./img/welcome_small_img.png" alt = "small-img">
      <img class = "welcome_images_small" src = "./img/welcome_small_img_2.png" alt = "small-img">
      <img class = "welcome_images_small" src = "./img/welcome_small_img_3.png" alt = "small-img">
      <img class = "welcome_images_small" src = "./img/welcome_small_img_4.png" alt = "small-img">
    </div>
  </div>
</div>
`;

let head_container = `
<div class = "head-container">
  ${head_menu}
  ${welcome}
</div>
`;

let benefits = `
  <div class = "benefits">
    <h2 class = "benefits_title">Давайте по-честному</h2>

    <div class = "benefits_container">
      <div class = "benefits_benefit">
        <p class = "benefits_benefit_text">У вас нет актуальной клиентской базы и есть забытые лиды</p>
        <img class = "benefits_benefit_img" src = "./img/benefits_benefit_1.png">
      </div>

      <div class = "benefits_benefit">
        <p class = "benefits_benefit_text">Бумаги копятся на столах и теряются, а согласование решений происходит слишком долго.</p>
        <img class = "benefits_benefit_img" src = "./img/benefits_benefit_2.png">
      </div>

      <div class = "benefits_benefit">
        <p class = "benefits_benefit_text">Ваше время уходит на контроль сотрудников и рутинные задачи, вместо масштабирования и развития бизнеса.</p>
        <img class = "benefits_benefit_img" src = "./img/benefits_benefit_3.png">
      </div>

      <div class = "benefits_benefit">
        <p class = "benefits_benefit_text">Для формирования отчетов требуется не только собрать информацию из десятков источников, но и обработать ее.</p>
        <img class = "benefits_benefit_img" src = "./img/benefits_benefit_4.png">
      </div>
    </div>

    <div class = "benefits_footer">
      <p class = "benefits_footer_text"><b>И самое главное:</b><br>вы теряете клиентов и прибыль</p>
      <img class = "benefits_footer_img" src = "./img/benefits_arrow.png" alt = "arrow">
    </div>
  </div>
`;

let about_bitrix = `
<div class = "about-bitrix">
  <h2 class = "about-bitrix_title">Что такое Битрикс24?</h2>
  <div class = "about-bitrix_container">

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">crm</h3>
      <p class = "about-bitrix_item_text">Помогает продавать больше:</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">контроль лидов и сделок</li>
        <li class = "about-bitrix_item_list-item">ведение клиентской базы</li>
        <li class = "about-bitrix_item_list-item">автоматизация воронок продаж</li>
        <li class = "about-bitrix_item_list-item">формирование договоров в один клик</li>
        <li class = "about-bitrix_item_list-item">выставление и оплата счетов</li>
        <li class = "about-bitrix_item_list-item">интеграция с 1С</li>
      </ul>
      <p class = "about-bitrix_item_text">Фиксирует каждое взаимодействие с клиентом.</p>
    </div>

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">контакт-центр</h3>
      <p class = "about-bitrix_item_text">Объединяет все каналы коммуникаций с клиентами:</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">телефонные звонки</li>
        <li class = "about-bitrix_item_list-item">письма на электронную почту</li>
        <li class = "about-bitrix_item_list-item">чаты и формы на сайте</li>
        <li class = "about-bitrix_item_list-item">сообщения в социальных сетях и мессенджерах</li>
        <li class = "about-bitrix_item_list-item">обращения в сторонних сервисах</li>
      </ul>
      <p class = "about-bitrix_item_text">Вся коммуникация сохраняется в карточке клиента.</p>
    </div>

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">задачи и проекты</h3>
      <p class = "about-bitrix_item_text">Помогают работать вместе и успевать вовремя:</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">фиксация нарушений сроков выполнения</li>
        <li class = "about-bitrix_item_list-item">распределение ролей: ответственные, наблюдатели и соисполнители</li>
        <li class = "about-bitrix_item_list-item">чек-листы в задачах и подзадачи</li>
        <li class = "about-bitrix_item_list-item">постановка задач по методологии SCRUM</li>
        <li class = "about-bitrix_item_list-item">объединение задач в проекты</li>
        <li class = "about-bitrix_item_list-item">расчет эффективности работы сотрудников</li>
      </ul>
      <p class = "about-bitrix_item_text">Контроль занятости каждого сотрудника.</p>
    </div>

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">онлайн-офис</h3>
      <p class = "about-bitrix_item_text">Организовывает рабочее пространство сотрудников online:</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">социальная сеть для общения внутри организации</li>
        <li class = "about-bitrix_item_list-item">групповые аудио и видео созвоны до 48 человек</li>
        <li class = "about-bitrix_item_list-item">совместная работа с документами</li>
        <li class = "about-bitrix_item_list-item">формирование договоров в один клик</li>
        <li class = "about-bitrix_item_list-item">новостная лента и календари</li>
        <li class = "about-bitrix_item_list-item">мобильное приложение</li>
      </ul>
      <p class = "about-bitrix_item_text">Все для работы в любой точке мира.</p>
    </div>

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">бизнесс-процессы</h3>
      <p class = "about-bitrix_item_text">Автоматизируют рутинные процессы</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">согласование документов</li>
        <li class = "about-bitrix_item_list-item">выдача командировочных</li>
        <li class = "about-bitrix_item_list-item">подписание счетов</li>
        <li class = "about-bitrix_item_list-item">заявления на отпуск</li>
        <li class = "about-bitrix_item_list-item">и любые другие процессы</li>
      </ul>
      <p class = "about-bitrix_item_text">Без хождения по кабинетам и сбора подписей</p>
    </div>

    <div class = "about-bitrix_item">
      <h3 class = "about-bitrix_item_title">сквозная аналитика</h3>
      <p class = "about-bitrix_item_text">Показывает эффективность рекламы:</p>
      <ul class = "about-bitrix_item_list">
        <li class = "about-bitrix_item_list-item">весь путь клиента перед покупкой</li>
        <li class = "about-bitrix_item_list-item">учет всех рекламных каналов</li>
        <li class = "about-bitrix_item_list-item">окупаемость источников трафика</li>
        <li class = "about-bitrix_item_list-item">анализ рекламных кампаний с точностью до слова</li>
        <li class = "about-bitrix_item_list-item">Bi-аналитика</li>
      </ul>
      <p class = "about-bitrix_item_text">Аналитика уже встроена в вашу CRM.</p>
    </div>

  </div>
</div>
`;

let  how_we_work = `
<div class = "how-we-work">
  <h2 class = "how-we-work_title">Как мы работаем</h2>

  <div class = "how-we-work_container">

    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Предпроектный анализ</h3>
      <p class = "how-we-work_item_text">Погружаемся в текущие бизнес-процессы, анализируем специфику вашей компании.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_1.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_1.png" alt = "number">
    </div>

    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Техническое задание</h3>
      <p class = "how-we-work_item_text">Составляем список работ с описанием результата внедрения по каждому модулю.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_2.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_2.png" alt = "number">
    </div>
    
    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Внедрение</h3>
      <p class = "how-we-work_item_text">Настраиваем портал согласно составленному списку работ.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_3.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_3.png" alt = "number">
    </div>
    
    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Тестирование</h3>
      <p class = "how-we-work_item_text">Проверяем функционал на корректность настроек: отрабатываем сценарии автоматизации, проверяем интеграции с внешними системами.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_4.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_4.png" alt = "number">
    </div>
    
    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Обучение</h3>
      <p class = "how-we-work_item_text">Предоставляем обучающие материалы для сотрудников, обучаем работе с Битрикс24 в выбранном вами формате.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_5.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_5.png" alt = "number">
    </div>
    
    <div class = "how-we-work_item">
      <h3 class = "how-we-work_item_title">Техническая поддержка</h3>
      <p class = "how-we-work_item_text">После внедрения оказываем услуги консалтинга и технической поддержки портала.</p>
      <img class = "how-we-work_item_img" src = "./img/how_we_work_img_6.png" alt = "how we work img">
      <img class = "how-we-work_item_number" src = "./img/number_6.png" alt = "number">
    </div>
  </div>
</div>
`;

let rates = `
<div class = "rates">
  <div class = "rates_buttons">
    <button class = "rates_button rates_button_active">Тарифы на обслуживание</button>
    <button class = "rates_button">Тарифы на внедрение</button>
  </div>

  <div class = "rates_cards">

    <div class = "rates_card">
      <h2 class = "rates_card_title">Базовое внедрение</h2>
      <h3 class = "rates_card_price">15 400 ₽</h3>
      <p class = "rates_card_desc">На базе облачного тарифа Битрикс24 «Базовый»</p>
      <ul class = "rates_card_list">
        <li class = "rates_card_list_item"><span>Базовые настройки портала</span></li>
        <li class = "rates_card_list_item"><span>Регистрация пользователей, формирование структуры компании</span></li>
        <li class = "rates_card_list_item"><span>Подключение к порталу социальных сетей и мессенджеров</span></li>
        <li class = "rates_card_list_item"><span>Настройка 1 воронки продаж</span></li>
        <li class = "rates_card_list_item"><span>Импорт клиентской базы</span></li>
        <li class = "rates_card_list_item"><span>Обучение ответстенного лица 1 час</span></li>
      </ul>
      <div class = "rates_card_button-wrap">
        <button class = "button__transparent rates_card_button-wrap_button">Заказать тариф</button>
      </div>
    </div>

    <div class = "rates_card">
      <h2 class = "rates_card_title">Базовое внедрение</h2>
      <h3 class = "rates_card_price">15 400 ₽</h3>
      <p class = "rates_card_desc">На базе облачного тарифа Битрикс24 «Базовый»</p>
      <ul class = "rates_card_list">
        <li class = "rates_card_list_item"><span>Базовые настройки портала</span></li>
        <li class = "rates_card_list_item"><span>Регистрация пользователей, формирование структуры компании</span></li>
        <li class = "rates_card_list_item"><span>Подключение к порталу социальных сетей и мессенджеров</span></li>
        <li class = "rates_card_list_item"><span>Настройка 1 воронки продаж</span></li>
        <li class = "rates_card_list_item"><span>Импорт клиентской базы</span></li>
        <li class = "rates_card_list_item"><span>Обучение ответстенного лица 1 час</span></li>
      </ul>
      <div class = "rates_card_button-wrap">
        <button class = "button__transparent rates_card_button-wrap_button">Заказать тариф</button>
      </div>
    </div>

    <div class = "rates_card">
      <h2 class = "rates_card_title">Базовое внедрение</h2>
      <h3 class = "rates_card_price">15 400 ₽</h3>
      <p class = "rates_card_desc">На базе облачного тарифа Битрикс24 «Базовый»</p>
      <ul class = "rates_card_list">
        <li class = "rates_card_list_item"><span>Базовые настройки портала</span></li>
        <li class = "rates_card_list_item"><span>Регистрация пользователей, формирование структуры компании</span></li>
        <li class = "rates_card_list_item"><span>Подключение к порталу социальных сетей и мессенджеров</span></li>
        <li class = "rates_card_list_item"><span>Настройка 1 воронки продаж</span></li>
        <li class = "rates_card_list_item"><span>Импорт клиентской базы</span></li>
        <li class = "rates_card_list_item"><span>Обучение ответстенного лица 1 час</span></li>
      </ul>
      <div class = "rates_card_button-wrap">
        <button class = "button__transparent rates_card_button-wrap_button">Заказать тариф</button>
      </div>
    </div>
  </div>
</div>
`;

let app = `
  ${head_container}
  ${benefits}
  ${about_bitrix}
  ${how_we_work}
  ${rates}
`

document.querySelector('#app').innerHTML = app;