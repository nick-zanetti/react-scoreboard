import React from 'react';

const Reset = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleReset}
    >Reset</button>
  </div> 
  )
}

export default Reset