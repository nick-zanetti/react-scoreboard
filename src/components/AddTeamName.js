import React from 'react';

class AddTeamName extends React.Component {
  handleAddName = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();

    if (name.length <= 25) {
      this.props.handleAddName(name)
      e.target.elements.name.value = ''
    }

    else if (name.length > 25) {
      alert('Name is too long, please abbreviate')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddName} id="team-name">
          <input type="text" name="name" placeholder="Enter team name..."></input>
          <button className="score-button">Add Team Name</button>
        </form>
      </div> 
      )
  }

}


export default AddTeamName