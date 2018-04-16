import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerComponent } from './seller/seller.component';
import { TalkComponent } from './talk/talk.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canDeactivate:[UnsavedGuard]},
  { path: 'talk', component: TalkComponent, outlet:'aux'},
  { path: 'product/:id', component: ProductComponent,
    children: [
        { path: '', component: ProductDescComponent},
        { path: 'seller/:id', component: SellerComponent}
    ], canActivate: [LoginGuard]
},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
