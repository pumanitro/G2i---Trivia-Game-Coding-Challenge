import React, { FunctionComponent } from 'react';
import { Button } from 'antd';
import { withPrefetchedQuestions } from './withPrefetchedQuestions';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from '../../helpers/routingKeys';

export const HomeContent: FunctionComponent = () => {
  return (
    <>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h5>You will be presented with 10 True or False questions.</h5>
      <h5>Can you score 100%?</h5>
      <Link to={ROUTING_KEYS.QUESTION(0)}>
        <Button> BEGIN </Button>
      </Link>
    </>
  );
};

export const Home = withPrefetchedQuestions(HomeContent);
