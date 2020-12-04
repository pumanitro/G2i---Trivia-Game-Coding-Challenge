import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { QuestionType } from 'helpers/types';
import { CACHE_KEYS } from 'helpers/cacheKeys';
import { QuestionService } from 'services/QuestionService';
import { Spinner } from 'components/Spinner/Spinner';
import { QuestionPropsType } from './Question';

type QuestionParamsType = {
  questionIndex: string;
};

export const withQuestion = (QuestionComponent: FC<QuestionPropsType>) => () => {
  const { questionIndex } = useParams<QuestionParamsType>();
  const { isLoading, data } = useQuery<QuestionType[]>(CACHE_KEYS.GET_QUESTIONS, QuestionService.getQuestions);

  const castedQuestionIndex = Number(questionIndex);

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <QuestionComponent
      questionIndex={castedQuestionIndex}
      question={data[castedQuestionIndex]}
      questionsAmount={data.length}
    />
  );
};
