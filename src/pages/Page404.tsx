import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from '../helpers/routingKeys';

export const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={ROUTING_KEYS.HOME}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
