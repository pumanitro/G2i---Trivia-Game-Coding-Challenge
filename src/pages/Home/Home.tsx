import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { QuestionService } from 'services/QuestionService';
import { CACHE_KEYS } from 'helpers/cacheKeys';

export const Home: FunctionComponent = () => {
  const { data } = useQuery(CACHE_KEYS.GET_QUESTIONS, QuestionService.getQuestions);

  console.log(data);

  return <div>test 312</div>;
};
