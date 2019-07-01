import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FromsuppliersComponent } from './fromsuppliers/fromsuppliers.component';
import { TocustomersComponent } from './tocustomers/tocustomers.component';

@NgModule({
  declarations: [FromsuppliersComponent, TocustomersComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [FromsuppliersComponent, TocustomersComponent]
})
export class BillingModule { }
