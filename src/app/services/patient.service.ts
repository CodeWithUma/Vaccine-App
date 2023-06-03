import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { Vaccine } from '../model/vaccine.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  baseURL: string | undefined;

  constructor(private http: HttpClient) {
    // this.baseURL = environment.JsonServerURL;
  }
  addPatient(patient: Patient): Observable<any> {
    return this.http.post(`${this.baseURL}/patients`, patient);
  }
  addVaccine(vaccine: Vaccine): Observable<any> {
    return this.http.post(`${this.baseURL}/vaccines`, vaccine);
  }

  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseURL}/patients`);
  }

  getVaccine(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.baseURL}/vaccines`);
  }
}
