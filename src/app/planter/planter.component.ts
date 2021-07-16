import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PlanterDetails } from '../planter-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.css']
})
export class PlanterComponent implements OnInit {
  planters!: PlanterDetails[];
view!:any;
  constructor(
    private productService:ProductService,
    private cartService:CartService) {
      this.getAllPlanters();
  }
 
  
  ngOnInit(): void {
  }
  
  getAllPlanters() {
    this.productService.getAllPlanterList().subscribe(data=>{
      this.planters = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }



  share(planter:PlanterDetails) {
     
    console.log(planter+" shared");
  }
  
  addToCart(planter:PlanterDetails) {
   console.log(planter);
    
  }
  
}
