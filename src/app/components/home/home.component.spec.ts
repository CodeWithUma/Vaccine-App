import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //1. Component load without carashing
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Add a Patient'`,()=>{
    expect(component.text_1).toEqual('Add a Patient');
  });

  it(`should have as text 'Add Vacination'`,()=>{
    expect(component.text_2).toEqual('Add Vaccination');
  });
});
