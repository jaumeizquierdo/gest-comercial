import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoringlistComponent } from './storinglist/storinglist.component';
import { StoringincomingComponent } from './storingincoming/storingincoming.component';
import { StoringoutgoingComponent } from './storingoutgoing/storingoutgoing.component';

const routes: Routes = [
  {path: '', component: StoringlistComponent},
  {path: 'in', component: StoringincomingComponent},
  {path: 'out', component: StoringoutgoingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
