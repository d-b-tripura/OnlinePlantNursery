import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/model/product-details';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

}
