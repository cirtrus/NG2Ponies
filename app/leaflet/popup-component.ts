import {Component, ElementRef, Input, Injector,Host, OnInit,Inject,forwardRef} from 'angular2/core';
import {MarkerDirective} from "./marker.directive";
declare var L: any;
@Component({
    selector: 'leaflet-popup',
    directives:[MarkerDirective],
    template:`<ng-content></ng-content>`
})
export class PopupComponent implements OnInit {
 public marker;
 @Input()pos:Array<number>;
 @Input()popup;
    constructor(marker: MarkerDirective,public element: ElementRef){

    this.marker = marker;
    //L.marker(this.pos).addTo(this.mapcom);

    }
    ngOnInit()
    {
          this.marker.marker.bindPopup(this.element.nativeElement);
    }
}
