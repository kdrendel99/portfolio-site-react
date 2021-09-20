import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';



import '../node_modules/swiper/swiper-bundle.min.js';
//swiper buttons:
import '../node_modules/swiper/swiper-bundle.min.css';
//?
import '../node_modules/swiper/swiper.min.css';
//above all work
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

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
    <Header />
    <App />
  </Provider>,
  document.getElementById('root')
);

