import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { StartComponent } from './dashboard/start/start.component';
import { UsersComponent } from './dashboard/users/users.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdminComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StartComponent,
    UsersComponent,
    SettingsComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    DashboardComponent,
    AccountComponent
  ]
})
export class AdminModule { }