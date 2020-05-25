import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

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

  it('should show error on empty credentials', fakeAsync(() => {
    component.login();

    tick();
    
    expect(component.showError).toBeTrue();
  }));

  it('should show error on empty username', fakeAsync(() => {
    component.password = 'password';

    component.login();
    
    tick();
    
    expect(component.showError).toBeTrue();
  }));

  it('should show error on empty password', fakeAsync(() => {
    component.userName = 'username';
    
    component.login();

    tick();
    
    expect(component.showError).toBeTrue();
  }));

  it('should show error on wrong credentials', fakeAsync(() => {
    component.userName = 'wrongUsername';
    component.password = 'wrongPassword';
    
    component.login();
    
    tick();
    
    expect(component.showError).toBeTrue();
  }));

  it('should not show error on correct credentials', () => {
    component.userName = 'username';
    component.password = 'password';
    
    component.login();
    
    expect(component.showError).toBeFalse();
  });
});
