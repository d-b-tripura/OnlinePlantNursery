import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageDetails } from 'src/app/model/image-details';
import { PlanterDetails } from 'src/app/model/planter-details';
import { PlanterService } from 'src/app/services/planter.service';

@Component({
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.css']
})
export class PlanterComponent implements OnInit {

  type!:string;
  type1 !:string;
  type2 !:string;
  //seed !: SeedDetails;
  planters !: PlanterDetails[];
  images !: Observable<any>;
  image:ImageDetails= new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  planterService:PlanterService) {
    this.type = this.activatedRouter.snapshot.params['AllPlanters'];
    this.type1 = this.activatedRouter.snapshot.params['Round'];
    this.type2 = this.activatedRouter.snapshot.params['Square'];
   }
   

  ngOnInit(): void {
    this.getPlanterDetails(this.type);
  }

  getPlanterDetails(type:string) {
    if(type === 'AllPlanters'){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.planterService.getAllPlanters().subscribe(data=>{
        this.planters = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.planterService.getAllImages();

    }
    else if(this.type1 === "Round"){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.planterService.getAllPlantersByShape(this.type1).subscribe(data=>{
        this.planters = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.planterService.getAllImages();

    }
    else {
      console.log("type:"+type)
      console.log("type:"+this.type1)
      console.log("type:"+this.type2)
      this.planterService.getAllPlantersByShape(this.type2).subscribe(data=>{
        this.planters = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.planterService.getAllImages();

    }
  
   }

   share(planter:PlanterDetails) {
     
    console.log(" shared");
  }

  addToCart(planter:PlanterDetails) {
  
    console.log('cart');
    
  }

}
