import React from 'react';

import { Key } from './styles';

export default function Button({
  value, id, size, onClick
}) {
  return <Key id={id} size={size} value={value} onClick={onClick}> {value} </Key>;
}
