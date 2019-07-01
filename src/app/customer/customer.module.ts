import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';

@NgModule({
  declarations: [CustomerlistComponent, CustomerdataComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [CustomerlistComponent, CustomerdataComponent]
})
export class CustomerModule { }
