import React, { FunctionComponent } from 'react';
import { Button, Card } from 'antd';
import { withPrefetchedQuestions } from './withPrefetchedQuestions';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from 'helpers/routingKeys';

export const HomeContent: FunctionComponent = () => {
  return (
    <Card>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h3>You will be presented with 10 True or False questions.</h3>
      <h3>Can you score 100%?</h3>
      <Link to={ROUTING_KEYS.QUESTION(0)}>
        <Button size="large"> BEGIN </Button>
      </Link>
    </Card>
  );
};

export const Home = withPrefetchedQuestions(HomeContent);
