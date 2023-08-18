import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { docSignInUrl, docSignUpUrl, getDepUrl } from '../../shared/constants/urls';
import { IDocSignUp } from '../models/Doc.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  getDep():Observable<{data:DepModel[]}>{
    return this.http.get<{data:DepModel[]}>(getDepUrl).pipe(take(1));
  }

  docSignUp(doctorData:IDocSignUp,imageData:string):Observable<{ok:boolean,message:string}>{
    return this.http.post<{ok:boolean,message:string}>(docSignUpUrl,{doctorData,imageData}).pipe(take(1));
  }

  docSignIn(email:string,password:string):Observable<{ok:boolean,message:string,token?:string}>{
    return this.http.post<{ok:boolean,message:string,token?:string}>(docSignInUrl,{email,password}).pipe(take(1));
  }
}