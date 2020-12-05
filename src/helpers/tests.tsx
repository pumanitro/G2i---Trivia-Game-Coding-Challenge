import { CoreTheme } from 'global/Themes/CoreTheme';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { AppWrapper } from 'global/AppWrapper/AppWrapper';
import { GlobalStyles } from 'global/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import React, { FC } from 'react';
import { ReactQueryCacheConfig } from '../global/ReactQueryCacheConfig/ReactQueryCacheConfig';
import { ErrorHandler } from '../global/ErrorHandler/ErrorHandler';
import { Redux } from '../global/Redux/Redux';

export const ContextProviders: FC<{}> = ({ children }) => {
  return (
    <Redux>
      <ThemeProvider theme={CoreTheme}>
        <ReactQueryCacheConfig>
          <Router>
            <GlobalStyles />
            <ErrorHandler>
              <AppWrapper>{children}</AppWrapper>
            </ErrorHandler>
          </Router>
        </ReactQueryCacheConfig>
      </ThemeProvider>
    </Redux>
  );
};
