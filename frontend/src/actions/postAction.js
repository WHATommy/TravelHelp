import { GET_ERRORS, GET_POSTS_INFO, CREATE_POST_INFO, GET_MYPOST_INFO } from './types'
import axios from 'axios';

export const getPost = (post) => dispatch => {
    axios
        .get(`http://localhost:5000/api/posts/select?selectedCountry=${post}`)
        .then((res) => {
            const posts = res.data.map(stat => {
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
        .post('http://localhost:5000/api/posts/', posts)
        .then(res => {
            console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const getMyPost = () => dispatch => {
    axios
        .get('http://localhost:5000/api/posts/')
        .then(res => {
            console.log(res)
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
            console.log(res)
            console.log(myPosts)
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}