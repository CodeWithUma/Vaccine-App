import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { PatientsComponent } from './patients.component';
import { FormControl } from '@angular/forms';

describe('PatientsComponent', () => {
  let component: PatientsComponent; 
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [PatientService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.patientForm.invalid).toBeTrue();
  });

  it(`should require valid username`,() => {
    component.patientForm.patchValue({
      username: "invalideusername",
      dob: "2022-02-10", 
      height: "123",
      weight: "56",
    });
    expect(component.patientForm.valid).toEqual(true);
  });
 
  it(`should have as text 'Add a Patient'`,()=>{
    expect(component.text).toEqual('Add a Patient');
  });
});
