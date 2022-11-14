import React from 'react';
import Bill from './Bill';
import { SelectTip } from './SelectTip';
import { NumberOfPeople } from './NumberOfPeople';
import './Inputs.css';

export function Inputs() {
  return (
    <div id="inputs">
      <Bill></Bill>
      <SelectTip></SelectTip>
      <NumberOfPeople></NumberOfPeople>
    </div>
  );
}
