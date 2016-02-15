import {Component} from 'angular2/core';
import {Pony} from "./pony";
@Component({
    selector: 'my-app',
    template: '<h1>My First {{pony.firstname}} {{pony.lastname}} 2 App</h1>'
})
export class AppComponent {
    pony:Pony=new Pony("Alex","Fitzgerald",767397600000,0,1.25,
        [{
        "name": "Couponing",
        "started": 1151445600000,
        "timePerWeek": 5}],49,"#9a1",[-66.38716,-154.68226],[{
            "worth": 92516,
            "loc": [
                40.57906,
                132.98138
            ],
            "type": "Farmhouse"
        }]);

}
