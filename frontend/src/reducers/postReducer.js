import { GET_POSTS_INFO, CREATE_POST_INFO } from '../actions/types'

const initialState = {
    postInfos: '',
    post: {},
    myPost: '',
    errors: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_INFO:
            return {
                ...state,
                postInfos: action.payload
            }
        case CREATE_POST_INFO:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}