import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';

export const tokenCheckGuard: CanActivateFn = (route, state) => {
  const docService = inject(DoctorService);
  const router = inject(Router);

  if(!docService.tokenCheck()){
    return true;
  }else{
    router.navigate(['/doctor']);
    return false;
  }
};
