import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { GlobalThingsService } from '../services/global/global-things.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'app';
  rates: Observable<any[]>;
  ratesFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  model = 'rates';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  
  constructor( 
    private globalService: GlobalThingsService
    ) {
      this.rates =this.globalService.GetAllModel(this.model);
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
      this.ratesFiltered = combineLatest(this.rates, this.filter$).pipe(
        map(([rates, filterString]) => rates['data'].filter(rate => rate.name.indexOf(filterString) !== -1))
      );
      console.log(this.rates)
 
      document.title = 'Tarifas';
     }
  
  ngOnChanges(){
   // console.log('ngDoCheck');
  }
  ngOnInit() {
    // console.log('ngDoCheck');
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
   getRates(){
    return this.globalService.GetAllModel(this.model).subscribe(
      rates => {
        this.rates = rates['data'];

      }
    )};
}
