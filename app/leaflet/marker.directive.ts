import {Component, ElementRef, Input, Injector,Host, OnInit,Inject,forwardRef} from 'angular2/core';
import {MapComponent} from "./map.component";
declare var L: any;
@Component({
    selector: 'leaflet-marker',
    directives:[MapComponent],
    template:``
})
export class MarkerDirective implements OnInit {
 public mapcom;
 public marker;
 @Input()pos:Array<number>;
 @Input()popup;
    constructor(mapcom: MapComponent){

    this.mapcom = mapcom;
    //L.marker(this.pos).addTo(this.mapcom);

    }
    ngOnInit()
    {     console.log(this.mapcom,"mapCom");
          this.marker=L.marker(this.pos);
          this.marker.addTo(this.mapcom.map);
          //.bindPopup(this.popup);
    }
}
