import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './component/home/home.module';
import { LayoutModule } from './component/layout/layout.module';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutModule } from './component/checkout/checkout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    LayoutModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    OwlModule,
    FontAwesomeModule,
    CheckoutModule
  ],
  exports:[OwlModule,FontAwesomeModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
