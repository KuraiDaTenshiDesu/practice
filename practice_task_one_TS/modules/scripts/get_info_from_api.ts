function getInfoFromAPI() {
    fetch('https://64b5231ef3dbab5a95c6c5c5.mockapi.io/data')
    .then(response => response.json())
    .then(result => {
        let cases = result[0].cases;
        let rates = result[0].rates;
        let clients = result[0].clients;

        // cases.forEach(el: any  => {
        //     console.log(el.title);
        // });

        cases.forEach(function(element: object) {
            console.log(element);
        })

        rates.forEach(function(element: object) {
            console.log(element);
        }) 

        clients.forEach(function(element: object) {
            console.log(element);
        })

        return result;
    })
}

export default getInfoFromAPI;