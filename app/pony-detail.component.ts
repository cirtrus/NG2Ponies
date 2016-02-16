import {Component,Input} from 'angular2/core';
import {Pony} from "./pony";
@Component({
    selector: 'pony-detail',
    template: `<h1>{{pony.firstname}} {{pony.lastname}}</h1>
                <p>Birthdate: {{pony.dateofBirth|date}}`
})
export class PonyDetail
{
@Input()pony;
}
