import React, { FunctionComponent } from 'react';
import { Button } from 'antd';
import { withPrefetchedQuestions } from './withPrefetchedQuestions';

export const HomeContent: FunctionComponent = () => {
  return (
    <>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h5>You will be presented with 10 True or False questions.</h5>
      <h5>Can you score 100%?</h5>
      <Button> BEGIN </Button>
    </>
  );
};

export const Home = withPrefetchedQuestions(HomeContent);
