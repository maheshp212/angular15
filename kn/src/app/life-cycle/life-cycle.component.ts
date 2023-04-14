import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:string = 'angular'
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }

  // dont use the below methods
  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }

  
}
