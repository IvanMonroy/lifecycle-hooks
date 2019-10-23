import { MatSidenav } from '@angular/material/sidenav';
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
  ChangeDetectorRef,
} from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

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
  OnDestroy {
  title = "App-Component";

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  reason = '';
  _LoaderService: any;

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(private router: Router,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private swUpdate: SwUpdate) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(`CONSTRUCTOR`);
  }
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnChanges() {
    console.log(`ngOnChanges`);
  }
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("Nueva versión disponible, desea cargarla?")) {
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
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
