import React from 'react';

import { Container } from './styles';

export default function FormulaScreen({ value }) {
  return (
    <Container id="display"> {value} </Container>
  );
}
