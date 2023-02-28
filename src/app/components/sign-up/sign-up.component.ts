import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(){
  }

  onSignUp(SignupForm: NgForm) {
    console.log(SignupForm);
    this.router.navigate(['/login']);
  }
}
