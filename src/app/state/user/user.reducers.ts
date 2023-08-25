import { UserModel } from 'src/app/core/Models/CommonModels';
import { createReducer, on } from '@ngrx/store';
import {
  blockUser,
  blockedUser,
  loadUserSuccess,
  loadUsers,
  unBlockUser,
  unBlockedUser,
} from './user.actions';
import { state } from '@angular/animations';

export interface UserState {
  data: UserModel[];
  loading: boolean;
}

export const initialState: UserState = {
  data: [],
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),

  on(loadUserSuccess, (state, { data }) => {
    return { ...state, loading: false, data: data };
  }),

  on(blockedUser, (state, { id }) => ({
    ...state,
    data: state.data.map((user) => {
      if (user._id === id) {
        return { ...user, block: true };
      }
      return user;
    }),
  })),

  on(unBlockedUser, (state, { id }) => ({
    ...state,
    data: state.data.map((user) => {
      if (user._id === id) {
        return { ...user, block: false };
      }
      return user;
    }),
  }))
);
