import {Component,OnInit,Input} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Pony} from "./pony";
import {PonyDetail} from "./pony-detail.component";
import {PonyService} from "./pony.service";
import {SearchPipe} from "./search.pipe";
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {PonyListComponent} from "./pony-list.component";
import {SearchBoxComponent} from "./search-box.component";
import {PonyMapComponent} from "./pony-map.component"
@Component({
    selector: 'my-app',
    directives:[PonyListComponent,SearchBoxComponent,ROUTER_DIRECTIVES,RouterLink],
    providers: [
  HTTP_PROVIDERS,
  PonyService
],

pipes:[SearchPipe],
    template: `
    <ul>
      <li><a [routerLink]="[ '/Map' ]">Map</a></li>
      <li><a [routerLink]="[ '/Ponies' ]">list</a></li>
    </ul>

    <router-outlet></router-outlet>
    <!-- search-box (update)="term=$event"></search-box>
    <pony-list [term]="term" class="col-6"></pony-list -->
     `
})

@RouteConfig([
  {path:'/ponies',        name: 'Ponies',       component: PonyListComponent,useAsDefault: true},
  {path:'/pony/:id',      name: 'Pony',   component: PonyDetail},
  {path:'/map',      name: 'Map',   component: PonyMapComponent}
])

export class AppComponent {


  constructor()
  {

  }

}
