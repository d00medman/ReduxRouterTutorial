import _ from 'lodash'
import { FETCH_POSTS } from '../actions'

// Since we plan on storring our state in an object, we will default our state to being an object
export default function(state = {}, action) {
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
