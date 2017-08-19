import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise'

import PostsIndex from './components/posts_index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// This is your index file, any jsx elements rendered here will appear across routes
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
