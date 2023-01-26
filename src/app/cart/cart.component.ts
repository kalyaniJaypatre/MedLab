import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!:any;

orderObj =new Order();
  constructor() { }

  ngOnInit(): void {
    this.getProductFromLocalstorage();
    this.setCartItems();
    this.setOrderDetails();
   
  }

  setOrderDetails(){
    this.orderObj.orderId =this.generateRandomNumber();
    this.orderObj.products =this.setCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    this.orderObj.totalAmount = 0;
    this.orderObj.totalDiscount = 20;
    this.orderObj.products.forEach((item)=>{
      this.orderObj.totalAmount += Number(item.totalAmount);
      this.orderObj.totalDiscount += Number(item.discountPrice);
    });

    this.orderObj.finalAmount = this.orderObj.totalAmount - this.orderObj.totalDiscount;
  }
  setCartItems(){
    var productList: any =[]
    this.cartItems.forEach((item:any) => {
      var productObj = new Product();
      productObj.description = item.description;
      productObj. actualPrice = item.actualPrice;
      productObj.brandName = item.brandName;
      productObj.discountPrice = item.discountPrice;
      productObj.drugCode =item.drugCode;
      productObj.quantity=1;
      productObj.totalAmount = (item.discountPrice *productObj.quantity);
      productObj.type = item.type;
     
      productList.push(productObj);
    });
    return productList;
  }

  getProductFromLocalstorage(){
    var products:any;
    products = localStorage.getItem("products");
    if(!products){
      this.cartItems = [];
    }else {
      this.cartItems =JSON.parse(products);
    }
  }

  generateRandomNumber(){
    return Math.floor(100000 + Math.random() * 900000);
  }

}

export class Order{
  orderId!:number;
   fullName!:string;
   totalAmount!:number;
   totalDiscount!:number;
   mobileNo!:number;
   emailId!:string;
   totalitems!:number;
   finalAmount!:number;
   deliveryType!:string;
   oAddress:Address=new Address();
   products:Product[]=[];
}

export class Address{
  city!:string;
  pinCode!:number;
  state!:string;
  line1!:string;
  line2!:string;
}

export class Product{
  drugCode!:number;
  totalAmount!:number;
  actualPrice!:number;
  discountPrice!:number;
  description!:string;
  quantity!:number;
  brandName!:string;
  type!:string;
} 
