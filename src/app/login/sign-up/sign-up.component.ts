import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isGetOtp:boolean=false;
  isVerifyOtp:boolean=false;
  otpTimer!:number;
  isSignUpSuccess:boolean = false ;
  otpGenerated!:number;
   signUpForm!:FormGroup;

   sub!:Subscription;
  constructor(private fb:FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.signUpForm=this.fb.group({
      'userName':['',[Validators.required]],
      'mobileNumber':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      'password':['',[Validators.required]],
      'isMobileNoVerify':['false',[]]
    })
  }

  signUp(){
    if(this.isVerifyOtp){
      console.log(this.signUpForm.value);
      this.http.postDetailsToServer('users',this.signUpForm.value).subscribe((response:any)=>{
        if(response && response.length > 0){
          console.log(response);
        }
      })
    }
  
  }

  getOtp(){
    this.isGetOtp=true;
    // generated random number of otp
   this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
console.log(this.otpGenerated);

// set interval
    var emitedNo=interval(1000);
   this.sub=emitedNo.subscribe((res:any)=>{
      this.otpTimer=60 - res;
      if(this.otpTimer==0){
        this.sub.unsubscribe();
      }
    })
  }
  
  verifyOtp(otpEntered:any){
    if(otpEntered == this.otpGenerated){
      this.isVerifyOtp=true;
      this.isGetOtp=false;
      this.signUpForm.controls['isMobileNoVerify'].setValue(true);
      this.sub.unsubscribe();
    }

    
  }

}
