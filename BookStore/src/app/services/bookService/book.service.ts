import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token : any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem("token");
  }

  mywishlist() {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("getwishlist called in bookstore");
    return this.httpService.getService('Wishlist/GetWishlistData',true,headersObject)
  }

  removewishlist(wishlistId : any){
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("deletewishlist called in bookstore");
    return this.httpService.deleteService('Wishlist/DeleteWishlist/' + wishlistId,{},true,headersObject)
  }

}
