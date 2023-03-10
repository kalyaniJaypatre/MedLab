import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pincode!:string;
  isPinCodeAvailable:boolean=false;
  pincodeDetails:any;

  @ViewChild('closebtn', { read: ElementRef })
  closebtn!: ElementRef;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

 
  getPackageDetailsByPincode(){
    if(this.pincode &&this.pincode.length==6){
    const httpParams:HttpParams=new HttpParams()
                                .set('pincode',this.pincode);
    this.http.getDetailsFromServer('pincodeDetails',httpParams).subscribe((response:any)=>{
      console.log("response geting....")
      if (response && response.length > 0){
        this.isPinCodeAvailable=true;

        this.pincodeDetails=response[0];
        if(this.closebtn){
          this.closebtn.nativeElement.click();
        }
      }else{
          this.isPinCodeAvailable=false;
      }
    },
    error=>{
      console.log(error);
    })
  }}

}

// interface Pin{
//   pinCode:number,
// }