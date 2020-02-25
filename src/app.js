import React, { useEffect } from 'react';

import Styles from '~/assets/styles';
import Calculator from '~/containers/Calculator';

function App() {
  useEffect(() => {
    document.title = 'Basic Calculator';
  }, []);

  return <> <Styles /> <Calculator /></>;
}

export default App;
