import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginsrvService {


  private apiURL = 'https://management-system-pbat.onrender.com/api/login '; 

  constructor(private http: HttpClient) {}  

  login(UserName:string,OrgName:string,Password:string): Observable<any> {
    
    return this.http.post(this.apiURL, {UserName,OrgName,Password});
}
}
