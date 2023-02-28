import { Component, OnInit, Type} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { Vaccine } from 'src/app/model/vaccine.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.css']
}) 
export class AddVaccineComponent implements OnInit{
  text_3 = 'Add-Vaccination to the Patient';
  vaccineForm: FormGroup;

  username = new FormControl(null ,[Validators.required]); 
  dob = new FormControl('', [Validators.required]);
  add_vaccine = new FormControl('', [Validators.required]);
  date_admin = new FormControl('', [Validators.required]);
  brand_name = new FormControl('', [Validators.required]);
  hospital_name = new FormControl('', [Validators.required]);

  constructor(private fb:FormBuilder, 
    private patientService: PatientService) 
 {
    this.vaccineForm = this.fb.group({
      username : this.username,
      dob : this.dob,
      add_vaccine : this.add_vaccine,
      date_admin : this.date_admin,
      brand_name : this.brand_name,
      hospital_name : this.hospital_name,
    })
   }

  patient: Patient[]=[];

  ngOnInit(): void {
   this.patientService.getPatient().subscribe
    ((response)=>{
      this.patient = response;
      console.log(this.patient);
    })
  }

  selectedPatientName!: string;
  selectedData: any;

  selectPatient(){
    this.selectedPatientName = this.vaccineForm.value.username;
    for(let patient of this.patient){
      if(this.selectedPatientName === patient.username){
        this.selectedData = patient.dob;
      }
    }
    console.log(this.vaccineForm.value.username);
  }
  

  static maxValue(control : AbstractControl){
    return control.value > 0 ? null : {maxvalue:true}
  }

  onRegister()
  {
    const {username,dob,add_vaccine,date_admin,brand_name,hospital_name} = this.vaccineForm.value; //destructuring
    const vaccine: Vaccine = 
    {
      username: username,
      dob:dob,
      add_vaccine : add_vaccine,
      date_admin:date_admin,
      brand_name:brand_name,
      hospital_name:hospital_name,
    }
    this.patientService.addVaccine(vaccine).subscribe(()=>{
      console.log("patient data added");
    })
    console.log(vaccine);
    console.log("Form Submitted");
  }
  
}