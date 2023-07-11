import './style.css'
import logo from './img/logo.svg?raw'
import phone from './img/phone_icon.svg?raw'
import client_one from './img/client_1.svg?raw'
import client_two from './img/client_2.svg?raw'
import client_three from './img/client_3.svg?raw'

let head_menu = `
<div class = "head-menu">
  ${logo}

  <nav class = "head-menu_nav">
    <ul class = "head-menu_nav_list">
      <li><a class = "head-menu_nav_link" href = "">Что такое Битрикс24</a></li>
      <li><a class = "head-menu_nav_link" href = "">Как мы работаем</a></li>
      <li><a class = "head-menu_nav_link" href = "">Тарифы</a></li>
      <li><a class = "head-menu_nav_link" href = "">Наши компетенции</a></li>
      <li><a class = "head-menu_nav_link" href = "">Кейсы</a></li>
      <li><a class = "head-menu_nav_link" href = "">О нас</a></li>
    </ul>
  </nav>

  <div class = "head-menu_info">
    <p class = "head-menu_info_phone">8-800-511-59-25</p>
    <p class = "head-menu_info_email">sales@palax.info</p>
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
      <li class = "head-menu_popup_nav_link">Что такое Битрикс24</li>
      <li class = "head-menu_popup_nav_link">Как мы работаем</li>
      <li class = "head-menu_popup_nav_link">Тарифы</li>
      <li class = "head-menu_popup_nav_link">Наши компетенции</li>
      <li class = "head-menu_popup_nav_link">Кейсы</li>
      <li class = "head-menu_popup_nav_link">О нас</li>
    </ul>
  </nav>
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

let competentions = `
<div class = "competentions">
  <h2 class = "competentions_title">Наши компетенции</h2>
  <div class = "competentions_container">

    <div class = "competentions_competention">
      <div class = "competentions_competention_img-wrap competentions_competention_img-wrap_wrap-one">
        <img class = "competentions_competention_img" src = "./img/competention_1.png">
      </div>
      <p class = "competentions_competention_text">Выстраиваем эффективные воронки продаж. Автоматизируем работу с клиентом, освобождая время сотрудников от рутинных задач.</p>
    </div>
  
    <div class = "competentions_competention">
      <div class = "competentions_competention_img-wrap competentions_competention_img-wrap_wrap-two">
        <img class = "competentions_competention_img" src = "./img/competention_2.png">
      </div>
      <p class = "competentions_competention_text">Создаем единую платформу для работы компании. Оцифровываем сложные бизнес-процессы, сокращая время согласований внутри компании в 3 раза.</p>
    </div>
  
    <div class = "competentions_competention">
      <div class = "competentions_competention_img-wrap competentions_competention_img-wrap_wrap-three">
        <img class = "competentions_competention_img" src = "./img/competention_3.png">
      </div>
      <p class = "competentions_competention_text">Интегрируем CRM Битрикс24 с системой учета 1С, оптимизируя взаимодействие отдела продаж с бухгалтерией и складами. Объединяем работу всей компании.</p>
    </div>
  
    <div class = "competentions_competention">
      <div class = "competentions_competention_img-wrap competentions_competention_img-wrap_wrap-four">
        <img class = "competentions_competention_img" src = "./img/competention_4.png">
      </div>
      <p class = "competentions_competention_text">Создаем единую платформу для работы компании. Оцифровываем сложные бизнес-процессы, сокращая время согласований внутри компании в 3 раза.</p>
    </div>
  </div>
