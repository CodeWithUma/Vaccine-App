import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [LoginService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate welcome message for valid user id and password', () => {
    component.uid = "admin";
    component.pwd = "admin123";
    component.loginButton_click();
    let str = component.result;
    expect(str).toBe("Welcome to Admin");
  });

  it('should uid contains empty as a default value', () => {
    let str = component.uid;
    expect(str).toBe("");
  });

  it('should result contains empty as a default value', () => {
    let str = component.result;
    expect(str).toBe("");
  });

  it('should generate correct message for invalid user id or password', () => {
    component.uid = "hello";
    component.pwd = "hello123";
    component.loginButton_click();
    let str = component.result;
    expect(str).toBe("Invalid user id or password");
  });
});