import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { GlobalThingsService } from '../services/global/global-things.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'app';
  entries: Observable<any[]>;
  entriesFiltered: Observable<any[]>;
  filter: FormControl;
  filter$: Observable<string>;
  model = 'entries';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor( 
    private globalService: GlobalThingsService
    ) {
      this.entries =this.globalService.GetAllModel(this.model);
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
      this.entriesFiltered = combineLatest(this.entries, this.filter$).pipe(
        map(([entries, filterString]) => entries['data'].filter(entrie => entrie.plate.indexOf(filterString) !== -1))
      );
      console.log(this.entries)
 
      document.title = 'Entradas Registradas';
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
    getEntries(){
      return this.globalService.GetAllModel(this.model).subscribe(
        entrie => {
          this.entries = entrie['data'];
  
        }
      )};
}
