import styled from 'styled-components';

import { sizes, colors } from '~/assets/styles/partials/_variables';

const { sizeScreen } = sizes;
const { white, darker } = colors;

export const Container = styled.div`
  min-height: ${sizeScreen};
  font-size: ${sizeScreen};
  text-align: right;
  word-wrap: break-word;
  background-color: ${darker};
  color: ${white};
  margin-top: 15px;
  margin-bottom: 10px;
  width: 95%;
  padding: 7px;
  font-family: 'digital';
`;
