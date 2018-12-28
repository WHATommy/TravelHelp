import { GET_COUNTRY_INFO, GET_ERRORS } from './types'
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import store from '../store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser } from '../actions/authAction'

//Get country info from API
export const getCountry = (country) => dispatch => {
    delete axios.defaults.headers.common["Authorization"];
    axios
        .get(`http://restcountries.eu/rest/v2/name/${country}`)
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
            if (localStorage.jwtToken) {
                // Set auth token header auth
                setAuthToken(localStorage.jwtToken)
                // Decode token and get user info
                const decoded = jwt_decode(localStorage.jwtToken)
                // Set user and isAuthenticated
                store.dispatch(setCurrentUser(decoded));
            }
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
