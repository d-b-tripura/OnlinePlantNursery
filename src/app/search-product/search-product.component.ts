import { ProductDetails } from './../product-details';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  text!:string;
  products!:ProductDetails[];
  cartService: any;

  constructor(private activatedrouter:ActivatedRoute, private  productService:ProductService) {
    this.search(this.text);
  }

  ngOnInit(): void {
  }
  search(text:string){
    console.log(text);
    this.productService.getSearchedProductList(text).subscribe(data=>{
      this.products = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }

  addToCart(product:ProductDetails) {
    this.cartService.addToCart(product);
    
  }
}
