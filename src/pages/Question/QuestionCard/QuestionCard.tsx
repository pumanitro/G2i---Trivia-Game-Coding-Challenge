import React, { FC } from 'react';
import { decode } from 'he';
import { QuestionMarkIcon, QuestionCardWrapper } from './QuestionCard.s';

type QuestionCardType = {
  questionText: string;
};

export const QuestionCard: FC<QuestionCardType> = ({ questionText }) => {
  return (
    <QuestionCardWrapper>
      <QuestionMarkIcon />
      <h3>{decode(questionText)}</h3>
    </QuestionCardWrapper>
  );
};
