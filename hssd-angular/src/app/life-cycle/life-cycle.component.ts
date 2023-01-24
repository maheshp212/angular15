import { Component, 
  OnInit,
   DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, 
                DoCheck, AfterContentInit,AfterContentChecked,
                AfterViewInit,AfterViewChecked,OnDestroy {

  fname:string = ''
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }


  // dont use this until you have a specific scenario
  // because these will trigger for every small change
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  
}

// life cycle methods
// OnInit
// Docheck
// AfterContentInit
// AfterContentChecked
// AfterViewInit
// AfterViewChecked
// OnDestroy

