import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  // apiUrl="https://localhost:44391/Uploads/Images/"
  apiUrl="https://localhost:44391/api/"

  constructor(private httpClient:HttpClient) { }

  // getCarImage(imagePath:string){
  //   return this.apiUrl+imagePath
  // }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl + "CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl + "CarImages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
