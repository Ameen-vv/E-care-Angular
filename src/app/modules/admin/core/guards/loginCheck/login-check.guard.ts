import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';


export const loginCheckGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(localStorage.getItem('adminToken')){
    router.navigate(['/admin/a']);
    return false;
  }else{
    return true;
  }
};
