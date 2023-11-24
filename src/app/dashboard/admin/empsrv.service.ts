import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpsrvService {
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    
    return this.http.get('https://management-system-pbat.onrender.com/api/employee/getall');
  }
  createEmployee(obj:any):Observable<any>{
  
    return this.http.post('https://management-system-pbat.onrender.com/api/register',obj);
  }
  updateEmployee(id: number, obj: any): Observable<any> {
    const url = `https://management-system-pbat.onrender.com/api/update/${id}`;
    return this.http.put(url, obj);
  }
  getEmpById(id:number){  
    return this.http.get("https://management-system-pbat.onrender.com/api/employee/"+id);

  }
  
  deleteUser(id: string): Observable<any> {
    const url = `https://management-system-pbat.onrender.com/api/delete/${id}`;
    return this.http.delete(url);
  }
}
