import { GET_MYPOST_INFO, DELETE_MYPOST_INFO } from '../actions/types'

const initialState = {
    myPost: [],
    errors: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MYPOST_INFO:
            return {
                ...state,
                myPost: action.payload
            }
        case DELETE_MYPOST_INFO:
            return {
                ...state,
                myPost: state.myPost.filter(post => post._id !== action.payload)
            }
        default:
            return state;
    }
}