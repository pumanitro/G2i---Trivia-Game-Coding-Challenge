import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query-devtools';

import { CoreTheme } from './global/Themes/CoreTheme';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';
import { AppRouter } from './global/AppRouter/AppRouter';
import { ReactQueryCacheConfig } from './global/ReactQueryCacheConfig/ReactQueryCacheConfig';
import { Redux } from 'global/Redux/Redux';
import { AppWrapper } from 'global/AppWrapper/AppWrapper';

const App: FunctionComponent = () => (
  <Redux>
    <ThemeProvider theme={CoreTheme}>
      <ReactQueryCacheConfig>
        <Router>
          <ReactQueryDevtools initialIsOpen />
          <GlobalStyles />
          <ErrorHandler>
            <AppWrapper>
              <AppRouter />
            </AppWrapper>
          </ErrorHandler>
        </Router>
      </ReactQueryCacheConfig>
    </ThemeProvider>
  </Redux>
);

export default App;
