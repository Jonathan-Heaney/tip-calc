import React from 'react';
import Bill from './Bill';
import { SelectTip } from './SelectTip';
import { NumberOfPeople } from './NumberOfPeople';

export function Inputs() {
  return (
    <div>
      <Bill></Bill>
      <SelectTip></SelectTip>
      <NumberOfPeople></NumberOfPeople>
    </div>
  );
}
