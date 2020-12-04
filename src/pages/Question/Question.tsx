import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CACHE_KEYS } from 'helpers/cacheKeys';
import { QuestionService } from 'services/QuestionService';
import { QuestionType } from 'helpers/types';

type QuestionParamsType = {
  questionIndex: string;
};

export const Question: FC<{}> = () => {
  const { questionIndex } = useParams<QuestionParamsType>();
  const { data } = useQuery<QuestionType[]>(CACHE_KEYS.GET_QUESTIONS, QuestionService.getQuestions);

  console.log(data);
  console.log(questionIndex);

  return <div>test</div>;
};
