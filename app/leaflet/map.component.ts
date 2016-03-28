import {Component,ElementRef,OnInit,Input} from 'angular2/core';
declare var L: any;
@Component({
    selector: 'leaflet-map',
    template:`<div></div>`
})

export class MapComponent implements OnInit
{
  @Input() center:Array<number>;
   public map;
  constructor(public element: ElementRef) {

    }
    ngOnInit()
    {
      var mapEl=this.element.nativeElement;
      this.map=L.map(this.element.nativeElement.querySelector('div'),{
         center:this.center,
         zoom: 13
       });
       L.tileLayer('http://otile3.mqcdn.com/tiles/1.0.0/osm//{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
   maxZoom: 18,
 }).addTo(this.map);

       console.log("mapEl",this.element.nativeElement.querySelector('div'));
    }
    getMap()
    {
       return this.map;
    }
}
