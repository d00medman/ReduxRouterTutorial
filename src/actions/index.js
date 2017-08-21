import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=gabagool'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload:request
  }
}

export function createPost(values, callback) {
  // post requests follow largely the same syntax in axios, main difference is that there
    // is a second argument taken in for values
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                        .then(() => callback())

  return {
    type: CREATE_POST,
    payload:request
  }
}


export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}
