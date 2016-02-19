import {Component,Input} from 'angular2/core';

import {NgStyle} from 'angular2/common';
import {Pony} from "./pony";
@Component({
    selector: 'pony-list-item',

    template: `<div  [ngStyle]="{'background-color':pony.color}" class="color col-2"><img src="http://lorempixel.com/g/200/200/cats/" class="img"></div>
                 <div class="name col-10"><h2>{{pony.firstname}} {{pony.lastname}}</h2></div>
                `
})
export class PonyListItem
{
@Input()pony:Pony;
}
