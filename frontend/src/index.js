import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {default as ImageSearchApp} from './pages/image-search/image-search-home.jsx';
import store from './redux/redux-store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ImageSearchApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

