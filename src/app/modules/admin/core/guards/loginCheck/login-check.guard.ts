import { CanActivateFn } from '@angular/router';


export const loginCheckGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('adminToken')){
    history.back();
    return false;
  }else{
    return true;
  }
};
