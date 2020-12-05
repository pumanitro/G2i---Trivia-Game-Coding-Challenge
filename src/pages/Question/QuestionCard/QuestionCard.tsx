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
      <h5>{decode(questionText)}</h5>
    </QuestionCardWrapper>
  );
};
