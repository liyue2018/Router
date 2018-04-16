import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SellerComponent } from './seller/seller.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { TalkComponent } from './talk/talk.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Notfound404Component,
    ContactComponent,
    AboutComponent,
    SellerComponent,
    ProductDescComponent,
    TalkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
