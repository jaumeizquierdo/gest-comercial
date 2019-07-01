import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerlistComponent},
  {path: 'storing', loadChildren: () => import('./storing/storing.module').then(mod => mod.StoringModule)},
  {path: '**', component: NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
