import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'distance'})
export class DistancePipe implements PipeTransform {
  transform(value:number[]) : any {
      var p1={lat:value[0],lon:value[1]};
      var p2={lat:43.2323, lon:13.533232};
      const f=1/298.257223563;
      const r=6378.137;

      var F=(p1.lat+p2.lat)/2;
      var G=(p1.lat-p2.lat)/2;
      var l=(p1.lon+p2.lon)/2;

      var S=Math.sin(G)**2*Math.cos(l)**2+Math.cos(F)**2 * Math.sin(l)**2;
      var C=Math.cos(G)**2*Math.cos(l)**2+Math.sin(F)**2 * Math.sin(l)**2;
      var w=Math.atan(Math.sqrt(S/C));
      var D=2*w*r;

      return D.toFixed(2); 
  }
}
