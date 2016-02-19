import {Component,OnInit,Input} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Pony} from "./pony";
import {PonyListItem} from "./pony-list-item.component";
import {PonyDetail} from "./pony-detail.component";
import {PonyService} from "./pony.service";
import {SearchPipe} from "./search.pipe"

@Component({
    selector: 'pony-list',
    directives:[PonyListItem],
    providers: [
  HTTP_PROVIDERS,
  PonyService
],

pipes:[SearchPipe],
    template: `<pony-list-item [pony]="pony" *ngFor="#pony of ponies| search:term" class="col-12"></pony-list-item>`
})
export class PonyListComponent implements OnInit{
 @Input()term:string;
  public ponies:Pony[]=[];
  public errorMessage;
  constructor(private _PonyService:PonyService)
  {

  }
  getPonies()
  {
   this._PonyService.getPonies()
   .subscribe(
                  ponies=> {console.log(ponies);this.ponies = ponies},
                  error =>  this.errorMessage = <any>error);
                    console.log(this.ponies);
  }

    ngOnInit()
    {
      this.getPonies();
      console.log(this.ponies);
    }

}
