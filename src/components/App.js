import React from 'react';
import Touchdown from './Touchdown';
import ExtraPoint from './ExtraPoint';
import TwoPoint from './TwoPoint';
import Safety from './Safety';
import FieldGoal from './FieldGoal';
import Reset from './Reset';
import AddTeamName from './AddTeamName';
import './App.css';

class App extends React.Component {
  state = {
    score: 0,
    teamname:''
  }

  handleTouchdown = () => {
    this.setState((prevState) => ({score: prevState.score + 6}))
  }
  removeTouchdown = () => {
    this.setState((prevState) => ({score: prevState.score - 6}))
  }
  handleExtraPoint = () => {
    this.setState((prevState) => ({score: prevState.score + 1}))
  }
  removeExtraPoint = () => {
    this.setState((prevState) => ({score: prevState.score - 1}))
  }
  handleTwoPoint = () => {
    this.setState((prevState) => ({score: prevState.score + 2}))
  }
  removeTwoPoint = () => {
    this.setState((prevState) => ({score: prevState.score - 2}))
  }
  handleFieldGoal = () => {
    this.setState((prevState) => ({score: prevState.score + 3}))
  }
  removeFieldGoal = () => {
    this.setState((prevState) => ({score: prevState.score - 3}))
  }
  handleReset = () => {
    this.setState(() => ({score: 0}))
  }
  handleAddName = (name) => {
    this.setState(() => ({teamname: name}))
  }


  render() {
    return (
      <div className="App">
        <div id="wrapper">
        <div id="pseudo-wrapper">
          <h1 id="team-title">{this.state.teamname}</h1>
          <p id="score-num">{this.state.score}</p>
          <div id="buttons-wrapper">
          <Touchdown 
            handleTouchdown={this.handleTouchdown}
            removeTouchdown={this.removeTouchdown}
          />
          <ExtraPoint 
            handleExtraPoint={this.handleExtraPoint}
            removeExtraPoint={this.removeExtraPoint}
          />
          <TwoPoint 
            handleTwoPoint={this.handleTwoPoint}
            removeTwoPoint={this.removeTwoPoint}
          />
          <Safety 
            handleTwoPoint={this.handleTwoPoint}
            removeTwoPoint={this.removeTwoPoint}
          />
          <FieldGoal 
            handleFieldGoal={this.handleFieldGoal}
            removeFieldGoal={this.removeFieldGoal}
          />
        <Reset 
          handleReset={this.handleReset}
        />
        </div>
        <AddTeamName 
          handleAddName={this.handleAddName}
        />
        </div>
        </div>
      </div>
    );
  }
}



export default App;
