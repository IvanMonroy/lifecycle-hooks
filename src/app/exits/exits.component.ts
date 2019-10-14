import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { Observable, combineLatest, SubscriptionLike } from 'rxjs';
import { GlobalThingsService } from '../services/global/global-things.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-exits',
  templateUrl: './exits.component.html',
  styleUrls: ['./exits.component.scss']
})
export class ExitsComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'app';
  exits: any[];
  exitsFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  model = 'exits';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  suscription: SubscriptionLike;
  constructor( 
    private globalService: GlobalThingsService
    ) {
      this.suscription = this.globalService.GetAllModel(this.model).subscribe((data: any[]) =>{
        this.exits = data
      });
      console.log(this.suscription.closed);
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
      this.exitsFiltered = combineLatest(this.exits, this.filter$).pipe(
        map(([exits, filterString]) => exits['data'].filter(exit => (exit.entry_id.toString()).indexOf(filterString) !== -1))
      );
      console.log(this.exits)
 
      document.title = 'Salidas';
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
      this.suscription.unsubscribe();
      console.log(this.suscription.closed);
    }
    getExits(){
      return this.globalService.GetAllModel(this.model).subscribe(
        exits => {
          this.exits = exits['data'];
  
        }
      )};
}
