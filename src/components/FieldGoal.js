import React from 'react';

const FieldGoal = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleFieldGoal}
    >FG</button>
    <button className="back-button"
      onClick={props.removeFieldGoal}
    >--</button>
  </div> 
  )
}

export default FieldGoal