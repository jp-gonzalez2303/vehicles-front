import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesFormComponent } from 'src/app/shared/components/vehicles-form/vehicles-form.component'
import {  VehiclesListComponent } from 'src/app/shared/components/vehicles-list/vehicles-list.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista' },
  { path: 'formulario', component: VehiclesFormComponent },
  { path: 'lista', component: VehiclesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
