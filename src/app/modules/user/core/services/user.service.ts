import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  createAppointmentUrl,
  getAllDepUrl,
  getDoctorsUrl,
  getOtpUrl,
  initiallizePayUrl,
  resendOtpUrl,
  userSignInUrl,
  verifyOtpUrl,
  verifyPayUrl,
} from '../../shared/constants/urls';
import { CreateOrder, PaymentVerification, UserRegister, UserSignIn } from '../models/userModels';
import { DepModel, DoctorModel } from 'src/app/core/Models/CommonModels';

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
  
  getAllDepartments(searchText:string):Observable<{data:DepModel[],count:number}>{
    return this.http.get<{data:DepModel[],count:number}>(`${getAllDepUrl}?search=${searchText}`);
  }

  getDoctors(depId:string,searchText:string):Observable<{data:DoctorModel[],count:number}>{
    return this.http.get<{data:DoctorModel[],count:number}>(`${getDoctorsUrl}?department=${depId}&search=${searchText}`);
  }

  createOrder(details:CreateOrder):Observable<{ok:boolean,message:string,price:number,appointmentId:string}>{
    return this.http.post<{ok:boolean,message:string,price:number,appointmentId:string}>(createAppointmentUrl,{appointment:details});
  }

  initiallizePayment(orderId:string):Observable<{order:any}>{
    return this.http.get<{order:any}>(`${initiallizePayUrl}${orderId}`);
  }

  verifyPayment(data:PaymentVerification):Observable<{signatureIsValid:boolean}>{
    return this.http.post<{signatureIsValid:boolean}>(verifyPayUrl,data);
  }

  checkUserToken():boolean{
    const token = localStorage.getItem('token');
    return token ? true : false ; 
  }
}
