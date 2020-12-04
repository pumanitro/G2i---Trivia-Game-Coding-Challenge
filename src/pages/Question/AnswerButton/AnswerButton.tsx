import React, { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTING_KEYS } from 'helpers/routingKeys';
import { QuestionType } from 'helpers/types';
import { connect } from 'react-redux';
import { addAnswer } from 'global/Redux/Slices/answersSlice';

export type AnswerButtonPropsType = {
  questionIndex: number;
  questionsAmount: number;
  isAnswerTrue: boolean;
  question: QuestionType;
};

export const AnswerButtonContent: FC<AnswerButtonPropsType & { addAnswer: () => void }> = ({
  questionIndex,
  questionsAmount,
  isAnswerTrue,
  addAnswer,
}) => {
  const redirectionUrl =
    questionIndex + 1 === questionsAmount ? '/grand-finale' : ROUTING_KEYS.QUESTION(questionIndex + 1);

  return (
    <Link to={redirectionUrl} onClick={addAnswer}>
      <Button>{isAnswerTrue ? 'Yes' : 'No'}</Button>
    </Link>
  );
};

export const AnswerButton = connect(
  null,
  (dispatch, { question, isAnswerTrue }: AnswerButtonPropsType) => {
    return {
      addAnswer: () =>
        dispatch(
          addAnswer({
            question,
            answer: isAnswerTrue ? 'True' : 'False',
          })
        ),
    };
  }
)(AnswerButtonContent);
