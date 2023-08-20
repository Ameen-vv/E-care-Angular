import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from '../../services/user.service';

export const userCheckGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const toast = inject(HotToastService);
  
  if(userService.checkUserToken()){
    return true;
  }else{
    router.navigate(['/user/signIn']);
    toast.warning('Please Log In');
    return false;
  }  
};
