import {Component,Input} from "angular2/core";
import {AccordionComponent} from "./accordion.component";

@Component({
        selector:"cir-accordion-group",
        directives:[],
        template:`<ng-content></ng-content>`

})
export class AccordionGroupComponent
{

  public Group:AccordionComponent[]=[];
  collapseAcordions(id)
  {
        for(var i=0;i<this.Group.length;i++)
            {
              this.Group[i].hide();
            }
            this.Group[id].show();
  }
  addAccordion(acord:AccordionComponent)
  {
    this.Group.push(acord);
    return this.Group.length-1;
  }
}
