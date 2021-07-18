import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantDetails } from '../model/plant-details';
import { PlanterDetails } from '../model/planter-details';
import { ProductDetails } from '../model/product-details';
import { SeedDetails } from '../model/seed-details';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
    private address = 'http://localhost:9093';
    private getSearchedProductList_endpoint = this.address+'/onlinenursery/product/search';

    constructor(private http:HttpClient) { }

    getSearchedProductList(text: string) {
        console.log("Inside Service" + text);
        return this.http.get<ProductDetails[]>(`${this.getSearchedProductList_endpoint}/${text}`);
    }
}
