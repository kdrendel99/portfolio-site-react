import React from 'react';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import JournalDetail from './JournalDetail';
import AllProjects from './AllProjects';
import AllJournals from './AllJournals';
// import runAnimations from './../helper';
// import 'swiper';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: AllProjects,
      selectedProj: null,
      journList: AllJournals,
      selectedJourn: null
    };
  }

  handleClick = () => {
    if (this.state.selectedProj != null) {
      this.setState({
        selectedProj: null,
        selectedJourn: null
      });
    } 
  }

  handleChangingSelectedProj = (id) => {
    const selectedProj = this.state.projList.filter(proj => proj.id === id)[0];
    console.log(selectedProj.name);
    this.setState({selectedProj: selectedProj});
  }

  handleChangingSelectedJourn = (id) => {
    const selectedJourn = this.state.journList.filter(journ => journ.id === id)[0];
    console.log(selectedJourn.name);
    this.setState({selectedJourn: selectedJourn});
  }

  render(){
    let currentlyVisibleState = null;

    if (this.state.selectedProj != null) {
      currentlyVisibleState = <ProjectDetail project = {this.state.selectedProj} resetSelectedProj = {this.handleClick}/>
    } 
    else if (this.state.selectedJourn != null){
      currentlyVisibleState = <JournalDetail journal = {this.state.selectedJourn} resetSelectedJourn = {this.handleClick}/>
    }

    else {
      currentlyVisibleState = <Home 
      projList={this.state.projList} 
      onProjSelection={this.handleChangingSelectedProj} 
      journList={this.state.journList}
      onJournSelection={this.handleChangingSelectedJourn}
      />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default Main;