import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'global/Redux/rootReducer';
import { StoreAnswerType } from 'global/Redux/Slices/answersSlice';
import { ROUTING_KEYS } from '../../helpers/routingKeys';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom';
import { clearAnswers } from 'global/Redux/Slices/answersSlice';
import { queryCache } from 'react-query';
import { CACHE_KEYS } from 'helpers/cacheKeys';
import { CircleScore } from './CircleScore/CircleScore';
import { scoreSelector } from 'global/Redux/Selectors/aswerSelectors';
import { CorrectAnswerIcon, IncorrectAnswerIcon, StyledListItem } from './Score.s';

type ScoreContentPropsType = {
  answers: StoreAnswerType[];
  score: number;
  clearAnswers: () => void;
};

export const ScoreContent: FC<ScoreContentPropsType> = ({ answers, clearAnswers, score }) => {
  const onPlayAgainClick = () => {
    clearAnswers();
    // For new question set retrieval, when necessary
    queryCache.invalidateQueries(CACHE_KEYS.GET_QUESTIONS);
  };

  return (
    <>
      <h1>
        You scored {score}/{answers.length}.
      </h1>
      <CircleScore answers={answers} score={score} />

      <List
        itemLayout="horizontal"
        dataSource={answers}
        renderItem={answer => (
          <StyledListItem>
            <List.Item.Meta
              avatar={answer.isAnsweredCorrectly ? <CorrectAnswerIcon /> : <IncorrectAnswerIcon />}
              title={<h3>{answer.questionCategory}</h3>}
              description={answer.questionText}
            />
          </StyledListItem>
        )}
      />

      <Link to={ROUTING_KEYS.HOME} onClick={onPlayAgainClick}>
        <Button> PLAY AGAIN? </Button>
      </Link>
    </>
  );
};

export const Score = connect(
  (state: RootState) => ({
    answers: state.answers,
    score: scoreSelector(state.answers),
  }),
  {
    clearAnswers,
  }
)(ScoreContent);
