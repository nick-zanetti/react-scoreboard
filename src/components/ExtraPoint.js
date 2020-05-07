import React from 'react';

const ExtraPoint = (props) => {
  return (
  <div>
    <button className="score-button"
      onClick={props.handleExtraPoint}
    >Extra Point</button>
    <button className="back-button"
      onClick={props.removeExtraPoint}
    >
    --</button>
  </div> 
  )
}

export default ExtraPoint