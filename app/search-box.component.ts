import {Component,Output,EventEmitter,OnInit} from "angular2/core";

@Component({
selector:"search-box",
template: `<input #input type="text" (input)="update.emit(input.value)"  class="col-12">`


})
export class SearchBoxComponent implements OnInit
{

  @Output() update=new EventEmitter();
ngOnInit()
{
 this.update.emit("");
}

}
