import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CoreTheme } from './global/Themes/CoreTheme';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';
import { AppRouter } from './global/AppRouter/AppRouter';
import { ReactQueryCacheConfig } from './global/ReactQueryCacheConfig/ReactQueryCacheConfig';

const App: FunctionComponent = () => (
  <ThemeProvider theme={CoreTheme}>
    <ReactQueryCacheConfig>
      <Router>
        <GlobalStyles />
        <ErrorHandler>
          <AppRouter />
        </ErrorHandler>
      </Router>
    </ReactQueryCacheConfig>
  </ThemeProvider>
);

export default App;
