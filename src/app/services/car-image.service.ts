import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { CarImage } from './../models/carImage';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  carImages: CarImage[];
  carImage: CarImage;

  constructor(@Inject('apiUrl') private apiUrl: string, private httpClient: HttpClient) {}

  getCarImageByCarId(carId: number) {
    let newPath = this.apiUrl + 'carImages/getbycar?id=' + carId;
    return this.httpClient.get<SingleResponseModel<CarImage>>(newPath).subscribe((response) => {
      this.carImage = response.data;
    });
  }

  getCarImages(){
    return this.httpClient.get<ListResponseModel<CarImage>>(
      this.apiUrl + 'carImages/getall'
    ).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  add(carId: number, file: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    formData.append('CarId', carId.toString());
    formData.append('Image', file);

    return this.httpClient.post<ResponseModel>(this.apiUrl + '/add', formData, {
      reportProgress: true,
      responseType: 'json',
    });
  }
}
