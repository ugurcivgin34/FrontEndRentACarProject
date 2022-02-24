import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44391/api/Colors/getall";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
