import React from 'react';

export function SelectTip() {
  return (
    <div>
      <h2 className="input-label"> Select Tip %</h2>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <input type="number" placeholder="Custom"></input>
    </div>
  );
}
