import { Component } from '@angular/core';
import { LoginsrvService } from '../loginsrv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserName:string='';
 OrgName:string="";
 Password:string='';
  

  constructor(private router:Router,private authService:LoginsrvService) {}

  
  onSubmit() {
    this.authService.login(this.UserName,this.OrgName, this.Password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigateByUrl("dashboard")
              },
     
    );
  }
  hide=true;

}
