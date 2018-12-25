import { GET_COUNTRY_INFO, GET_ERRORS } from './types'
import axios from 'axios';

//Get country info from API
export const getCountry = (country) => dispatch => {
    axios
        .get(`http://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        .then(res => {
            const items = res.data.map(stat => {
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
            dispatch({
                type: GET_COUNTRY_INFO,
                payload: items
            });
        })
        .catch(err =>
            //dispatch({
            //    type: GET_ERRORS,
            //    payload: err.res.data
            //})
            console.log(err)
        )
}
