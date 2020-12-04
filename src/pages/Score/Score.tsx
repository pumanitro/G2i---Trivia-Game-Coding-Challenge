import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'global/Redux/rootReducer';
import { StoreAnswerType } from 'global/Redux/Slices/answersSlice';
import { ROUTING_KEYS } from '../../helpers/routingKeys';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { clearAnswers } from 'global/Redux/Slices/answersSlice';
import { queryCache } from 'react-query';
import { CACHE_KEYS } from '../../helpers/cacheKeys';

type ScoreContentPropsType = {
  answers: StoreAnswerType[];
  clearAnswers: () => void;
};

export const ScoreContent: FC<ScoreContentPropsType> = ({ answers, clearAnswers }) => {
  console.log(answers);

  // todo: make it as a selector:
  const score = answers.reduce((acc, answer) => {
    if (answer.isAnsweredCorrectly) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  const onPlayAgainClick = () => {
    clearAnswers();
    // For new question set retrieval, when necessary
    queryCache.invalidateQueries(CACHE_KEYS.GET_QUESTIONS);
  };

  return (
    <>
      <h1>You scored</h1>
      <h2>
        {score}/{answers.length}
      </h2>
      {answers.map((answer, index) => (
        <div key={index + answer.questionText}>
          {answer.isAnsweredCorrectly ? <span> + </span> : <span> - </span>}
          <span>{answer.questionText}</span>
        </div>
      ))}
      <Link to={ROUTING_KEYS.HOME} onClick={onPlayAgainClick}>
        <Button> PLAY AGAIN? </Button>
      </Link>
    </>
  );
};

export const Score = connect(
  (state: RootState) => ({
    answers: state.answers,
  }),
  {
    clearAnswers,
  }
)(ScoreContent);
