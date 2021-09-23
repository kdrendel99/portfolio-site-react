import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Main from "./Main";

function App(){
  return ( 
    <React.Fragment>
      <React.StrictMode>
        <Header />
        <Main />
        <Footer />
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;