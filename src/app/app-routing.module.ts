import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVaccineComponent } from './components/admin/add-vaccine/add-vaccine.component';
import { AdminComponent } from './components/admin/admin.component';
import { VaccineCardComponent } from './components/admin/vaccine-card/vaccine-card.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const appRoutes: Routes = [
  {
    path: 'vaccine-step',
    loadChildren:()=>import('./vaccine-step/vaccine-step.module')
    .then(mod=>mod.VaccineStepModule)
  },
    { path: 'admin', component: AdminComponent },
    { path: 'add-vaccine', component: AddVaccineComponent },
    { path: 'vaccine-card', component: VaccineCardComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found', pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }