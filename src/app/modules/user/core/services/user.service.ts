import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  cancelAppointmentUrl,
  createAppointmentUrl,
  getAllDepUrl,
  getAppointmentsUrl,
  getDoctorsUrl,
  getHistoryUrl,
  getOtpUrl,
  getTopDepUrl,
  getUserUrl,
  getWalletUrl,
  initiallizePayUrl,
  payWithWalletUrl,
  resendOtpUrl,
  userSignInUrl,
  verifyOtpUrl,
  verifyPayUrl,
} from '../../shared/constants/urls';
import { CreateOrder, PaymentVerification, UserRegister, UserSignIn, WalletModel } from '../models/userModels';
import { AppointmentModel, DepModel, DoctorModel, UserModel } from 'src/app/core/Models/CommonModels';

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

  verifyPayment(data:PaymentVerification,id:string):Observable<{signatureIsValid:boolean}>{
    return this.http.post<{signatureIsValid:boolean}>(`${verifyPayUrl}/${id}`,data);
  }

  cancelAppointment(id:string):Observable<{ok:boolean,message:string}>{
    return this.http.get<{ok:boolean,message:string}>(`${cancelAppointmentUrl}${id}`);
  }

  getHistory():Observable<{data:AppointmentModel[]}>{
    return this.http.get<{data:AppointmentModel[]}>(getHistoryUrl);
  }

  getUserDetails():Observable<{data:UserModel}>{
    return this.http.get<{data:UserModel}>(getUserUrl);
  }

  getAppointments():Observable<{data:AppointmentModel[]}>{
    return this.http.get<{data:AppointmentModel[]}>(getAppointmentsUrl);
  }

  getWallet():Observable<{data:WalletModel}>{
    return this.http.get<{data:WalletModel}>(getWalletUrl);
  }

  payWithWallet(id:string):Observable<{payment:boolean,message:string}>{
    return this.http.get<{payment:boolean,message:string}>(`${payWithWalletUrl + id}`)
  }

  getTopDep():Observable<{data:DepModel[]}>{
    return this.http.get<{data:DepModel[]}>(getTopDepUrl);
  }
  
  checkUserToken():boolean{
    const token = localStorage.getItem('token');
    return token ? true : false ; 
  }
}
