import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageDetails } from 'src/app/model/image-details';
import { PlantDetails } from 'src/app/model/plant-details';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  type!:string;
  type1 !:string;
  type2 !:string;
  //seed !: SeedDetails;
  plants !: PlantDetails[];
  images !: Observable<any>;
  image:ImageDetails= new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  plantService:PlantService) {
    this.type = this.activatedRouter.snapshot.params['AllPlants'];
    this.type1 = this.activatedRouter.snapshot.params['Herbal'];
    this.type2 = this.activatedRouter.snapshot.params['Medical'];
   }
   

  ngOnInit(): void {
    this.getSeedDetails(this.type);
  }
  getSeedDetails(type:string) {
    if(type === 'AllPlants'){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.plantService.getAllPlants().subscribe(data=>{
        this.plants = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.plantService.getAllImages();

    }
    else if(this.type1 === "Herbal"){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.plantService.getAllPlantsByType(this.type1).subscribe(data=>{
        this.plants = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.plantService.getAllImages();

    }
    else {
      console.log("type:"+type)
      console.log("type:"+this.type1)
      console.log("type:"+this.type2)
      this.plantService.getAllPlantsByType(this.type2).subscribe(data=>{
        this.plants = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.plantService.getAllImages();

    }
  
   }

   share(name:string) {
     
    console.log(name+" shared");
  }
  
  addToCart(plant:PlantDetails) {
    console.log('cart');
    
  }
}
