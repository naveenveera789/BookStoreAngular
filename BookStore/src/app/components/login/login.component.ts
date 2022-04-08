import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : any;
  signupForm : any;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
    this.signupForm = this.formBuilder.group({
      fullName: ['',[Validators.required]],
      emailId: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      mobileNumber: ['',[Validators.required]]
    });
  }

  login(){
    if(this.loginForm.valid){
      let reqData = {emailId:this.loginForm.value.emailId,
                    password:this.loginForm.value.password}
      console.log(this.loginForm.value);
      this.userService.login(reqData).subscribe((response:any)=>{
       console.log("login",response);
       localStorage.setItem("token", response.id);
      //localStorage.setItem("SessionUser", this.user);
       this.router.navigate(['/dashboard']);
      },
      error=>{console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

  signup(){
    if(this.signupForm.valid){
      let reqData = {fullName:this.signupForm.value.fullName,
        emailId:this.signupForm.value.emailId,
        password:this.signupForm.value.password,
        mobileNumber:this.signupForm.value.mobileNumber}
      console.log(this.signupForm.value);
      this.userService.signup(reqData).subscribe(response=>{console.log(response);},error=>{console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
