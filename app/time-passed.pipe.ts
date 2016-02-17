import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'TimePassed'})
export class TimePassedPipe implements PipeTransform {
  transform(value:number) : any {
    return Math.floor((Date.now()-value)/24/60/60/365/1000);
  }
}
