import { PlanterDetails } from './../planter-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-planter',
  templateUrl: './view-planter.component.html',
  styleUrls: ['./view-planter.component.css']
})
export class ViewPlanterComponent implements OnInit {
  planterId!:number;
  planter!:PlanterDetails;
  constructor(private activatedRouter:ActivatedRoute, private  productService:ProductService) {
    this.planterId = this.activatedRouter.snapshot.params['planterId'];
    this.getPlanterDetails(this.planterId);
   }
   
  ngOnInit(): void {
    
  }
  getPlanterDetails(planterId:number) {
   this.productService.getPlanterById(planterId).subscribe(data=>{
      this.planter = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }

}
