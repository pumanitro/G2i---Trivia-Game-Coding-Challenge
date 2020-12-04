import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { ROUTING_KEYS } from 'helpers/routingKeys';
import { Question } from 'pages/Question/Question';

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTING_KEYS.HOME} exact component={Home} />
        <Route path={ROUTING_KEYS.QUESTION(':questionIndex')} exact component={Question} />
      </Switch>
    </>
  );
};
