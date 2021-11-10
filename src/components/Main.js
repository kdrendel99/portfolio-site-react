import { connect } from 'react-redux';
import React from 'react';
import Home from './Home';
import AllProjects from './AllProjects';
import AllJournals from './AllJournals';
import * as c from './../actions/ActionTypes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: AllProjects,
      journList: AllJournals,
    };
  }

  clearProj = () => {
    const { dispatch } = this.props;
    const action = {
      type: c.REMOVE_SELECTED_PROJECT
    }
    dispatch(action);
  }

  clearJourn = () => {
    const { dispatch } = this.props;
    const action = {
      type: c.REMOVE_SELECTED_JOURNAL
    }
    dispatch(action);
  }

  handleClick = () => {
    this.clearProj();
    this.clearJourn();
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

  handleChangingSelectedProj = (id) => {
    const { dispatch } = this.props;
    const selectedProject = this.state.projList.filter(proj => proj.id === id)[0];
    const action = {
      type: c.ADD_SELECTED_PROJECT,
      id: selectedProject
    }
    dispatch(action);
  }

  render(){

      const currentlyVisibleState = <Home 
      projList={this.state.projList} 
      onProjSelection={this.handleChangingSelectedProj} 
      journList={this.state.journList}
      onJournSelection={this.handleChangingSelectedJourn}
      resetSelections={this.handleClick}
      />;

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    selectedJourn: state.selectedJourn,
    selectedProj: state.selectedProj
  }
}


Main = connect(mapStateToProps)(Main);

export default Main;