import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// the switch component helps handle the fact that routing in react is loose rather than hard
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// This is your index file, any jsx elements rendered here will appear across routes
// Note that the switch component looks at all routes and only renders the first route which matches the
  // given url. The most specific routes must be at the top of the list
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
