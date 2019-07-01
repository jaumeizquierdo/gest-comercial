import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { StoringlistComponent } from './storinglist/storinglist.component';
import { StoringincomingComponent } from './storingincoming/storingincoming.component';
import { StoringoutgoingComponent } from './storingoutgoing/storingoutgoing.component';

@NgModule({
  declarations: [StoringlistComponent, StoringincomingComponent, StoringoutgoingComponent],
  imports: [
    CommonModule,
    StoringRoutingModule
  ],
  exports: [StoringlistComponent, StoringincomingComponent, StoringoutgoingComponent]
})
export class StoringModule { }
