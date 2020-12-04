import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import React, { FC } from 'react';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ReactQueryCacheConfig: FC<{}> = ({ children }) => {
  return <ReactQueryCacheProvider queryCache={queryCache}>{children}</ReactQueryCacheProvider>;
};
