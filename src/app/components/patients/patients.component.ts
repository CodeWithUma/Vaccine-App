import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent {
  text = 'Add a Patient';
  patientForm: FormGroup;

  username = new FormControl(null ,[Validators.required]);
  dob = new FormControl('', [Validators.required]);
  gender = new FormControl('');
  birth = new FormControl('');
  blood = new FormControl('');
  height = new FormControl('', [PatientsComponent.maxValue, Validators.required]);
  weight = new FormControl('', [PatientsComponent.maxValue, Validators.required]);
 
  constructor(private fb: FormBuilder,
    private patientService: PatientService) {
    this.patientForm = this.fb.group({
      username: this.username,
      dob: this.dob,
      gender: this.gender,
      birth: this.birth,
      blood: this.blood,
      height: this.height,
      weight: this.weight,
    })
  }

  static maxValue(control: AbstractControl) {
    return control.value > 0 ? null : { maxvalue: true }
  }

  onRegister() {
    const { username, dob, gender, birth, blood, height, weight } = this.patientForm.value; //destructuring
    const patients: Patient =
    {
      username: username,
      dob: dob,
      gender: gender,
      birth: birth,
      blood: blood,
      height: height,
      weight: weight,
    }
    this.patientService.addPatient(patients).subscribe(() => {
      console.log("patient data added");
    })
    console.log("Form Submitted");
  }
}