import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const toast = inject(HotToastService);
  if(localStorage.getItem('adminToken')){
    return true;
  }else{
    router.navigate(['/admin']);
    toast.warning('please LogIn');
    return false;
  }
};
