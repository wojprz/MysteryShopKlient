import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service'
import { AuthService } from './auth.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { Helpers } from './Helpers';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsSearchedComponent } from './products-searched/products-searched.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { BuyPageComponent } from './buy-page/buy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProfileComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductsSearchedComponent,
    ProfileDetailComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService, UserService, ProductService, Helpers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