</div>
`;

let solutions = `
<div class = "solutions">
  <h2 class = "solutions_title">Наши решения для Битрикс24</h2>
  <h3 class = "solutions_subtitle">Разрабатываем модули автоматизации</h3>

  <div class = "solutions_body">
    <img class = "solutions_body_img" src = "./img/solutions.png">
    <div class = "solutions_body_info">
      <h3 class = "solutions_body_info_title">Бизнес-процессы и роботы PALAX</h3>
      <p class = "solutions_body_info_text">Neque vitae tempus quam pellentesque nec nam. Sit amet consectetur adipiscing elit. Sit amet tellus cras adipiscing enim eu turpis. Aenean euismod elementum nisi quis eleifend quam. Fringilla ut morbi tincidunt augue interdum velit. Vitae semper quis lectus nulla at volutpat diam. Lacus laoreet non curabitur gravida arcu. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Ipsum consequat nisl vel pretium lectus quam id. Aliquet sagittis id consectetur purus. Vel quam elementum pulvinar etiam non quam. Scelerisque in dictum non consectetur a erat. Nam at lectus urna duis convallis convallis tellus. Ornare suspendisse sed nisi lacus sed viverra. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Congue quisque egestas diam in arcu. Cursus vitae congue mauris rhoncus aenean vel.</p>
      <button class = "solutions_body_info_button button__blue-green">Подробнее</button>
    </div>
  </div>
</div>
`;

let cases = `
<div class = "cases">
  <h2 class = "cases_title">Наши кейсы</h2>
  <div class = "cases_container">

    <div class = "cases_case">
      <h3 class = "cases_case_title">Кейс № 1</h3>
      <p class = "cases_case_text">Внедрение Битрикс24 в производство</p>
      <img class = "cases_case_preview" src = "./img/case_preview.png">
    </div>
  
    <div class = "cases_case">
      <h3 class = "cases_case_title">Кейс № 2</h3>
      <p class = "cases_case_text">Внедрение Б24 в продажи</p>
      <img class = "cases_case_preview" src = "./img/case_preview.png">
    </div>
  
    <div class = "cases_case">
      <h3 class = "cases_case_title">Кейс № 3</h3>
      <p class = "cases_case_text">Внедрение Б24 для автошколы</p>
      <img class = "cases_case_preview" src = "./img/case_preview.png">
    </div>
  </div>
</div>
`;

let clients = `
<div class = "clients">
  <h2 class = "clients_title">Наши клиенты</h2>
  <div class = "clients_slider">
    <a class = "clients_slider_arrow clients_slider_arrow__left">
      <img src = "./img/slider_arrow_left.png">
    </a>
    <a class = "clients_slider_arrow clients_slider_arrow__right">
      <img src = "./img/slider_arrow_right.png">
    </a>
    <div class = "clients_slider_container">

      <div class = "clients_client">
        ${client_one}
      </div>
    
      <div class = "clients_client">
        ${client_two}
      </div>
    
      <div class = "clients_client">
        ${client_three}
      </div>
    
      <div class = "clients_client">
        ${client_one}
      </div>
    </div>
  </div>
</div>
`;

let about_us = `
<div class = "about-us">
  <h2 class = "about-us_title">О нас</h2>
  <div class = "about-us_marks">

    <div class = "about-us_mark">
      <img class = "about-us_mark_img" src = "./img/mark_1.png">
      <p class = "about-us_mark_text">На рынке с 2006 года</p>
    </div>
  
    <div class = "about-us_mark">
      <img class = "about-us_mark_img" src = "./img/mark_2.png">
      <p class = "about-us_mark_text">Более 25 специалистов в команде</p>
    </div>
  
    <div class = "about-us_mark">
      <img class = "about-us_mark_img" src = "./img/mark_3.png">
      <p class = "about-us_mark_text">Все сотрудники в штате (не фриланс)</p>
    </div>
  
    <div class = "about-us_mark">
      <img class = "about-us_mark_img" src = "./img/mark_4.png">
      <p class = "about-us_mark_text">Один из лидеров рейтинга вeб-студий</p>
    </div>
  </div>

  <div class = "about-us_body">
    <img class = "about-us_body_img" src = "./img/about_us_img.png">
    <div class = "about-us_body_info">
      <p class = "about-us_body_info_text">Neque vitae tempus quam pellentesque nec nam. Sit amet consectetur adipiscing elit. Sit amet tellus cras adipiscing enim eu turpis. Aenean euismod elementum nisi quis eleifend quam. Fringilla ut morbi tincidunt augue interdum velit. Vitae semper quis lectus nulla at volutpat diam. Lacus laoreet non curabitur gravida arcu. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Ipsum consequat nisl vel pretium lectus quam id. Aliquet sagittis id consectetur purus. Vel quam elementum pulvinar etiam non quam. Scelerisque in dictum non consectetur a erat. Nam at lectus urna duis convallis convallis tellus. Ornare suspendisse sed nisi lacus sed viverra. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Congue quisque egestas diam in arcu. Cursus vitae congue mauris rhoncus aenean vel.</p>
      <button class = "button__blue-green about-us_body_info_button">Подробнее</button>
    </div>
  </div>
