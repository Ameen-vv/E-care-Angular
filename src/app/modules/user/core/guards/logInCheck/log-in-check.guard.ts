import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';

export const logInCheckGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService) ;
  if(userService.checkUserToken()){
    history.back()
    return false;
  }else{
    return true;
  }
};
