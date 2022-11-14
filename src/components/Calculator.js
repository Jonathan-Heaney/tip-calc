import React from 'react';
import './Calculator.css';
import { Inputs } from './Inputs/Inputs';
import { Results } from './Results/Results';

function Calculator() {
  return (
    <div id="main">
      <Inputs></Inputs>
      <Results></Results>
    </div>
  );
}

export default Calculator;
