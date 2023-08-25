import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { HotToastService } from '@ngneat/hot-toast';


export const authCheckGuard: CanActivateFn = (route, state) => {
  const docService = inject(DoctorService);
  const router = inject(Router);
  const toast = inject(HotToastService);
  if(docService.tokenCheck()){
    return true;
  }else{
    router.navigate(['/doctor/signIn']);
    toast.warning('Please Login');
    return false;
  }
};
