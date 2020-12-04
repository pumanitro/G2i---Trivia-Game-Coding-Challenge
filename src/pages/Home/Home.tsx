import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { QuestionService } from 'services/QuestionService';
import { CACHE_KEYS } from 'helpers/cacheKeys';
import { Button } from 'antd';

export const Home: FunctionComponent = () => {
  const { data } = useQuery(CACHE_KEYS.GET_QUESTIONS, QuestionService.getQuestions);

  console.log(data);

  return (
    <>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h5>You will be presented with 10 True or False questions.</h5>
      <h5>Can you score 100%?</h5>
      <Button> BEGIN </Button>
    </>
  );
};
