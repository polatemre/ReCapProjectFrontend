import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isLoggedIn() {
    return false; // giriş yapılmış ise true, giriş yapılmamış ise false döndürüyoruz
  }
}
