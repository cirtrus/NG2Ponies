import {Component} from 'angular2/core';
import {Pony} from "./pony";
@Component({
    selector: 'my-app',
    template: '<h1>My First {{name}} 2 App</h1>'
})
export class AppComponent {
    name="test";

}
