import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { GlobalThingsService } from '../services/global/global-things.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { map, startWith } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-vehicle',
  inputs: ['name'],
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() name: string;
  title = 'app';
  vehicles: Observable<any[]>;
  vehiclesFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  model = 'vehicles';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  
  constructor( 
    private globalService: GlobalThingsService,
    private http: HttpClient,
    
    ) {  
     this.vehicles =this.globalService.GetAllModel(this.model);
     this.filter = new FormControl('');
     this.filter$ = this.filter.valueChanges.pipe(startWith(''));
     this.vehiclesFiltered = combineLatest(this.vehicles, this.filter$).pipe(
       map(([vehicles, filterString]) => vehicles['data'].filter(vehicle => vehicle.plate.indexOf(filterString) !== -1))
     );
     console.log(this.vehicles)

     document.title = 'Vehículos';
     console.log(this.name);

    }
  ngOnChanges(){

  }
  
  ngOnInit() {
   this.getVehicles();
  }

  getVehicles(){
    return this.globalService.GetAllModel(this.model).subscribe(
      product => {
        this.vehicles = product['data'];

      }
    )
  }
  ngDoCheck() {
   // console.log('ngDoCheck');
  }
  ngAfterContentInit() {
  //  console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
   // console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
  //  console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
   // console.log('ngOnDestroy');
  }

}
