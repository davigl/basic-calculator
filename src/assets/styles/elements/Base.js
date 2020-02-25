import { createGlobalStyle } from 'styled-components';

import Digital from '~/assets/fonts/DS-DIGI.TTF';
import GTWalsheim from '~/assets/fonts/GTWalsheimProBold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GTWalsheim';
    src: url('${GTWalsheim}');
  }

  @font-face {
    font-family: 'digital';
    src: url('${Digital}');
  }

  button:focus {
    outline:none;
  }

  button:active {
    transform: translateY(4px);
  }
`;

export default GlobalStyle;
