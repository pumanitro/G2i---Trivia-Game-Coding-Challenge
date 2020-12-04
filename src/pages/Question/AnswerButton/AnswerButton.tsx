import React, { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from 'helpers/routingKeys';
import { QuestionType } from 'helpers/types';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'global/Redux/Slices/answersSlice';

export type AnswerButtonPropsType = {
  questionIndex: number;
  questionsAmount: number;
  isAnswerTrue: boolean;
  question: QuestionType;
};

export const AnswerButton: FC<AnswerButtonPropsType> = ({ questionIndex, questionsAmount, isAnswerTrue, question }) => {
  const redirectionUrl =
    questionIndex + 1 === questionsAmount ? '/grand-finale' : ROUTING_KEYS.QUESTION(questionIndex + 1);

  // I prefer this way than connect
  const dispatch = useDispatch();
  const dispatchAddAnswer = () => {
    dispatch(
      addAnswer({
        question,
        answer: isAnswerTrue ? 'True' : 'False',
      })
    );
  };

  return (
    <Link to={redirectionUrl} onClick={dispatchAddAnswer}>
      <Button>{isAnswerTrue ? 'Yes' : 'No'}</Button>
    </Link>
  );
};
