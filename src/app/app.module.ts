import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedComponent } from './seed/seed.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewSeedComponent } from './view-seed/view-seed.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartChildComponent } from './cart-child/cart-child.component';
import { PlanterComponent } from './planter/planter.component';
import { PlantComponent } from './plant/plant.component';
import { ViewPlantComponent } from './view-plant/view-plant.component';
import { ViewPlanterComponent } from './view-planter/view-planter.component';
import { SearchProductComponent } from './search-product/search-product.component';


const appRoutes:Routes=[
  {path:'seed',component : SeedComponent},
  {path:'admin',component : AdminComponent},
  {path: 'viewSeed/:seedId', component: ViewSeedComponent},
  {path: 'viewPlant/:plantId', component: ViewPlantComponent},
  {path: 'viewPlanter/:planterId', component: ViewPlanterComponent},
  {path:'cart', component: CartComponent},
  {path:'planter', component:PlanterComponent},
  {path:'plant', component:PlantComponent},
  {path:'search', component:SearchProductComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SeedComponent,
    AllProductsComponent,
    ViewSeedComponent,
    AdminComponent,
    CartComponent,
    CartChildComponent,
    PlanterComponent,
    PlantComponent,
    ViewPlantComponent,
    ViewPlanterComponent,
    SearchProductComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
