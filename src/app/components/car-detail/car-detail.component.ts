import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImagePaths:string[] = [];
  carDetail: CarDetail;
  imageUrl:string="https://localhost:44391/Uploads/Images/"
  dataLoaded=false

  carImages:CarImage[]=[];

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute,
    private carImagesService:CarImageService) { }



    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["id"]){
          this.getCarDetailId(params["id"])
        }
      })
    }

  getCarDetailId(id:number){
    console.log()
    this.carDetailService.getCarDetailId(id).subscribe(response=>{
      this.carDetails=response.data
      this.carDetail = response.data[0];
      this.carImagePaths=this.carDetail.imagePath
      this.dataLoaded=true;
    })
  }



}

