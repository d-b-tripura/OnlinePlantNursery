import { ProductService } from './../product.service';
import { SeedDetails } from './../seed-details';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  seeds!: SeedDetails[];
  viewSeed!:SeedDetails;
  constructor(
    private productService:ProductService,
    private cartService:CartService) {
      this.getAllSeeds();
  }

  ngOnInit(): void {
  }
  
  getAllSeeds() {
    this.productService.getAllSeedList().subscribe(data=>{
      this.seeds = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }

  share(name:string) {
     
    console.log(name+" shared");
  }
  
  addToCart(seed:SeedDetails) {
    this.cartService.addToCart(seed);
    
  }
  
  
}
