import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsItemComponent } from './about-us-item/about-us-item.component';
import { ServicesItemComponent } from './services-item/services-item.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ApiCallerService } from './api-caller.service'

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent,
    AboutUsItemComponent,
    ServicesItemComponent,
    ProductsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    FormsModule
  ],
  providers: [ApiCallerService, { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey }],
  bootstrap: [AppComponent]
})
export class AppModule { }