import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

interface RootState {
  isOn: boolean;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
