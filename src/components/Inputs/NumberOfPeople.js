import React from 'react';

export function NumberOfPeople() {
  return (
    <div>
      <h2 className="input-label">Number of People</h2>
      <form>
        <label for="num-people" id="num-people-label"></label>
        <input
          id="num-people"
          type="text"
          placeholder="0"
          className="main-input"
        ></input>
      </form>
    </div>
  );
}
