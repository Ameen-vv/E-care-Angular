import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  getOtpUrl,
  resendOtpUrl,
  userSignInUrl,
  verifyOtpUrl,
} from '../../shared/constants/urls';
import { UserRegister, UserSignIn } from '../models/userModels';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getOtp(userEmail: string): Observable<{ ok: boolean; message: string }> {
    return this.http.post<{ ok: boolean; message: string }>(getOtpUrl, {
      email: userEmail,
    });
  }

  verifyOtpAndSignUp(
    user: UserRegister,
    otp: string
  ): Observable<{ ok: boolean; message: string }> {
    return this.http.post<{ ok: boolean; message: string }>(verifyOtpUrl, {
      userData: user,
      otp,
    });
  }

  resendOtp(email: string): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(resendOtpUrl, { email });
  }

  userSignIn(user:UserSignIn):Observable<{ok:boolean,message:string,token?:string}>{
    return this.http.post<{ok:boolean,message:string,token?:string}>(userSignInUrl,user);
  }  
}
