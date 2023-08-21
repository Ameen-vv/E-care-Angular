import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, take } from 'rxjs';
import { addDepUrl, adminLogInUrl, approveDocUrl, blockDocUrl, blockUserUrl, getDepUrl, getDoctorsUrl, getUsersUrl, listDepUrl, newDoctorsUrl, rejectDocUrl, unBlockDocUrl, unBlockUserUrl, unListDepUrl } from '../../shared/constants/urls';
import { DepModel, DoctorModel, UserModel } from 'src/app/core/Models/CommonModels';
import { IAddDep } from '../models/interfaces';


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

  blockDoc(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(blockDocUrl + id).pipe(take(1));
  }

  unBlockDoc(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(unBlockDocUrl + id).pipe(take(1));
  }

  getNewDocs():Observable<{data:DoctorModel[]}>{
    return this.http.get<{data:DoctorModel[]}>(newDoctorsUrl).pipe(take(1));
  }

  approveDoc(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${approveDocUrl + id}`).pipe(take(1));
  }

  rejectDoc(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${rejectDocUrl + id}`).pipe(take(1));
  }
  
  getDep():Observable<{data:DepModel[]}>{
    return this.http.get<{data:DepModel[]}>(getDepUrl).pipe(take(1));
  }

  listDep(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${listDepUrl + id}`).pipe(take(1));
  }

  unListDep(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${unListDepUrl + id}`).pipe(take(1));
  }

  checkToken():boolean {
    return localStorage.getItem('adminToken') ? true : false ;
  }

  addDep(depData:IAddDep):Observable<{ok:boolean,message:string}>{
    return this.http.post<{ok:boolean,message:string}>(addDepUrl,depData);
  }

}
