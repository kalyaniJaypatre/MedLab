import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionName:string="SignIn";
 loggedUserDetails:any;
 isLoginSuccess:boolean = false ;
 cardCount!:Observable<number>

 @ViewChild('loginBtn',{'read':ElementRef}) loginBtn!:ElementRef;
 
 @ViewChild('colseBtn', { 'read': ElementRef })
  colseBtn!: ElementRef;

  constructor(private auth:AuthenticationService, private shared:SharedService,private rout:Router) { }

  ngOnInit(): void {
    this.loggedUserDetails= this.auth.getUser();
    if(this.auth.getToken()){
      this.isLoginSuccess=true;
    }

    this.cardCount = this. shared.cartObs;
   
  }

  changeAction(action:string){
    this.actionName=action;
  }

  handleLoginSuccess(flag:boolean){
    if(flag){
     this.isLoginSuccess=true;
      this.colseBtn.nativeElement.click();
    }
  }

  redirectToCart(){
    if(this.isLoginSuccess){
      this.rout.navigate(['/cart'])
    }else{
      this.loginBtn.nativeElement.click();
    }
  }
  
  

  

}