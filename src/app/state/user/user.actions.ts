import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/core/Models/CommonModels';

export const loadUsers = createAction('[User] Load User');

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ data: UserModel[] }>()
);

export const blockUser = createAction(
  '[User] Block User',
  props<{ id: string }>()
);

export const unBlockUser = createAction(
  '[User] Unblock User',
  props<{ id: string }>()
);

export const blockedUser = createAction(
    '[User] Block User Success',
    props<{id:string}>()
)

export const unBlockedUser = createAction(
    '[User] Unblock User Success',
    props<{id:string}>()
)
