import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';



@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44391/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailId(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'Cars/getcardetailsbyid?id='+id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }




}
