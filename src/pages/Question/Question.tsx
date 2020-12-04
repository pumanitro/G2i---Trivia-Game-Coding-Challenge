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
      <AnswerButton
        questionIndex={questionIndex}
        questionsAmount={questionsAmount}
        question={question}
        isAnswerTrue={false}
      />
      <AnswerButton questionIndex={questionIndex} questionsAmount={questionsAmount} question={question} isAnswerTrue />
    </div>
  );
};

export const Question = withQuestion(QuestionContent);
