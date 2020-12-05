import React, { FC } from 'react';
import { QuestionType } from 'helpers/types';
import { withQuestion } from './withQuestion';
import { Progress } from 'antd';
import { AnswerButton } from './AnswerButton/AnswerButton';
import { ProgressWrapper, StyledQuestionCard } from './Question.s';
import { QuestionCard } from './QuestionCard/QuestionCard';

export type QuestionPropsType = {
  questionIndex: number;
  question: QuestionType;
  questionsAmount: number;
};

export const QuestionContent: FC<QuestionPropsType> = ({ questionIndex, question, questionsAmount }) => {
  return (
    <StyledQuestionCard>
      <h1>{question.category}</h1>
      <QuestionCard questionText={question.question} />
      <ProgressWrapper>
        {questionIndex + 1} of {questionsAmount}
        <Progress percent={(questionIndex / questionsAmount) * 100} showInfo={false} />
      </ProgressWrapper>
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
