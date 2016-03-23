import {Component,Input,OnInit} from 'angular2/core';
import {RouteParams, CanActivate,Router,OnActivate} from 'angular2/router';
import {TimePassedPipe} from "./time-passed.pipe";
import {DistancePipe} from "./distance.pipe";
import {NgStyle} from 'angular2/common';
import {PonyService} from "./pony.service"
import {Pony} from "./pony";
@Component({
    selector: 'pony-detail',
    pipes:[TimePassedPipe,DistancePipe],
    providers:[PonyService],
    template: `<div *ngIf="pony!=null"><h1 [ngStyle]="{'color':pony?.color}">{{pony?.firstname}} {{pony?.lastname}}</h1>
                 <p>Age: {{pony?.dateofBirth|TimePassed}}</p>
                 <p> Distance: {{pony?.loc | distance}}<br>
                    Lat:{{pony?.loc[0]}}<br> Lon: {{pony?.loc[1]}}
                 </p>
                 </div>

                `
})



export class PonyDetail implements OnInit
{
   public pony:Pony;
  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:PonyService){
      console.log("ngINit");
  let id = this._routeParams.get('id');
  this._service.getPony(id).subscribe(
                 pony=> {console.log(pony);this.pony = pony}
                );
    }
   ready():boolean
   {
     return false;
   }

    ngOnInit() {
      console.log("ngINit");
  let id = this._routeParams.get('id');
  this._service.getPony(id).subscribe(
                 pony=> {console.log(pony);this.pony = pony}
                );

 }

}
