import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  // transform(value: number, p1:number,p2:number,p3:number = 0,p4:number = 0,p5:number = 0): number {
  //   return value * (p1+p2+p3+p4+p5);
  // }

  
  transform(value: number, ...args:number[]): number {
  // let [p1,p2,p3] = ['kiwi', 'melon','berry'];
  // console.log(p1)    
  // console.log(p2)    
  // console.log(p3)   
  // let {name, exp} =  {name: 'angular', exp:5};
  // console.log(name);
  // console.log(exp);

  // spread operator -- merging two array or objects into one
  // let obj = {name:'angular'};
  // let obj2 = {exp: 5};
  // let obj3 = {...obj, ...obj2};
  // console.log(obj3)

  // let arr1 = [2];
  // let arr2 = [3];
  // let arr3 = [...arr1, ...arr2];
  // console.log(arr3)
    console.log(args);


    return value * args.reduce((total , val) => {
      return total+ val;
    });;
  }

  // transform(2,3,4,5,6,7,8);

}
