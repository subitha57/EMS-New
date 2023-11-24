import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router){

  }
  
  empbtn(){
    this.router.navigate(['/dashboard/admin/employee']);
  }
  attendancebtn(){
    this.router.navigate(['/dashboard/admin/attendance']);
  }
}
