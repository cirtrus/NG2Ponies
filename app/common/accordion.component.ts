import {Component,Input,OnInit} from "angular2/core";
import {AccordionGroupComponent} from "./accordionGroup.component";
@Component({
        selector:"cir-accordion",
        template:`<div>
                  <h2 (click)="toggle()">{{title}}</h2>
                  <div [hidden]="hidden">  <ng-content></ng-content></div>
                   </div>`

})
export class AccordionComponent implements OnInit
{
  private parent;
  @Input()title:string;
  public hidden=false;
  private id:number;
  toggle()
  {
    this.hidden=!this.hidden;

    if(this.hidden===false)this.parent.collapseAcordions(this.id);
  }
  hide()
  {
    this.hidden=true;
  }
  show()
  {
    this.hidden=false;
  }
  constructor(parent:AccordionGroupComponent)
  {
   this.parent=parent;
  }

  ngOnInit()
  {
    this.id=this.parent.addAccordion(this);
  }
}
