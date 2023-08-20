import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AppointmentModel, DepModel, DocTimings, DoctorModel } from 'src/app/core/Models/CommonModels';
import { AppntCancelUrl, AppntUnVisitedUrl, AppntVisitedUrl, addTimeUrl, appointmentsUrl, delTimeUrl, docProfileUrl, docSignInUrl, docSignUpUrl, getDepUrl } from '../../shared/constants/urls';
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

  getAppointments():Observable<{data:AppointmentModel[]}>{
    return this.http.get<{data:AppointmentModel[]}>(appointmentsUrl).pipe(take(1));
  }

  getProfile():Observable<{data:DoctorModel}>{
    return this.http.get<{data:DoctorModel}>(docProfileUrl).pipe(take(1));
  }

  visitAppointment(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${AppntVisitedUrl + id}`);
  }

  unVisitAppointment(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${AppntUnVisitedUrl + id}`);
  }

  cancelAppointment(id:string):Observable<{ok:boolean}>{
    return this.http.get<{ok:boolean}>(`${AppntCancelUrl + id}`);
  }

  addTime(time:DocTimings):Observable<{ok:boolean,message:string}>{
    return this.http.post<{ok:boolean,message:string}>(addTimeUrl,{data:time});
  }

  deleteTime(time:DocTimings):Observable<{ok:boolean,message:string}>{
    return this.http.post<{ok:boolean,message:string}>(delTimeUrl,{data:time});
  }

}
