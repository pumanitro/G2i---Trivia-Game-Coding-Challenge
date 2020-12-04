import React, { FC } from 'react';
import { QuestionType } from 'helpers/types';
import { withQuestion } from './withQuestion';
import { Card } from 'antd';
import { AnswerButton } from './AnswerButton/AnswerButton';

export type QuestionPropsType = {
  questionIndex: number;
  question: QuestionType;
  questionsAmount: number;
};

export const QuestionContent: FC<QuestionPropsType> = ({ questionIndex, question, questionsAmount }) => {
  console.log(questionIndex);
  console.log(question);

  return (
    <div>
      <h1>{question.category}</h1>
      <Card> {question.question} </Card>
      <div>
        {questionIndex + 1} of {questionsAmount}
      </div>
      <AnswerButton questionIndex={questionIndex} questionsAmount={questionsAmount}>
        No
      </AnswerButton>
      <AnswerButton questionIndex={questionIndex} questionsAmount={questionsAmount}>
        Yes
      </AnswerButton>
    </div>
  );
};

export const Question = withQuestion(QuestionContent);
