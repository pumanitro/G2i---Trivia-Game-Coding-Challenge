import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContextProviders } from 'helpers/tests';
import { ScoreContent } from './Score';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('renders score list questions due to answers object', () => {
  const mockedAnswers = [
    {
      questionText: 'firstText',
      questionCategory: 'first',
      isAnsweredCorrectly: true,
    },
    {
      questionText: 'secondText',
      questionCategory: 'second',
      isAnsweredCorrectly: true,
    },
    {
      questionText: 'thirdText',
      questionCategory: 'third',
      isAnsweredCorrectly: false,
    },
  ];

  render(
    <ContextProviders>
      <ScoreContent score={2} answers={mockedAnswers} clearAnswers={() => {}} />
    </ContextProviders>
  );

  expect(screen.getByText(/firstText/i)).toBeDefined();
  expect(screen.getByText(/secondText/i)).toBeDefined();
  expect(screen.getByText(/thirdText/i)).toBeDefined();
});
