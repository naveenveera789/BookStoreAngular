import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.BaseUrl;
  token : any;

  constructor(private http : HttpClient) { }

  postService(url: string, reqData: any, token: boolean=false, httpOptions: any={})
  {
    return this.http.post(this.BaseUrl + url, reqData, token && httpOptions);
  }

  getService(url: string,token:boolean=false, httpOptions: any={})
  {
    return this.http.get(this.BaseUrl + url,token && httpOptions);
  }

  putService(url: string, reqData: any, token: boolean=false, httpOptions: any={})
  {
    return this.http.put(this.BaseUrl + url, reqData, token && httpOptions);
  }

  deleteService(url: string, reqData: any, token: boolean=false, httpOptions: any={})
  {
    console.log(reqData);
    return this.http.delete(this.BaseUrl + url, token && httpOptions);
  }

}
