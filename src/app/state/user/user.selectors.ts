import { AppState } from '../app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducers';

export const selectUser = createFeatureSelector<UserState>('user');
export const getData = createSelector(selectUser, (state: UserState) => {
  return state.data;
});
