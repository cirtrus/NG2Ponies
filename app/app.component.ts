import {Component,OnInit,Input} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Pony} from "./pony";
import {PonyDetail} from "./pony-detail.component";
import {PonyService} from "./pony.service";
import {SearchPipe} from "./search.pipe"
import {PonyListComponent} from "./pony-list.component";
import {SearchBoxComponent} from "./search-box.component";
@Component({
    selector: 'my-app',
    directives:[PonyListComponent,SearchBoxComponent],
    providers: [
  HTTP_PROVIDERS,
  PonyService
],

pipes:[SearchPipe],
    template: `
    <search-box (update)="term=$event"></search-box>
    <pony-list [term]="term" class="col-6"></pony-list>`
})
export class AppComponent {


  constructor()
  {

  }

}
