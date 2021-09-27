import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Main from "./Main";
import GlobalStyle from "../globalStyles";

function App(){
  return ( 
    <React.Fragment>
      <React.StrictMode>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;