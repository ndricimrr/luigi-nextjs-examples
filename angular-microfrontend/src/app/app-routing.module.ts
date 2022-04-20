import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'orders', component: OrderPageComponent },
  { path: 'details', component: OrderDetailsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
