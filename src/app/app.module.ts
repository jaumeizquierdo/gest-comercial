import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonsModule } from './commons/commons.module';
import { CustomerModule } from './customer/customer.module';
/* import { StoringModule } from './storing/storing.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BillingModule } from './billing/billing.module'; */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomerModule

    // CustomerModule,
    // StoringModule,
    // SuppliersModule,
    // BillingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
