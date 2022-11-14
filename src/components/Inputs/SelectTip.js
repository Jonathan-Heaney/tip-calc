import React from 'react';

export function SelectTip() {
  return (
    <div>
      <h2 className="input-label"> Select Tip %</h2>
      <ul id="radio-buttons">
        <li className="tip-percentage">
          <input type="radio" id="p10" name="amount" />
          <label for="p10">10%</label>
        </li>
        <li className="tip-percentage">
          <input type="radio" id="p15" name="amount" />
          <label for="p15">15%</label>
        </li>
        <li className="tip-percentage">
          <input type="radio" id="p20" name="amount" />
          <label for="p20">20%</label>
        </li>
        <li className="tip-percentage">
          <input type="radio" id="p25" name="amount" />
          <label for="p25">25%</label>
        </li>
        <li className="tip-percentage">
          <input type="radio" id="p50" name="amount" />
          <label for="p50">50%</label>
        </li>
        <input
          id="custom"
          type="number"
          placeholder="Custom"
          className="tip-percentage"
          min="0"
        ></input>
      </ul>
    </div>
  );
}
