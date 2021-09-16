//THESE ALL WORK WITH SWIPER v 6.8.4, AND THIS TAG IN THE HEAD OF PUBLIC/INDEX.HTML: <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // import './index.css';
    // import App from './components/App';
    // import reportWebVitals from './reportWebVitals';
    // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    // import './../node_modules/swiper';
//END OF WORKING IMPORTS. ATTEMPTING TO TRY DIFFERENT IMPORTS TO FIX SWIPER.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/swiper/swiper-bundle.min.js';
//swiper buttons:
import '../node_modules/swiper/swiper-bundle.min.css';
//?
import '../node_modules/swiper/swiper.min.css';
//above all work
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
