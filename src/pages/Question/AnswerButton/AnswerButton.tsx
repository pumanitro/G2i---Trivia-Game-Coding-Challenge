import React, { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from '../../../helpers/routingKeys';

export type AnswerButtonPropsType = {
  questionIndex: number;
  questionsAmount: number;
};

export const AnswerButton: FC<AnswerButtonPropsType> = ({ questionIndex, questionsAmount, children }) => {
  const redirectionUrl =
    questionIndex + 1 === questionsAmount ? '/grand-finale' : ROUTING_KEYS.QUESTION(questionIndex + 1);

  return (
    <Link to={redirectionUrl}>
      <Button>{children}</Button>
    </Link>
  );
};
