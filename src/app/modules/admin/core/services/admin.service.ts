import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { adminLogInUrl } from '../../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  adminLogIn(user:{email:string,password:string}):Observable<{ok:boolean,token?:string}>{
    return this.http.post<{ok:boolean,token?:string}>(adminLogInUrl,user).pipe(take(1));
  }

  checkToken():boolean {
    return localStorage.getItem('adminToken') ? true : false ;
  }

}
