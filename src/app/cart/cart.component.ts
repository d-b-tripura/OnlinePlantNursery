import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 
 

  constructor(private cartService:CartService) {
   }
  ngOnInit(): void {
  }

  getAllCartProducts(){
    return this.cartService.getCartProducts();
  }


}
