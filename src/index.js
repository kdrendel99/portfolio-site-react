import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import '../node_modules/swiper/swiper-bundle.min.js';
//swiper buttons:
import '../node_modules/swiper/swiper-bundle.min.css';
import '../node_modules/swiper/swiper.min.css';

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/glightbox/dist/css/glightbox.min.css';
import '../node_modules/boxicons/css/boxicons.css';
import { createStore } from 'redux';
import reducer from './reducers/selected-journal-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

