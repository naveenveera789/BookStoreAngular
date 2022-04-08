import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MywishlistComponent implements OnInit {

  wishlist : any;
  wishlistCount : any;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getwishlist();
  }

  getwishlist(){
    this.bookService.mywishlist().subscribe((response:any)=>{
      this.wishlist = response.result;
      this.wishlist.reverse();
      this.wishlistCount = response.result.length;
      console.log(this.wishlist);
      },error=>{console.log(error);});
  }

  removewishlist(book : any){
    this.bookService.removewishlist(book.wishlistId.id).subscribe((response:any)=>{
      console.log(response);
      },error=>{console.log(error);});
  }

}
