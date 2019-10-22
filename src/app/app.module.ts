import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule, MatInputModule } from "@angular/material";
import { MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatCardModule, MatIconModule, MatDialogModule, MatSidenavModule, MatListModule } from '@angular/material';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalThingsService } from './services/global/global-things.service';
import { RatesComponent } from './rates/rates.component';
import { EntriesComponent } from './entries/entries.component';
import { ExitsComponent } from './exits/exits.component'
import {MatSidenav} from '@angular/material/sidenav';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    RatesComponent,
    EntriesComponent,
    ExitsComponent
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js')
  ],
  providers: [GlobalThingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
