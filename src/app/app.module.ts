import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealComponent } from './components/top-deal/top-deal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { LoginModule } from './login/login.module';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MedicineHomeComponent,
    TopDealComponent,
    ViewProductDetailsComponent,
    ViewProductDetailsCategoryComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    CartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
