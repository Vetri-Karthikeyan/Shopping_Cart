import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';
import { AppComponent } from '../app.component';
// import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private utilityService: UtilityService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$")
        ],
      ],
    });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

  login() {
    this.navigationService
      .login(this.Email.value, this.PWD.value)
      .subscribe((res: any) => {
        if (res.toString() !== 'invalid') 
        {
          this.utilityService.setUser(res.toString());
          if(this.utilityService.getUser().status ==="Active")
          {
            this.message = 'Logged In Successfully.';
            
            console.log(this.utilityService.getUser());
            console.log(this.utilityService.getUser().usertype);
          }
          else{
            this.message = 'Your account has been locked, Kindly reach-out support team!';
            this.utilityService.logoutUser();
          }
          
        } else {
          this.message = 'Invalid Credentials!';
        }
      });
  }

  
}
