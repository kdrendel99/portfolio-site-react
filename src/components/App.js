import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer';
import Main from "./Main";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route path="/">
    //       <Main />
    //     </Route>
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;