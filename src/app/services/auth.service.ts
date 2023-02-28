import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;
  
  constructor(private router: Router) {}

  register(email: string, password: string){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        localStorage.setItem
      }, 1500);
    })
  }
}
