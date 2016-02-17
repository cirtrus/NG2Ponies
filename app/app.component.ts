import {Component,OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Pony} from "./pony";
import {PonyDetail} from "./pony-detail.component";
import {PonyService} from "./pony.service";
@Component({
    selector: 'my-app',
    directives:[PonyDetail],
    providers: [
  HTTP_PROVIDERS,
  PonyService
],
    template: `<pony-detail [pony]="pony" *ngFor="#pony of ponies" class="col-3"></pony-detail>`
})
export class AppComponent implements OnInit{
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
