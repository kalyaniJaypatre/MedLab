import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss']
})
export class TopDealComponent implements OnInit {

  constructor(private http :HttpService, private cart:CartService) { }
  topDeals:any[]=[];
  ngOnInit(): void {
    this.getTopDeals();
  }

 

  getTopDeals(){
    this.http.getDetailsFromServer('top-deals').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.topDeals = response;
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  addToCart(product:any){
    this.cart.addSelectItemToCart(product);
  }

}
  

