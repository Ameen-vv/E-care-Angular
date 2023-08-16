import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { adminLogInUrl, blockUserUrl, getDoctorsUrl, getUsersUrl, unBlockUserUrl } from '../../shared/constants/urls';
import { DoctorModel, UserModel } from 'src/app/core/Models/CommonModels';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  adminLogIn(user:{email:string,password:string}):Observable<{ok:boolean,token?:string}>{
    return this.http.post<{ok:boolean,token?:string}>(adminLogInUrl,user).pipe(take(1));
  }

  getUsers():Observable<{data:UserModel[]}>{
    return this.http.get<{data:UserModel[]}>(getUsersUrl).pipe(take(1));
  }

  blockUser(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${blockUserUrl + id}`).pipe(take(1));
  }

  unBlockUser(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${unBlockUserUrl + id}`).pipe(take(1));
  }

  getDoctors():Observable<{data:DoctorModel[]}>{
    return this.http.get<{data:DoctorModel[]}>(getDoctorsUrl).pipe(take(1));
  }

  checkToken():boolean {
    return localStorage.getItem('adminToken') ? true : false ;
  }

}
