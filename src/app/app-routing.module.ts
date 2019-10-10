import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RatesComponent } from './rates/rates.component';
import { EntriesComponent } from './entries/entries.component';
import { ExitsComponent } from './exits/exits.component';


const routes: Routes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'entries', component: EntriesComponent },
  { path: 'exits', component: ExitsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
