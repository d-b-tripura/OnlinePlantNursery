import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantDetails } from '../plant-details';
import { ProductService } from '../product.service';
import { SeedDetails } from '../seed-details';

@Component({
  selector: 'app-view-seed',
  templateUrl: './view-seed.component.html',
  styleUrls: ['./view-seed.component.css']
})
export class ViewSeedComponent implements OnInit {
  
  seedId:number;
  seed !: SeedDetails;
  constructor(private activatedRouter:ActivatedRoute, private  productService:ProductService) {
    this.seedId = this.activatedRouter.snapshot.params['seedId'];
    this.getSeedDetails(this.seedId);
   }
   
  ngOnInit(): void {
    
  }
  getSeedDetails(seedId:number) {
   this.productService.getSeedById(seedId).subscribe(data=>{
      this.seed = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }
}
  
 
  
  
 
//@charset "utf-8";
//@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900');