</div>
`;

let audit = `
<div class = "audit">
  <div class = "audit_container">
    <h2 class = "audit_title">Хочу бесплатный аудит моего портала</h2>
    <form class = "audit_form">
      <input type = "text" class = "audit_form_input" placeholder = "Имя">
      <input type = "number" class = "audit_form_input" placeholder = "+7(___)___-__-__">
      <input type = "email" class = "audit_form_input" placeholder = "Email">
      <button class = "button__blue-green audit_form_button">Отправить</button>
      
    </form>
  </div>
  <img class = "audit_img" src = "./img/audit_img.png">
</div>
`;

let footer = `
<footer class = "footer">
  <div class = "footer_content">
    <div class = "footer_services">
      <h3 class = "footer_services_title">Услуги</h3>
      <p class = "footer_services_service">Разработка сайтов</p>
      <p class = "footer_services_service">Обслуживание сайта</p>
      <p class = "footer_services_service">Продвижение SEO</p>
      <p class = "footer_services_service">Реклама в интернете</p>
      <p class = "footer_services_service">Аудит</p>
      <p class = "footer_services_service">Регистрация и продление доменов</p>
      <p class = "footer_services_service">Хостинг</p>
      <p class = "footer_services_service">SSL-сертификат</p>
      <p class = "footer_services_service">Защита персональных данных</p>
    </div>

    <div class = "footer_about-us">
      <h3 class = "footer_about-us_title">О нас</h3>
      <p class = "footer_about-us_info">О компании</p>
      <p class = "footer_about-us_info">Блог</p>
      <p class = "footer_about-us_info">Вакансии</p>
      <p class = "footer_about-us_info">Контакты</p>
    </div>

    <div class = "footer_different">
      <div class = "footer_different_info">
        <p class = "footer_different_info_title">Портфолио</p>
        <p class = "footer_different_info_title">Отзывы</p>
      </div>

      <div class = "footer_different_social">
        <img class = "footer_different_social_img" src = "./img/vk_icon.png">
        <img class = "footer_different_social_img" src = "./img/tg_icon.png">
      </div>
    </div>

    
    <p class = "footer_content_policy">Политика конфиденциальности</p>
    <p class = "footer_content_trademark">2006 - 2022 © PALAX ®<br>Создание и продвижение сайтов</p>
  </div>
</footer>
`;

let app = `
  ${head_menu}
  ${welcome}
  ${benefits}
  ${about_bitrix}
  ${how_we_work}
  ${rates}
  ${competentions}
  ${solutions}
  ${cases}
  ${clients}
  ${about_us}
  ${audit}
  ${footer}
`

document.querySelector('#app').innerHTML = app;

document.getElementById("menu-btn").addEventListener('click', () => {
  let popup = document.querySelector('.head-menu_popup');
  let icon = document.getElementById('menu-icon');

  popup.classList.toggle('head-menu_popup__active');

  if (popup.classList.contains('head-menu_popup__active')) {
    icon.src = './img/close_icon.png';
  } else {
    icon.src = './img/menu_icon.png';
  }
})