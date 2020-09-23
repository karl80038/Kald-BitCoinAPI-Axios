const express = require('express');
const axios = require('axios');
const { resolve } = require('path');
const app = express();
// API URL: https://api.coindesk.com/v1/bpi/currentprice/${currency}.json
app.get('/bitcoinRates', (req, res) => {
    let url = `https://api.coindesk.com/v1/bpi/currentprice/eur.json`;

    axios.get(url)
        .then(function(response){
            console.log(response.data);
            console.log(response.data.bpi.EUR.rate);
            let rate = response.data.bpi.EUR.rate;
            let code = response.data.bpi.EUR.code;
            let disclaimer = response.data.disclaimer;
            res.write("<p>" + rate + " " + code);
            res.write("<br>" + disclaimer + "</p>");
            res.send();
        })
        .catch(function(error){
            console.log(error);
        });

});

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});
