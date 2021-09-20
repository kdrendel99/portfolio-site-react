import { connect } from 'react-redux';
import React from 'react';
import Home from './Home';
import Header from './Header';
import ProjectDetail from './ProjectDetail';
import JournalDetail from './JournalDetail';
import AllProjects from './AllProjects';
import AllJournals from './AllJournals';
import * as c from './../actions/ActionTypes';
import PropTypes from "prop-types";
// import runAnimations from './../helper';
// import 'swiper';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: AllProjects,
      selectedProj: null,
      journList: AllJournals,
      // selectedJourn: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: c.REMOVE_SELECTED_JOURNAL
    }
      this.setState({
        selectedProj: null,
      });
    dispatch(action);
  }

  handleChangingSelectedJourn = (id) => {
    const { dispatch } = this.props;
    const selectedJournal = this.state.journList.filter(journ => journ.id === id)[0];
    const action = {
      type: c.ADD_SELECTED_JOURNAL,
      id: selectedJournal
    }
    dispatch(action);
  }

  // handleChangingSelectedJourn = (id) => {
  //   const selectedJourn = this.state.journList.filter(journ => journ.id === id)[0];
  //   console.log(selectedJourn.name);
  //   this.setState({selectedJourn: selectedJourn});
  // }

  handleChangingSelectedProj = (id) => {
    const selectedProj = this.state.projList.filter(proj => proj.id === id)[0];
    console.log(selectedProj.name);
    this.setState({selectedProj: selectedProj});
  }

  render(){
    let currentlyVisibleState = null;

    if (this.state.selectedProj != null) {
      currentlyVisibleState = <ProjectDetail project = {this.state.selectedProj} resetSelectedProj = {this.handleClick}/>;
      // <Header clearSelected = {this.handleClick}/>
    } 
    else if (this.props.selectedJourn != null){
      currentlyVisibleState = <JournalDetail journal = {this.props.selectedJourn} resetSelectedJourn = {this.handleClick}/>;
      // <Header clearSelected = {this.handleClick}/>
    }

    else {
      currentlyVisibleState = <Home 
      projList={this.state.projList} 
      onProjSelection={this.handleChangingSelectedProj} 
      journList={this.state.journList}
      onJournSelection={this.handleChangingSelectedJourn}
      resetSelections={this.handleClick}
      />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

// Main.propTypes = {
//   selectedJourn: PropTypes.number?
// };

const mapStateToProps = state => {
  return {
    selectedJourn: state.selectedJourn
  }
}

Main = connect(mapStateToProps)(Main);

export default Main;

