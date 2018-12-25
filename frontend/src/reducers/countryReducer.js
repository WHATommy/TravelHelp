import { GET_COUNTRY_INFO } from '../actions/types'

const initialState = {
    countryInfos: '',
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY_INFO:
            return {
                ...state,
                countryInfos: action.payload
            }
        default:
            return state;
    }
}