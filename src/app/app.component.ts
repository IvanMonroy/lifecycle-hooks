import {MatSidenav} from '@angular/material/sidenav';
import {
  ViewChild,
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {
title = "App-Component";

@ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

reason = '';
  _LoaderService: any;

close(reason: string) {
  this.reason = reason;
  this.sidenav.close();
}

  constructor(private router: Router,
    private swUpdate: SwUpdate) {
   console.log(`CONSTRUCTOR`);
  }
  ngOnChanges() {
   console.log(`ngOnChanges`);
  }
  ngOnInit() {
   if(this.swUpdate.isEnabled){
  this.swUpdate.available.subscribe(() => {
    if(confirm("Nueva versión disponible, desea cargarla?")){
      window.location.reload();
    }
  });
  }
  }
  ngDoCheck() {
   console.log('ngDoCheck');
  }
  ngAfterContentInit() {
   console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
   console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
   console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
   console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
   console.log('ngOnDestroy');
  }


}
