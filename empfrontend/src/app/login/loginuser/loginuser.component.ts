import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import  *  as CryptoJS from  'crypto-js';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  constructor(
    private router: Router,
    private loginService: LoginService
  ){}

email : string | undefined
password : string | undefined
token: string | undefined


loginForm: FormGroup = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});

ngOnInit(): void { }

goToRegister(){
  this.router.navigateByUrl('/register');
  
}

loginUser(){
  const loginData = {
    email: this.loginForm.value['email'],
    password: this.loginForm.value['password']
  }
  this.loginService.loginUser(loginData).subscribe(
    (response:any) => {
      console.log(response);
        localStorage.setItem('token', JSON.stringify(response["access"]));
        localStorage.setItem('user_type', JSON.stringify(response["user_type"]));

        // localStorage.setItem('token', CryptoJS.AES.encrypt(response["access"], response["access"]).toString())

      this.router.navigateByUrl('dashboard');
  
    },
    (error) => {
      console.log(error);
    }
  )    
}


}


