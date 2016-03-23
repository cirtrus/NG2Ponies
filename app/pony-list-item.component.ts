import {Component,Input} from 'angular2/core';

import {NgStyle} from 'angular2/common';
import {Pony} from "./pony";
import {DistancePipe} from "./distance.pipe";

@Component({
    selector: 'pony-list-item',
      pipes:[DistancePipe],

    template: `<div  [ngStyle]="{'background-color':pony.color}" class="color col-2"><img src="http://lorempixel.com/g/200/200/cats/" class="img"></div>
                 <div class="name col-10"><h2>{{pony.firstname}} {{pony.lastname}}</h2><p>{{pony.loc| distance}}</p></div>
                `


})
export class PonyListItem
{
@Input()pony:Pony;
}
