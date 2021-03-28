import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsSearchedComponent } from './products-searched/products-searched.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { BuyPageComponent } from './buy-page/buy-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'products-searched',
    component: ProductsSearchedComponent
  },
  {
    path: 'profile-detail/:id',
    component: ProfileDetailComponent
  },
  {
    path: 'buypage/:id',
    component: BuyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
