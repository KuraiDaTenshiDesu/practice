import client_one from './clients_icons/client_1.svg?raw'
import client_two from './clients_icons/client_2.svg?raw'
import client_three from './clients_icons/client_3.svg?raw'
import client_four from './clients_icons/client_4.svg?raw'
import client_five from './clients_icons/client_5.svg?raw'
import client_six from './clients_icons/client_6.svg?raw'
import client_seven from './clients_icons/client_7.svg?raw'
import client_eight from './clients_icons/client_8.svg?raw'
import client_nine from './clients_icons/client_9.svg?raw'
import client_ten from './clients_icons/client_10.svg?raw'
import client_eleven from './clients_icons/client_11.svg?raw'
import client_twelve from './clients_icons/client_12.svg?raw'
import client_firteen from './clients_icons/client_13.svg?raw'
import client_fourteen from './clients_icons/client_14.svg?raw'
import client_fifteen from './clients_icons/client_15.svg?raw'
import client_sixteen from './clients_icons/client_16.svg?raw'

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
        ${client_four}
      </div>
    
      <div class = "clients_client">
        ${client_five}
      </div>
    
      <div class = "clients_client">
        ${client_six}
      </div>

      <div class = "clients_client">
        ${client_seven}
      </div>
    
      <div class = "clients_client">
        ${client_eight}
      </div>

      <div class = "clients_client">
        ${client_nine}
      </div>
    
      <div class = "clients_client">
        ${client_ten}
      </div>
    
      <div class = "clients_client">
        ${client_eleven}
      </div>

      <div class = "clients_client">
        ${client_twelve}
      </div>
    
      <div class = "clients_client">
        ${client_firteen}
      </div>
    
      <div class = "clients_client">
        ${client_fourteen}
      </div>

      <div class = "clients_client">
        ${client_fifteen}
      </div>
    
      <div class = "clients_client">
        ${client_sixteen}
      </div>
    </div>
  </div>
</div>
`;

export default clients;