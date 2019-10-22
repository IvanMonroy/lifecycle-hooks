import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, combineLatest, SubscriptionLike } from 'rxjs';
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
  title = 'app';
  vehicles:Observable<any[]>;
  vehiclesFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  model = 'vehicles';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  subscription: SubscriptionLike;
  @Input("dataentry") dataentry: any;

  constructor(
    private globalService: GlobalThingsService,
    private http: HttpClient,

  ) {
    this.vehicles = this.globalService.GetAllModel(this.model)
     console.log(this.vehicles);
     this.vehiclesFiltered =  this.globalService.GetAllModel(this.model)
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
     this.vehiclesFiltered = combineLatest(this.vehicles, this.filter$).pipe(
       map(([vehicles, filterString]) => vehicles['data'].filter(vehicle => vehicle.plate.indexOf(filterString) !== -1))
     )
     this.subscription = this.vehicles.subscribe()
    console.log("Subscription vehicles: " + this.subscription.closed);
    document.title = 'Vehículos';

     }
  ngOnChanges() {
  }
  ngOnInit() {
  }
  ngDoCheck() {
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(this.subscription.closed);
  }

}
