import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem("token");
  }

  signup(data: any)
  {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("signup called in bookstore user",data);
    return this.httpService.postService('User/RegisterUser',data,false,headersObject)
  }

  login(data: any)
  {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      console.log("login called in bookstore user",data);
      return this.httpService.postService('User/LogInUser',data,false,headersObject)
  }

  forgotpassword(data:any)
  {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgot password called in bookstore user");
    return this.httpService.postService('User/ForgetPassword',data,false,headersObject)
  }


}
