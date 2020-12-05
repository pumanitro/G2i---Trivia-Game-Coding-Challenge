import React, { FC } from 'react';
import { Progress } from 'antd';
import { StoreAnswerType } from 'global/Redux/Slices/answersSlice';
import { CircleScoreWrapper } from './CircleScore.s';

type CircleScoreType = {
  score: number;
  answers: StoreAnswerType[];
};

export const CircleScore: FC<CircleScoreType> = ({ score, answers }) => {
  const percentageScore = (score / answers.length) * 100;

  return (
    <CircleScoreWrapper>
      <Progress type="circle" percent={percentageScore} />
    </CircleScoreWrapper>
  );
};
