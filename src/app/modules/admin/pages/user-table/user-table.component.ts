import { Component,OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/Models/CommonModels';
import {Store } from '@ngrx/store'
import { blockUser, loadUsers, unBlockUser } from 'src/app/state/user/user.actions';
import * as Selectors from 'src/app/state/user/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{
  
  users$:Observable<UserModel[]> = this.store.select(Selectors.getData)
  
  constructor(private store : Store){};

  ngOnInit(): void {
      this.store.dispatch(loadUsers());      
  }

  blockUser(id:string):void{
    this.store.dispatch(blockUser({id}));
  }

  unBlockUser(id:string):void{
    this.store.dispatch(unBlockUser({id}));
  }


}
