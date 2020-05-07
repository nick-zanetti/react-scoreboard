import React from 'react';

const Touchdown = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleTouchdown}
    >TD</button>
    <button className="back-button"
      onClick={props.removeTouchdown}
    >--</button>
  </div> 
  )
}

export default Touchdown