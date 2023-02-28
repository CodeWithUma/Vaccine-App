import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  text_1 = 'Add a Patient';
  text_2 = 'Add Vaccination';
  constructor()
  { }

}