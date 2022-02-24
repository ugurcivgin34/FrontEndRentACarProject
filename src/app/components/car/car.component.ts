import { CarDetailService } from './../../services/car-detail.service';
import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  carDetails:CarDetail[]=[];
  currentCar: Car | undefined;

  dataLoaded = false;

  constructor(private carService: CarService,
    private carDetailService:CarDetailService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      } else if (params["id"]) {
        this.getCarsDetails(params["id"])
      }

      else {
        this.getCars()
      }
    })
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsDetails(id:number){
    this.carDetailService.getCarDetails().subscribe(response =>{
        this.carDetails = response.data;
    })
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;

    })
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;

    })
  }

  setCurrentCar(car:Car) {
    this.currentCar = car;
  }



}
