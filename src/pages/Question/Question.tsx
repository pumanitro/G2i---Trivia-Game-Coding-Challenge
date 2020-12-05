import React, { FC } from 'react';
import { QuestionType } from 'helpers/types';
import { withQuestion } from './withQuestion';
import { Card, Progress } from 'antd';
import { AnswerButton } from './AnswerButton/AnswerButton';
import { decode } from 'he';
import { StyledQuestionCard } from './Question.s';

export type QuestionPropsType = {
  questionIndex: number;
  question: QuestionType;
  questionsAmount: number;
};

export const QuestionContent: FC<QuestionPropsType> = ({ questionIndex, question, questionsAmount }) => {
  return (
    <StyledQuestionCard>
      <h1>{question.category}</h1>
      <Card> {decode(question.question)} </Card>
      <div>
        {questionIndex + 1} of {questionsAmount}
      </div>
      <Progress percent={(questionIndex / questionsAmount) * 100} showInfo={false} />
      <AnswerButton
        questionIndex={questionIndex}
        questionsAmount={questionsAmount}
        question={question}
        isAnswerTrue={false}
      />
      <AnswerButton questionIndex={questionIndex} questionsAmount={questionsAmount} question={question} isAnswerTrue />
    </StyledQuestionCard>
  );
};

export const Question = withQuestion(QuestionContent);
