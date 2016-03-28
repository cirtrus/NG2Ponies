import {Component,Input,OnInit} from 'angular2/core';
import {RouteParams, CanActivate,Router,OnActivate,ROUTER_PROVIDERS} from 'angular2/router';
import {TimePassedPipe} from "./time-passed.pipe";
import {DistancePipe} from "./distance.pipe";
import {MapComponent} from "./leaflet/map.component";
import {MarkerDirective} from "./leaflet/marker.directive";
import {PopupComponent} from "./leaflet/popup-component";
import {NgStyle} from 'angular2/common';
import {AccordionComponent} from "./common/accordion.component";
import {AccordionGroupComponent} from "./common/accordionGroup.component";
import {PonyService} from "./pony.service";
import {Pony} from "./pony";
@Component({
    selector: 'pony-detail',
    pipes:[TimePassedPipe,DistancePipe],
    providers:[PonyService],
    directives:[MapComponent,MarkerDirective,AccordionComponent,AccordionGroupComponent,PopupComponent],
    template: `<div *ngIf="pony!=null"><h1 [ngStyle]="{'color':pony?.color}">{{pony?.firstname}} {{pony?.lastname}}</h1>
                 <p>Age: {{pony?.dateofBirth|TimePassed}}</p>
                 <p> Distance: {{pony?.loc | distance}}<br>
                    Lat:{{pony?.loc[0]}}<br> Lon: {{pony?.loc[1]}}
                 </p>
                           <p>{{pony.hobbies|json}}</p>
                        <cir-accordion-group>   <cir-accordion *ngFor="#hobby of pony.hobbies" [title]="hobby.name"><p>{{hobby.started|TimePassed}} years ago</p></cir-accordion></cir-accordion-group>
                 <leaflet-map [center]="pony.loc">
                    <leaflet-marker [pos]="pony.loc" [popup]=" '<h1>'+pony.firstname+'</h1>'"></leaflet-marker>
                    <leaflet-marker *ngFor="#realEstate of pony.realEstates" [pos]="realEstate.loc" ><leaflet-popup>Price:{{realEstate.worth}}<br>Typ:{{realEstate.type}}</leaflet-popup></leaflet-marker>
                 </leaflet-map>
                 </div>

                `
})



export class PonyDetail implements OnInit
{
   public pony:Pony;
  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:PonyService
){
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

      console.log(this._router);
 }

}
