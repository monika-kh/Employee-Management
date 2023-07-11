import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  department: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password2: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  type: string | undefined

  userForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    last_name: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    type: new FormControl('EMP')
  });
  
  constructor(
    private registerService: LoginService,
    private router: Router,
  ){}

  onSubmit() {
    const userData = {
      first_name: this.userForm.value['first_name'],
      last_name: this.userForm.value['last_name'],
      email: this.userForm.value['email'],
      department: this.userForm.value['department'],
      password: this.userForm.value['password'],
      password2: this.userForm.value['password2'],
      type: this.userForm.value['type']
    };

    this.registerService.registerUser(userData).subscribe(
      
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.log(error);
      }
    )    
  }

}
