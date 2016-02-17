import {Component,Input} from 'angular2/core';
import {TimePassedPipe} from "./time-passed.pipe";
import {DistancePipe} from "./distance.pipe";
import {NgStyle} from 'angular2/common';
import {Pony} from "./pony";
@Component({
    selector: 'pony-detail',
    pipes:[TimePassedPipe,DistancePipe],
    template: `<h1 [ngStyle]="{'color':pony.color}">{{pony.firstname}} {{pony.lastname}}</h1>
                 <p>Age: {{pony.dateofBirth|TimePassed}}</p>
                 <p> Distance: {{pony.loc | distance}}<br>
                    Lat:{{pony.loc[0]}}<br> Lon: {{pony.loc[1]}}
                 </p>


                `
})
export class PonyDetail
{
@Input()pony:Pony;
}
