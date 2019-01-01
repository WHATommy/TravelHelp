import { GET_ERRORS, GET_POSTS_INFO, CREATE_POST_INFO, GET_MYPOST_INFO, DELETE_MYPOST_INFO } from './types'
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import { setCurrentUser } from '../actions/authAction'
import jwt_decode from 'jwt-decode'
import store from '../store'

export const getPost = (post) => dispatch => {
    axios
        .get(`https://localhost:5000/api/posts/select?selectedCountry=${post}`)
        .then((res) => {
            const posts = res.data.map(stat => {
                return {
                    id: stat._id,
                    title: stat.title,
                    country: stat.country,
                    user: stat.username,
                    date: stat.date,
                    text: stat.text,
                    likes: stat.likes
                }
            })
            if (localStorage.jwtToken) {
                setAuthToken(localStorage.jwtToken)
                const decoded = jwt_decode(localStorage.jwtToken)
                store.dispatch(setCurrentUser(decoded));
            }
            dispatch({
                type: GET_POSTS_INFO,
                payload: posts
            })
            console.log(res)
            console.log(posts)
        })
        .catch(err =>
            //dispatch({
            //    type: GET_ERRORS,
            //    payload: err.res.data
            //})
            console.log(err)
        )
}

export const createPost = (posts) => dispatch => {
    console.log(posts)
    axios
        .post('https://localhost:5000/api/posts/', posts)
        .then(res => {
            console.log(res)
            alert('Successfully created!')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const deletePost = id => dispatch => {
    if (window.confirm('Remove this post?')) {
        axios
            .delete(`https://localhost:5000/api/posts/${id}`)
            .then(res => {
                console.log(res);
                console.log(dispatch);
                dispatch({
                    type: DELETE_MYPOST_INFO,
                    payload: id
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}

export const getMyPost = () => dispatch => {
    axios
        .get('https://localhost:5000/api/posts/')
        .then(res => {
            const myPosts = res.data.map(stat => {
                return {
                    id: stat._id,
                    title: stat.title,
                    country: stat.country,
                    user: stat.username,
                    date: stat.date,
                    text: stat.text
                }
            })
            dispatch({
                type: GET_MYPOST_INFO,
                payload: myPosts
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const likePost = id => dispatch => {
    axios
        .post(`s://localhost:5000/api/posts/like/${id}`)
        .then(res => dispatch(getPost(res.data.country)))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const unlikePost = id => dispatch => {
    axios
        .post(`https://localhost:5000/api/posts/unlike/${id}`)
        .then(res => dispatch(getPost(res.data.country)))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}
