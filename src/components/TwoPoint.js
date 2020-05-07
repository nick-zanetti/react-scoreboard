import React from 'react';

const TwoPoint = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleTwoPoint}
    >2 PT Conversion</button>
    <button className="back-button"
      onClick={props.removeTwoPoint}
    >--</button>
  </div> 
  )
}

export default TwoPoint