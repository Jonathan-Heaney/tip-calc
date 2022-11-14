import React from 'react';
import { TipAmount } from './TipAmount';
import { Total } from './Total';
import { Reset } from './Reset';
import './Results.css';

export function Results() {
  return (
    <div id="results">
      <div>
        <TipAmount></TipAmount>
        <Total></Total>
      </div>
      <Reset></Reset>
    </div>
  );
}
