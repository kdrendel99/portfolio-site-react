import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/scss/_grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/style.scss';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/boxicons/css/boxicons.css';
import '../node_modules/glightbox/dist/js/glightbox';
import '../node_modules/isotope-layout/dist/isotope.pkgd';
import '../node_modules/swiper/swiper-bundle.min.css';
import '../node_modules/typed.js/src/typed';

import { createStore } from 'redux';
import reducer from './reducers/selected-journal-reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

