import styled from 'styled-components';

import { _neon, _panleft } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

const { primary, dark, white } = colors;

export const Layer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primary};
  width: 100%;
  height: 100%;
  animation: ${_panleft} 2s linear infinite alternate both;
`;

export const Wrapper = styled.main`
  width: 320px;
  justify-self: center;
  align-self: center;
  font-family: GTWalsheim;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: background-color 5s linear;

  &:nth-child(1) {
    height: 100%;
    width: 100%;
    color: ${white};
    font-size: 70px;
    text-align: center;
    background-image: url("https://images.unsplash.com/photo-1521133573892-e44906baee46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200");
    animation: ${_neon} .2s ease-in-out infinite alternate;

    @media (max-width: 768px) {
      font-size: 50px;
    }
  }

  &:nth-child(2) {
    border-radius: 10px;
    background-color: ${dark};
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Parent = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
