import {Pipe, PipeTransform} from 'angular2/core';
import {Pony} from "./pony";
@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(value:Pony[],[term]) : any {
    return value.filter((item)=>item.lastname.startsWith(term));
  }
}
