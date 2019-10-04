import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { GlobalThingsService } from '../services/global/global-things.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  title = 'app';
  vehicles: any = [];
  vehiclesFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  durationInSeconds = 5;
  model = 'vehicles';
  
  constructor( 
    private globalService: GlobalThingsService,
    private http: HttpClient,
    ) {     }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(){
    return this.globalService.GetAllModel(this.model).subscribe(
      product => {
        this.vehicles = product['data'];
        console.log(this.vehicles)
      }
    )
  }

}
