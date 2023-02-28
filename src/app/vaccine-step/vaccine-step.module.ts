import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineStepRoutingModule } from './vaccine-step-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    VaccineStepRoutingModule
  ]
})
export class VaccineStepModule { }
