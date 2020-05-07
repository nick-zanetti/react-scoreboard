import React from 'react';

const Safety = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleTwoPoint}
    >Safety</button>
    <button className="back-button"
      onClick={props.removeTwoPoint}
    >--</button>
  </div> 
  )
}

export default Safety