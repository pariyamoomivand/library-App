import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router=inject(Router);
  loginForm:LoginForm={
    username:'',
    password:'',
    keepMe:false
  };
  message:string='';
  check(){
    if(this.loginForm.username=='admin' && this.loginForm.password=='admin'){
      sessionStorage.setItem('token','f$$rf65jyhh');
      if (this.loginForm.keepMe==true) {
        localStorage.setItem('token','f$$rf65jyhh');
      }
      this.router.navigateByUrl('/private');
    }
    else{
      this.message='نام کاربری یا رمز عبور صحیح نیست';
    }
  }
}
export interface LoginForm {
  username: string;
  password: string;
  keepMe: boolean;
}
