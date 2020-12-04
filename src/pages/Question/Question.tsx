import React, { FC } from 'react';
import { QuestionType } from 'helpers/types';
import { withQuestion } from './withQuestion';
import { Button, Card } from 'antd';

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
      <div>
        <Button>No</Button>
        <Button>Yes</Button>
      </div>
    </div>
  );
};

export const Question = withQuestion(QuestionContent);
