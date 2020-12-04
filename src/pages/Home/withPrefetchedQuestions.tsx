import React, { FC, useEffect } from 'react';
import { queryCache } from 'react-query';
import { CACHE_KEYS } from 'helpers/cacheKeys';
import { QuestionService } from 'services/QuestionService';

export const withPrefetchedQuestions = (HomeComponent: FC<{}>) => () => {
  const prefetchQuestions = async () => {
    await queryCache.prefetchQuery(CACHE_KEYS.GET_QUESTIONS, QuestionService.getQuestions);
    // The results of this query will be cached like a normal query
  };

  useEffect(() => {
    prefetchQuestions();
  }, []);

  return <HomeComponent />;
};
