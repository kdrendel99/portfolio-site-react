import React from 'react';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import AllProjects from './AllProjects';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: AllProjects,
      selectedProj: null
    };
  }

  handleClick = () => {
    if (this.state.selectedProj != null) {
      this.setState({
        selectedProj: null,
      });
    } 
    // else {
    //   this.setState(prevState => ({
    //     projDetailsVisibleOnPage: !prevState.projDetailsVisibleOnPage,
    //   }));
    // }
  }

  handleChangingSelectedProj = (id) => {
    const selectedProj = this.state.projList.filter(proj => proj.id === id)[0];
    console.log(selectedProj.name);
    this.setState({selectedProj: selectedProj});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedProj != null) {
      currentlyVisibleState = <ProjectDetail project = {this.state.selectedProj} />
      buttonText = "Return to Home";
    } 

    else {
      currentlyVisibleState = <Home projList={this.state.projList} onProjSelection={this.handleChangingSelectedProj} />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default Main;