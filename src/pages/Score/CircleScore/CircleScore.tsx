import React, { FC } from 'react';
import { Progress } from 'antd';
import { StoreAnswerType } from 'global/Redux/Slices/answersSlice';
import { CircleScoreWrapper } from './CircleScore.s';

type CircleScoreType = {
  score: number;
  answers: StoreAnswerType[];
};

export const CircleScore: FC<CircleScoreType> = ({ score, answers }) => {
  const percentageScore = Number(((score / answers.length) * 100).toFixed(2));

  return (
    <CircleScoreWrapper>
      <Progress type="circle" percent={percentageScore} />
    </CircleScoreWrapper>
  );
};
