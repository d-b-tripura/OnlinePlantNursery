import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageDetails } from 'src/app/model/image-details';
import { SeedDetails } from 'src/app/model/seed-details';
import { SeedService } from 'src/app/services/seed.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  type!:string;
  type1 !:string;
  type2 !:string;
  //seed !: SeedDetails;
  seeds !: SeedDetails[];
  images !: Observable<any>;
  image:ImageDetails= new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  seedService:SeedService) {
    this.type = this.activatedRouter.snapshot.params['AllSeeds'];
    this.type1 = this.activatedRouter.snapshot.params['Monocotyledonous'];
    this.type2 = this.activatedRouter.snapshot.params['Dicotyledonous'];
   }
   

  ngOnInit(): void {
    this.getSeedDetails(this.type);
  }
  getSeedDetails(type:string) {
    if(type === 'AllSeeds'){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.seedService.getAllSeeds().subscribe(data=>{
        this.seeds = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
    else if(this.type1 === "Monocotyledonous"){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.seedService.getAllSeedsByType(this.type1).subscribe(data=>{
        this.seeds = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
    else {
      console.log("type:"+type)
      console.log("type:"+this.type1)
      console.log("type:"+this.type2)
      this.seedService.getAllSeedsByType(this.type2).subscribe(data=>{
        this.seeds = data;
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
  
   }

   share(name:string) {
     
    console.log(name+" shared");
  }
  
  addToCart(seed:SeedDetails) {
    console.log('cart');
    
  }

}
