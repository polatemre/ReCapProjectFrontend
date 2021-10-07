import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  cars!: CarDto[];
  filteredCars!: CarDto[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) {}

  getCars() {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient
      .get<ListResponseModel<CarDto>>(newPath)
      .subscribe((response) => {
        this.cars = response.data;
        this.filteredCars = response.data;
      });
  }

  getCarByColor(colorId: number) {
    let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
    return this.httpClient
      .get<ListResponseModel<CarDto>>(newPath)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarByBrand(brandId: number) {
    let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
    return this.httpClient
      .get<ListResponseModel<CarDto>>(newPath)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarByCategory(categoryId: number) {
    let newPath =
      this.apiUrl + 'cars/getcarbycategory?categoryId=' + categoryId;
    return this.httpClient
      .get<ListResponseModel<CarDto>>(newPath)
      .subscribe((response) => {
        this.filteredCars = response.data;
      });
  }
}
