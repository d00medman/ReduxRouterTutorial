import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST  } from '../actions'

// Since we plan on storring our state in an object, we will default our state to being an object
export default function(state = {}, action) {
  switch(action.type){
    case DELETE_POST:
      // This is a lodash method (lodash is awesome) which returns a new state sans the id passed to it from the payload
      return _.omit(state, action.payload)
    case FETCH_POST:
      // This is the es5 way of doing this; going to refactor to leverage es6 magic
      // const post = action.payload.data
      // const newState =  { ...state  }
      // newState[post.id] = post
      // return newState

      // This code is entirely identical to the above code, it is just the es6 variant
      return { ...state, [action.payload.data.id]:action.payload.data  }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
