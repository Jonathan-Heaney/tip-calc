import React from 'react';

export function SelectTip() {
  return (
    <div>
      <h2 className="input-label"> Select Tip %</h2>
      <div id="buttons">
        <button className="tip-percentage btn">5%</button>
        <button className="tip-percentage btn">10%</button>
        <button className="tip-percentage btn">15%</button>
        <button className="tip-percentage btn">25%</button>
        <button className="tip-percentage btn">50%</button>
        <input
          id="custom"
          type="text"
          placeholder="Custom"
          className="tip-percentage"
        ></input>
      </div>
    </div>
  );
}
