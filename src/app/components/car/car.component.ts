import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  
  constructor(
    @Inject('siteUrl') private siteUrl: string,
    public carService: CarService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private carImageService: CarImageService,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getCarImages();
    this.getCategories();
  }

  getCars() {
    this.carService.getCars();
  }

  getCarByColor(colorId: number) {
    this.carService.getCarByColor(colorId);
  }

  getCarByCategory(categoryId: number) {
    this.carService.getCarByCategory(categoryId);
  }

  getCarByBrand(brandId: number) {
    this.carService.getCarByBrand(brandId);
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

  getCategories() {
    this.categoryService.getCategories();
  }

  addToCart(car: CarDto) {
    if (car.carId === 1) {
      //this.toastrService.error('Bu ürün sepete eklenemez', 'Hata');
    } else {
      //this.toastrService.success(car.brandName, 'Sepete eklendi');
      this.cartService.addToCart(car);
    }
  }

}