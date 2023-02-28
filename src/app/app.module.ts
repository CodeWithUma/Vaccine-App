
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddVaccineComponent } from './components/admin/add-vaccine/add-vaccine.component';
import { VaccineCardComponent } from './components/admin/vaccine-card/vaccine-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PatientService } from './services/patient.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

console.warn("admin module loaded.");
@NgModule({
  declarations: [               // Component   /  Directives   /    Pipes
    AppComponent,
    HomeComponent,
    PatientsComponent,
    AdminComponent,
    AddVaccineComponent,
    VaccineCardComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [                    // Modules -  Built-in or Custom
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PatientService],                // Service Registration
  bootstrap: [AppComponent]     // Bootstrap Component [Selector]
})
export class AppModule { } 