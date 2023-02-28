import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVaccineComponent } from './add-vaccine.component';

describe('AddVaccineComponent', () => {
  let component: AddVaccineComponent;
  let fixture: ComponentFixture<AddVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccineComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Add a Patient'`,()=>{
    expect(component.text_3).toEqual('Add-Vaccination to the Patient');
  });

  it(`should require valid`,() => {
    component.add_vaccine.patchValue({
      username: "invalideusername",
      dob: "2022-02-10",
      add_vaccine: "dose-2",
      date_admin: "2022-02-10",
      brand_name: "Sputnik-V",
      hospital_name: "invalid name",
    });
    expect(component.add_vaccine.valid).toEqual(true);
  });

  it('form invalid when empty', () => {
    expect(component.vaccineForm.invalid).toBeTrue();
  });
  
});