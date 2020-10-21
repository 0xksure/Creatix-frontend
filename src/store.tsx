import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FeedbackState } from 'Reducers/Feedback';

export interface RootState {
  isOn: boolean;
  Feedback: FeedbackState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
