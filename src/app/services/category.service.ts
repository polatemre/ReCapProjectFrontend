import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[];
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) {}

  getCategories() {
    return this.httpClient
      .get<ListResponseModel<Category>>(this.apiUrl + 'categories/getall')
      .subscribe((response) => {
        this.categories = response.data;
      });
  }
}
