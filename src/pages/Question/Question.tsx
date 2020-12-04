import React, { FC } from 'react';
import { QuestionType } from 'helpers/types';
import { withQuestion } from './withQuestion';

export type QuestionPropsType = {
  questionIndex: number;
  question: QuestionType;
};

export const QuestionContent: FC<QuestionPropsType> = ({ questionIndex, question }) => {
  console.log(questionIndex);
  console.log(question);

  return <div>test</div>;
};

export const Question = withQuestion(QuestionContent);
