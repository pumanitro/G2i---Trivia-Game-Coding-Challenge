import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CoreTheme } from './global/Themes/CoreTheme';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';
import { AppRouter } from './global/AppRouter/AppRouter';

const App: FunctionComponent = () => (
  <ThemeProvider theme={CoreTheme}>
    <Router>
      <GlobalStyles />
      <ErrorHandler>
        <AppRouter />
      </ErrorHandler>
    </Router>
  </ThemeProvider>
);

export default App;
