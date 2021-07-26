import React from 'react';
import {Home} from './screens/Home';
import {ThemeProvider} from 'styled-components/native';
import {colors} from './theme/colors';

export function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
    </ThemeProvider>
  );
}
