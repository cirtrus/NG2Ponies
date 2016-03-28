import {Component,ElementRef,OnInit,Input} from 'angular2/core';
import {MapComponent} from "./leaflet/map.component";
import {MarkerDirective} from "./leaflet/marker.directive";
import {PopupComponent} from "./leaflet/popup-component";
import {PonyService} from "./pony.service"
import {Pony} from "./pony"
import {RouterLink} from "angular2/router";
import {TimePassedPipe} from "./time-passed.pipe";
import {DistancePipe} from "./distance.pipe";
@Component({
selector:"pony-map",
directives:[MapComponent,MarkerDirective,PopupComponent,RouterLink],
providers:[PonyService],
pipes:[DistancePipe,TimePassedPipe],
template:`<leaflet-map [center]="[46,13.3]">
   <leaflet-marker *ngFor="#pony of ponies;#i=index" [pos]="pony.loc" >
    <leaflet-popup>
    <h1  [routerLink]="[ '/Pony', {id: i } ]" >{{pony.firstname}} {{pony.lastname}}</h1>
    <p>Age: {{pony?.dateofBirth|TimePassed}}</p>
    <p> Distance: {{pony?.loc | distance}}<br>
    </leaflet-popup>
  </leaflet-marker>
   </leaflet-map>`
})
export class PonyMapComponent implements OnInit
{
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
  }
}
