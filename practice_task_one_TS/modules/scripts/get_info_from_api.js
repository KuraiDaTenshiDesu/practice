function getInfoFromAPI() {
    fetch('https://64b5231ef3dbab5a95c6c5c5.mockapi.io/data')
        .then(response => response.json())
        .then((result) => {
        let cases = result[0].cases;
        let rates = result[0].rates;
        let clients = result[0].clients;
        cases.forEach(function (element, index) {
            let html = `
                <div class = "cases_case">
                    <h3 class = "cases_case_title">Кейс № ${index + 1}</h3>
                    <p class = "cases_case_text">${element.title}</p>
                    <img class = "cases_case_preview" src = "${element.preview_src}" data-video = ${index}>
                </div>

                <div class = "cases_video cases_video__hidden">
                  <iframe src="${element.video_src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            `;
            document.querySelector('.cases_container').innerHTML += html;
        });
        rates.forEach(function (element) {
            let html = `
                <div class = "rates_card-wrapper">
                    <div class = "rates_card">
                        <h2 class = "rates_card_title">${element.title}</h2>
                        <h3 class = "rates_card_price">${element.price.toLocaleString()}₽</h3>
                        <p class = "rates_card_desc">${element.description}</p>
                        <ul class = "rates_card_list">
                            <li class = "rates_card_list_item"><span>${element.dots[0]}</span></li>
                            <li class = "rates_card_list_item"><span>${element.dots[1]}</span></li>
                            <li class = "rates_card_list_item"><span>${element.dots[2]}</span></li>
                            <li class = "rates_card_list_item"><span>${element.dots[3]}</span></li>
                            <li class = "rates_card_list_item"><span>${element.dots[4]}</span></li>
                            <li class = "rates_card_list_item"><span>${element.dots[5]}</span></li>
                        </ul>
                        <div class = "rates_card_button-wrap">
                            <button class = "button__transparent rates_card_button-wrap_button">Заказать тариф</button>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.rates_cards').innerHTML += html;
        });
        clients.forEach(function (element) {
            let html = `
                <div class = "clients_client swiper-slide">
                    <img src = "${element.img_src}" alt = "client-${element.name}">
                </div>
            `;
            document.querySelector('.clients_slider_container').innerHTML += html;
        });
        // initClientsSlider();
        console.log('done');
        return result;
    });
}
export default getInfoFromAPI;
