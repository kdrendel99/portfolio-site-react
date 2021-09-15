import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'typed.js';
// import '../node_modules/swiper/bundle';
// import '../node_modules/swiper/react';
// import '..swiper/scss';
// import '../node_modules/swiper';


// import "../node_modules/swiper/components/navigation";
// import "../node_modules/swiper/components/pagination";
// import "../node_modules/swiper/components/scrollbar";
// import "../node_modules/swiper/modules/navigation";
// import "../node_modules/swiper/modules/pagination";
// import "../node_modules/swiper/modules/scrollbar";



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
