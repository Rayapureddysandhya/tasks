
import{Component}from'@angular/core';

@Component({
    selector:'courses',
    templateUrl:'./header3.component.html'
})
export class courses{
 title:string='list of courses';
 courses=["courses1","courses2","courses3"];
}