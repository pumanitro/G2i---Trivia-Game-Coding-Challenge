import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'global/Redux/rootReducer';
import { StoreAnswerType } from 'global/Redux/Slices/answersSlice';
import { ROUTING_KEYS } from '../../helpers/routingKeys';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

type ScoreContentPropsType = {
  answers: StoreAnswerType[];
};

export const ScoreContent: FC<ScoreContentPropsType> = ({ answers }) => {
  console.log(answers);

  // todo: make it as a selector:
  const score = answers.reduce((acc, answer) => {
    if (answer.isAnsweredCorrectly) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  return (
    <>
      <h1>You scored</h1>
      <h2>
        {score}/{answers.length}
      </h2>
      {answers.map(answer => (
        <div key={answer.questionText}>
          {answer.isAnsweredCorrectly ? <span> + </span> : <span> - </span>}
          <span>{answer.questionText}</span>
        </div>
      ))}
      <Link to={ROUTING_KEYS.HOME}>
        <Button> PLAY AGAIN? </Button>
      </Link>
    </>
  );
};

export const Score = connect((state: RootState) => ({
  answers: state.answers,
}))(ScoreContent);
