import React from 'react';

export function NumberOfPeople() {
  return (
    <div>
      <h2 className="input-label">Number of People</h2>
      <form>
        <label for="num-people" id="num-people-label"></label>
        <input
          id="num-people"
          type="number"
          placeholder="1"
          className="main-input"
          min="1"
        ></input>
      </form>
    </div>
  );
}
