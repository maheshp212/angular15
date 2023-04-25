import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname = 'angular'
  urlId:string = ''
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    console.log('ngOnInit')
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      this.urlId = res;
    })
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


 // better dont use the below methods -- because it will cause the performance issues
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

}


