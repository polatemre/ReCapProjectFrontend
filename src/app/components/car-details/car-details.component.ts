import { CarImage } from './../../models/carImage';
import { Component, Inject, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  cars!: CarDto[];

  constructor(
    @Inject('siteUrl') private siteUrl: string,
    public carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarById(params['carId']);
        this.getCarImages();
      }
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarImages() {
    this.carImageService.getCarImages();
  }

  getCarImageById(carId: number): string {
    let imagePath = '';
    this.carImageService.carImages.forEach((car) => {
      if (car.carId == carId) {
        imagePath = this.siteUrl + car.imagePath;
      }
    });
    return imagePath;
  }

}
