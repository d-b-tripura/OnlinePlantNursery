import { ProductService } from './../product.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  inputCartNumber:number=0;

  
  constructor(private cartService:CartService, private productService:ProductService, private router:Router) {
    
  }

   ngOnInit(): void {
  }


  getCartNumber():number{
    this.inputCartNumber=this.cartService.getCartNumber();
    return this.inputCartNumber;
  }
}
