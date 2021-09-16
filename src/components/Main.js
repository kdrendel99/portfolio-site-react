import React from 'react';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import AllProjects from './AllProjects';
import runAnimations from './../helper';
// import 'swiper';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: AllProjects,
      selectedProj: null,
      animations: false
    };
  }

  componentDidMount() {
    runAnimations();
    this.setState({
      animations: true,
    });
  }

  handleClick = () => {
    if (this.state.selectedProj != null) {
      this.setState({
        selectedProj: null,
      });
    } 
  }

  // map {
  //   {props.projList.map((project) =>
  //     <Project
  //       whenProjClicked = { props.onProjSelection }
  //       name={project.name}
  //       image={project.image}
  //       imgDes={project.imgDes}
  //       category={project.category}
  //       projDate={project.projDate}
  //       githubUrl={project.githubUrl}
  //       description={project.description}
  //       id={project.id}
  //       key={project.id}/>
  //   )}
  // }

  handleChangingSelectedProj = (id) => {
    const selectedProj = this.state.projList.filter(proj => proj.id === id)[0];
    console.log(selectedProj.name);
    this.setState({selectedProj: selectedProj});
  }

  render(){
    let currentlyVisibleState = null;

    if (this.state.selectedProj != null) {
      currentlyVisibleState = <ProjectDetail project = {this.state.selectedProj} resetSelectedProj = {this.handleClick}/>
    } 

    else {
      currentlyVisibleState = <Home 
      // projList={this.state.projList} 
      onProjSelection={this.handleChangingSelectedProj} 
    
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