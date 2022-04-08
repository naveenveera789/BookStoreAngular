import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm : any;

  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      emailId: ['', [Validators.required,Validators.email]]
    });
  }

  forgotpassword(){
    if(this.forgotpasswordForm.valid){
      let reqData = {
        emailId: this.forgotpasswordForm.value.emailId
      }
      console.log(this.forgotpasswordForm.value);
      this.userService.forgotpassword(reqData).subscribe(response => {console.log(response);}, error => {console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

}
