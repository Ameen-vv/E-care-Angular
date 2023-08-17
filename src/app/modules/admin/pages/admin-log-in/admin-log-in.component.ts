import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from '../../core/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.scss']
})
export class AdminLogInComponent {
  loginForm:FormGroup;
  loader:boolean = false;
  
  constructor(private formBuilder : FormBuilder,private toast : HotToastService,private adminService : AdminService,private router : Router ){
    this.loginForm = formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){
    this.loader = true;
    if(this.loginForm.valid){
        this.adminService.adminLogIn({email:this.loginForm.value.email,password:this.loginForm.value.password}).subscribe(
          (response)=>{
            this.loader = false;
            if(response.ok){
              this.router.navigate(['/admin/a/users']);
              response.token && localStorage.setItem('adminToken',response.token);
            }else{
              this.toast.error('Invalid Credentials');
            }
          },
          ()=>{
            this.loader = false;  
          }
        )
    }else{  
      this.toast.error('Invalid Credentials');
    }
  }

}
