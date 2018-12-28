import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import countryReducer from './countryReducer'
import postReducer from './postReducer'
import myPostsReducer from './myPostsReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    countryInfos: countryReducer,
    postInfos: postReducer,
    post: postReducer,
    myPost: myPostsReducer
})