import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from "../globalStyles";

import ProjectDetail from './ProjectDetail'
import JournalDetail from './JournalDetail'

function App(){
  return ( 
    <React.Fragment>
      <React.StrictMode>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path="/project-details" component={ProjectDetail}/>

            <Route path="/journal-details" component={JournalDetail}/>

            <Route path ="/" component={Main}/>

          </Switch>
        </Router>
        <Footer />
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;