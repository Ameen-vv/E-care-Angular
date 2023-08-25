import { Component,OnDestroy } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { IAddDepForm } from '../../core/models/interfaces';
import { HotToastService } from '@ngneat/hot-toast';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.scss']
})
export class AddDepComponent implements OnDestroy{
  department:string='';
  description:string='';
  diseases:string='';
  addDep$!:Subscription;
  image:File|null = null;
  loader:boolean = false;

  constructor(private adminService : AdminService,private toast : HotToastService){}

  ngOnDestroy(): void {
      this.addDep$?.unsubscribe();
  }

  addDepartment() {
    let departmentData:IAddDepForm ={
      department:this.department,
      description:this.description,
      diseases:this.diseases
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.image as File);
    reader.onloadend = ()=>{
      this.loader = true;
     this.addDep$ = this.adminService.addDep({departmentData,imageData:reader.result as string}).subscribe(
        (response)=>{
          response.ok ? this.toast.success('Department added') : this.toast.error('Department already exists');
          this.loader = false;
        }
      )
    }
  }

  setImage(event : Event  ) {
    const target = event.target as HTMLInputElement
    if(target.files && target.files?.length > 0){
      this.image = target.files[0];
    }
  }
}
