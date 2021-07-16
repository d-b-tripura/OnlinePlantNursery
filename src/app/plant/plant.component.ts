import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PlantDetails } from '../plant-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plants!: PlantDetails[];

  constructor(
    private productService:ProductService,
    private cartService:CartService) {
      this.getAllPlants();
  }
 
  
  ngOnInit(): void {
  }
  
  getAllPlants() {
    this.productService.getAllPlantList().subscribe(data=>{
      this.plants = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  //console.log(this.laptops.length);
  }



  share(plant:string) {
     
    console.log(plant+" shared");
  }
  
  addToCart(plant:PlantDetails) {
   console.log(plant);
    
  }
}
