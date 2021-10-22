import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/admin/account/account.component';
import { LoginComponent } from './components/admin/account/login/login.component';
import { RegisterComponent } from './components/admin/account/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { StartComponent } from './components/admin/dashboard/start/start.component';
import { UsersComponent } from './components/admin/dashboard/users/users.component';
import { SettingsComponent } from './components/admin/dashboard/settings/settings.component';
import { NotFoundComponent } from './components/admin/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: AccountComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: StartComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'cars',
        component: CarComponent,
      },
      {
        path: 'cars/details/:carId',
        component: CarDetailsComponent,
      }
    ]
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
