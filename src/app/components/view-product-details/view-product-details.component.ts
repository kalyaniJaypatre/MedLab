import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const drugCode=this.route.snapshot.queryParamMap.get('drug-code');
    if(drugCode){
      this.getProductDetailsByDrugCode(drugCode);
    }
  }

  getProductDetailsByDrugCode(drug_code:string){
    

  }

}
