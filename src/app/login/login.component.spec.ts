import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error on empty credentials', () => {
    component.login();

    expect(component.showError).toBeTrue();
  });

  it('should show error on empty username', () => {
    component.password = 'password';

    component.login();
    
    expect(component.showError).toBeTrue();
  });

  it('should show error on empty password', () => {
    component.userName = 'username';
    
    component.login();
    
    expect(component.showError).toBeTrue();
  });

  it('should not show error on wrong credentials', () => {
    component.userName = 'wrongUsername';
    component.password = 'wrongPassword';
    
    component.login();
    
    expect(component.showError).toBeTrue();
  });

  it('should not show error on wrong credentials', () => {
    component.userName = 'username';
    component.password = 'password';
    
    component.login();
    
    expect(component.showError).toBeFalse();
  });
});
