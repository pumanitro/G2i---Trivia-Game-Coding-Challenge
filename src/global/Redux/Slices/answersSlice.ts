import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AddAnswerPayloadType = {
  question: string;
  isCorrectlyAnswered: boolean;
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState: [] as AddAnswerPayloadType[],
  reducers: {
    addAnswer: (state, action: PayloadAction<AddAnswerPayloadType>) => {
      // I can mutate it because of Immer library under the hood
      state.push(action.payload);
    },
  },
});

export const { addAnswer } = answersSlice.actions;
