import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    const isLogged = this.accountService.isLoggedIn();
    if (isLogged) {
      this.router.navigate(['/dashboard']);// admin ise
      // user ise
    }
  }

}
