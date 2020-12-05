import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import React, { FC } from 'react';

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

export const ReactQueryCacheConfig: FC<{}> = ({ children }) => {
  return <ReactQueryCacheProvider queryCache={queryCache}>{children}</ReactQueryCacheProvider>;
};
