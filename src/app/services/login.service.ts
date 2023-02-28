import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailForm } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string;

  constructor(private http : HttpClient) { 
    this.baseURL = environment.JsonServerURL;
  }

  addUser(emailForm : EmailForm): Observable<any> {
    return this.http.post(`${this.baseURL}/login`,emailForm);
  }

  getUser():Observable<EmailForm[]>{
    return this.http.get<EmailForm[]>(`${this.baseURL}/login`)
  }
}