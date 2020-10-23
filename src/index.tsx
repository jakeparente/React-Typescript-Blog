import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './blog/redux/store';
import BlogPage from './blog/pages/BlogPage'

ReactDOM.render(
  <Provider store={store}>
    <BlogPage />
  </Provider>,
  document.getElementById('root')
);