import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private authenticated = false;
  constructor(formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.router.navigate(['add-vaccine']);
  }

  onReset(emailForm: NgForm) {
    emailForm.reset();
  }
}