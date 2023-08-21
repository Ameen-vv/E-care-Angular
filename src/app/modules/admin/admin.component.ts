import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  page:'doctors'|'newDoctors'|'departments'|'users'|'addDep'|'' = 'users';

  constructor(private router : Router ){};
  
  ngOnInit(): void {
      this.changePage()
      if (this.router.url === '/admin/a') {
        this.onNavigate('users');
      }
  }
  
  onNavigate(page:'doctors'|'newDoctors'|'departments'|'users'){
    this.router.navigate([`/admin/a/${page}`]).then(()=>{
      this.changePage()
    });
  }
  
  changePage(){
    this.page = this.router.url.split('/')[3] as '';
  }
}
