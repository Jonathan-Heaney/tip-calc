import React from 'react';

function Bill() {
  return (
    <div>
      <h2 className="input-label">Bill</h2>
      <form>
        <label for="bill" id="bill-label"></label>
        <input
          id="bill"
          type="number"
          placeholder="0"
          min="0"
          className="main-input"
        ></input>
      </form>
    </div>
  );
}

export default Bill;
