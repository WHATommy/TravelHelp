import { GET_MYPOST_INFO } from '../actions/types'

const initialState = {
    myPost: '',
    errors: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MYPOST_INFO:
            return {
                ...state,
                myPost: action.payload
            }
        default:
            return state;
    }
}