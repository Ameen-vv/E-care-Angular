import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { getDepUrl } from '../../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  getDep():Observable<{data:DepModel[]}>{
    return this.http.get<{data:DepModel[]}>(getDepUrl).pipe(take(1));
  }
}
