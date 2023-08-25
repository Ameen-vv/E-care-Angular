import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs';
import { AdminService } from 'src/app/modules/admin/core/services/admin.service';
import {
  blockUser,
  blockedUser,
  loadUserSuccess,
  loadUsers,
  unBlockUser,
  unBlockedUser,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private adminService: AdminService) {}

  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return this.adminService.getUsers().pipe(
          map((res) => {
            return loadUserSuccess({ data: res.data });
          })
        );
      })
    );
  });

  blockUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(blockUser),
        mergeMap((action) => this.adminService.blockUser(action.id).pipe(
          map(
            (res)=>blockedUser({id:action.id})
          )
        ))
      ),
  );

  unBlockUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(unBlockUser),
        mergeMap((action) => this.adminService.unBlockUser(action.id).pipe(
          map(
            (res)=>unBlockedUser({id:action.id})
          )
        ))
      ),
  );
}
