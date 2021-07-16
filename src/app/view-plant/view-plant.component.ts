import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantDetails } from '../plant-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-plant',
  templateUrl: './view-plant.component.html',
  styleUrls: ['./view-plant.component.css']
})
export class ViewPlantComponent implements OnInit {

  plantId:number;
 
  plant !: PlantDetails;
 
  constructor(private activatedRouter:ActivatedRoute, private  productService:ProductService) {
    this.plantId = this.activatedRouter.snapshot.params['plantId'];
    this.getPlantDetails(this.plantId);
    

   }
  ngOnInit(): void {
    
  }
  getPlantDetails(plantId: number) {
    this.productService.getPlantById(plantId).subscribe(data=>{
      this.plant = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }
  }
  
 
  