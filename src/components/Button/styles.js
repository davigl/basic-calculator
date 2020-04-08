import styled from 'styled-components';

import { sizes, colors } from '~/assets/styles/partials/_variables';

const {
  widthBiggerButton, widthSmallButton, heightButton, heightMobileButton, widthMobileButton
} = sizes;
const { darker, white } = colors;

export const Key = styled.button`
  font-family: 'digital';
  background-color: ${darker};
  height: ${heightButton};
  width: ${(props) => (props.size ? widthBiggerButton : widthSmallButton)};
  border-style: none;
  border-radius: ${(props) => (props.size ? '0%' : '50%')};
  color: ${white};
  cursor: pointer;
  margin-top: 10px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  @media (max-width: 768px) {
    height: ${heightMobileButton};
    width: ${(props) => (props.size ? widthBiggerButton : widthMobileButton)};
  }

  &:active {
    background-image: none;
  }
`;
