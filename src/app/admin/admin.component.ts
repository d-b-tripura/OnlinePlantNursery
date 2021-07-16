import { SeedImage } from './../seed-image';
import { ProductService } from './../product.service';
import { SeedDetails } from './../seed-details';
import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  seedDetails:SeedDetails = new SeedDetails(0,'','','','','','','','','',0);
  createSeedDetails : SeedDetails= new SeedDetails(0,'','','','','','','','','',0);

  seedImage:any=File;
  formData = new FormData();
  //seedImageUpload: SeedImage =new SeedImage('','')
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSelectFile(event:any){
    const file = event.target.files[0];
    console.log(file);
    this.seedImage=file;
  }
  onSubmit()
  {
    console.log(this.seedDetails);
    
   this.formData.append('seed',  JSON.stringify(this.seedDetails))
    this.formData.append('file',this.seedImage);
    console.log(this.formData);

    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.productService.insertSeed(this.formData).subscribe(
      data=>{
        this.createSeedDetails = data;
        console.log(" Data Saved !!! "+this.createSeedDetails);
      },
      error => {
        console.log(error);
        
      }
     );
  }

}
