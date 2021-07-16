import { Injectable } from '@angular/core';
import { SeedDetails } from './seed-details';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber:number=0;
  cartProducts:SeedDetails[]=[];
  constructor() { }

  addToCart(product:SeedDetails){
    this.cartProducts.push(product);
    this.cartNumber = this.cartProducts.length;
    console.log(this.cartNumber);
  }
  
  getCartNumber(){
    return this.cartNumber;
  }

  getCartProducts(){
    return this.cartProducts;
  }

  
}
