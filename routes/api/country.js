const express = require('express')
const axios = require('axios')
const router = express.Router();

router.get('/', (req, res) => {
    console.log(res)
    axios
        .get(`https://restcountries.eu/rest/v2/`)
        .then(info => {
            console.log(info)
            info.data.map(stat => {
                return {
                    name: stat.name,
                    capital: stat.capital,
                    region: stat.region,
                    population: stat.population,
                    currencyName: stat.currencies[0].name,
                    currencySymbol: stat.currencies[0].symbol,
                    language: stat.languages[0].name
                }
            });
        })
})

module.exports = router;