import { ProductDetails } from './product-details';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeedDetails } from './seed-details';
import { PlanterDetails } from './planter-details';
import { PlantDetails } from './plant-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
 
  private address = 'http://localhost:9093';
  private insertSeed_endpoint = this.address+'/onlinenursery/seed/add';
  private getAllSeed_endpoint = this.address+'/onlinenursery/seed/seeds';
  private getAllSeedByName_endpoint = this.address+'/onlinenursery/seed/commonName/';
  private getAllSeedById_endpoint = this.address+'/onlinenursery/seed/';
  private getAllPlanter_endpoint = this.address+'/onlinenursery/planter/planters';
  private getAllPlant_endpoint = this.address+'/onlinenursery/plant/plants';
  private getPlantByName_endpoint = this.address+'/onlinenursery/plant/commonName/';
  private getPlantById_endpoint = this.address+'/onlinenursery/plant/';
  private getPlanterById_endpoint = this.address+'/onlinenursery/planter/';
  private getSearchedProductList_endpoint = this.address+'/onlinenursery/product/search/';

  constructor(private http:HttpClient) { }

  getAllSeedList():Observable<SeedDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<SeedDetails[]>(`${this.getAllSeed_endpoint}`);
  }

  getSeedById(bId: number):Observable<SeedDetails>{
    return this.http.get<SeedDetails>(`${this.getAllSeedById_endpoint}/${bId}`);
  }
  
  getPlantById(byId: number):Observable<PlantDetails>{
    return this.http.get<PlantDetails>(`${this.getPlantById_endpoint}/${byId}`);
  }

  getPlanterById(byId: number):Observable<PlanterDetails>{
    return this.http.get<PlanterDetails>(`${this.getPlanterById_endpoint}/${byId}`);
  }

  getPlantByName(byName: string):Observable<PlantDetails>{
    return this.http.get<PlantDetails>(`${this.getPlantByName_endpoint}/${byName}`);
  }

  insertSeed(formData:FormData):Observable<any>{
   // const headers = { 'content-type': 'multipart/form-data'} 
    //const body=JSON.stringify(seed);
    console.log('Instructor Service - Create Seed called ');
    return this.http.post(`${this.insertSeed_endpoint}`, formData);  
  }
  
  getAllPlanterList():Observable<PlanterDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlanterDetails[]>(`${this.getAllPlanter_endpoint}`);
  }

  getAllPlantList():Observable<PlantDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlantDetails[]>(`${this.getAllPlant_endpoint}`);
  }
  getSearchedProductList(text: string) {
    console.log("Inside Service" + text);
    return this.http.get<ProductDetails[]>(`${this.getSearchedProductList_endpoint}/${text}`);
  }

}
