import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CheckoutComponent } from './component/checkout/checkout/checkout.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "checkout" , component: CheckoutComponent },
  {
    path: 'test',
    redirectTo: '/checkout'
    }
  // ,
  // { path: "aboutus", component: AboutUsComponent },
  // { path: "contactus", component: ContactUsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
