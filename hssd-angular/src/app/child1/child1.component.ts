import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
 @Input() name:string = '';
 @Input() age:number = 0;
 @Input() gender:boolean = false;
 @Input() fruits:string[] = [];
 @Input() user:any = {};
}
