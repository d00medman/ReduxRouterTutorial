import { combineReducers } from 'redux';
// now bringing in Redux form, a library that we could likely implement ourselves,
  // but we will use the package instead in order to save time
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  posts: PostsReducer,
  // setting it up with this keyword allows you to link all forms to the formReducer imported
  form: formReducer
});

export default rootReducer;
